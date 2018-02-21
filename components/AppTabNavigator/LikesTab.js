/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LikesTab extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the LikesTab component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
