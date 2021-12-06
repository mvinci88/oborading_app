import React from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const bgColors = {
  Rain : ["#51596F", "#6D788C", "#8C9BAC"],
  Clear : ["#5A82EA", "#6495ED", "#B7FBFF"],
  Snow : ["#DADADA", "#E6E6E6", "#F1EDF2"],
  Clouds: ["#0B2465", "#2A5496", "#4882C5"],
  Drizzle : ["#4F4F4B", "#B5B5AC", "#DBDBD0"],
  Thunderstorm : ["#4F4F4B", "#B5B5AC", "#DBDBD0"],
  Mist : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Smoke : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Haze : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Dust : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Fog : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Sand : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Dust : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Ash : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Squall : ["#bec3c6", "#CBD0D4", "#F1EDF2"],
  Tornado : ["#bec3c6", "#CBD0D4", "#FFFFFF"]
}

export const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const WeatherCard = props => {
  const item = props.weatherInfo;
  console.log("questo è item",item)
  if(Object.keys(item).length === 0) { return null; }
      if(typeof item.weather[0] === 'object' && item && item.weather[0] != undefined && item != null){
        let unix_timestamp = item.dt
        var date = new Date(unix_timestamp * 1000);
        console.log(item)
        var data = days[date.getDay()] + " " + date.getDate() + ",\n" + months[date.getMonth()];

        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substring(0, minutes.length - 1);

        var colors = bgColors[item.weather[0].main];
        var cityName = item.name.replace("Provincia di ","");
        cityName = cityName.replace("Province of ","");
        cityName = cityName.replace("City of ","");
        var coord = [item.coord.lon, item.coord.lat]

        return (
          <View style={{flex:props.height, marginTop: 10}}> 
           <LinearGradient colors={colors} style={styles.weatherComp}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
              <Text style={{marginLeft:"2%",fontSize:22, fontWeight:"bold", color:"#FFFFFF"}}>{cityName}</Text>

              <View style={{flex: 0.35, marginLeft:"-10%", marginTop:"15%"}} >
                  <Text style={{color:"#FFFFFF", fontSize:12}}>{data}</Text>
                  <Text style={{color:"#FFFFFF", fontSize:11, marginTop:2}}>{formattedTime}</Text>
                </View>

                <View style={{flex: 0.35, marginLeft:"-5%", marginTop:"5%" }}>
                  <Image
                    source={{
                      uri: "https://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png",
                    }}
                    style={{width: 100, height: 100}}
                  />  
                </View>
            
                <View style={{flex: 0.30,  justifyContent: 'center',  alignItems: 'center', marginTop:'0%'}}>
                  <Text style={{fontSize:41, color:"#FFFFFF", fontWeight:"bold", }}>{item.main.temp.toFixed(0)}°</Text>
                </View>

            </LinearGradient>
          </View>
        )
      } else { return null; }
}


const styles = StyleSheet.create({
  weatherComp:{
    flex:1,
    flexDirection: 'row',
    fontFamily: 'AntDesign',
    marginLeft:"5%",
    marginTop:"0%",
    height:"100%",
    width:"90%",
    elevation: 3,
    shadowColor: "grey", shadowOpacity: 2, shadowRadius: 30, shadowOffset: { width: 2, height: 2 },
    borderRadius: 18
  }
})

export default WeatherCard;
