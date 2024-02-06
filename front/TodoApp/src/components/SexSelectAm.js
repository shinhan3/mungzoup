import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import FemaleBox from "./FemaleBox";

const SexSelectAm = ({ style }) => {
  return (
    <View style={[styles.sexselectAm, style]}>
      <View style={styles.malebox} />
      <FemaleBox />
    </View>
  );
};

const styles = StyleSheet.create({
  malebox: {
    display: "none",
    width: 262,
  },
  sexselectAm: {
    height: 40,
    width: 262,
  },
});

export default SexSelectAm;
