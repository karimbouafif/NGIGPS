import React, { Component, useEffect } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity, SafeAreaView
} from 'react-native'
import  {Card} from "react-native-paper";
import {FlatList} from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');
import { COLORS, FONTS, SIZES, icons, images } from '../Containers/constants';
import axios from 'axios'
import { Logo } from './constants/images'


const ListCars = ({ navigation }) => {

  // Dummy Data
  const [newPlants, setNewPlants] = React.useState({ hits: [] });
 // const [data, setData] = React.useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://10.40.20.26:4000/api/voitures',
      );
      console.log("Affichage DES VOITURES  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(result.data);
      setNewPlants(result.data);
    };

    fetchData();
  }, []);

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    },
  ]);

  React.useEffect(() => {
  }, []);

  // Render

  function renderNewPlants(item, index) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
        <Image
          source={images.Logo}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.title}</Text>
        </View>


      </View>
    )
  }

  function renderFriendsComponent() {
    if (friendList.length == 0) {
      return (
        <View></View>
      )
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: COLORS.primary
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary
                    }}
                  />
                </View>
              )
            }
          })}

          <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{friendList.length - 3} More</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        <View style={{
          flex: 1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary
        }}>
          <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: COLORS.white, ...FONTS.h2, }}>New Assigns</Text>
              <TouchableOpacity
                onPress={() => { console.log("Focus on pressed") }}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's Share */}
      <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
        <View style={{
          flex: 1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.white
        }}>
          <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>Today's Assign</Text>

              <TouchableOpacity
                onPress={() => { console.log("See All on pressed") }}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', height: "88%", marginTop: SIZES.base }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => navigation.navigate( 'Root',{screen:'CarDetails'} )}>

                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.font }}
                  onPress={() => navigation.navigate( 'Root',{screen:'CarDetails'} )}>

                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1.3 }}>
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: SIZES.font }}
                  onPress={() => navigation.navigate( 'Root',{screen:'CarDetails'} )}>

                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={{ height: "20%", backgroundColor: COLORS.lightGray }}>
        <View style={{
          flex: 1,
          backgroundColor: COLORS.lightGray
        }}>
          <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
            <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>Added workers</Text>
            <Text style={{ color: COLORS.secondary, ...FONTS.body3, }}>{friendList.length} total</Text>
            <View style={{ flexDirection: 'row', height: '60%' }}>
              {/* Friends */}
              <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                {renderFriendsComponent()}
              </View>

              {/* Add Friend */}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add New</Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray
                  }}
                  onPress={() => { console.log("Add friend on pressed") }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListCars;
