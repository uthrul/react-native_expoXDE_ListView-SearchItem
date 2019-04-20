import React, { Component } from "react";
import { Text } from "react-native";

import HeaderStyle from "../styles/HeaderStyles";

export default class Header extends Component {
  render() {
    return <Text style={HeaderStyle.iOSHeader}>Restauran Review</Text>;
  }
}
