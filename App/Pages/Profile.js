import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const Profile = ({ user }) => {
  // console.log("User Details: ", user);
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [23, 0, 19, 5, 36, 0, 50]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require('../assets/banner.png')}
        style={styles.banner}
      />

      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageShadow}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>


      <Text style={styles.name}>{user.email}</Text>
      <Text style={styles.description}>Hi there, I’m a student!</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.title}>Delivery History</Text>
        <LineChart
          data={data}
          width={0.9 * Dimensions.get("window").width} // from react-native
          height={240}
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#B70F00",
            backgroundGradientTo: "#810A00",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#ffffff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingTop: 24, // Increase padding at the top of the chart

          }}
        />

      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
  },
  banner: {
    width: '100%',
    height: 206,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
  },
  profileImageShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    marginTop: 16,
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    width: '90%',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: -16,
  },
  description: {
    fontSize: 16,
    color: 'grey',
  },
  chartContainer: {
    marginTop: 32,

  },
});

export default Profile;
