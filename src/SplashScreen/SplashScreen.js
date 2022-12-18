import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Navigator from '../Navigator/Navigator'
import SplashAnimation from '../SplashScreen/SplashAnimation/SplashAnimation'
import styles from './Style'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen() {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;  

        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 3000);
    }

    render() {
        const { isVisible } = this.state;

        return (
            isVisible === true ? <SplashAnimation /> : <Navigator />
        );
    }
}   