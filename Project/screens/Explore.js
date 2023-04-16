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
          <Text className="text-[30px] text-[#05283D]">Aloha</Text>
          <Text className="text-[30px] text-[#05283D] font-semibold">Where to today?</Text>
        </View>
      </View>

      
    </View>
  )
}

export default Explore