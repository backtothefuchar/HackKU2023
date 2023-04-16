import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
import MenuContainer from '../components/menucontainer';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';

const Explore = () => {

  const navigation= useNavigation();

  const [type, setType] = useState("restaurants")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,
    })
  }, [])
  
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(). then(data =>{
      setMainData(data)
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
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

      {/* Begin scroll view for results */}
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#05283D" />
      </View> :
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"stays"}
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