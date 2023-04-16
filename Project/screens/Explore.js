import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'

const Explore = () => {

  const navigation= useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,
    })
  }, [])

  return (
    <View className="bg-[#F8CC5C] flex-1 relative"> 
      {/* Title of page */}
      <View className="flex-row items-center justify-between mt-10 px-6">
        <View>
          <Text className="text-[30px] text-[#05283D]">Aloha.</Text>
          <Text className="text-[30px] text-[#05283D] font-semibold">Where to today?</Text>
        </View>
      </View>

      <View className="flex-row items-center bg-white rounded-xl mx-4 mt-5 py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields:"geometry"}}
        placeholder='Search'
        fetchDetails={true}

        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details?.geometry?.viewport);
        }}
        query={{
          key: 'AIzaSyBmUQkuneidS-KYodM646hull-wh5TwFfU',
          language: 'en',
        }}
        /*
        styles={{
          container: {
            backgroundColor: 'blue',
          },
          poweredContainer: {
            backgroundColor: 'blue',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      */
        />
      </View>

    </View>
  )
}

export default Explore