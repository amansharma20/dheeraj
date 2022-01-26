import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonStyles } from "../utils/layouts/CommonStyles";

const DetailsScreen = (props) => {
  const detail = props.route.params.details;
  return (
    <View style={CommonStyles.container}>
      <Text>{detail}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
