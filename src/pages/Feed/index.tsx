import React, { useEffect } from "react";
import { StatusBar, FlatList } from "react-native";
import {
  createStackNavigator,
  NavigationScreenComponent
} from "react-navigation";
import SplashScreen from "react-native-splash-screen";

import { colors } from "../../styles";
import FabNewTweet from "../../components/FabNewTweet";
import { Container } from "./styles";
import NewTweet from "../NewTweet";
import Tweet from "../../components/Tweet";

import { data } from "./mock";

const Feed: NavigationScreenComponent = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white.string()}
      />
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }) => <Tweet data={item} />}
          keyExtractor={({ _id }) => _id}
        />
        <FabNewTweet onPress={() => navigation.navigate("NewTweet")} />
      </Container>
    </>
  );
};

Feed.navigationOptions = {
  title: "Início"
};

const FeedNavigator = createStackNavigator(
  {
    Feed: { screen: Feed },
    NewTweet: { screen: NewTweet }
  },
  {
    initialRouteName: "Feed"
  }
);

export default FeedNavigator;
