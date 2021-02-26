import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, TextInput, Image, Dimensions} from 'react-native';
import  {Card} from "react-native-paper";
import {FlatList} from 'react-native-gesture-handler';
//import DetailsScreen from '../scenes/DetailsScreen'


const {width, height} = Dimensions.get('window');



export default class Home extends Component{

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
      {   id:'1',
        status: 'EN COURS',
        typemission: 'high',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
      },
      { id:'2',
        status: 'TERMINER',
        typemission: 'low',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
      },
      { id:'3',
        status: 'REPORTER',
        typemission: 'medium',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
      },
      { id:'4',
        status: 'ANNULER',
        typemission: 'high',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
      },
      { id:'5',
        status: 'ANNULER',
        typemission: 'low',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
      },
      {   id:'6',
        status: 'ANNULER',
        typemission: 'high',

        datedebut:
          '16-02-2021',
        datefin:
          '20-02-2021',
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

  getMissionData=(item)=>{
    var id=item.id;
    var status= item.status;
    var typemission =item.typemission;

    alert(id+"\n"+status+"\n"+typemission);
  }


  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#009299" />

        <View style={{flex:1,padding:5}}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (

                <Card style={{flex: 1, backgroundColor: '#fff', borderRadius: 10}}
                >


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

                  <Button
                    title="go to details"
                    onPress={() =>this.props.navigation.navigate('DetailsScreen',{id:item.id})}

                  />
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
