import React from 'react';
import {View, Text, Dimensions, Image, Pressable} from 'react-native';
import Carousel from 'react-native-snap-carousel';

class MyCarousel extends React.Component {
  static defaultProps = {
    petList: [],
  };

  renderItem = ({item}) => {
    if (item.isLast) {
      return <View>{this.renderLastSlide()}</View>;
    }

    return <View>{this.renderPetSlide(item)}</View>;
  };

  renderLastSlide = () => (
    <Pressable
      style={[styles.newprofilebtn, styles.newprofilebtnLayout]}
      onPress={() => this.props.navigation.navigate('MyDaenegRegister')}>
      <View style={[styles.backgroundbtn, styles.newprofilebtnLayout]} />
      <Text style={[styles.textbtn, styles.event3Position]}>
        마이댕 등록하기
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/vector1.png')}
      />
    </Pressable>
  );

  renderPetSlide = pet => (
    <View key={pet.petId}>
      <View style={[styles.petprofilebox, styles.petprofileboxLayout]}>
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          resizeMode="cover"
          source={require('../assets/arrow.png')}
        />
        <View style={{marginLeft: 10}}>
          <Pressable
            onPress={() => this.props.navigation.navigate('MyDaengUpdate')}>
            <Image
              style={[styles.profileimageIcon, styles.petprofileboxLayout]}
              resizeMode="cover"
              source={require('../assets/profileimage.png')}
            />
          </Pressable>
          <View style={[styles.petinfotext, styles.timeChildLayout]}>
            <Text style={[styles.doginfo, styles.textLayout1]}>
              {new Date(pet.birth).toISOString().split('T')[0]} -{' '}
              {pet.sex ? 'Male' : 'Female'}
            </Text>
            <View style={[styles.timeChild, styles.timeChildLayout]} />
            <Text style={[styles.dogname, styles.text10Position]}>
              {pet.name}
            </Text>
          </View>
        </View>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          resizeMode="cover"
          source={require('../assets/mingcuterightline1.png')}
        />
      </View>
    </View>
  );

  render() {
    return (
      <Carousel
        ref={c => (this._carousel = c)}
        data={this.props.petList}
        renderItem={this.renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 50}
      />
    );
  }
}

export default MyCarousel;
