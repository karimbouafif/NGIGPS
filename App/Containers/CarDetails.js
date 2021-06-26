import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { icons, images, COLORS, SIZES, FONTS } from '../Containers/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';



const RequirementDetail = ({ icon, label, item }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30
          }}
        />

        <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>{item}</Text>
      </View>
    </View>
  )
}

const CarDetails = ({ navigation }) => {

  // Render

  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
              onPress={() => { navigation.navigate("ListCars") }}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
            onPress={() => { console.log("Focus on pressed") }}
          >
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>
        </View>


      </View>
    )
  }



  function renderRequirements() {
    return (
      <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-around' }}>
        <RequirementDetail
          icon={icons.sun}
          label="Sunlight"

        />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail
          icon={icons.garden}
          label="Soil"
          detail="3 Kg"
        />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary
          }}
          onPress={() => { console.log("Take Action") }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>

          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{
              marginLeft: SIZES.padding,
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding }}>
          <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>Almost 2 weeks of growing time</Text>
          <Image
            source={icons.downArrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              width: 20,
              height: 20
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{ height: "35%" }}>
        <Image
          source={images.Logo}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '30%'
          }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding
        }}
      >
        <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h1 }}>Details</Text>



        {renderRequirements()}

        {renderFooter()}
      </View>

      {renderHeader()}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CarDetails;
