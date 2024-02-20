import React, {useCallback, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';
import axios from 'axios';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryVoronoiContainer,
} from 'victory-native';

function WalkingHistory(props) {
  const [petInfo, setPetInfo] = useState([]);
  const userId = 'user1';
  const [selectedPetInfo, setSelectedPetInfo] = useState({});
  const [gasReduction, setGasReduction] = useState(0);
  const [calConsumption, setCalConsumption] = useState(0);

  //victory-native
  const currentDate = new Date();
  const sevenDaysAgo = currentDate.setDate(currentDate.getDate() - 7);
  const filteredPetInfo = petInfo
    .filter(item => new Date(item[0]) >= sevenDaysAgo && item[3] != null)
    .slice(-7); // 최근 7일의 데이터만 추출

  const dataVic = filteredPetInfo.map((item, index) => ({
    date: item[0].substring(0, 10),
    x: item[0].substring(8, 10),
    y: item[3],
  }));
  //-------------------------------------------------------------------

  var dayOfWeek = '';
  switch (selectedPetInfo[0]) {
    case 'Monday':
      dayOfWeek = '(월)';
      break;
    case 'Tuesday':
      dayOfWeek = '(화)';
      break;
    case 'Wednesday':
      dayOfWeek = '(수)';
      break;
    case 'Thursday':
      dayOfWeek = '(목)';
      break;
    case 'Friday':
      dayOfWeek = '(금)';
      break;
    case 'Saturday':
      dayOfWeek = '(토)';
      break;
    case 'Sunday':
      dayOfWeek = '(일)';
      break;
    default:
      dayOfWeek = '';
  }
  const kcalAndCarbon = totalDistance => {
    const newGasReduction = Number((totalDistance * 200).toFixed(0)); // 1km 당 200g 감축
    const newCalConsumption = Number((totalDistance * 60).toFixed(0)); // 1km 당 60 kcal 소모
    setGasReduction(newGasReduction);
    setCalConsumption(newCalConsumption);
  };

  useFocusEffect(
    useCallback(() => {
      if (selectedPetInfo[2]) {
        kcalAndCarbon(selectedPetInfo[2]);
      }
    }, [selectedPetInfo]),
  );

  useFocusEffect(
    useCallback(() => {
      axios
        .get(
          `http://petprojectspringboot.azurewebsites.net/selectPetHistory.do/${userId}`,
        )
        .then(res => {
          setPetInfo(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );
  return (
    <ScrollView>
      {/*  Header  */}
      <View style={styles.header}>
        <View style={[styles.headerDiv, styles.divPosition]} />
        <Text style={styles.headerTitle}>산책의 역사</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(props.navigation);
            props.navigation.goBack('PLAYmainwonny');
          }}>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
      </View>
      {/*  //Header  */}
      <View>
        <Text style={styles.chartHeadText}>산책 시간</Text>
      </View>
      {/*  Victory_native  */}
      <View style={styles.container}>
        <VictoryChart
          width={380}
          height={200}
          theme={VictoryTheme.material}
          padding={{top: 20, bottom: 80, left: 40, right: 60}}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              onActivated={points => {
                //points는 onActivated 이벤트 핸들러에서 제공하는 매개변수
                //클릭한 데이터의 정보를 가지고 있음
                if (points.length > 0) {
                  const data = {
                    date: points[0].date, //클릭한 데이터 정보의 년도
                  };
                  axios
                    .get(
                      'http://petprojectspringboot.azurewebsites.net/seletedPetInfo.do',
                      {
                        params: data,
                      },
                    )
                    .then(res => {
                      setSelectedPetInfo(res.data[0]);
                      console.log(res.data[0]);
                    })
                    .catch(err => {
                      console.error(err);
                    });
                }
              }}
            />
          }>
          <VictoryAxis
            tickValues={dataVic.map(item => item.x)}
            style={{
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent'},
              grid: {stroke: 'none'},
              tickLabels: {
                fontSize: 15,
                fontFamily: FontFamily.notoSansKR,
                fontWeight: '600',
                fill: '#6A6A6A',
                padding: 5,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent'},
              grid: {
                stroke: tick => (tick.tickValue === 60 ? '#62AEA9' : '#6A6A6A'),
              },
              tickLabels: {
                fontSize: 15,
                fontFamily: FontFamily.notoSansKRBold,
                fill: tick => (tick.tickValue === 60 ? '#62AEA9' : '#6A6A6A'),
                padding: 5,
              },
            }}
            offsetX={390}
            tickValues={[0, 30, 60]}
            tickFormat={t => `${t}분`}
          />
          <VictoryBar
            data={dataVic}
            style={{
              data: {
                fill: ({datum}) => (datum.y >= 60 ? '#62AEA9' : '#D9D9D9'),
              },
            }}
            barRatio={0.6} //그래프의 두께 0~1 조절
          />
        </VictoryChart>
      </View>
      {/*  //Victory_native  */}
      {/*  Content  */}
      <View style={styles.content}>
        {selectedPetInfo && selectedPetInfo.length > 0 ? (
          <>
            <View style={styles.contentTop}>
              <Text style={styles.contentTopMMdd}>
                {selectedPetInfo[3].substring(5, 7)}/
                {selectedPetInfo[3].substring(8, 10)}
              </Text>
              {/*  월/일 =>EX) 2/15   */}
              <Text style={styles.contentTopDayOfWeek}>{dayOfWeek}</Text>
              {/*  요일  */}
            </View>
            <View style={styles.contentMiddle}>
              <Image
                style={styles.petImg}
                source={require('../assets/profileimage.png')}
              />
              <Text style={styles.walkTime}>{selectedPetInfo[1]}</Text>
              {/*  산책 시간  */}
              <Text style={styles.walkTimeText}>분</Text>
            </View>
            <View style={styles.contentBottom}>
              <Text style={styles.distanceTextBefore}>오늘 멍멍이와 </Text>
              <Text style={styles.distance}>{selectedPetInfo[2]}</Text>
              {/*  거리  */}
              <Text style={styles.distanceTextAfter}> km를 걸었어요.</Text>
            </View>
          </>
        ) : (
          <Text style={styles.beforeSelect}>날짜를 클릭해주세요!</Text>
        )}
      </View>
      {/*  //Content  */}
      {/* Bottom */}
      <View style={styles.bottom}>
        <Image
          style={styles.leafImg}
          source={require('../assets/잎사귀.png')}></Image>
        <Text style={styles.bottomText}>{calConsumption}kcal를 소모하고,</Text>
        <Text style={styles.bottomText}>
          {gasReduction} g의 탄소를 절감한 당신 칭찬해요!
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    width: 204,
    height: 35,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  header: {
    height: 50,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  content: {
    marginLeft: 26,
    marginRight: 26,
    width: 360,
    height: 208,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  chartHeadText: {
    marginTop: 20,
    marginLeft: 26,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    Color: '#2E2E2E',
  },
  container: {
    justifyContent: 'center',
  },
  beforeSelect: {
    fontSize: 30,
    marginLeft: 44,
    marginTop: 70,
    fontFamily: FontFamily.notoSansKRBold,
  },
  contentTop: {
    flexDirection: 'row',
  },
  contentTopMMdd: {
    color: '#A7A7A7',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
    marginTop: 16,
    marginLeft: 20,
  },
  contentTopDayOfWeek: {
    color: '#A7A7A7',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 20,
  },
  contentMiddle: {
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    justifyContent: 'center',
  },
  petImg: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  walkTime: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 40,
  },
  walkTimeText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 25,
    marginTop: 10.5,
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  distanceTextBefore: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 20,
  },
  distance: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
    marginTop: 16,
  },
  distanceTextAfter: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 20,
  },
  bottom: {
    alignItems: 'center',
  },
  leafImg: {
    width: 48,
    height: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  bottomText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
  },
});
export default WalkingHistory;
/*              <Text style={styles.distanceTextBefore}>오늘 멍멍이와 </Text>
              <Text style={styles.distance}>{selectedPetInfo[1]}</Text>
              <Text style={styles.distanceTextAfter}> km를 걸었어요.</Text> */
