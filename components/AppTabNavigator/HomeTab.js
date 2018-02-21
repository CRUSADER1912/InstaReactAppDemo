/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content } from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends Component<{}> {
  static navigationOption = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row"
  }
});

const abc: number = 10;
