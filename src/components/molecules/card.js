import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

import CustomButton from '../atoms/button';

const tFlex = 0.95;

const CustomCard =  props => {
  const customWidth = tFlex / props.dataButton.length; 
  return (
          <View style={{
            flex: props.height,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 35,
            marginTop: 33}}>
            <Text style={styles.numText}>{props.text}</Text>
            <View style={styles.buttonContainer}>
              {props.dataButton.map((item, key) => { 
                var argument = item.buttonArgument;

                return <CustomButton 
                          text={item.buttonText} 
                          color={item.buttonColor} 
                          key={key} 
                          width={customWidth}
                          onClick={props.onClick}
                          argument={argument}
                          />
              })}
              
            </View>
          </View>
  );
};

const styles = StyleSheet.create({
  numText: {
    marginTop: 35,
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center'
  },
  buttonContainer: {
    marginLeft:10,
    flex:tFlex,
    flexDirection: 'row',
    height:25
  }
});

export default CustomCard;
