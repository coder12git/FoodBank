import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Heatmap } from 'react-native-maps';
import homelessData from '../assets/Homeless_Data.json'; 

const HeatMap = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const parsedPoints = homelessData.map(item => ({
      latitude: item.Latitude,
      longitude: item.Longitude,
      weight: item.Count,
    }));
    setPoints(parsedPoints);
  }, []);



  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 22.9868, // Latitude of India
          longitude: 87.8550, // Longitude of India
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Heatmap points={points} 
        radius={50} 
        opacity={0.8}
        gradient={{
          colors: ["green", "yellow", "red"], 
          startPoints: [0.01, 0.25, 0.50], 
          colorMapSize: 256 
        }}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
});

export default HeatMap;
