import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, TextInput, Image, Dimensions} from 'react-native';
import  {Card} from "react-native-paper";
import {FlatList} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

export default class HomeScreen extends Component{

    constructor() {
        super();
        this.state = {
            query: null,
            dataSource: [],
            dataBackup: [],
        };
    }

    componentDidMount() {
        var data = [
            {
                status: 'EN COURS',
                author: 'Suzanne Collins',

                description:
                    'The Ballad of Songbirds and Snakes is an upcoming science fiction novel by American author Suzanne Collins.',
            },
            {
                status: 'TERMINER',
                author: 'Stephen King',

                description:
                    'From #1 New York Times bestselling author, legendary storyteller, and master of short fiction Stephen King comes an extraordinary collection of four new and compelling novellas—Mr. Harrigan’s Phone, ',
            },
            {
                status: 'REPORTER',
                author: 'Sue Monk Kidd',

                description:
                    'Named a Most Anticipated Book of 2020 by O, the Oprah Magazine, Good Morning America/ABC-TV, Good Housekeeping, Bustle, TIME,',
            },
            {
                status: 'ANNULER',
                author: 'John Sandford',

                description:
                    'Lucas Davenport investigates a vitriolic blog that seems to be targeting the children of U.S. politicians in the latest thriller by #1 New York Times-bestselling author John Sandford.',
            },
            {
                status: 'ANNULER',
                author: 'James Patterson',

                description:
                    'The Kennedys have always been a family of charismatic adventurers, raised to take risks and excel, living by the dual family mottos: To whom much is given,',
            },
            {
                status: 'ANNULER',
                author: 'Robert Kolker',

                description:
                    'Hidden Valley Road: Inside the Mind of an American Family is a 2020 non-fiction book by Robert Kolker.',
            },
        ];

        this.setState({
            dataBackup: data,
            dataSource: data,
        });
    }

    filterItem = event => {
        var query = event.nativeEvent.text;
        this.setState({
            query: query,
        });
        if (query == '') {
            this.setState({
                dataSource: this.state.dataBackup,
            });
        } else {
            var data = this.state.dataBackup;
            query = query.toLowerCase();
            data = data.filter(l => l.status.toLowerCase().match(query));

            this.setState({
                dataSource: data,
            });
        }
    };

    separator = () => {
        return (
            <View style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}} />
        );
    };

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#009299" />
                <View style={styles.header}>
                    <TextInput
                        placeholder="Enter Text..."
                        placeholderTextColor="gray"
                        value={this.state.query}
                        onChange={this.filterItem.bind(this)}
                        style={styles.input}
                    />
                </View>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={() => this.separator()}
                    renderItem={({item, index}) => {
                        return (
                            <Card  style={{flex:1,backgroundColor:'#FFF', borderRadius: 10}}>



                                <View style={styles.dataContainer}>
                                    <Text style={{flex:1,fontSize:15}}>Status :</Text>
                                    <Text style={{flex:1,fontSize:15}}>{item.status}</Text>
                                </View>
                                <View style={styles.dataContainer}>
                                    <Text style={{flex:1,fontSize:15}}>Status :</Text>
                                    <Text style={{flex:1,fontSize:15}}>{item.status}</Text>
                                </View>


                            </Card>
                        );
                    }}
                />
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
    author: {
        fontSize: 16,
    },
});
