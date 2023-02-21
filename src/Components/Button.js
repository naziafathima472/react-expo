import { StyleSheet, Text, View,Pressable } from 'react-native'  //rnfs
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Button({label,theme,onPress}) {
   if(theme=='primary'){
      return(
         <View style={[styles.buttonContainer,{
            borderWidth:8,
            borderColor:'#8260a2',
            borderRadius:18,
         }]}>
            <Pressable style={[styles.button,{backgroundColor:"#9350ac"}]}  onPress={onPress}>
               <FontAwesome style={styles.buttonIcon} name="picture-o" size={18}  color="#25292e"/>
            </Pressable>
         </View>
      )
   }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
buttonContainer: {
    width: 320,
    height: 38,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
   borderRadius: 20,
   width: '100%',
   height: '100%',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row',
 },
 buttonIcon: {
   paddingRight: 8,
   color:'#fff',
 },
 buttonLabel: {
   color: '#fff',
   fontSize: 16,
 },
})

