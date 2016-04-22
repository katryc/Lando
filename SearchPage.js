'use strict'
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;
var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    borderColor: 'red'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: '#eeff41',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#ea80fc',
  borderColor: '#ea80fc',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#aa00ff',
  borderRadius: 8,
  color: '#48BBEC'
},
  image: {
   width: 217,
   height: 138,
   borderWidth: 1,
   borderColor: '#ea80fc',
   borderRadius: 8
}
});
class SearchPage extends Component {
  constructor(props) {
super(props);
this.state = {
 searchString: 'london'
};
}
onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Find your perfect home!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>

      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          placeholder='Search via name or postcode'/>
        <TouchableHighlight style={styles.button}
            underlayColor='#ea80fc'>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.button}
          underlayColor='#ea80fc'>
        <Text style={styles.buttonText}>Location</Text>
      </TouchableHighlight>
      <Image source={require('./Resources/house.png')} style={styles.image}/>
      </View>
    );
  }
}
module.exports = SearchPage;