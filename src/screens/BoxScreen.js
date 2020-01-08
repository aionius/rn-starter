import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
   return (
      <View style={styles.viewStyle}>
         <View style={styles.viewOneStyle} />
         <View style={styles.viewTwoStyle} />
         <View style={styles.viewThreeStyle} />
      </View>
   );
};

const styles = StyleSheet.create({
   viewStyle: {
      borderWidth: 3,
      borderColor: "black",
      height: 200,
      flexDirection: "row",
      justifyContent: "space-between"
   },
   viewOneStyle: {
      height: 50,
      width: 50,
      backgroundColor: "red"
   },
   viewTwoStyle: {
      height: 50,
      width: 50,
      backgroundColor: "green",
      marginTop: 50
   },
   viewThreeStyle: {
      height: 50,
      width: 50,
      backgroundColor: "purple"
   },

   textOneStyle: {
      borderWidth: 3,
      borderColor: "red"
   },
   textTwoStyle: {
      borderWidth: 3,
      borderColor: "red",
      fontSize: 10,
      ...StyleSheet.absoluteFillObject
   },
   textThreeStyle: {
      borderWidth: 3,
      borderColor: "red"
   }
});

export default BoxScreen;
