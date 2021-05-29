import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import useColorScheme from '../hooks/useColorScheme';

const grade = () => {
  
}

function useFontColorScheme() {
  if(!(useColorScheme() == "dark")) {
    return "white"
  } else {
    return "black"
  }
}

function FinalCalcPro(value: any) {
  if(isNaN(value)) {
    return 0
  }

  if(!isFinite(value)) return 0

  if(!isNaN(value)) {
    if(value > 6) return "6+"
    return value
  }

}

function FinalCalcPro2(value: any) {
  if(isNaN(value)) {
    return "0% Korrekt"
  }

  if(!isFinite(value)) return "0% Korrekt"

  if(!isNaN(value)) {
    if(value > 100) return "100%+ Korrekt"
    return value + "% Korrekt"
  }

}

const NoteTool = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.input} delayPressIn={0}>
          <Text style={{textAlign: "center", marginTop: 5, color: "white"}}>Erreichte Punkte</Text>
          <TextInput
            style={{ height: '80%', width: '80%', color: 'white', alignSelf: "center" }}
            onChangeText={value => setValue(value)}
            defaultValue={value}
            keyboardType={"number-pad"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.input} delayPressIn={0}>
        <Text style={{textAlign: "center", marginTop: 5, color: "white"}}>Maximale Punkte</Text>
          <TextInput
            style={{ height: '80%', width: '80%', color: 'white', alignSelf: 'center' }}
            onChangeText={text => setText(text)}
            defaultValue={text}
            keyboardType={"number-pad"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.note}> {FinalCalcPro(Math.round((Number(value) * 5 / Number(text) + 1) * 10) / 10)} </Text>
      <Text style={styles.note2}> {FinalCalcPro2(Math.round(((Number(value) / Number(text)) * 100) * 10) / 10)} </Text>
    </View>
  );
}


export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <NoteTool />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  input: {
    borderRadius: 10,
    marginHorizontal: 8,
    width: "40%",
    color: "white",
    backgroundColor: "#393e46",
    height: 80,
    justifyContent: 'space-between',
  },
  note: {
    margin: 8,
    fontSize: 60,
    textAlign: "center",
  },
  note2: {
    margin: 8,
    fontSize: 40,
    textAlign: "center",
  },
  box: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 100,
  },
});
