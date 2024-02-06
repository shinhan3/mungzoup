import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

function Test2(props) {
  const [testList, setTestList] = useState([]);
  const [test, setTest] = useState({content: ''});
  const change = e => {
    console.log('eeeeeeeeeeeee');
    console.log(e);
    setTest({content: e});
  };
  const deleteTest = e => {
    console.log(e);
    //axios delete
    axios.delete(`http://10.0.2.2:5000/delete.do/${e}`).then(res => {
      console.log(res.data);
      setTestList([...res.data]);
    });
  };
  const changeList = (seq, content, e) => {
    console.log(seq, content, e);
    const new_testList = testList.map(testData => {
      // console.log(seq, content);
      if (testData.seqno == seq) {
        testData.content = e;
      }
      return testData;
    });
    console.log(new_testList);
    setTestList([...new_testList]);
  };
  const updateTest = (seq, content) => {
    console.log(seq, content, 'enter');
    //axios put
    axios
      .put('http://10.0.2.2:5000/updateTest.do', {
        seqno: seq,
        content: content,
      })
      .then(res => {
        Alert.alert('업테이트 성공');
        setTestList([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
    // axios({
    //   method: 'put',
    //   url: '/updateTest.do',
    //   data: {
    //     seqno: e.target.name,
    //     content: e.target.attributes.miracle.nodeValue,
    //   },
    // }).then(res => {
    //   console.log(res.data);
    //   setTestList([...res.data]);
    // });
  };
  const insertTest = () => {
    console.log(test);
    //axios post
    axios
      .post('http://10.0.2.2:5000/insertTest.do', test)
      .then(res => {
        console.log(res.data);
        setTestList([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //axios get
    axios
      .get('http://10.0.2.2:5000/getTest.do')
      .then(res => {
        console.log(res.data);
        setTestList([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const aaa = () => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //axios get
    axios
      .get('http://10.0.2.2:5000/getTest.do')
      .then(res => {
        console.log(res.data);
        setTestList([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
    // fetch('/getTest.do', {method: 'GET'})
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  //ScrollView => 스크롤
  return (
    <ScrollView styles={styles.content}>
      <View>
        <View style={styles.container}>
          <View style={styles.item}>
            <Text>seq</Text>
          </View>
          <View style={styles.item}>
            <Text>content</Text>
          </View>
          <View style={styles.item}>
            <Text>delete</Text>
          </View>
          {testList.map(testData => (
            <>
              <View style={styles.item}>
                <Text>{testData.seqno}</Text>
              </View>
              <View style={styles.item}>
                {/* <Text>{testData.content}</Text> */}
                <TextInput
                  value={testData.content}
                  onChangeText={e => {
                    changeList(testData.seqno, testData.content, e);
                  }}
                  onSubmitEditing={() => {
                    updateTest(testData.seqno, testData.content);
                  }}></TextInput>
              </View>
              <View style={styles.item}>
                <Button
                  onPress={() => {
                    deleteTest(testData.seqno);
                  }}
                  title="delete"></Button>
              </View>
            </>
          ))}
          <TextInput
            value={test.content}
            style={styles.inputBox}
            onChangeText={change}></TextInput>
          <Button onPress={aaa} title="aaa"></Button>
          <Button onPress={insertTest} title="input"></Button>
          <Button
            title="내 장소 등록"
            onPress={() => {
              props.navigation.navigate('InsertWalkSpot');
            }}></Button>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    width: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 100,
    backgroundColor: 'blue',
  },
  footer: {
    height: 10,
  },
});
export default Test2;
