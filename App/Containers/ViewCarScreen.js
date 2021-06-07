import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, TextInput, Image, Dimensions} from 'react-native';
import  {Card} from "react-native-paper";
import {FlatList} from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');



export default class ListCars extends Component{

  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }





  componentDidMount() {
  this.getCarsList()

    this.setState({
      dataBackup: this.getCarsList,
      dataSource: this.getCarsList,
    });
  }
  getCarsList = () => {
    fetch("http://192.168.1.16:4000/api/voitures")  // **Api for fetching**
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
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

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#009299" />
        <View style={styles.header}>
          <TextInput
            placeholder="Rechercher par Etat..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <View style={{flex:1,padding:5}}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (

                <Card style={{flex: 1, backgroundColor: '#fff', borderRadius: 10}}
                >


                  <View style={styles.dataContainer}>
                    <Text style={{flex: 1, fontSize: 15}}>Titre :</Text>
                    <Text style={{flex: 1, fontSize: 15}}>{item.title}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={{flex: 1, fontSize: 15}}>matricule :</Text>
                    <Text style={{flex: 1, fontSize: 15}}>{item.matricule}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={{flex: 1, fontSize: 15}}>Disponibilité :</Text>
                    <Text style={{flex: 1, fontSize: 15}}>{item.disponibilite}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={{flex: 1, fontSize: 15}}>Etat :</Text>
                    <Text style={{flex: 1, fontSize: 15}}>{item.etat}</Text>
                  </View>

                  <Button
                    title="Plus de details"
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
