import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FemaleBox = ({ style }) => {
  return (
    <View style={[styles.femalebox, style]}>
      <View style={[styles.backgroundbtn, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition]}>암컷</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: 0,
    position: "absolute",
    height: 40,
    width: 131,
  },
  backgroundbtn: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
  },
  text: {
    marginTop: -20,
    top: "50%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.bgWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  femalebox: {
    height: 40,
    width: 131,
  },
});

export default FemaleBox;
