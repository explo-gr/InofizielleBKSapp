import { setStatusBarBackgroundColor } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

function SetStatusBarColor() {
  setTimeout(function(){ setStatusBarBackgroundColor("white", true); }, 1000);
  setTimeout(function(){ setStatusBarBackgroundColor("tomato", true); }, 2000);
  setTimeout(function(){ setStatusBarBackgroundColor("red", true); }, 3000);
  setTimeout(function(){ setStatusBarBackgroundColor("orange", true); }, 4000);
  setTimeout(function(){ setStatusBarBackgroundColor("yellow", true); }, 5000);
  setTimeout(function(){ setStatusBarBackgroundColor("lime", true); }, 6000);
  setTimeout(function(){ setStatusBarBackgroundColor("green", true); }, 7000);
  setTimeout(function(){ setStatusBarBackgroundColor("cyan", true); }, 8000);
  setTimeout(function(){ setStatusBarBackgroundColor("blue", true); }, 9000);
  setTimeout(function(){ setStatusBarBackgroundColor("purple", true); }, 10000);
  setTimeout(function(){ setStatusBarBackgroundColor("pink", true); }, 11000);
  setTimeout(function(){ setStatusBarBackgroundColor("black", true); }, 12000);
}

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hallo</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{ marginLeft: 6, marginRight: 6 }}>
        Hallo, ich bin eine dumme Person, die es nicht mal geschafft hat eine Todo-Liste zu programmierern. Ich heisse Gian-Marco btw.
      </Text>

      <Image style={{height: 120, width: 120, marginTop: 50, borderRadius: 20}} source={require("../assets/images/icon.png")} ></Image>

      <Text style={styles.developmentModeText} onLongPress={() => { SetStatusBarColor();}} >
        <MonoText>Version Beta 1</MonoText> 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  developmentModeText: {
    marginTop: 170,
    marginVertical: 7,
    borderRadius: 3,
    paddingHorizontal: 4,
    margin: 10,
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
