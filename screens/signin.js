import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.touch}>تسجيل الدخول</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>جاليري</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>أخبار</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>فعاليات ومعارض</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>تسوق</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>بيع واشتري</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>خدمات</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.touch}>فونت</Text>
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
    padding: 10,
    backgroundColor: "orange",
    margin: 10,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
