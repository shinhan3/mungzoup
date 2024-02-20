import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import {USERID} from '../UserId';

const FormContainer3 = props => {
  const totalSize = 210;
  const totalPercent = 2.0;
  const [petHospital, setPetHospital] = React.useState(0.0);
  const [petShop, setPetShop] = React.useState(0.0);
  const [restaurant, setRestaurant] = React.useState(0.0);
  const [beauty, setBeauty] = React.useState(0.0);
  const [consignmentManagement, setConsignmentManagement] = React.useState(0.0);
  const userId = USERID;
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://petprojectspringboot.azurewebsites.net/getbenefitPre.do/${userId}`,
        )
        .then(res => {
          // console.log(res.data);
          res.data.map((value, index) => {
            console.log(value);
            switch (value[0]) {
              case '식당/카페':
                setRestaurant(value[1]);
                break;
              case '반려동물용품':
                setPetShop(value[1]);
                break;
              case '동물병원':
                setPetHospital(value[1]);
                break;
              case '미용':
                setBeauty(value[1]);
                break;
              case '위탁관리':
                setConsignmentManagement(value[1]);
                break;
            }
          });
        });
    }, []),
  );
  return (
    <View style={[styles.miraclebenefit, styles.cateDivLayout]}>
      <View style={[styles.cateDiv, styles.catePosition]} />
      <View style={[styles.cate1, styles.cateLayout]}>
        <View style={[styles.cate1Info, styles.catePosition]}>
          <Text style={[styles.cateName, styles.textTypo]}>동물병원</Text>
        </View>
        <View style={[styles.cate1Miracle, styles.cate1Layout]}>
          <View style={[styles.cate1ThismonthGraph, styles.cate1Layout]}>
            <View
              style={[
                styles.cate1ThismonthGraphChild,
                styles.thismonthChildPosition,
              ]}
            />
            <View
              style={[
                styles.cate1ThismonthGraphItem,
                styles.thismonthItemPosition,
                {width: (petHospital / totalPercent) * totalSize},
              ]}
            />
          </View>
          <Text
            style={[
              styles.percent,
              styles.percentLayout,
              {width: (petHospital / totalPercent) * totalSize - 20},
              petHospital == 0 && {color: Color.colorDarkslategray_200},
            ]}>
            {petHospital}%
          </Text>
        </View>
      </View>
      <View style={[styles.cate2, styles.cateLayout]}>
        <View style={[styles.cate2Info, styles.catePosition]}>
          <Text style={[styles.cateName, styles.textTypo]}>반려동물용품</Text>
        </View>
        <View style={[styles.cate1Miracle, styles.cate1Layout]}>
          <View style={[styles.cate1ThismonthGraph, styles.cate1Layout]}>
            <View
              style={[
                styles.cate1ThismonthGraphChild,
                styles.thismonthChildPosition,
              ]}
            />
            <View
              style={[
                styles.cate2ThismonthGraphItem,
                styles.thismonthItemPosition,
                {width: (petShop / totalPercent) * totalSize},
              ]}
            />
          </View>
          <Text
            style={[
              styles.percent1,
              styles.percentTypo,
              {width: (petShop / totalPercent) * totalSize - 20},
              petShop == 0 && {color: Color.colorDarkslategray_200},
            ]}>
            {petShop}%
          </Text>
        </View>
      </View>
      <View style={[styles.cate3, styles.cateLayout]}>
        <View style={[styles.cate3Info, styles.catePosition]}>
          <Text style={[styles.cateName, styles.textTypo]}>식당ㆍ카페</Text>
        </View>
        <View style={[styles.cate1Miracle, styles.cate1Layout]}>
          <View style={[styles.cate1ThismonthGraph, styles.cate1Layout]}>
            <View
              style={[
                styles.cate1ThismonthGraphChild,
                styles.thismonthChildPosition,
              ]}
            />
            <View
              style={[
                styles.cate1ThismonthGraphItem,
                styles.thismonthItemPosition,
                {width: (restaurant / totalPercent) * totalSize},
              ]}
            />
          </View>
          <Text
            style={[
              styles.percent1,
              styles.percentTypo,
              {width: (restaurant / totalPercent) * totalSize - 20},
              restaurant == 0 && {color: Color.colorDarkslategray_200},
            ]}>
            {restaurant}%
          </Text>
        </View>
      </View>
      <View style={[styles.cate4, styles.cateLayout]}>
        <View style={[styles.cate4Info, styles.catePosition]}>
          <Text style={[styles.cateName, styles.textTypo]}>미용</Text>
        </View>
        <View style={[styles.cate1Miracle, styles.cate1Layout]}>
          <View style={[styles.cate1ThismonthGraph, styles.cate1Layout]}>
            <View
              style={[
                styles.cate1ThismonthGraphChild,
                styles.thismonthChildPosition,
              ]}
            />
            <View
              style={[
                styles.cate4ThismonthGraphItem,
                styles.thismonthItemPosition,
                {width: (beauty / totalPercent) * totalSize},
              ]}
            />
          </View>
          <Text
            style={[
              styles.percent1,
              styles.percentTypo,
              {width: (beauty / totalPercent) * totalSize - 20},
              beauty == 0 && {color: Color.colorDarkslategray_200},
            ]}>
            {beauty}%
          </Text>
        </View>
      </View>
      <View style={[styles.cate5, styles.cate5Position]}>
        <View style={[styles.cate1Info, styles.catePosition]}>
          <Text style={[styles.cateName, styles.textTypo]}>위탁관리</Text>
        </View>
        <View style={[styles.cate5Miracle, styles.cate5Layout]}>
          <View style={[styles.cate5ThismonthGraph, styles.cate5Layout]}>
            <View
              style={[styles.cate5ThismonthGraphChild, styles.cate5Layout]}
            />
            <View
              style={[
                styles.cate5ThismonthGraphItem,
                styles.thismonthItemPosition,
                {width: (consignmentManagement / totalPercent) * totalSize},
              ]}
            />
          </View>
          <Text
            style={[
              styles.percent1,
              styles.percentTypo,
              {width: (consignmentManagement / totalPercent) * totalSize - 20},
              consignmentManagement == 0 && {
                color: Color.colorDarkslategray_200,
              },
            ]}>
            {consignmentManagement}%
          </Text>
        </View>
      </View>
      <View style={styles.legend}>
        <Text style={[styles.legendText, styles.percentTypo1]}>
          멍줍이 제안하는 혜택
        </Text>
        <View style={[styles.color, styles.thismonthItemPosition]} />
      </View>
      <Text style={[styles.title, styles.cate5Position]}>
        <Text style={[styles.text, styles.textTypo]}>{`미라클 조합으로
`}</Text>
        <Text style={styles.text1}>
          {props.discount
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </Text>
        <Text style={[styles.text, styles.textTypo]}>을 할인받아요!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cateDivLayout: {
    height: 405,
    width: 360,
    position: 'absolute',
  },
  catePosition: {
    top: 0,
    left: 0,
  },
  cateLayout: {
    width: 307,
    left: 30,
    height: 18,
    position: 'absolute',
  },
  textTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  cate1Layout: {
    height: 12,
    width: 228,
    position: 'absolute',
  },
  thismonthChildPosition: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: 6,
    top: 0,
    left: 0,
  },
  thismonthItemPosition: {
    backgroundColor: Color.new1,
    left: 0,
    position: 'absolute',
  },
  percentLayout: {
    width: 26,
    alignItems: 'center',
    display: 'flex',
  },
  percentTypo: {
    color: Color.colorWhitesmoke_300,
    textAlign: 'right',
    fontSize: FontSize.size_4xs_6,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    top: 0,
    position: 'absolute',
  },
  cate5Position: {
    left: 28,
    position: 'absolute',
  },
  cate5Layout: {
    width: 210,
    height: 12,
    position: 'absolute',
  },
  percentTypo1: {
    textAlign: 'right',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    top: 0,
    position: 'absolute',
  },
  cateDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 405,
    width: 360,
    position: 'absolute',
  },
  cateName: {
    fontSize: FontSize.size_smi_2,
    textAlign: 'left',
    top: 0,
    left: 0,
    position: 'absolute',
  },
  cate1Info: {
    width: 50,
    height: 18,
    position: 'absolute',
  },
  cate1ThismonthGraphChild: {
    height: 12,
    width: 210,
    position: 'absolute',
  },
  cate1ThismonthGraphItem: {
    borderRadius: 6,
    backgroundColor: Color.new1,
    height: 12,
    top: 0,
    width: 45,
  },
  cate1ThismonthGraph: {
    top: 0,
    left: 0,
  },
  percent: {
    color: Color.colorWhitesmoke_200,
    textAlign: 'right',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    top: 0,
    position: 'absolute',
    fontSize: FontSize.size_4xs_6,
    width: 26,
    alignItems: 'center',
    display: 'flex',
    left: 17,
  },
  cate1Miracle: {
    left: 78,
    top: 2,
  },
  cate1: {
    top: 136,
    height: 18,
  },
  cate2Info: {
    width: 70,
    height: 18,
    position: 'absolute',
  },
  cate2ThismonthGraphItem: {
    width: 137,
    borderRadius: 6,
    backgroundColor: Color.new1,
    height: 12,
    top: 0,
  },
  percent1: {
    // left: 109,
    // width: 26,
    // alignItems: 'center',
    // display: 'flex',
    color: Color.colorWhitesmoke_200,
    textAlign: 'right',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    top: 0,
    position: 'absolute',
    fontSize: FontSize.size_4xs_6,
    width: 26,
    alignItems: 'center',
    display: 'flex',
    left: 17,
  },
  cate2: {
    top: 189,
    height: 18,
  },
  cate3Info: {
    width: 57,
    height: 18,
    position: 'absolute',
  },
  percent2: {
    width: 26,
    alignItems: 'center',
    display: 'flex',
    left: 17,
    color: Color.colorWhitesmoke_300,
  },
  cate3: {
    top: 242,
    height: 18,
  },
  cate4Info: {
    width: 23,
    height: 18,
    position: 'absolute',
  },
  cate4ThismonthGraphItem: {
    width: 90,
    borderRadius: 6,
    backgroundColor: Color.new1,
    height: 12,
    top: 0,
  },
  percent3: {
    left: 66,
  },
  cate4: {
    top: 296,
    height: 18,
  },
  cate5ThismonthGraphChild: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: 6,
    top: 0,
    left: 0,
  },
  cate5ThismonthGraphItem: {
    width: 183,
    borderRadius: 6,
    backgroundColor: Color.new1,
    height: 12,
    top: 0,
  },
  cate5ThismonthGraph: {
    top: 0,
    left: 0,
  },
  percent4: {
    left: 159,
  },
  cate5Miracle: {
    left: 78,
    top: 2,
  },
  cate5: {
    top: 350,
    width: 309,
    height: 18,
  },
  legendText: {
    left: 10,
    fontSize: FontSize.size_6xs_1,
    color: Color.colorDarkgray_200,
  },
  color: {
    top: 1,
    borderRadius: 1,
    width: 7,
    height: 7,
  },
  legend: {
    top: 109,
    left: 274,
    width: 64,
    height: 9,
    position: 'absolute',
  },
  text: {
    fontSize: FontSize.size_mini_7,
  },
  text1: {
    fontSize: FontSize.size_mid_1,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
  },
  title: {
    top: 25,
    lineHeight: 24,
    textAlign: 'left',
  },
  miraclebenefit: {
    top: 284,
    left: 0,
    width: 360,
  },
});

export default FormContainer3;
