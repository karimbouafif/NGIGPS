import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';

//get the size of device
let {width} = Dimensions.get('window');

const CalenderTaskScreen = () => {
  const [events, setEvents] = useState([
    {
      start: '2020-01-01 00:00:00',
      end: '2020-01-01 02:00:00',
      title: 'New Year Party',
      summary: 'xyz Location',
    },
    {
      start: '2020-01-01 01:00:00',
      end: '2020-01-01 02:00:00',
      title: 'New Year Wishes',
      summary: 'Call to every one',
    },
    {
      start: '2020-01-02 00:30:00',
      end: '2020-01-02 01:30:00',
      title: 'Parag Birthday Party',
      summary: 'Call him',
    },
    {
      start: '2020-01-03 01:30:00',
      end: '2020-01-03 02:20:00',
      title: 'My Birthday Party',
      summary: 'Lets Enjoy',
    },
    {
      start: '2020-02-04 04:10:00',
      end: '2020-02-04 04:40:00',
      title: 'Engg Expo 2020',
      summary: 'Expoo Vanue not confirm',
    },
  ]);

  const [data, setData] = React.useState({ hits: [] });


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://192.168.1.16:4000/api/missions',
      );
      console.log("calender task  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    setCurrentDate(
      date + '-' + month + '-' + year

    );
  }, []);

  const eventClicked = (event) => {
    //On Click of event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          // Function on event press
          events={data}
          // Passing the Array of event
          width={width}
          // Container width
          size={60}
          // number of date will render before and after initDate
          // (default is 30 will render 30 day before initDate
          // and 29 day after initDate)
          initDate={'2021-06-21'}
          // Show initial date (default is today)
          scrollToFirst
          // Scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};
export default CalenderTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
