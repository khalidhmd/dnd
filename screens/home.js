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
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>جاليري</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>أخبار</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>
          فعاليات ومعارض
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>تسوق</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>
          بيع واشتري
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>خدمات</Text>
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
  },
  touchDumb: {
    padding: 7,
    backgroundColor: "orange",
    margin: 5,
    minWidth: 300,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "NABILMENASY1",
  },
});
