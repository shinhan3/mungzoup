import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const BackgroundBtn = ({ style }) => {
  return <View style={[styles.backgroundbtn, style]} />;
};

const styles = StyleSheet.create({
  backgroundbtn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
    width: 131,
    height: 40,
  },
});

export default BackgroundBtn;
