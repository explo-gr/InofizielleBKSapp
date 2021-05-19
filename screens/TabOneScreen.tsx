import * as React from 'react';
import { StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { openBrowserAsync } from 'expo-web-browser';
import { ClassNumber } from './TabThreeScreen';

//Silvan Sucks

var weekday = new Date().getDay();

var date = new Date().getDate();
var month = new Date().getMonth();

function getWeekColor(num: Number) {
  if (Number(num) == Number(weekday)) {
    return { backgroundColor: "#ff6f3c" };
  } else {
    return { backgroundColor: "#393e46" };
  }
}

const GetGreeting = () => {
  var d = new Date();
  console.log(d.getHours());
  if (Number(d.getHours()) <= 8) {
    return (<><Text style={styles.title}>Guten Morgen <Feather name="moon" size={24} color="#426d9e" /></Text></>)
  } else if (Number(d.getHours()) <= 11) {
    return (<><Text style={styles.title}>Guten Vormittag <Feather name="sun" size={24} color="#f78040" /></Text></>)
  } else if (Number(d.getHours()) <= 12) {
    return (<><Text style={styles.title}>Guten Mittag <Feather name="sun" size={24} color="#f7d423" /></Text></>)
  } else if (Number(d.getHours()) <= 17) {
    return (<><Text style={styles.title}>Guten Nachmittag <Feather name="sun" size={24} color="#edaa0c" /></Text></>)
  } else {
    return (<><Text style={styles.title}>Guten Abend <Feather name="moon" size={24} color="#175e85" /> </Text></>)
  }
}

function getStundenplan() {
  Linking.openURL("https://www.gr.ch/DE/institutionen/verwaltung/ekud/ahb/bks/dokumentation/klassen/Documents/Klasse_" + ClassNumber + ".pdf")
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <GetGreeting />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.button}>
        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { openBrowserAsync("https://webmail.bks-campus.ch/") }}>
          <MaterialIcons name="mail" size={30} style={{ alignSelf: "center", color: "tomato", marginTop: 10 }} />
          <Text style={styles.boxtext}>Webmail </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { openBrowserAsync("https://cloud.bks-campus.ch/") }}>
          <MaterialIcons name="wb-cloudy" size={30} style={{ alignSelf: "center", color: "#99CCFF", marginTop: 10 }} />
          <Text style={styles.boxtext}>Cloud</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.button}>

        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { getMenuplan() }}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={30} style={{ alignSelf: "center", color: "whitesmoke", marginTop: 10 }} />
          <Text style={styles.boxtext}>Menüplan</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { getStundenplan() }}>
          <MaterialCommunityIcons name="calendar-text" size={30} style={{ alignSelf: "center", color: "orange", marginTop: 10 }} />
          <Text style={styles.boxtext}>Stundenplan</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.button}>

        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { openBrowserAsync("https://schulnetz.bks-campus.ch/") }}>
          <MaterialCommunityIcons name="school" size={30} style={{ alignSelf: "center", color: "#24e347", marginTop: 10 }} />
          <Text style={styles.boxtext}>Schulnetz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} delayPressIn={0} onPress={() => { openBrowserAsync("https://bks-campus.ch/") }}>
          <MaterialCommunityIcons name="earth" size={30} style={{ alignSelf: "center", color: "yellow", marginTop: 10 }} />
          <Text style={styles.boxtext}>BKS Website</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.button}>

        <TouchableOpacity style={[styles.weekday, getWeekColor(1)]} delayPressIn={0}>
          <Text style={styles.weekdaytext}>MO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(2)]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>DI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(3)]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>MI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(4)]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>DO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(5)]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>FR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(6), { borderWidth: 2, borderColor: "grey" }]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>SA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.weekday, getWeekColor(0), { borderWidth: 2, borderColor: "grey" }]} delayPressIn={0} >
          <Text style={styles.weekdaytext}>SO</Text>
        </TouchableOpacity>

      </View>

      <Text style={{ fontSize: 25 }} >{date + ". " + (Number(month) + 1) + ". " + new Date().getFullYear()}</Text>
    </View>


  );
}

function getMenuplan() {
  var d = new Date();
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil((((Number(d) - Number(yearStart)) / 86400000) + 1) / 7);
  var str_weekNo = weekNo.toString();
  if (weekNo < 10) str_weekNo = "0" + weekNo;
  var url = "https://www.gr.ch/DE/institutionen/verwaltung/ekud/ahb/wvb/Menueplaene/Documents/Menüplan Mensa Münzmühle Woche " + str_weekNo + ".pdf";
  Linking.openURL(url);
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
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  box: {
    height: 80,
    width: '40%',
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#393e46",
    justifyContent: 'space-between',
  },
  weekday: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#393e46",
    justifyContent: 'space-between',
  },
  boxdisabled: {
    backgroundColor: "#24282b"
  },
  icons: {
    alignSelf: "center",
    marginTop: 10,
  },
  boxtext: {
    textAlign: "center",
    marginBottom: 10,
    color: "whitesmoke"
  },
  weekdaytext: {
    textAlign: "center",
    color: "whitesmoke",
    paddingTop: 8
  },
});
