/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";

export default class MainScreen extends Component<{}> {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name="ios-camera-outline"
        style={{
          paddingLeft: 10
        }}
      />
    ),
    title: "Instagram",
    headerRight: (
      <Icon
        name="ios-send-outline"
        style={{
          paddingRight: 10
        }}
      />
    )
  };

  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#ee4343",
      showLabel: false,
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
