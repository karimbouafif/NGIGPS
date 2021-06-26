import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Modal, View, TouchableOpacity } from 'react-native'
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';
import moment from 'moment'
import { COLORS, FONTS, icons, images, SIZES } from '../Containers/constants'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    const {  item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    const { navigation } = this.props;
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];



    if (this.props.event)
      return (
        <View style={styles.container}>
          {/* New Plants */}
          <View style={{ height: "25%", backgroundColor: COLORS.white }}>
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
                    onPress={() => navigation.navigate('Root',{screen:'CarDetails'},{ item: item },console.log("car details"))}
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










        <Block row={horizontal} card flex style={cardContainer}>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Root',{screen:'CarDetails'},{ item: item },console.log("car details"))} >
            <Block flex space="between" style={styles.cardDescription}>

              <Text size={14} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} style={styles.cardTitle}>{item.title}</Text>
              <Text size={12}  bold>{item.description}</Text>
              <Text size={14} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} style={styles.cardTitle}>{item.type}</Text>
              <Text size={12}  bold>{item.etat}</Text>
              <Text size={14} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} style={styles.cardTitle}>{item.disponibilite}</Text>
            </Block>
          </TouchableWithoutFeedback>
        </Block>








        </View>
        </View>
        </View>
        </View>
      );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 10
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card);
