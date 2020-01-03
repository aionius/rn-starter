import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onMore, onLess }) => {
   return (
      <View>
         <Text style={styles.textStyle}>{color}</Text>
         <Button title={`More ${color}`} onPress={() => onMore()} />
         <Button title={`Less ${color}`} onPress={() => onLess()} />
      </View>
   );
};

const styles = StyleSheet.create({
   textStyle: {
      textAlign: "center"
   }
});

export default ColorCounter;
