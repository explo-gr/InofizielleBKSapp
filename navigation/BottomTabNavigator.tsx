import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { TouchableOpacity } from "react-native";

import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';
import { Feather } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const tabBarOptions = {
  activeTintColor: "tomato",
  activeBackgroundColor: "white",
  inactiveBackgroundColor: "white",
  inactiveTintColor: "grey"
}

export default function BottomTabNavigator(this: any) {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={tabBarOptions}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="class" color={color} />,
          title: "Start",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
        }}

      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-calculator" size={25} color={color} />,
          title: "Notenrechner",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
        }}
      />

      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="file-alt" color={color} />,
          title: "Todo-Liste",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
          tabBarVisible: true
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
          title: "Einstellungen",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
          tabBarVisible: true
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: 'Start',
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: "Note Ausrechnen",
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{
          headerTitle: 'Einstellungen',
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{
          headerTitle: 'Todo',
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }
        }}
      />
    </TabFourStack.Navigator>
  );
}

