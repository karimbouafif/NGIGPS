import React, { memo, useContext, useCallback, useEffect, useReducer } from 'react'
import { Calendar } from 'react-native-calendars';

import { persistedReducer } from '../Redux/store';
import { useSelector, useDispatch, connect } from 'react-redux'
import Container from '../Components/common/Container';
import CalenderEvents from '../Components/home/CalenderEvents';
import { getMarkedDates } from '../Redux/actions/calenderActions';

function Home() {
   const [globalStore, setGlobalStore] = useReducer(getMarkedDates);
  const dispatch = useDispatch();
  //const {globalStore, setGlobalStore} = useSelector((state) => state.calender);
    useEffect(() => {
        getMarkedDates().then((markedDates) => setGlobalStore({ type: 'SET_MARKED_DATES', markedDates }));
    }, []);

    const getMarkedDatesForMonth = useCallback(
        (month) => {
            getMarkedDates(month.dateString).then((markedDates) =>
                setGlobalStore({
                    type: 'SET_MARKED_AND_SELECTED_DATES',
                    markedDates,
                    selectedDate: month,
                })
            );
        },
        [setGlobalStore]
    );

    const changeSelectedDate = useCallback((day) => setGlobalStore({ type: 'CHANGE_SELECTED_DATE', date: day }), [setGlobalStore]);

    return (
        <Container>
            <Calendar
                onDayPress={changeSelectedDate}
                onMonthChange={getMarkedDatesForMonth}
                displayLoadingIndicator
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
                markingType="simple"
                markedDates={globalStore.markedDates}
                style={calenderStyle}
                theme={calenderTheme}
            />
            <CalenderEvents />
        </Container>
    );
}
const mapStateToProps = state => ({
  calender: state.calender
});
const mapDispatchToProps = dispatch => ({
  getMarkedDates: id => dispatch(getMarkedDates(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const calenderStyle = { minHeight: 335 };

const calenderTheme = {
    todayTextColor: '#529aff',
    monthTextColor: 'black',
    arrowColor: 'black',
    textMonthFontWeight: '700',
    textDayHeaderFontSize: 16,
};
