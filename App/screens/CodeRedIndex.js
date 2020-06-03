import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import busses from "../data/ReserveBus";
import activateCodeRed from "../data/ActivateCodeRed";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Reserve Bus"
      color="#799496"
      onPress={() =>
        navigation.navigate("CodeRed", {
          title: "Reserve Bus",
          questions: busses,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Activate CodeRed"
      color="#49475B"
      onPress={() =>
        navigation.navigate("CodeRed", {
          title: "Activate CodeRed",
          questions: activateCodeRed,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
