import React, { Component } from "react";
import { 
    View, Text, StyleSheet, Button ,
    TouchableOpacity, TouchableHighlight, TouchableNativeFeedback
} from "react-native";

export default class RestaurantRow extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { place, index } = this.props;
    return (
      <View key={place.name} style={[
          ,
          { backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }
        ]} >
        <View style={styles.row}>
            <View style={styles.edges}>
                <Text style={styles.edges}>{index + 1}</Text>
            </View>
        

            <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.addressText}>{place.address}</Text>
            </View>

            <View style={styles.edges}>
            <TouchableHighlight 
                onPress={this.infoPressed}
                style={styles.button}
                underlayColor='#7398DC'
            >
                        <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
            </View>
        </View>
        {
            this.state.showInfo && 
                <View style={styles.info}>
                <Text>Restaurant Info</Text>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flexDirection: "column",
    flex: 8
  },
  addressText: {
    fontSize: 15,
    color: "grey"
  },
  button:{
      borderWidth: 1,
      borderColor: '#912B04',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 3,
      backgroundColor: '#fff',
      
  },
  buttonText:{
      color: '#912B04',
      fontSize: 14,
  },
  info:{
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});
