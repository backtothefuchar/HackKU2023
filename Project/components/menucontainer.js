import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

// A React Native component that renders a menu item
const MenuContainer = ({ title, type, setType }) => {

    // Handle press event for the menu item
    const handlePress = () => {
        setType(title.toLowerCase()) // Set the type of the item to the lowercase version of the title
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View 
            className={` items-center justify-center ${type === title.toLowerCase()? "bg-[#f3dea8]" : ""}`}
            style={{ borderRadius: 10}}
            >
                <Text 
                    className={`text-[16px] font-semibold`}
                    style={{ borderRadius: 10, borderWidth: 2, borderColor: '#05283D', padding: 10, color:'#05283D' }}
                >{title}</Text>
            </View>

        </TouchableOpacity>
    
    )
}

export default MenuContainer
