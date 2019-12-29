import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontContext, UserContext } from "../contexts";

export default Home = ({ navigation }) => {
  // const [fontDumb, setFontDumb] = useState(false);
  const { fontDumb, setFontDumb } = useContext(FontContext);
  console.log("home" + fontDumb);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>جاليري</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>
          فعاليات وأخبار
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>تسوق</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Services")}>
        <Text style={fontDumb ? styles.touchDumb : styles.touch}>خدمات</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFontDumb()}>
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
    borderRadius: 5,
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
