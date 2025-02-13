import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';

const SeatBookingScreen = ({ navigation }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const seatData = [
    ["available",],
    ["available", "taken", "taken",],
    ["available", "taken", "available", "taken", "available",],
    ["taken", "taken", "available", "available", "taken", "available"],
    ["available", "available", "available", "available",],
    ["available", "taken", "taken",],
    ["available",]
  ];

  const dates = ["17 Sun", "18 Mon", "19 Tue", "20 Wed", "21 Thu", "22 Fri"];
  const times = ["10:30", "12:30", "14:30", "15:30"];

  const toggleSeatSelection = (rowIndex, colIndex) => {
    const seatKey = `${rowIndex}-${colIndex}`;
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatKey));
    } else {
      setSelectedSeats([...selectedSeats, seatKey]);
    }
  };

  const calculateTotalPrice = () => selectedSeats.length * 15;

  const handelBook = () => {
    if (!selectedDate) {
      alert("Please select a date");
    }
    else if (!selectedTime) {
      alert("Please select a time");
    }
    else if (selectedSeats.length === 0) {
      alert("Please select a seat");
    }
    else {
      navigation.navigate('PaymentScreen', {
        selectedSeats: selectedSeats,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
      });
    }
  };



  return (
    <View style={{ backgroundColor: '#2A2F4F', flex: 1, }}>
      {/* Header */}
      <ImageBackground
        source={require('../Assests/avenger.jpg')}
        style={styles.headerImage}
      >
        <ScrollView showsVerticalScrollIndicator={false}>



          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={styles.linearGradient}
          >

            {/* Seat Selection Grid */}
            <View style={styles.seatContainer}>
              {seatData.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.seatRow}>
                  {row.map((status, colIndex) => {
                    const seatKey = `${rowIndex}-${colIndex}`;
                    const isSelected = selectedSeats.includes(seatKey);
                    return (
                      <TouchableOpacity
                        key={colIndex}
                        style={[
                          styles.seat,
                          status === "taken" && styles.takenSeat,
                          isSelected && styles.selectedSeat,
                        ]}
                        disabled={status === "taken"}
                        onPress={() => toggleSeatSelection(rowIndex, colIndex)}
                      />
                    );
                  })}
                </View>
              ))}
            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginVertical: hp(3) }}>
              <View style={styles.seat}></View>
              <Text>
                Available
              </Text>
              <View style={{
                width: wp(7),
                height: wp(7),
                margin: wp(1),
                backgroundColor: '#555',
                borderRadius: wp(1),
              }}></View>
              <Text>
                Taken
              </Text>
              <View style={{
                width: wp(7),
                height: wp(7),
                margin: wp(1),
                backgroundColor: '#FF5733',
                borderRadius: wp(1),
              }}></View>
              <Text>
                Selected
              </Text>
            </View>

            {/* Date Picker */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datePicker}>
              {dates.map((date, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dateButton,
                    selectedDate === date && styles.selectedDateButton,
                  ]}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text
                    style={[
                      styles.dateText,
                      selectedDate === date && styles.selectedDateText,
                    ]}
                  >
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>


            {/* Time Picker */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timePicker}>
              {times.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeButton,
                    selectedTime === time && styles.selectedTimeButton,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</Text>
              <CustomButton
                title="Book Now"
                onPress={handelBook}
                backgroundColor="#FF5733"
                textColor="#FFFFFF"
                style={{ width: wp(40), }}
              />

            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    // marginTop: hp(30),
    height: '100%',
    width: wp(100),
    padding: 10
  },
  headerImage: {
    width: wp(100),
    height: hp(100),
    // borderRadius: wp(2),
    paddingTop: hp(20),
  }
  ,
  seatContainer: { marginVertical: hp(5), alignItems: 'center', },
  seatRow: { flexDirection: 'row' },
  seat: {
    width: wp(8),
    height: wp(8),
    margin: wp(1),
    backgroundColor: '#ccc',
    borderRadius: wp(1),
  },
  takenSeat: { backgroundColor: '#555' },
  selectedSeat: { backgroundColor: '#FF5733' },
  datePicker: { marginVertical: hp(1) },
  dateButton: {
    padding: wp(2),
    marginHorizontal: wp(1),
    borderRadius: wp(1),
    backgroundColor: '#333',
  },
  selectedDateButton: { backgroundColor: '#FF5733' },
  dateText: { color: '#fff', fontSize: hp(2.3), fontWeight: 'bold' },
  selectedDateText: { color: '#000' },
  timePicker: { marginVertical: hp(1) },
  timeButton: {
    padding: wp(2),
    marginHorizontal: wp(1),
    borderRadius: wp(1),
    backgroundColor: '#333',
  },
  selectedTimeButton: { backgroundColor: '#FF5733' },
  timeText: { color: '#fff', fontSize: hp(2), fontWeight: "bold" },
  selectedTimeText: { color: '#000' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp(3),
  },
  totalPrice: { color: '#fff', fontSize: hp(3), fontWeight: "bold" },
  buyButton: {
    backgroundColor: '#FF5733',
    padding: wp(3),
    borderRadius: wp(2),
  },
  buyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: wp(4) },
});

export default SeatBookingScreen;
