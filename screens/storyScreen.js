import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, Image, Animated, ActivityIndicator, StatusBar, FlatList, ScrollView, ImageBackground, PermissionsAndroid } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import *as  ImagePicker from 'react-native-image-picker'
import Slider from '@react-native-community/slider';
import { Button, Menu, Divider, Provider, Avatar, list, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('screen')

export default function storyScreen({ route, navigation }) {
    const { name } = route.params;
    const { image } = route.params;
    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);
        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,

        }).start();
        return () => clearTimeout(timer)
    }, []);
    const [progress, setprogress] = useState(new Animated.Value(0))
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
    })
    return (
        <>
            <StatusBar
                backgroundColor={"#000"}
                barStyle="light-content"
            ></StatusBar>
            <View
                style={{ width: width, height: height, backgroundColor: "#000" }}
            >
                <View
                    style={{ width: width, height: height * 0.001, backgroundColor: "#ccc5" }}
                >
                    <Animated.View
                        style={{ height: height * 0.0015, backgroundColor: "#fff", width: progressAnimation }}
                    ></Animated.View>
                </View>
                <View
                    style={{ width: width, height: height * 0.07, backgroundColor: "#000", alignItems: "center", flexDirection: "row", paddingHorizontal: 25, justifyContent: "space-between" }}
                >
                    <View

                        style=
                        {{ flexDirection: "row", alignItems: "center", }}
                    >
                        <Image
                            source={image}
                            style={{ width: width * 0.09, height: height * 0.04, borderRadius: 100 }}
                        />
                        <Text
                            style={{ color: "#fff", marginLeft: 4 }}
                        >{name}</Text>
                    </View>
                    <Icon
                        name={"times"}
                        size={20}
                        color="#fff"
                        onPress={() =>
                            navigation.goBack()
                        }
                    />
                </View>
                <Image
                    source={image}
                    style={{ width: width, height: height * 0.7 }}
                />
                <View
                    style={{ width: width, height: height * 0.1, alignItems: "center", backgroundColor: "#000", justifyContent: "center" }}
                >
                    <TextInput
                        placeholder='Send Message'
                        placeholderTextColor={"#fff"}
                        style={{ width: width * 0.7, height: height * 0.06, borderRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: "#000", borderWidth: 2, borderColor: "#fff" }}
                    >
                    </TextInput>
                </View>
            </View>

        </>
    )
}