import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SexSelect = ({ style }) => {
  return (
    <View style={[styles.sexselect, style]}>
      <View style={[styles.sexselectAm, styles.sexselectAmLayout]}>
        <View style={styles.malebox}>
          <View style={[styles.sexbackground, styles.sexbackgroundLayout]} />
          <Text style={[styles.sexselectSu, styles.textLayout]}>수컷</Text>
        </View>
      </View>
      <Text style={styles.text1}>성별</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sexselectAmLayout: {
    height: 40,
    position: "absolute",
    left: 0,
    width: 262,
  },
  sexbackgroundLayout: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  textLayout: {
    width: 131,
    height: 40,
    position: "absolute",
  },
  sexbackground: {
    backgroundColor: Color.bgWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    position: "absolute",
    left: 0,
    width: 262,
  },
  sexselectSu: {
    color: Color.bgWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRRegular,
    width: 131,
    fontSize: FontSize.size_xs,
    top: "50%",
    marginTop: -20,
    left: 131,
  },
  malebox: {
    top: 0,
    height: 40,
    left: 0,
    position: "absolute",
    width: 262,
  },
  sexselectAm: {
    top: 26,
  },
  text1: {
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
    position: "absolute",
    width: 262,
  },
  sexselect: {
    height: 66,
    width: 262,
  },
});

export default SexSelect;
