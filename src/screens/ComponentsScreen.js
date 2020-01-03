import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
   const greetings = "Gilbert";
   return (
      <View>
         <Text style={styles.textStyle}>
            Getting started with React Native!
         </Text>
         <Text style={styles.subHeaderStyle}>My name is {greetings} </Text>
      </View>
   );
};

const styles = StyleSheet.create({
   textStyle: {
      fontSize: 30,
      textAlign: "center"
   },
   subHeaderStyle: {
      fontSize: 20,
      textAlign: "center"
   }
});

export default ComponentsScreen;
