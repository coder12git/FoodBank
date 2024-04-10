import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, DefaultTheme } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { Linking } from 'react-native';


const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: "#B70F00",
  },
};

const Info = ({ route }) => {
  const { title, address, image, distance, time, description, deliveries, rating, map } = route.params;

  const renderStars = () => {
    return <Text>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Text>;
  };

  const handlePressYes = async () => {
    const url = map
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open this URL: " + url);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.distance}>{`${time} ⋅ ${distance} from you`}</Text>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 364, // Set the image height
  },
  detailsContainer: {
    marginTop: 32,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    color: 'grey',
    marginTop: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  },
  distance: {
    fontSize: 16,
    color: 'grey',
  },
  descTitle: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    fontSize: 16,
    color: 'gray',
    marginBottom: 32,
  },

  ratingContainer: {
    // Container for the whole component
    alignItems: 'center',

  },
  ratingBox: {
    // The box that looks like the uploaded image
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    height: 68,

  },
  ratingBlock: {
    alignItems: 'center', // Center the items horizontally
  },
  ratingNumber: {
    // The rating number style
    fontWeight: 'bold', // Assuming you want the rating number bold
    fontSize: 16, // You can adjust the size as needed
    color: 'gray',
  },
  ratingStars: {
    // The star ratings style
    color: 'gray',
    fontSize: 16, // Adjust the font size as needed
  },
  deliversLeft: {
    // Style for the 'delivers left' text
    marginLeft: 4,
    color: 'gray'
  },
  contactBlock: {
    alignItems: 'center', // Center the icon and text vertically and horizontally
  },
  contactIcon: {
    // Assuming you're using react-native-vector-icons or similar
    marginBottom: 4, // Space between the icon and the text
    color: 'gray',
  },
  contactText: {
    textDecorationLine: 'underline', // Underline the text
    textAlign: 'center', // Center the text if it wraps to a new line
    color: 'gray',
  },
  divider: {
    // Vertical divider style
    height: '100%',
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 8,
  },

  cartPrompt: {
    fontSize: 16,
    marginTop: 64,
    alignSelf: 'center',
    color: 'gray',
  },
  yesButton: {
    marginTop: 16,
    height: 50,
  },
  yesButtonContent: {
    height: '100%',
  },
  yesButtonText: {
    fontSize: 20,
    fontWeight: 'bold',

  },
});

export default Info;
