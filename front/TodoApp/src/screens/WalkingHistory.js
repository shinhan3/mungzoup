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
import MyDaeng from './MyDaeng';
import {USERID} from '../UserId';
import HeaderComponent from '../components/HeaderComponent';

function WalkingHistory(props) {
  const [petInfo, setPetInfo] = useState([]); //petInfo (List)
  const userId = USERID; //UserId
  const [selectedPetInfo, setSelectedPetInfo] = useState(null); //선택된 petInfo
  const [gasReduction, setGasReduction] = useState(0); //탄소 배출량
  const [calConsumption, setCalConsumption] = useState(0); //칼로리 소모량
  const [weekOffset, setWeekOffset] = useState(0); //저번주 이번주 왔다갔다 하기 위함.
  const daynames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dataVic = petInfo.map((item, index) => ({
    date: item[0].substring(0, 10),
    x: item[0].substring(8, 10),
    y: item[3],
  }));
  //-------------------------------------------------------------------

  var dayOfWeek = '';
  if (selectedPetInfo && selectedPetInfo.length > 0) {
    switch (
      selectedPetInfo[1] // [0]: 날짜, [1]: 요일
    ) {
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
  }
  const kcalAndCarbon = totalDistance => {
    const newGasReduction = Number((totalDistance * 200).toFixed(0)); // 1km 당 200g 감축
    const newCalConsumption = Number((totalDistance * 60).toFixed(0)); // 1km 당 60 kcal 소모
    setGasReduction(newGasReduction);
    setCalConsumption(newCalConsumption);
  };

  useFocusEffect(
    useCallback(() => {
      if (selectedPetInfo) {
        kcalAndCarbon(selectedPetInfo[2]);
      }
    }, [selectedPetInfo]),
  );

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://192.168.0.10:5000/selectPetHistory.do/${userId}`)
        .then(res => {
          const rawData = res.data;
          console.log(res.data, 'res.datares.data');
          // 이번 주의 일요일을 구하는 함수
          const getSunday = () => {
            const d = new Date();
            d.setDate(d.getDate() - 7 * weekOffset);
            const day = d.getDay();
            const diff = d.getDate() - day + (day === 0 ? 0 : 1); // 주의 시작은 일요일
            return new Date(d.setDate(diff));
          };

          const sunday = getSunday();
          console.log(sunday, 'sundaysunday');
          // 일요일부터 7일간의 날짜를 생성
          const lastSevenDays = Array.from({length: 7}, (_, index) => {
            const d = new Date(sunday.getTime()); // 주의 일요일부터 시작
            d.setDate(sunday.getDate() + index); // 일요일부터 하루씩 증가
            d.setHours(0, 0, 0, 0);
            return d;
          });
          console.log(lastSevenDays, 'lastSevenDayslastSevenDays');
          const processedData = lastSevenDays.map(day => {
            const found = rawData.find(item => {
              const itemDate = new Date(item[0]);
              itemDate.setHours(0, 0, 0, 0);
              return (
                itemDate.toISOString().substring(0, 10) ===
                day.toISOString().substring(0, 10)
              );
            });
            if (found) {
              return [found[0], daynames[day.getDay()], found[2], found[3]];
            }
            day.setDate(day.getDate() + 1);
            return [
              day.toISOString().substring(0, 10),
              // daynames[day.getDay()],
              daynames[day.getDay()],
              0,
              0,
            ];
          });

          console.log(processedData, 'processedDataprocessedData');
          // 주간 산책 거리와 산책 시간 계산
          const totalDistance = processedData.reduce(
            (sum, item) => sum + item[2],
            0,
          );
          const totalWalkTime = processedData.reduce(
            (sum, item) => sum + item[3],
            0,
          );
          console.log(
            new Date(processedData[6][0]).getDay(),
            'processedDataprocessedData',
          );
          setPetInfo(processedData);
        })
        .catch(err => {
          console.log(err);
        });
    }, [weekOffset]),
  );
  return (
    <ScrollView>
      {/*  Header  */}
      {/* <View style={styles.header}>
        <View style={styles.headerDiv} />
        <Text style={styles.headerTitle}>산책의 역사</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            style={styles.arrowIcon}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
      </View> */}
      <View style={{marginBottom: 50}}>
        <HeaderComponent
          navigation={props.navigation}
          dimensionCode={require('../assets/arrow8.png')}
          benefits="산책의 역사"
          go={'MyDaeng'}
          backBool={true}></HeaderComponent>
      </View>
      {/*  //Header  */}
      <View style={styles.containerHead}>
        <TouchableOpacity
          onPress={() => {
            setWeekOffset(prev => prev + 1);
          }}>
          <Image
            style={styles.prevArrowIcon}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
        <Text style={styles.weekText}>
          {weekOffset === 0
            ? '이번주'
            : `${dataVic[0]?.date} ~ ${dataVic[6]?.date}`}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setWeekOffset(prev => (prev > 0 ? prev - 1 : prev));
          }}
          disabled={weekOffset === 0}>
          <Image
            style={styles.nextArrowIcon}
            source={
              weekOffset === 0
                ? require('../assets/disabledArrow.png')
                : require('../assets/abledArrow.png')
            }
          />
        </TouchableOpacity>
      </View>
      {/*  Victory_native  */}
      <View style={[styles.container]}>
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
                console.log(points);
                if (points.length > 0) {
                  const clickedDate = points[0].date;
                  const selectedData = petInfo.find(
                    item => item[0] === clickedDate,
                  );

                  if (selectedData) {
                    setSelectedPetInfo(selectedData);
                  } else {
                    const clickedDay = new Date(clickedDate);
                    setSelectedPetInfo([
                      clickedDate, //날짜
                      daynames[clickedDay.getDay()], //요일
                      0, //거리
                      0, //시간
                    ]);
                  }
                }
              }}
            />
          }>
          <VictoryAxis
            tickValues={dataVic.map(item => new Date(item.date).getDay())}
            tickFormat={['월', '화', '수', '목', '금', '토', '일']}
            // width={100}
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
          {/* <VictoryAxis
            tickValues={Array.from({length: 7}, (_, i) => i)} // 항상 0부터 6까지의 값을 가지도록 설정
            tickFormat={['일', '월', '화', '수', '목', '금', '토']}
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
          /> */}
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
            offsetX={380}
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
                {selectedPetInfo[0].substring(5, 7)}/
                {selectedPetInfo[0].substring(8, 10)}
              </Text>
              {/*  월/일 =>EX) 2/15   */}
              <Text style={[styles.contentTopDayOfWeek, {top: 4}]}>
                {/* {dayOfWeek} */}
                {new Date(selectedPetInfo[0]).getDay() == 1
                  ? '(월)'
                  : new Date(selectedPetInfo[0]).getDay() == 2
                  ? '(화)'
                  : new Date(selectedPetInfo[0]).getDay() == 3
                  ? '(수)'
                  : new Date(selectedPetInfo[0]).getDay() == 4
                  ? '(목)'
                  : new Date(selectedPetInfo[0]).getDay() == 5
                  ? '(금)'
                  : new Date(selectedPetInfo[0]).getDay() == 6
                  ? '(토)'
                  : new Date(selectedPetInfo[0]).getDay() == 0
                  ? '(일)'
                  : ''}
              </Text>
              {/*  요일  */}
            </View>
            <View style={styles.contentMiddle}>
              <Image
                style={styles.petImg}
                source={require('../assets/profileimage.png')}
              />
              <Text style={styles.walkTime}>{selectedPetInfo[3]}</Text>
              {/*  산책 시간  */}
              <Text style={styles.walkTimeText}>분</Text>
            </View>
            <View style={[styles.contentBottom, {top: 10}]}>
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
      {selectedPetInfo && (
        <View style={styles.bottom}>
          <Image
            style={styles.leafImg}
            source={require('../assets/잎사귀.png')}></Image>
          <View style={styles.contentBottom}>
            <Text style={styles.kcal}>{calConsumption.toLocaleString()}</Text>
            <Text style={styles.kcalText}> kcal를 소모하고, </Text>
          </View>
          <View style={styles.contentBottom}>
            <Text style={styles.carbon}>{gasReduction.toLocaleString()}</Text>
            <Text style={styles.carbonText}>
              g의 탄소를 절감한 당신 칭찬해요!
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerTitle: {
    marginLeft: -102,
    top: 13,
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
    shadowColor: '#2E2E2E', // 그림자 색상 설정
    elevation: 5, // Android에서 그림자 효과를 주기 위한 설정
  },
  content: {
    marginLeft: 15,
    // marginRight: 26,
    width: 330,
    height: 208,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  containerHead: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  prevArrowIcon: {
    width: 26,
    height: 24,
    marginTop: 3,
  },
  nextArrowIcon: {
    width: 30,
    height: 26,
    marginTop: 3,
  },
  weekText: {
    fontSize: 20,
    fontFamily: FontFamily.notoSansKRMedium,
    marginLeft: 5,
    marginRight: 5,
    top: 4,
  },
  container: {
    justifyContent: 'center',
    left: -23,
  },
  beforeSelect: {
    fontSize: 30,
    marginLeft: 60,
    marginTop: 80,
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
  kcal: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
  },
  kcalText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 3,
  },
  carbon: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
  },
  carbonText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 3,
  },
});
export default WalkingHistory;
