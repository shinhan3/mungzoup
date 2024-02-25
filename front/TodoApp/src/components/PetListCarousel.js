import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
import Carousel from 'react-native-snap-carousel';

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, // 현재 인덱스를 저장하는 state 추가
    };
  }

  _renderItem = ({item, index}) => {
    const calculateAge = birthDate => {
      const birth = new Date(birthDate);
      const today = new Date();

      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();

      // 생일이 아직 오지 않은 경우, 나이에서 1을 빼줍니다.
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
      ) {
        age--;
      }

      return age;
    };
    // 마지막 항목일 경우 특별한 컴포넌트를 렌더링
    if (!item || item.isLast) {
      return (
        //마지막 항목 등록하기 버튼
        <View style={styles.petProfileContainer}>
          <Image
            style={styles.saly18Icon}
            resizeMode="cover"
            source={require('../assets/saly18.png')}
          />
          <Pressable
            style={[styles.newprofilebtn, styles.newprofilebtnLayout]}
            onPress={() => {
              this.props.navigation.navigate('MyDaenegRegister');
            }}>
            <View style={[styles.backgroundbtn, styles.newprofilebtnLayout]} />
            <Text style={[styles.textbtn, styles.event3Position]}>
              마이댕 등록하기
            </Text>
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/vector1.png')}
            />
          </Pressable>
        </View>
      );
    } else {
      // console.log('item^^^^^^', item); // 이 코드를 추가하세요.
      return (
        <View key={item.petId} style={styles.petProfileContainer}>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('MyDaengUpdate', {
                petId: item.petId,
              });
            }}>
            <Image
              style={[styles.petProfileImage, item ? {borderRadius: 100} : {}]}
              resizeMode="cover"
              source={
                item && item.image
                  ? {uri: item.image}
                  : require('../assets/profileimage.png')
              }
            />
          </Pressable>
          <View style={styles.petProfileTextWrap}>
            <Text style={styles.petProfileText}>{item.name}</Text>
            <Text style={styles.petProfileText1}>
              {calculateAge(item.birth) + '살'} {' |  '}
              {/* {new Date(item.birth).toISOString().split('T')[0]} */}
              {item.sex ? 'Male' : 'Female'}
            </Text>
          </View>
        </View>
      );
    }
  };
  handleSnapToItem = index => {
    this.setState({activeIndex: index}); // 현재 인덱스 업데이트
  };

  render() {
    const {activeIndex} = this.state;
    const data = [...this.props.petList, {isLast: true}];
    return (
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 150}
          onSnapToItem={this.handleSnapToItem} // 현재 인덱스를 업데이트하는 함수를 prop으로 전달
        />
        <View style={styles.indicatorWrap}>
          {data.map((_, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => this._carousel.snapToItem(i)} // 인디케이터를 클릭하면 해당 인덱스의 아이템으로 이동
            >
              <View
                style={[
                  styles.indicator,
                  activeIndex === i && styles.activeIndicator,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  indicatorWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: Color.new1,
  },
  petProfileContainer: {
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 2,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  petProfileImage: {
    // marginLeft: 30,
    // marginRight: 50,
    width: 70,
    height: 70,
    marginBottom: 10,
    // borderRadius: 15,
  },
  // petProfileTextWrap: {
  //   flex: 1,
  // },
  petProfileText: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
  //버튼
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  newprofilebtnLayout: {
    width: 136,
    height: 38,
    position: 'absolute',
  },
  event3Position: {
    left: 31,
    top: 10,
  },
  backgroundbtn: {
    borderRadius: Border.br_3xs,
    backgroundColor: '#e9e9e9',
    left: 0,
    top: 0,
  },
  textbtn: {
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_100,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  vectorIcon1: {
    height: '34.21%',
    width: '9.56%',
    top: '28.95%',
    right: '80.88%',
    bottom: '36.84%',
    left: '9.56%',
    position: 'absolute',
  },

  saly18Icon: {
    top: -20,
    width: 120,
    height: 115,
    marginBottom: 10,
  },

  newprofilebtn: {
    top: 115,
    marginBottom: 5,
  },
});

export default MyCarousel;
