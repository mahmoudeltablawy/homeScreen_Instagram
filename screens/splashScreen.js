import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, Image, Animated, ActivityIndicator, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen')

export default function splashScreen({ navigation }) {
    const [timer, settimer] = React.useState(true)
    React.useEffect(() => {
        let x = 0
        setTimeout(() => {
            navigation.replace('homeScreen')
        }, 2000);
    })
    return (
        <>
            <StatusBar
                backgroundColor={"#fff"}
            />
            <View
                style={{ width: width, height: height, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={require('../img/30.jpg')}

                    style={{ width: width * 0.2, height: height * 0.1, borderRadius: 15 }}
                    resizeMode={"contain"}
                />

            </View>
            <View
                style={{ width: width, height: height * 0.2, backgroundColor: "#fff", position: "absolute", bottom: 0, alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={require('../img/25.jpg')}

                    style={{ width: width * 0.25, height: height * 0.12, }}
                    resizeMode={"contain"}
                />

            </View>
        </>
    )

} 