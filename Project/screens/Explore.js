import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
import MenuContainer from '../components/menucontainer';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Explore = () => {

  const navigation= useNavigation();

  const [type, setType] = useState("attractions")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])
  const [bl_lat, setBl_lat] = useState(null)
  const [bl_lng, setBl_lng] = useState(null)
  const [tr_lat, setTr_lat] = useState(null)
  const [tr_lng, setTr_lng] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,
    })
  }, [])
  
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type). then(data =>{
      setMainData(data)
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    })
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type])


  return (
    <View className="bg-[#F8CC5C] flex-1 relative"> 
      {/* Title of page */}
      <View className="flex-row items-center justify-between mt-10 px-6">
        <View>
          <Text className="text-[30px] text-[#05283D]">Aloha.</Text>
          <Text className="text-[30px] text-[#05283D] font-semibold">Where to today?</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="fireplace" size={80} color="#05283D" />
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
          setBl_lat(details?.geometry?.viewport?.southwest?.lat);
          setBl_lng(details?.geometry?.viewport?.southwest?.lng);
          setTr_lat(details?.geometry?.viewport?.northeast?.lat);
          setTr_lng(details?.geometry?.viewport?.northeast?.lng);
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

      {/* Begin scroll view for results */}
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#05283D" />
      </View> :
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotels"}
            title="Stays"
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"attractions"}
            title="Attractions"
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            type={type}
            setType={setType}
          />  
          

        </View>

        <View>
          {/*
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.map((data, i) => (
                <ItemCardContainer 
                  key={i} 
                  imageSrc={
                    data?.photo?.images?.
                  } 
                  title="Something a very big" 
                  location="Doha"
                />
              ))}
            </View>
            */}
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            {mainData?.length > 0 ? (<>
              {mainData?.map((data, i)=>(
                <ItemCardContainer 
                  key={i} 
                  imageSrc={
                    data?.photo?.images?.medium?.url ?
                    data?.photo?.images?.medium?.url :
                    "https://www.pamperedchef.com/iceberg/com/product/1575-lg.jpg"
                  } 
                  title={data?.name} 
                  location={data?.location_string}
                  data={data}
                />

                 ))}
                
            </>
            ) :  (
            <>
              <View className="w-full h-[600px] items-center space-y-6 mt-[-80px] justify-center">
                <Text className="text-[30px]">(ㅠ﹏ㅠ)</Text>
                <Text className="text-[20px]">Oops... No Data Found</Text>
              </View>
            </>
            )}
            </View>
            

        </View>

      </ScrollView>
      }

    </View>
  )
}

export default Explore