import AppNavigator from '../Navigation/AppNavigation';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import React, {Component} from 'react';
import {connect} from 'react-redux';
const AppNavigatorWithState = createReduxContainer(AppNavigator);

class ReduxNavigation extends React.Component {
    render() {
        const { state, dispatch } = this.props;

        return <AppNavigatorWithState navigation={state} dispatch={dispatch} />;
    }
}

const mapStateToProps = (state) => ({
    state: state.navigation,
});

export default connect(mapStateToProps)(ReduxNavigation);
