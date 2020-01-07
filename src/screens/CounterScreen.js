import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
   switch (action.type) {
      case "increase":
         return { ...state, counter: state.counter + action.payload };
      case "decrease":
         return { ...state, counter: state.counter - action.payload };
      default:
         return state;
   }
};

const CounterScreen = () => {
   // const [counter, setCounter] = useState(0);

   const [state, dispatch] = useReducer(reducer, { counter: 0 });

   return (
      <View>
         <Button
            title="Increase"
            onPress={() => {
               dispatch({ type: "increase", payload: 1 });
            }}
         />
         <Button
            title="Dicrease"
            onPress={() => {
               dispatch({ type: "decrease", payload: 1 });
            }}
         />
         <Text style={styles.textStyle}>Current Count: {state.counter}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   textStyle: {
      textAlign: "center"
   }
});

export default CounterScreen;
