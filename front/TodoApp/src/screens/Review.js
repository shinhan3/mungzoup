import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import ReviewInfoContainer from '../components/ReviewInfoContainer';
import StoreInfoContainer from '../components/StoreInfoContainer';
import HeaderComponent from '../components/HeaderComponent';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import axios from 'axios';
import FooterComponent from './FooterComponent';

const Review = ({navigation, route}) => {
  const {storeId} = route.params;
  const [storeInfo, setStoreInfo] = React.useState({});
  const [reviewInfo, setReviewInfo] = React.useState({});
  const [totalCount, setTotalCount] = React.useState();
  React.useEffect(() => {
    //console.log(storeId);
    axios
      .get(`http://192.168.0.10:5000/review.do/${storeId}`)
      .then(res => {
        // console.log(res.data.storeInfo);
        // console.log(res.data.reviewInfo);
        // console.log(res.data.totalCount);
        setStoreInfo(res.data.storeInfo);
        setReviewInfo(res.data.reviewInfo);
        setTotalCount(res.data.totalCount);
      })
      .catch();
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styles.play}>
          <HeaderComponent
            dimensionCode={require('../assets/arrow8.png')}
            benefits="리뷰"
            navigation={navigation}
            go="HiddenPopularStores"
          />
          <View style={styles.main}>
            <StoreInfoContainer storeInfo={storeInfo} />
            <ReviewInfoContainer
              reviewInfo={reviewInfo}
              totalCount={totalCount}
            />
            <Pressable
              onPress={() =>
                navigation.navigate('OcrInput', {
                  storeId: storeId,
                  storeInfo: storeInfo,
                })
              }
              style={[styles.reviewbtn, styles.reviewbtnLayout]}
              insert-review="리뷰 등록">
              <Text style={[styles.text, styles.textFlexBox]}>리뷰 등록</Text>
              <Image
                style={styles.materialSymbolscameraIcon}
                source={require('../assets/materialsymbolscamera.png')}
              />
              <View style={[styles.reviewbtnChild, styles.reviewbtnLayout]} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <FooterComponent
        petBoolean={false}
        playBoolean={true}
        cardBoolean={false}
        navigation={navigation}></FooterComponent>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    top: 5,
    left: 22,
    fontSize: FontSize.size_5xs + 3,
    fontWeight: '800',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
    width: 40,
    height: 12,
  },
  textFlexBox: {
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  reviewbtnLayout: {
    width: 60,
    height: 23,
    position: 'absolute',
  },
  materialSymbolscameraIcon: {
    top: 4,
    left: 4,
    width: 13,
    height: 14,
    overflow: 'hidden',
    position: 'absolute',
  },
  reviewbtnChild: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.2,
    left: 0,
    top: 0,
  },
  reviewbtn: {
    left: 280,
    top: 18,
  },

  menuLayout: {
    height: 38,
    width: 25,
    position: 'absolute',
  },
  play1Typo: {
    top: 26,
    textAlign: 'center',
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  arrowIcon: {
    top: 542,
    left: 158,
    width: 24,
    height: 26,
    position: 'absolute',
    overflow: 'hidden',
  },
  foldBtn: {
    top: 539,
    left: 291,
    fontSize: FontSize.size_mini,
    textAlign: 'right',
    width: 40,
    height: 31,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  main: {
    top: 60,
    height: 570,
    width: 360,
    left: 0,
    position: 'absolute',
  },

  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 708,
    overflow: 'hidden',
  },
});

export default Review;
