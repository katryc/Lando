'use strict';
var React = require('react-native');
var styles = React.StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: '#e040fb',
    fontSize: 30,
    margin: 100
  },
  container: {
    flex: 1
  }
});
class Welcome extends React.Component {
  render() {
    return <React.Text style={styles.text}>Welcome to Lando</React.Text>;
  }
}
React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Find Your Home',
          component: Welcome,
        }}/>
    );
  }
}
