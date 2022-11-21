import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Footer from '../components/Footer';

const NewScreen = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainFace}>
          <Image
            style={styles.circleIcon}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/001/869/087/non_2x/black-female-doctor-with-stethoscope-flat-style-free-vector.jpg',
            }}
          />
          <View style={styles.createInfoText}>
            <Text style={styles.createInfoTextSmall}>
              Create a Walgreens Find Care® Health profile to unlock NEW health
              benefits
            </Text>
          </View>
          <View style={styles.groupOneTextView}>
            <FontAwesome5
              name={'hand-holding-medical'}
              size={25}
              color="white"
            />
            <Text style={styles.groupOneText}>
              Get personalized care for 100+ conditions
            </Text>
            <FontAwesome name={'calendar'} size={25} color="white" />
            <Text style={styles.groupOneText}>Manage appointments</Text>
          </View>

          <TouchableOpacity onPress={() => alert('create profile!')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => alert('learn more!')}>
          <Text style={styles.bottomText}>Learn More</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "Dimensions.get('window').height",
    width: '100%',
  },
  mainFace: {
    backgroundColor: 'rgba(49,37,126,1)',
    width: 394,
    height: 670,
    borderRadius: 22,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 25,
    marginTop: 25,
  },
  circleIcon: {
    backgroundColor: 'rgba(217,217,217,1)',
    width: 120,
    height: 126,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 38,
  },
  createInfoText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 295,
    height: 175,
    alignSelf: 'center',
    marginTop: 49,
  },
  createInfoTextSmall: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: -0.34,
    color: 'rgba(255, 255, 255, 1)',
    width: 296,
    height: 176,
  },
  groupOneTextView: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    left: 20,
    bottom: 20,
  },

  groupOneText: {
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: -0.2,
    color: 'rgba(255, 255, 255, 1)',
    margin: 5,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: '20%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingTop: 11,
    paddingBottom: 0,
    paddingLeft: 44,
    paddingRight: 44,
    borderRadius: 35,
    backgroundColor: 'rgba(173,221,241,1)',
    width: 337,
    height: 57,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 31,
    letterSpacing: -0.35,
    color: 'rgba(0,0,0,1)',
    justifyContent: 'center',
    width: 91,
    height: 36,
    alignSelf: 'center',
  },
  bottomText: {
    fontWeight: 'bold',
    color: 'rgba(173,221,241,1)',
    alignSelf: 'center',
    bottom: 60,
  },
});

export default NewScreen;
