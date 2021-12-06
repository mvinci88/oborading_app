import React from 'react';
import {
  Text, TouchableHighlight, View
} from 'react-native';

const CustomButton = props => {

  function onPressFunction(onClick, argument){
    onClick(argument);
  }

  function handleClick(){
    const argument = props.argument;
    onPressFunction(props.onClick, argument);
  }

  return (
    <View style={{flex: props.width}}>
            <TouchableHighlight style={{
              zIndex : 1,
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 10,
              height:40,
              marginLeft: 3,
              backgroundColor: props.color
            }} 
            onPress={() => handleClick()}>
            <Text style={{
                color:'#000',
                fontSize: 15,
                textAlign: 'center'
              }}>{props.text}</Text>
            </TouchableHighlight>
    </View>
);
}



export default CustomButton;
