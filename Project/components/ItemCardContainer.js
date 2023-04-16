// Import necessary components and functions from react-native
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Define a functional component that represents an item card container
const ItemCardContainer = ({imageSrc, title, location, data}) => {
    
    // Use the useNavigation hook to get access to the navigation object
    const navigation = useNavigation()

    // Render the component's UI
    return (
        // Add a touchable opacity component that navigates to the PlaceScreen when pressed
        <TouchableOpacity 
            onPress={() => navigation.navigate("PlaceScreen", {param : data})}
            className="rounded-md  space-y-2 px-3 py-2 bg-[#05283D] w-[175px] my-2"
            style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 20, shadowRadius: 3.84, elevation: 5 }}
        >
            <View className="border border-[#f7de9d] rounded-md">
                {/* Add an image component that displays the item's image */}
                <Image
                    source={{uri: imageSrc}}
                    className="w-full h-40 rounded-md object-cover "
                />
            </View>

            {/* Conditionally render the title and location information */}
            { title ? (
                <>
                    <Text className="text-[#F8CC5C] text-[18px] font-bold">{
                        title?.length > 14 ? `${title.slice(0,14)}..` :  title
                    }</Text>

                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="location-sharp" size={24} color="white" />
                        <Text className="text-[#be9c47] text-[14px] font-bold">{
                            location?.length > 18 ? `${title.slice(0,18)}..` :  location
                        }</Text>
                    </View>
                </>
            ) : (
                <>
                    <Text className="text-[#F8CC5C] text-[18px] font-bold">Undefined</Text>

                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="location-sharp" size={24} color="white" />
                        
                    </View>
                </>
            )

            }
            
        </TouchableOpacity>
    )
}

// Export the ItemCardContainer component
export default ItemCardContainer
