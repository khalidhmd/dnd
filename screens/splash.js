import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default Home = () => {
  const [fontDumb, setFontDumb] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>
          تسجيل الدخول
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFontDumb(prevState => !prevState)}>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>اللغة</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  touch: {
    padding: 7,
    backgroundColor: "orange",
    margin: 5,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 5,
  },
  touchDumb: {
    padding: 7,
    backgroundColor: "orange",
    margin: 5,
    minWidth: 300,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "NABILMENASY1",
    borderRadius: 5,
  },
});
