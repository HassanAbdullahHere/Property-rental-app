import React, {useEffect} from 'react'
import { View, Text} from 'react-native'
import { NativeBaseProvider, Center, Box} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';

const readData = async () => {
  try {
    const value = await AsyncStorage.getItem('autenticated');
    const user = await AsyncStorage.getItem('user');
    console.log("I'm authenticated: ", value);
    console.log("My user: ", user.email);
  } catch (e) {
    alert('Failed to fetch the input from storage');
  }
};

readData();

function Find() {

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Find Screen</Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Find