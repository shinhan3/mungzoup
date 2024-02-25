import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Pressable,
} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import GenderPicker from '../components/GenderPicker';
import BirthdayPicker from '../components/BirthdayPicker';
import UploadProfileimage from '../components/UploadProfileimage';
import axios from 'axios';
import {USERID} from '../UserId';
import HeaderComponent from '../components/HeaderComponent';

const MyDaenegUpdate = props => {
  const userId = USERID;
  const petId = props.route.params.petId;
  const [petProfile, setPetProfile] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/petProfile.do/${petId}`)
      .then(res => {
        console.log(res.data, 'aaaaaaa');
        setPetProfile(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [petId]);

  const [form, setForm] = React.useState({
    weight: null,
    breed: '',
    name: '',
    birth: null,
    sex: null,
    image: null,
  });

  const handleFileSelect = file => {
    setForm(prevForm => ({...prevForm, image: file}));
  };
  const submitForm = () => {
    const data = new FormData();
    data.append('imageFile', form.image);

    axios
      .post('http://10.0.2.2:5000/uploadProfileFile.do', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('^^^^^^^^', response);
        const formData = {
          ...form,
          image: response.data,
          user: {userId: userId},
        };

        axios
          .put('http://10.0.2.2:5000/updatePetProfile.do', formData)
          .then(res => {
            console.log(res.data);
            props.navigation.navigate('MyDaeng');
          })
          .catch(err => {
            console.error(err.response.data); // 에러 메시지 출력
            setError('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // useEffect 훅을 사용하여 petProfile이 업데이트될 때마다 form을 업데이트합니다.
  React.useEffect(() => {
    console.log(petProfile, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    setForm({
      ...form,
      // petProfile 객체가 비어 있지 않은 경우에만 설정합니다.
      ...(petProfile && {
        petId: petProfile.petId,
        birth: petProfile.birth,
        sex: petProfile.sex,
        name: petProfile.name,
        breed: petProfile.breed,
        weight: petProfile.weight,
        image: petProfile.image,
      }),
    });
  }, [petProfile]);
  const [error, setError] = useState('');

  const handleBirthday = date => {
    setForm(prevForm => ({...prevForm, birth: date}));
  };

  // form의 각 필드를 업데이트하는 함수입니다.
  const handleChange = (name, value) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const handleSexChange = sex => {
    const isMale = sex === '수컷';
    setForm(prevForm => ({...prevForm, sex: isMale}));
  };

  useEffect(() => {
    console.log('====', form);
  }, [form, petProfile]);

  const handleConfirm = () => {
    if (!form.weight || isNaN(form.weight)) {
      setError('무게를 올바르게 입력해주세요.');
      return;
    }
    if (!form.breed) {
      setError('품종을 입력해주세요.');
      return;
    }
    if (!form.name) {
      setError('이름을 입력해주세요.');
      return;
    }

    Alert.alert(
      '알림',
      '수정하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('취소 버튼이 눌렸습니다.'),
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: submitForm,
        },
      ],
      {cancelable: false},
    );
  };

  const deletePetProfile = () => {
    axios
      .delete(`http://10.0.2.2:5000/deletePetProfile.do/${petId}`)
      .then(res => {
        alert('삭제에 성공했습니다.');
        console.log(res.data);
        props.navigation.navigate('MyDaeng');
      })
      .catch(err => {
        console.error(err.response.data);
        setError('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  return (
    <ScrollView>
      <HeaderComponent
        dimensionCode={require('../assets/arrow8.png')}
        benefits="펫 프로필"
        navigation={props.navigation}
        go="MyDaeng"
        backBool={true}
      />
      <View style={styles.view1}>
        <View style={[styles.background, styles.headerDivShadowBox]} />
        <View>
          <Text style={styles.chartHeadText}>프로필 편집</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => {
              console.log('delete');
              deletePetProfile();
            }}>
            <Image
              source={require('../assets/trash_can.png')}
              style={[styles.deleteBtn, styles.deleteImg]}></Image>
          </TouchableOpacity>
        </View>
        <UploadProfileimage
          onFileSelect={handleFileSelect}
          navigation={props.navigation}
          image={form.image}
        />
        {form && (
          <View style={styles.view}>
            <View style={[styles.main, styles.mainPosition]}>
              <View style={[styles.inputform, styles.iconPosition]}>
                <View style={styles.weight}>
                  <TextInput
                    style={[styles.background1, styles.textPosition]}
                    value={
                      form.weight
                        ? form.weight.toString()
                        : '무게를 입력해주세요'
                    }
                    onChangeText={value => handleChange('weight', value)}
                  />
                  <Text style={[styles.text, styles.textTypo]}>무게 (kg)</Text>
                </View>
                <View style={[styles.kind, styles.kindPosition]}>
                  <TextInput
                    style={[styles.background1, styles.textPosition]}
                    value={form.breed}
                    onChangeText={value => handleChange('breed', value)}
                  />
                  <Text style={[styles.text, styles.textTypo]}>품종</Text>
                </View>

                <View style={[styles.birth, styles.kindPosition]}>
                  <Text style={[styles.text, styles.textTypo]}>생일</Text>
                  <BirthdayPicker
                    value={form.birth}
                    onDateChange={handleBirthday}
                  />
                </View>
                <Text style={[styles.text3, styles.kindPosition]}>성별</Text>
                <GenderPicker value={form.sex} onSexChange={handleSexChange} />
                <View style={[styles.name, styles.kindPosition]}>
                  <TextInput
                    style={[styles.background1, styles.textPosition]}
                    keyboardType="default"
                    textContentType="givenName"
                    value={form.name}
                    onChangeText={value => handleChange('name', value)}
                  />
                  <Text style={[styles.text, styles.textTypo]}>이름</Text>
                </View>
              </View>
              <Pressable
                style={[styles.insertbtn, styles.insertbtnPosition]}
                insert-btn="수정"
                onPress={handleConfirm}>
                <View style={[styles.backgroundbtn, styles.textPosition1]} />
                <Text style={styles.textbtn}>수정</Text>
              </Pressable>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartHeadText: {
    marginTop: 80,
    marginLeft: 26,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    Color: '#2E2E2E',
  },
  deleteImg: {
    // marginTop: 5,
    width: 20,
    height: 20,
    // marginLeft: -220,
  },
  deleteBtn: {
    left: 60,
    top: -22,
  },
  mainPosition: {
    height: 750,
    width: 302,
    marginLeft: -151,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  headerDivShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  iconPosition: {
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  textPosition: {
    marginLeft: -131,
    width: 262,
    left: '50%',
    top: 35,
    position: 'absolute',
  },
  textPosition1: {
    marginLeft: -131,
    width: 262,
    left: '50%',
    top: '40%',
    position: 'absolute',
  },
  inputPosition: {
    height: 24,
    left: '50%',
    top: '80%',
    position: 'absolute',
  },
  textTypo: {
    // color: Color.colorDarkslategray,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 16,
  },
  kindPosition: {
    marginLeft: -132,
    width: 262,
    left: '50%',
    top: '50%',
    position: 'absolute',
    fontSize: 16,
  },
  insertbtnPosition: {
    marginLeft: -135,
    width: 262,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    marginLeft: -180,
    width: 360,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  menuPosition: {
    height: 38,
    width: 25,
    marginTop: -19,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  playPosition: {
    marginTop: 7,
    fontSize: FontSize.size_5xs,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  iconLayout: {
    height: 25,
    position: 'absolute',
    overflow: 'hidden',
  },
  background: {
    marginTop: -500,
    borderRadius: Border.br_xs,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: Color.colorWhite,
    height: 900,
    width: '100%',
    top: '40%',
    position: 'absolute',
  },
  background1: {
    padding: 10,
    marginTop: -11,
    borderRadius: Border.br_9xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  input: {
    marginTop: -3,
    marginLeft: -121,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRRegular,
    width: 242,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    height: 24,
    color: Color.colorDarkgray_200,
  },
  text: {
    marginTop: -29,
    marginLeft: -131,
    width: 262,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  weight: {
    marginTop: 220.5,
    marginLeft: -130,
    height: 58,
    width: 262,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  kind: {
    marginTop: 140.5,
    height: 58,
  },
  birth: {
    marginTop: 60.5,
    height: 58,
  },
  text3: {
    marginTop: -27.5,
    color: Color.colorDarkslategray,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  name: {
    marginTop: -107.5,
    height: 58,
  },

  inputform: {
    marginTop: -284,
    marginLeft: -135,
    width: 264,
    height: 557,
  },

  backgroundbtn: {
    marginTop: -20,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
    height: 40,
  },
  textbtn: {
    marginLeft: -24.6,
    fontSize: FontSize.size_mini + 5,
    color: Color.bgWhite,
    width: 46,
    height: 37,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -16,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    alignItems: 'center',
    display: 'flex',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  insertbtn: {
    marginTop: 314,
    height: 40,
  },
  main: {
    marginTop: -375.5,
  },
  headerDiv: {
    marginTop: -26,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 3,
    elevation: 3,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  headerTitle: {
    marginLeft: -102,
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    width: 204,
    height: 35,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -17,
    color: Color.colorDarkslategray,
    alignItems: 'center',
    display: 'flex',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  arrowIcon: {
    marginTop: 10,
    marginLeft: -166,
    width: 26,
    overflow: 'hidden',
  },
  header: {
    height: 50,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  view: {
    top: -150,
    height: 600,
  },
  view1: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  error: {
    top: 650,
    left: 120,
    color: 'red',
  },
});

export default MyDaenegUpdate;
