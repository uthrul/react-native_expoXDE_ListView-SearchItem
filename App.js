import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

import Header from "./src/components/Header";
import RestaurantRow from "./src/components/ReastauranRow";

// Dummy data
const restaurants = [
  { name: "React Cafe", address: "123 Anywhere St" },
  { name: "Rails Restaurant", address: "799 Main St" },
  { name: "Expo Place", address: "550 Maple Rd" },
  { name: "React native Diner", address: "4101 College St" },
  { name: "Ruby Central", address: "706 Harper St" },
  { name: "Java uilder", address: "4869 Hamilton Dr" },
  { name: "Java Script Express", address: "1049 Bird St" },
  { name: "Go lang Mie", address: "1885 Tea Berry Lane" },
  { name: "Dart candy", address: "1082 Stuart St" },
  { name: "PHP Warteg", address: "1848 Fairfax Dr" },
  { name: "SLQ Japan Food", address: "747 Kelly Dr" },
  { name: "Angular Top SeaFood", address: "1816 Olive St" },
  { name: "AWS Shu Si", address: "3256 Spirit Dr" },
  { name: "Firebase Sandwich Shop", address: "2587 Cherry Ridge Dr" },
  { name: "Bootstrap Burgers", address: "4152 Berkley St" },
  { name: "HTML Diner", address: "4571 Central Ave" },
  { name: "CSS Express", address: "65 Queens Lane" },
  { name: "Android Central", address: "3228 Oakwood Circle" },
  { name: "IOS Garden", address: "2935 Victoria Ct" },
  { name: "Xamarin ", address: "2454 Preston St" }
];

export default class App extends React.Component {
  state = {
    search: null
    //restaurants:[]
  };

  // componentDidMount(){
  //   fetch('https://localhost:3000/restaurants')
  //   .then(response => response.json())
  //   .then(result => this.setState({ restaurants: result }))
  // }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />

        <FlatList
          data={restaurants.filter(place => {
            return (
              !this.state.search ||
              place.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantRow place={item} index={index} />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});
