import React, { Component } from 'react';
import { View, Text } from "react-native";

import AnimatedListView from './components/AnimatedListView';

const data = [
  { title: 'TITLE1', description: 'DESCRIPTION1' },
  { title: 'TITLE2', description: 'DESCRIPTION2' },
  { title: 'TITLE3', description: 'DESCRIPTION3' },
  { title: 'TITLE4', description: 'DESCRIPTION4' },
  { title: 'TITLE5', description: 'DESCRIPTION5' },
  { title: 'TITLE6', description: 'DESCRIPTION6' },

]

export default class App extends Component {
  render() {
    var color = '#686B63'
    const listViews = data.map((item, i) => {
      if (i % 2 == 1)
        color = '#686B63'
      else
        color = '#DDE1D6'
      return <View style={{
        width: 250,
        height: 50,
        backgroundColor: color,
        alignItems: 'center',
        borderRadius: 12,

      }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{item.title}</Text>
      </View>

    })
    return (
      <AnimatedListView
        renderItem={listViews}
      ></AnimatedListView>
    );
  }



}


