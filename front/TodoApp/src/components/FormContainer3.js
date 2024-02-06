import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FormContainer3 = () => {
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
              ]}
            />
          </View>
          <Text style={[styles.percent, styles.percentLayout]}>0.4%</Text>
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
              ]}
            />
          </View>
          <Text style={[styles.percent1, styles.percentTypo]}>1.2%</Text>
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
              ]}
            />
          </View>
          <Text style={[styles.percent2, styles.percentTypo]}>0.4%</Text>
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
              ]}
            />
          </View>
          <Text style={[styles.percent3, styles.percentTypo]}>0.8%</Text>
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
              ]}
            />
          </View>
          <Text style={[styles.percent4, styles.percentTypo]}>1.6%</Text>
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
        <Text style={styles.text1}>5,000원</Text>
        <Text style={[styles.text, styles.textTypo]}>을 할인받아요!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cateDivLayout: {
    height: 405,
    width: 360,
    position: "absolute",
  },
  catePosition: {
    top: 0,
    left: 0,
  },
  cateLayout: {
    width: 307,
    left: 30,
    height: 18,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  cate1Layout: {
    height: 12,
    width: 228,
    position: "absolute",
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
    position: "absolute",
  },
  percentLayout: {
    width: 26,
    alignItems: "center",
    display: "flex",
  },
  percentTypo: {
    color: Color.colorWhitesmoke_300,
    textAlign: "right",
    fontSize: FontSize.size_4xs_6,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  cate5Position: {
    left: 28,
    position: "absolute",
  },
  cate5Layout: {
    width: 231,
    height: 12,
    position: "absolute",
  },
  percentTypo1: {
    textAlign: "right",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  cateDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 405,
    width: 360,
    position: "absolute",
  },
  cateName: {
    fontSize: FontSize.size_smi_2,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  cate1Info: {
    width: 45,
    height: 18,
    position: "absolute",
  },
  cate1ThismonthGraphChild: {
    height: 12,
    width: 228,
    position: "absolute",
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
    textAlign: "right",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_4xs_6,
    width: 26,
    alignItems: "center",
    display: "flex",
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
    width: 68,
    height: 18,
    position: "absolute",
  },
  cate2ThismonthGraphItem: {
    width: 137,
    borderRadius: 6,
    backgroundColor: Color.new1,
    height: 12,
    top: 0,
  },
  percent1: {
    left: 109,
    width: 26,
    alignItems: "center",
    display: "flex",
  },
  cate2: {
    top: 189,
    height: 18,
  },
  cate3Info: {
    width: 57,
    height: 18,
    position: "absolute",
  },
  percent2: {
    width: 26,
    alignItems: "center",
    display: "flex",
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
    position: "absolute",
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
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini_7,
  },
  text1: {
    fontSize: FontSize.size_mid_1,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
  },
  title: {
    top: 25,
    lineHeight: 24,
    textAlign: "left",
  },
  miraclebenefit: {
    top: 284,
    left: 0,
    width: 360,
  },
});

export default FormContainer3;
