import React, { useContext } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { FontContext, UserContext } from "../contexts";

export default Gallery = ({ navigation }) => {
  const { fontDumb, setFontDumb } = useContext(FontContext);
  const videoList = [
    {
      video: "https://www.youtube.com/embed/E5_NFconakU",
      text: "فرج لسه مسيطر على فرج",
      key: "1",
    },
    {
      video: "https://www.youtube.com/embed/E5_NFconakU",
      text:
        "ساعة من الضحك المتواصل مع الكبير العصبي و جوني الممثل 😂الكبير اوي مقاطع متنوعة",
      key: "2",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={videoList}
        renderItem={({ item }) => (
          <View>
            <WebView
              source={{
                uri: item.video,
              }}
              style={{
                minWidth: Math.round(Dimensions.get("window").width),
                height: 300,
              }}
            />
            <Text style={fontDumb ? styles.titlehDumb : styles.title}>
              {item.text}
            </Text>
          </View>
        )}
      />
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
  title: {
    padding: 7,
    width: Math.round(Dimensions.get("window").width),
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 5,
  },
  titleDumb: {
    padding: 7,
    width: Math.round(Dimensions.get("window").width),
    textAlign: "center",
    fontFamily: "NABILMENASY1",
    fontSize: 20,
    borderRadius: 5,
  },
});
