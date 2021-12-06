import React, {useEffect} from 'react';
import {
   StyleSheet, Text, TextInput, TouchableHighlight, View
} from 'react-native';

import CustomCard from './molecules/card';
import { useSelector,useDispatch } from 'react-redux';
import { animalChange, cityChange, fetchStart, numberChange, displayChange} from '../store/actions';
import WeatherCard from './molecules/weatherCard';
import { reduce } from 'rxjs';

const ScreenPage = () => {
  const dataButton1 = [{buttonText: "-", buttonColor: "red", buttonArgument: "reduce"}, 
  {buttonText: "Reset", buttonColor: "grey", buttonArgument: "reset"}, 
  {buttonText: "+", buttonColor: "#33CD32", buttonArgument: "add"} ];

  const dataButton2 = [{buttonText: "cane", buttonColor: "red", buttonArgument: "cane"}, 
  {buttonText: "gatto", buttonColor: "grey", buttonArgument: "gatto"}, 
  {buttonText: "topo", buttonColor: "#33CD32", buttonArgument: "topo"} ];

  const counter = useSelector(state => state.rootReducer.counter);
  const number = useSelector(state => state.rootReducer.number);
  const animal = useSelector(state => state.rootReducer.animal);
  const error = useSelector(state => state.rootReducer.error);
  const currentCity = useSelector(state => state.rootReducer.currentCity);
  const weatherInfo = useSelector(state => state.rootReducer.weatherInfo);
  const displayed = useSelector(state => state.rootReducer.displayed);
  const dispatch = useDispatch();

  const goFetchCity = () => {
    dispatch(fetchStart(currentCity))
  } 

  useEffect(() => {
  }, [weatherInfo, currentCity, dispatch, error]);
  

  function changeNumberValue(val){
    dispatch(numberChange(val))
  }

  function changeAnimalValue(val){
    dispatch(animalChange(val))
  }

  return (
      <View style={styles.container}>
          <Text style={styles.titleText}>card Aperte: {counter}</Text>
          {displayed.indexOf('numberDiv') > -1 ? 
            <CustomCard
              height={0.33}
              text={number}
              dataButton={dataButton1}
              onClick={changeNumberValue}
            />
          
          : null}
        <TouchableHighlight onPress={() => dispatch(displayChange("numberDiv"))}>
          <Text style={styles.btnText}>{displayed.indexOf('numberDiv') > -1 ? "rimuovi seconda card" : "mostra prima card"}</Text>
        </TouchableHighlight>


        {displayed.indexOf('animalDiv') > -1 ? 
          <CustomCard
          height={0.33}
          text={animal ? animal : "cane"}
          dataButton={dataButton2}
          onClick={changeAnimalValue}
          />
          
        : null}
        <TouchableHighlight onPress={() => dispatch(displayChange("animalDiv"))}>
            <Text style={styles.btnText}>{displayed.indexOf('animalDiv') > -1 ? "rimuovi seconda card" : "mostra seconda card"}</Text>
        </TouchableHighlight>

        <View style={{flexDirection:'row', flex: 0.10, marginTop: 10, borderColor: "black", borderWidth:1}}>
          <View style={{ flex:0.90 }}>
            <TextInput 
              placeholder="aggiungi una città"
              style={{ color:'#01175F', justifyContent: 'flex-start' }}
              onChangeText={text => dispatch(cityChange(text)) }
            />
          </View>

          <View style={{ flex:0.10 }}>
            <TouchableHighlight 
              style={{ justifyContent: 'flex-end', borderColor:"#01175F", color:"#01175F" }}
              marginTop={5} 
              onPress={goFetchCity}
              variant="outline" 
              >
              <Text style={{color:"#01175F", marginTop: 12}} > Go > </Text>
            </TouchableHighlight>
          </View>

        </View>
        {weatherInfo ? 
          <WeatherCard weatherInfo={weatherInfo} height={0.23}/>  : null
        }
        {error ? 
          <View style={{backgroundColor:"red", width:"100%"}}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:22, alignSelf:'center'}}>{error}</Text>
          </View> : null 
        }

      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    overflow:'scroll',
    flex:1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  titleText: {
    fontSize: 20
  }
  ,
  btnText: {
    fontSize: 20,
    textAlign:'center',
    textDecorationLine: 'underline',
    marginTop:15
  }
});

export default ScreenPage;
