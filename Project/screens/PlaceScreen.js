import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


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

                    <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                        <View className="flex-row space-x-2 items-center">
                            <Text className="text-[22px] font-bold text-gray-100">
                                {data?.price_level}
                            </Text>
                        </View>
                    </View>

                </View>

                <View className="mt-6">
                    <Text className="text-[#05283D] text-[24px] font-bold">
                        {data?.name}
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <Ionicons name="location-sharp" size={24} color="#05283D" />
                        <Text className="text-gray-500 text-[20px] font-bold">
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between">
                    {data?.rating && (
                        <View className=" flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-[#05283D] items-center justify-center shadow-md">
                            <Ionicons name="md-star" size={24} color="white" />
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.rating}</Text>
                            <Text className="text-[#515151]">Ratings</Text>
                        </View>
                        </View>
                    )}

                    {data?.price_level && (
                        <View className=" flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-[#05283D] items-center justify-center shadow-md">
                            <FontAwesome5 name="money-bill-wave" size={24} color="white" /> 
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.price_level}</Text>
                            <Text className="text-[#515151]">Price Level</Text>
                        </View>
                        </View>
                    )}

                    {data?.bearing && (
                        <View className=" flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl bg-[#05283D] items-center justify-center shadow-md">
                            <Entypo name="map" size={24} color="white" />
                        </View>
                        <View>
                            <Text className="text-[#515151] capitalize">
                            {data?.bearing}
                            </Text>
                            <Text className="text-[#515151]">Bearing</Text>
                        </View>
                        </View>
                    )}

                </View>

                {data?.description && (
                <Text className="mt-4 tracking-wide text-[16px] font-semibold text-black">
                    {data?.description}
                </Text>
                )}

                {data?.cuisine && (
                    <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                        {data?.cuisine.map((n) => (
                        <TouchableOpacity
                            key={n.key}
                            className="px-2 py-1 rounded-md bg-[#05283D]"
                        >
                            <Text className= "text-gray-200">{n.name}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>
                )}

                <View className=" space-y-2 mt-4 bg-[#05283D] rounded-2xl px-4 py-2">
                    {data?.phone && (
                        <View className="items-center flex-row space-x-6">
                            <Entypo name="phone" size={24} color="#F8CC5C" />
                            <Text className="text-md text-white">{data?.phone}</Text>
                        </View>
                    )}
                    {data?.email && (
                        <View className="items-center flex-row space-x-6">
                            <FontAwesome name="envelope" size={24} color="#F8CC5C" />
                            <Text className="text-md text-white">{data?.email}</Text>
                        </View>
                    )}
                    {data?.address && (
                        <View className="items-center flex-row space-x-6">
                            <FontAwesome name="map-pin" size={24} color="#F8CC5C" />
                            <Text className="text-md text-white">{data?.address}</Text>
                        </View>
                    )}
                </View>


            </ScrollView>

        </View>
    )
}

export default PlaceScreen