import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import RecommendationContainer from "./RecommendationContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FavoriteListContainer = () => {
  return (
    <View style={[styles.main, styles.mainLayout]}>
      <Text style={styles.contentHead}>내 즐겨찾기 목록</Text>
      <View style={[styles.recommend, styles.mainLayout]}>
        <RecommendationContainer
          trailName={`남산둘레길
`}
          locationDescription={`용산구 용산동 2가
500 m`}
        />
        <RecommendationContainer
          trailName={`안산벚꽃길
`}
          locationDescription={`서대문구 연희동 산
1.5 km`}
          propTop={122}
          propTop1={18}
          propHeight={75}
        />
        <RecommendationContainer
          trailName={`윤중로벚꽃길
`}
          locationDescription={`서대문구 연희동 산
1.5 km`}
          propTop={243}
          propTop1={24}
          propHeight={75}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    width: 360,
    position: "absolute",
  },
  contentHead: {
    marginLeft: -163,
    top: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  recommend: {
    top: 43,
    left: 0,
    height: 365,
  },
  main: {
    marginLeft: -180,
    top: 87,
    bottom: 397,
    left: "50%",
  },
});

export default FavoriteListContainer;
