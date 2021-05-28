import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Animated, AppState, TouchableOpacity } from "react-native";

import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';
import { Feather } from '@expo/vector-icons';
import { TodoLength } from '../screens/TabFourScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function useFontColorScheme() {
  if (useColorScheme() == "dark") {
    return "white"
  } else {
    return "black"
  }
}

function useInterval(callback: (pointerInside?: String) => void, delay: number) {
  const savedCallback:any = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function getTodoLength() {
  return TodoLength
}

function useFadeIn() {
  const opacityRef = React.useRef<Animated.Value | undefined>(undefined);
  if (opacityRef.current === undefined)
    opacityRef.current = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(opacityRef.current, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return opacityRef.current;
}

export default function BottomTabNavigator() {
  const opacity = useFadeIn();
  const [ TodoLength, updateTodoLength ] = React.useState(getTodoLength)

  useInterval(() => {
    updateTodoLength(getTodoLength);
  }, 100)

  return (
    <Animated.View style={{ opacity, height: '100%', width: '100%' }}>
    <BottomTab.Navigator
      lazy={false}
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: useFontColorScheme(),
        activeBackgroundColor: useColorScheme(),
        inactiveBackgroundColor: useColorScheme(),
        inactiveTintColor: "grey",
        keyboardHidesTabBar: true
      }}
    >
      
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialIcons size={24} name="class" color={"tomato"} />
            } else {
              return <MaterialIcons size={24} name="class" color={"#fc806a"} />
            }
          },
          title: "Start",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
          //tabBarBadge: 
        }}

      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="ios-calculator" size={25} color={"#4287f5"} />
            } else {
              return <Ionicons name="ios-calculator" size={25} color={"#6da2f7"} />
            }
          },
          title: "Notenrechner",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />
        }}
      />

      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <FontAwesome5 size={24} name="file-alt" color={"#ffda0a"} />
            } else {
              return <FontAwesome5 size={24} name="file-alt" color={"#f7e57c"} />
            }
          },
          title: "Todo-Liste",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
          tabBarVisible: true,
          tabBarBadge: TodoLength
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Feather name="settings" size={24} color={useFontColorScheme()} />
            }
            else {
              if (useColorScheme() == 'dark') {
                return <Feather name="settings" size={24} color={"#d6d6d6"}/>
            } else {
              return <Feather name="settings" size={24} color={"#545454"}/>
            }
            }


          },
          title: "Einstellungen",
          tabBarButton: props => <TouchableOpacity {...props} delayPressIn={0} activeOpacity={.7} />,
          tabBarVisible: true,

        }}
      />

    </BottomTab.Navigator>
    </Animated.View>
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

