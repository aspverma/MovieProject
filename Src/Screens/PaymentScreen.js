import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function PaymentScreen({ route, navigation }) {
    // Extract the parameters passed from the previous screen
    const { selectedSeats, selectedDate, selectedTime } = route.params;
    const [loading, setLoading] = useState(true)
    const [selectedLanguage, setSelectedLanguage] = useState();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A2F4F' }}>
            {
                loading ?
                    (
                        <>
                            <ActivityIndicator size={100} color="#FF5733" />
                            <Text>Loading...</Text>
                        </>
                    )
                    :
                    <View>
                        <Text style={{ fontSize: 20, color: 'red' }}>Payment Screen</Text>
                        <Text style={{ color: 'red' }}>Selected Seats: {selectedSeats.join()}</Text>
                        <Text style={{ color: 'red' }}>Selected Date: {selectedDate}</Text>
                        <Text style={{ color: 'red' }}>Selected Time: {selectedTime}</Text>
                        <Text style={{ color: 'red' }}>
                            Total Price: {selectedSeats.length * 15}$
                        </Text>
                        <Button title='click me' onPress={() => navigation.navigate('TicketScreen')} />
                    </View>
            }

        

        </View>
    );
}
