import React, {useCallback, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';
import axios from 'axios';
import {BarChart} from 'react-native-chart-kit';
function WalkingHistory(props) {
  const [petInfo, setPetInfo] = useState([]);
  const userId = 'user1';

  //chart.js
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  //--------------------------------------------

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://10.0.2.2:5000/selectPetHistory.do/${userId}`)
        .then(res => {
          setPetInfo(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );
  return (
    <ScrollView>
      {/*  Header  */}
      <View style={styles.header}>
        <View style={[styles.headerDiv, styles.divPosition]} />
        <Text style={styles.headerTitle}>산책의 역사</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(props.navigation);
            props.navigation.goBack('PLAYmainwonny');
          }}>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
      </View>
      {/*  //Header  */}
      <BarChart
        style={styles.graphStyle}
        data={data}
        yAxisLabel="$"
        chartConfig={styles.chartConfig}
        verticalLabelRotation={30}
      />
      {/*  Content  */}
      <View style={styles.content}></View>
      {/*  //Content  */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    width: 204,
    height: 35,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  header: {
    height: 50,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  content: {
    margin: 26,
    width: 360,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  graphStyle: {
    width: 300,
    height: 220,
  },
  chartConfig: {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  },
});
export default WalkingHistory;
