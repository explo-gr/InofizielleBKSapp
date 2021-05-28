import { Picker } from '@react-native-picker/picker'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Image, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

function SetStatusBarColor() {
  setTimeout(function () { setStatusBarBackgroundColor("white", true); }, 1000);
  setTimeout(function () { setStatusBarBackgroundColor("tomato", true); }, 2000);
  setTimeout(function () { setStatusBarBackgroundColor("red", true); }, 3000);
  setTimeout(function () { setStatusBarBackgroundColor("orange", true); }, 4000);
  setTimeout(function () { setStatusBarBackgroundColor("yellow", true); }, 5000);
  setTimeout(function () { setStatusBarBackgroundColor("lime", true); }, 6000);
  setTimeout(function () { setStatusBarBackgroundColor("green", true); }, 7000);
  setTimeout(function () { setStatusBarBackgroundColor("cyan", true); }, 8000);
  setTimeout(function () { setStatusBarBackgroundColor("blue", true); }, 9000);
  setTimeout(function () { setStatusBarBackgroundColor("purple", true); }, 10000);
  setTimeout(function () { setStatusBarBackgroundColor("pink", true); }, 11000);
  setTimeout(function () { setStatusBarBackgroundColor("black", true); }, 12000);
}

export var ClassNumber: any = "1uga";


const getClass = async () => {
  try {
    const classString = await AsyncStorage.getItem('@app:class');
    if (classString !== null) {
      var classIndex = [
        "1Uga",
        "1Ugb",
        "1Ugc",
        "1Ugd",
        "2Uga",
        "2Ugb",
        "2Ugc",
        "2Ugd",
        "3ga",
        "3gb",
        "3gc",
        "3gd",
        "3ge",
        "3gf",
        "3gg",
        "3gh",
        "3gi",
        "4ga",
        "4gb",
        "4gc",
        "4gd",
        "4ge",
        "4gf",
        "4gg",
        "4gh",
        "4gi",
        "5ga",
        "5gb",
        "5gc",
        "5gd",
        "5ge",
        "5gf",
        "5gg",
        "5gh",
        "5gi",
        "6ga",
        "6gb",
        "6gc",
        "6gd",
        "6ge",
        "6gf",
        "6gg",
        "6gh",
        "6gi",
        "6gk"
      ]
      ClassNumber = classIndex[Number(classString)];
    }
  } catch (error) {
    alert("Laden der Daten Fehlgeschlagen");
  }
}

getClass();


console.log("ClassNumber war ursprünglich:" + ClassNumber)

const saveClass = async (classString: Number) => {
  try {
    await AsyncStorage.setItem('@app:class', classString.toString());
    getClass();
  } catch (error) {
    alert("Speichern der Daten Fehlgeschlagen");
  }
};

export var MobileSchulnetzOutput: string | null;

const set = async (mobile: boolean) => {
  if (!(typeof mobile === 'undefined')) {
    try {
      await AsyncStorage.setItem('@app:snclient', mobile.toString());
    } catch (e) {
      alert("Speichern/Laden der Daten fehlgeschlagen! \n" + e);
    }
  }
}

function SetClass() {
  const [selectedClass, setSelectedClass] = React.useState(ClassNumber);
  return (
    <View style={{ backgroundColor: '#393e46', width: '82%', height: '12%', borderRadius: 15, marginTop: 20 }}>
      <Text style={{ color: 'white', textAlign: "center" }}>
        Derzeitig ausgewählt: {selectedClass}
      </Text>
      <Picker
        mode={'dropdown'}
        dropdownIconColor={'white'}
        style={{ color: 'white', width: '100%', position: 'absolute', top: '25%' }}
        selectedValue={selectedClass}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedClass(itemValue)
          saveClass(itemIndex)
          getClass();
          console.log(ClassNumber + " output")
        }
        }>

        <Picker.Item label="1Uga" value="1Uga" />
        <Picker.Item label="1Ugb" value="1Ugb" />
        <Picker.Item label="1Ugc" value="1Ugc" />
        <Picker.Item label="1Ugd" value="1Ugd" />

        <Picker.Item label="2Uga" value="2Uga" />
        <Picker.Item label="2Ugb" value="2Ugb" />
        <Picker.Item label="2Ugc" value="2Ugc" />
        <Picker.Item label="2Ugd" value="2Ugd" />

        <Picker.Item label="3ga" value="3ga" />
        <Picker.Item label="3gb" value="3gb" />
        <Picker.Item label="3gc" value="3gc" />
        <Picker.Item label="3gd" value="3gd" />
        <Picker.Item label="3ge" value="3ge" />
        <Picker.Item label="3gf" value="3gf" />
        <Picker.Item label="3gg" value="3gg" />
        <Picker.Item label="3gh" value="3gh" />
        <Picker.Item label="3gi" value="3gi" />

        <Picker.Item label="4ga" value="4ga" />
        <Picker.Item label="4gb" value="4gb" />
        <Picker.Item label="4gc" value="4gc" />
        <Picker.Item label="4gd" value="4gd" />
        <Picker.Item label="4ge" value="4ge" />
        <Picker.Item label="4gf" value="4gf" />
        <Picker.Item label="4gg" value="4gg" />
        <Picker.Item label="4gh" value="4gh" />
        <Picker.Item label="4gi" value="4gi" />

        <Picker.Item label="5ga" value="5ga" />
        <Picker.Item label="5gb" value="5gb" />
        <Picker.Item label="5gc" value="5gc" />
        <Picker.Item label="5gd" value="5gd" />
        <Picker.Item label="5ge" value="5ge" />
        <Picker.Item label="5gf" value="5gf" />
        <Picker.Item label="5gg" value="5gg" />
        <Picker.Item label="5gh" value="5gh" />
        <Picker.Item label="5gi" value="5gi" />

        <Picker.Item label="6ga" value="6ga" />
        <Picker.Item label="6gb" value="6gb" />
        <Picker.Item label="6gc" value="6gc" />
        <Picker.Item label="6gd" value="6gd" />
        <Picker.Item label="6ge" value="6ge" />
        <Picker.Item label="6gf" value="6gf" />
        <Picker.Item label="6gg" value="6gg" />
        <Picker.Item label="6gh" value="6gh" />
        <Picker.Item label="6gi" value="6gi" />
        <Picker.Item label="6gk" value="6gk" />

      </Picker>

    </View>
  );
}

function WebOrMobile() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  React.useEffect(() => {
    set(isEnabled)
    console.log(isEnabled)
  }, [isEnabled])

  return (
    <View style={{ backgroundColor: '#393e46', width: '82%', height: '12%', borderRadius: 15, marginTop: 20 }}>
      <Text style={{ margin: 20, marginTop: '8.75%', textAlign: 'left', fontSize: 20 }}>
        {isEnabled ? "Mobile Schulnetz" : "Standart Schulnetz"}
      </Text>
      <Switch
        trackColor={{ false: "#eeeeee", true: "#d1ffcc" }}
        thumbColor={isEnabled ? "#a1ff96" : "#ffffff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{
          position: 'absolute',
          top: '35%',
          marginLeft: '70%'
        }}
      />
    </View>
  )
}

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Klasse</Text>
      <SetClass />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Schulnetz</Text>
      <WebOrMobile />

      <View style={styles.version}>
        <Image style={{ height: 60, width: 60, borderRadius: 20 }} source={require("../assets/images/icon.png")} ></Image>
        <MonoText onLongPress={() => { SetStatusBarColor(); }} style={{ marginTop: 20, marginLeft: 5 }}>Version 1.1</MonoText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  version: {
    marginTop: '75%',
    flexDirection: 'row',
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
});
