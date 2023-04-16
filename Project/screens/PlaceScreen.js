import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const PlaceScreen = ({route}) => {
    const navigation = useNavigation()

    const data = route?.params?.param

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown : false,
        })
      }, [])

    return (
        <View className="flex-1 bg-[#F8CC5C] relative">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-[#F8CC5C] shadow-lg">
                    <Image
                        source={
                            {uri: 
                                data?.photo?.images?.large?.url ?
                                data?.photo?.images?.large?.url :
                                "https://www.pamperedchef.com/iceberg/com/product/1575-lg.jpg"
                            }
                        }
                        className="w-full h-72 object-cover rounded-2xl"
                    />

                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">

                        <TouchableOpacity
                            onPress={()=> navigation.navigate("Explore")} 
                            className="w-12 h-12 rounded-md items-center justify-center bg-[#05283D]">
                        <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity className="w-12 h-12 rounded-md items-center justify-center bg-[#05283D]">
                            <FontAwesome5 name="heartbeat" size={24} color="white" />
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>

        </View>
    )
}

export default PlaceScreen