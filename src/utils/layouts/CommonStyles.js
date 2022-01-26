/* eslint-disable prettier/prettier */
import { StatusBar, StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  appShadow: {
    shadowColor: "#333333",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 4,
    },
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: StatusBar.currentHeight || 0,
  },
});
