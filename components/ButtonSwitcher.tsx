//import React in our code
import React, { useState } from 'react';
//import all the components we are going to use
import { Switch, View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

interface ToggleToolIn {
  onSwitchOn: JSX.Element,
  onSwitchOff: JSX.Element,
}

const ToggleTool: React.FC<ToggleToolIn> = ({ onSwitchOn, onSwitchOff }) => {
  const [switchValue, setSwitchValue] = useState(false);
  
  const toggleSwitch = (value: any) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  const SwitchOnElement = () => {
    return (
      <View>
        {onSwitchOn}
      </View>
    )
  }

    const SwitchOffElement = () => {
    return (
      <View>
        {onSwitchOff}
      </View>
    )
  }

  if (switchValue) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/*To show Switch state*/}
          <SwitchOffElement />
          {/*Setting the default value of state*/}
          {/*On change of switch onValueChange will be triggered*/}
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/*To show Switch state*/}
          <SwitchOnElement />
          {/*Setting the default value of state*/}
          {/*On change of switch onValueChange will be triggered*/}
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const TestObj = () => {
  return (
    <View style={styles.container}>
      <ToggleTool onSwitchOn={<Text> Hallo i bims </Text>} onSwitchOff={<Text>freddi </Text>} />
      {/* <ToggleTool onSwitchOn={<Button onPress={() => {alert("Hello World") }} title={"Clicke Mich"} />} onSwitchOff={<Text> Und spiela Roublocks </Text>} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestObj;