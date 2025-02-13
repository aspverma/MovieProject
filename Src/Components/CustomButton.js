import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomButton = ({ title, onPress, backgroundColor, textColor, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: backgroundColor || '#007BFF' }, style]}>
        <Text style={[styles.text, { color: textColor || '#fff' }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp(7),  // Height based on percentage of the screen
    backgroundColor: '#FF5733',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Ensure the button is centered horizontally
  },
  text: {
    color: 'azure',
    fontSize: hp(2.5), // Responsive font size
    fontWeight: 'bold',
  },
});

export default CustomButton;
