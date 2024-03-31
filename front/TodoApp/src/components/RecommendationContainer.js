import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RecommendationContainer = ({
  trailName,
  locationDescription,
  propTop,
  propTop1,
  propHeight,
}) => {
  const recommend1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const recommendTxtStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop1, propHeight]);

  return (
    <View style={[styles.recommendPosition, recommend1Style]}>
      <View style={styles.line1} />
      <View style={[styles.recommendDiv, styles.recommendPosition]} />
      <Text style={[styles.recommendTxt, recommendTxtStyle]}>
        <Text style={styles.text}>{trailName}</Text>
        <Text style={styles.m}>{locationDescription}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendPosition: {
    height: 122,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  line1: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recommendDiv: {
    backgroundColor: Color.bgWhite,
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_100,
  },
  m: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkgray_200,
  },
  recommendTxt: {
    top: 24,
    left: 17,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    textAlign: "left",
    width: 193,
    height: 78,
    position: "absolute",
  },
});

export default RecommendationContainer;
