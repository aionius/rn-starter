import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
   // console.log(navigation);
   return (
      <View>
         <Text style={styles.text}>Home Page</Text>
         <Button
            onPress={() => navigation.navigate("Components")}
            title="Go to Components Demo"
         />
         <Button
            onPress={() => navigation.navigate("List")}
            title="Go to List Demo"
         />
         <Button
            onPress={() => navigation.navigate("Image")}
            title="Go to Image Demo"
         />
         <Button
            onPress={() => navigation.navigate("Counter")}
            title="Go to Counter Screen"
         />
         <Button
            onPress={() => navigation.navigate("Color")}
            title="Go to Color Screen"
         />
         <Button
            onPress={() => navigation.navigate("Square")}
            title="Go to Square Screen"
         />
         {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
            <Text style={styles.toText}>Go to List Demo</Text>
         </TouchableOpacity> */}
      </View>
   );
};

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      textAlign: "center"
   },
   toText: {
      textAlign: "center",
      fontSize: 15
   }
});

export default HomeScreen;
