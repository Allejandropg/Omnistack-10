import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet,View, Text } from 'react-native';

// import { Container } from './styles';

export default function Profile({navigation}) {
  const githubUserName = navigation.getParam('github_username') ;
  return <WebView style={{flex:1}}  source={{uri: `https://github.com/${githubUserName}`}}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize:32,
    color:'#FFF'
  }
});
