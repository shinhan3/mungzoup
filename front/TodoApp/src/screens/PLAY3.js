import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FormContainer6 from '../components/FormContainer6';
import StoreInfoContainer from '../components/StoreInfoContainer';
import MiracleBenefitContainer from '../components/MiracleBenefitContainer';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import axios from 'axios';

const PLAY3 = ({navigation, route}) => {
  const {storeId} = route.params;
  const [storeInfo, setStoreInfo] = React.useState({});
  const [reviewInfo, setReviewInfo] = React.useState({});
  const [totalCount, setTotalCount] = React.useState();
  React.useEffect(() => {
    //console.log(storeId);
    axios
      .get(`http://10.0.2.2:5000/review.do/${storeId}`)
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
    <View style={styles.play}>
      <View style={styles.main}>
        <FormContainer6 reviewInfo={reviewInfo} totalCount={totalCount} />
        <StoreInfoContainer
          storeInfo={storeInfo}
          storeId={storeId}
          navigation={navigation}
        />
        <Image
          style={styles.arrowIcon}
          source={require('../assets/arrow7.png')}
        />
        <Text style={styles.foldBtn}>접기</Text>
      </View>

      <MiracleBenefitContainer
        dimensionCode={require('../assets/arrow8.png')}
        benefits="리뷰"
        navigation={navigation}
        go="PLAY5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 52,
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

export default PLAY3;
