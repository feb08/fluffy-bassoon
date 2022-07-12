import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <View style={styles.listGoals}><Text style={styles.listText}>{props.text}</Text></View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    listGoals: {
        borderRadius: 8,
        padding: 8,
        margin: 8,
        backgroundColor: 'purple',
        paddingHorizontal: 20
      },
      listText: {
        color: 'white',
      },
})