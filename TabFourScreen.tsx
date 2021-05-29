import React, { useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { CloseButtonIcon, Text } from '../components/Themed'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

var DATA = [
  {
    title: 'Todo List',
    data: ['füge Aufgaben hinzu'],
  }
];

export var TodoLength = DATA[0].data.length;

const getTodo = async () => {
  try {
    const bookmarksString = await AsyncStorage.getItem('@app:todo');
    if (bookmarksString !== null) {
      const bookmarksArray = JSON.parse(bookmarksString);
      DATA = bookmarksArray;
      TodoLength = DATA[0].data.length
    }
  } catch (error) {
    alert("Laden der Daten Fehlgeschlagen");
  }
}

getTodo();

const saveTodo = async (bookmarksArray: any, resetText: () => void) => {
  try {
    const bookmarksString = JSON.stringify(bookmarksArray);
    await AsyncStorage.setItem('@app:todo', bookmarksString);
    resetText();
    TodoLength = DATA[0].data.length;
  } catch (error) {
    alert("Speichern der Daten Fehlgeschlagen");
  }
};

interface ItemProp {
  title: any
  setTextFunc: (pointerInside?: String) => void
}

interface CheckButtonIn {
  title: any
  setTextFunc: (pointerInside?: String) => void
}

const CheckButton: React.FC<CheckButtonIn> = ({ title, setTextFunc }) => {
  return (
    <TouchableOpacity style={styles.closeButon} onPress={() => { findItem(title); setTextFunc() }} ><CloseButtonIcon /></TouchableOpacity>
  )
}

const Item: React.FC<ItemProp> = ({ title, setTextFunc }) => (
  <>
    <View style={styles.separator} />
    <View style={{ marginLeft: 8, width: "80%", flexDirection: "row" }} >

      <CheckButton title={title} setTextFunc={() => setTextFunc()} />
      <Text style={styles.title} adjustsFontSizeToFit numberOfLines={4} onPress={() => {}}>{title}</Text>
    </View>
  </>
);

function findItem(text: String) {
  console.log(text);
  var i = 0;
  for (i = 0; i < DATA[0].data.length; i++) {
    if (DATA[0].data[i] == text) {
      DATA[0].data.splice(i, 1)
      console.log("succes")

    }
  }
}

function getRandom() {
  var num = Math.floor(Math.random() * (10000000000 - 1 + 1)) + 1;
  return num.toString();
}

const PLACEHOLDER_COLOR = "white";

export default function App() {
  const [text, setText] = useState('');
  return (
    <>
      <SafeAreaView style={{ width: '100%', justifyContent: "center" }}>
        <View style={{margin: 10}}>
        </View>
        <ScrollView style={{marginBottom: 10}}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item setTextFunc={() => { setText(getRandom()); saveTodo(DATA,() => setText("")) }} title={item} />}
            renderSectionHeader={({ section: { title } }) => <TextInput
              placeholder="Todo Hinzufügen"
              onTouchStart={() => { setText(""); }}
              onChangeText={text => setText(text)}
              placeholderTextColor={"white"}
              onSubmitEditing={() => {
                if (text.length > 0)
                  DATA[0].data.push(text);
                  saveTodo(DATA,() => setText("Todo wurde hinzugefügt"));
              }}
              defaultValue={text}
              style={styles.input} />} />
        </ScrollView>
      </SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: 'whitesmoke',
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    left: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '90%',
    backgroundColor: 'grey',
    alignSelf: "center"
  },
  input: {
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    color: PLACEHOLDER_COLOR,
    backgroundColor: "#393e46",
    height: 40,
    marginTop: 10
  },
  item: {
    backgroundColor: 'whitesmoke',
    height: 50,
    width: '90%',
  },
  closeButon: {
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    width: 40
  },


});