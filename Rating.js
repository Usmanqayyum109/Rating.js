import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';

import {Colors} from '../../Constants/Colors';

import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../Components/Header';

import {hp, wp} from '../../Constants/Responsive';

import {Fonts, FontsSize} from '../../Constants/Fonts';

import Btn from '../../Components/Btn';

import {AirbnbRating} from 'react-native-ratings';

import Toast from 'react-native-simple-toast';

export default function RateUs() {
  const [rating, setRating] = useState(0);

  const [indicator, setIndicator] = useState(false);

  // Function to handle the submission of the rating
  const HandleSubmitBtn = () => {
    setIndicator(true);
    Toast.show('Thank you for submitting your rating.', Toast.SHORT);
    setIndicator(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header component */}
      <Header headerTitle={'Rate us'} rightIcon={true} />

      {/* Image component displaying a product image */}
      <Image
        source={require('../../Assets/Images/watch.png')}
        resizeMode="contain"
        style={styles.img}
      />

      {/* Text asking about the user's experience */}
      <Text style={styles.text}>How was your experience with us</Text>

      {/* AirbnbRating component for user to rate the experience */}
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={40}
        selectedColor={Colors.rating} // #DCCF10
        unSelectedColor={Colors.lightGrey}
        showRating={false}
        onFinishRating={rating => setRating(rating)}
      />

      {/* Submit button with an optional loading indicator */}
      <View style={{marginTop: hp(15)}}>
        <Btn
          BtnText={'Submit'}
          onPress={() => HandleSubmitBtn()}
          indicator={indicator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
  },
  img: {
    width: wp(60),
    height: wp(60),
  },
  text: {
    width: wp(90),
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontsSize.L,
    textAlign: 'center',
    marginVertical: hp(5),
  },
  ratingbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStar: {
    marginHorizontal: wp(1),
  },
});
