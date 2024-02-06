import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FemaleBox1 = ({ style }) => {
  return (
    <View style={[styles.textLayout, style]}>
      <Text style={[styles.text, styles.textLayout]}>암컷</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 40,
    width: 131,
  },
  text: {
    position: "absolute",
    marginTop: -20,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FemaleBox1;
