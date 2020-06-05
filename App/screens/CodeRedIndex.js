import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import busses from "../data/ReserveBus";
import activateCodeRed from "../data/ActivateCodeRed";

import { RowItem } from "../components/RowItem";
import  * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACyLJ7R_CD9rvbdfIGyL7aJ2r7eJZQ3Ng",
  authDomain: "codered-b3964.firebaseapp.com",
  databaseURL: "https://codered-b3964.firebaseio.com",
  projectId: "codered-b3964",
  storageBucket: "codered-b3964.appspot.com",
  messagingSenderId: "380251454024",
  appId: "1:380251454024:web:5b1b5af8019629c8dbf67d",
  measurementId: "G-V610X64SSC"
};

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
          color: "#49475B",
          width:50
        })
      }
    />
  </ScrollView>

);
