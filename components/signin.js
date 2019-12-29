import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import HomeStack from "../routes/homeStack";
import { FontContext, UserContext } from "../contexts";

export default SignIn = () => {
  // const [fontDumb, setFontDumb] = useState(false);
  const { fontDumb, setFontDumb } = useContext(FontContext);
  const [textname, setTextName] = useState("");
  const [textPass, setTextPass] = useState("");
  // const [authenticated, setAuthenticated] = useState(false);
  const { authenticated, setAuthenticated } = useContext(UserContext);

  if (!authenticated) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={{ marginBottom: 15 }}>
            <Text style={fontDumb ? styles.titleDumb : styles.title}>
              اسم المستخدم
            </Text>
            <TextInput
              style={styles.text}
              onChangeText={text => setTextName(text)}
              value={textname}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={fontDumb ? styles.titleDumb : styles.title}>
              كلمة السر
            </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.text}
              onChangeText={text => setTextPass(text)}
              value={textPass}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (textPass.length < 3 || textPass.length < 3) {
                Alert.alert("خطأ", "خطأ في اسم المستخدم او كلمة السر", [
                  {
                    text: "موافق",
                    onPress: () => {
                      return;
                    },
                  },
                ]);
              } else setAuthenticated(textPass === textname);
            }}
          >
            <Text style={fontDumb ? styles.touchDumb : styles.touch}>
              تسجيل الدخول
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFontDumb()}>
            <Text style={fontDumb ? styles.touchDumb : styles.touch}>
              اللغة
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return <HomeStack />;
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
  text: {
    padding: 7,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    padding: 7,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 5,
  },
  titleDumb: {
    padding: 7,
    width: 200,
    textAlign: "center",
    fontFamily: "NABILMENASY1",
    fontSize: 20,
    borderRadius: 5,
  },
});
