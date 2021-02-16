import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, TextInput, Image, Dimensions} from 'react-native';
import  {Card} from "react-native-paper";
import {FlatList} from 'react-native-gesture-handler';

import {navigate} from "@react-navigation/routers/src/";

const {width, height} = Dimensions.get('window');



export default class    DetailsScreen extends Component{

    constructor() {
        super();
        this.state = {
            query: null,
            dataSource: [],
            dataBackup: [],
        };
    }










    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#009299" />
                <View style={{flex:1,padding:5}}>
                    <FlatList
                        data={this.state.dataSource}
                        ItemSeparatorComponent={() => this.separator()}
                        renderItem={({item, index}) => {
                            return (

                                <Card style={{flex: 1, backgroundColor: '#fff', borderRadius: 10}}>


                                    <View style={styles.dataContainer}>
                                        <Text style={{flex: 1, fontSize: 15}}>Status :</Text>
                                        <Text style={{flex: 1, fontSize: 15}}>{item.status}</Text>
                                    </View>
                                    <View style={styles.dataContainer}>
                                        <Text style={{flex: 1, fontSize: 15}}>Typemission :</Text>
                                        <Text style={{flex: 1, fontSize: 15}}>{item.typemission}</Text>
                                    </View>
                                    <View style={styles.dataContainer}>
                                        <Text style={{flex: 1, fontSize: 15}}>Date Début :</Text>
                                        <Text style={{flex: 1, fontSize: 15}}>{item.datedebut}</Text>
                                    </View>
                                    <View style={styles.dataContainer}>
                                        <Text style={{flex: 1, fontSize: 15}}>Date Fin :</Text>
                                        <Text style={{flex: 1, fontSize: 15}}>{item.datefin}</Text>
                                    </View>

                                </Card>
                            );

                        }

                        }

                        keyExtractor={item=>item.id}

                    />

                </View>
            </View>

        );

    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        height: 80,
        width: '100%',
        backgroundColor: '#009299',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 45,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
    },
    status: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
    },

    dataContainer: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:20,
        width:   width-40,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
    typemission: {
        fontSize: 16,
    },
});
