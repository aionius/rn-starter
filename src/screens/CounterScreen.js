import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
   const [counter, setCounter] = useState(0);

   return (
      <View>
         <Button
            title="Increase"
            onPress={() => {
               setCounter(counter + 1);
            }}
         />
         <Button
            title="Dicrease"
            onPress={() => {
               setCounter(counter - 1);
            }}
         />
         <Text style={styles.textStyle}>Current Count: {counter}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   textStyle: {
      textAlign: "center"
   }
});

export default CounterScreen;
