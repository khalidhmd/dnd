import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/home";
import ServicesScreen from "../screens/services";
import SellAndBuyScreen from "../screens/sellandbuy";
import GalleryScreen from "../screens/gallery";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "الرئيسية",
      headerStyle: {
        backgroundColor: "orange",
        fontFamily: "NABILMENASY1",
      },
      headerTitleStyle: { fontSize: 40, fontFamily: "NABILMENASY1" },
    },
  },
  Services: {
    screen: ServicesScreen,
  },
  SellAndBuy: {
    screen: SellAndBuyScreen,
  },
  Gallery: {
    screen: GalleryScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
