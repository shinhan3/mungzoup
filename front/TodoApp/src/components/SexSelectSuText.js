import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SexSelectSuText = ({ style }) => {
  return <Text style={[styles.sexselectSu, style]}>수컷</Text>;
};

const styles = StyleSheet.create({
  sexselectSu: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 131,
    height: 40,
  },
});

export default SexSelectSuText;
