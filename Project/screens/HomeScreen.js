import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation= useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,
    })
  }, [])

  return (
    <View className="bg-white flex-1 relative">
      {/* Background of page */}
      <View >
        <Image
          source={{uri:"https://i.imgur.com/DnG9eWW.png"}}
          className="w-full h-full"
        />
      </View>
      {/* Enter Button: add this on top of background from image link: https://imgur.com/VKofRim */}
      <View style={styles.foregroundImageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
          <Image
            source={{ uri: "https://imgur.com/VKofRim.png" }}
            style={styles.foregroundImage}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  foregroundImageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  foregroundImage: {
    width: 250,
    height: 60,
  },
});

export default HomeScreen