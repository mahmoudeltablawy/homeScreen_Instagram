import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, Image, Animated, ActivityIndicator, StatusBar, FlatList, ScrollView, ImageBackground, PermissionsAndroid } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import *as  ImagePicker from 'react-native-image-picker'
import Slider from '@react-native-community/slider';
import { Button, Menu, Divider, Provider, Avatar, list, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('screen')
export default function homeScreen({ navigation }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const [visible1, setVisible1] = React.useState(false);
    const openMenu1 = () => setVisible1(true);
    const closeMenu1 = () => setVisible1(false);
    const [arr, setarr] = useState([
        {
            name: "Ahmed hamed",
            image: require('../img/2.jpg'),
            likes: 400,
            love: false,
            height: false
        },
        {
            name: "Salah Darwish",
            image: require('../img/3.jpg'),
            likes: 600,
            love: false,
            height: false
        },
        {
            name: "Zenhom",
            image: require('../img/4.jpg'),
            likes: 750,
            love: false,
            height: false
        },
        {
            name: "Ebn_samir",
            image: require('../img/5.jpg'),
            likes: 300,
            love: false,
            height: false

        },
        {
            name: "omar_gom3a ",
            image: require('../img/5.jpg'),
            likes: 800,
            love: false,
            height: false
        },
        {
            name: "mamdouh",
            image: require('../img/7.jpg'),
            likes: 265,
            love: false,
            height: false

        },
        {
            name: "Rsaln_Box",
            image: require('../img/8.jpg'),
            likes: 530,
            love: false,
            height: false
        },
        {
            name: "Abdo_meky",
            image: require('../img/20.jpg'),
            likes: 720,
            love: false,
            height: true,
        },
    ])
    function like(index1) {
        let array = []
        array = arr
        array[index1].love = !array[index1].love
        array = JSON.stringify(array)
        setarr(JSON.parse(array))
    }
    return (
        <>
            <View
                style={{ width: width, backgroundColor: "#fff", height: height }}
            >
                <View
                    style={{
                        width: width,
                        height: height * 0.06,
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <View>
                        <Text
                            style={{ fontSize: 22, color: "#000", fontFamily: "Satisfy-Regular" }}
                        >Instegram</Text>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: width * 0.4 }}>

                        <TouchableOpacity>
                            <Icon
                                name="plus-square"
                                size={27}
                                color={"#000"}
                                style={{ marginRight: 15 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <Icon
                                name={"heart"}
                                size={25}
                                color="#000"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: 15 }}
                        >
                            <Icon
                                name={"facebook-messenger"}
                                size={25}
                                color="#000"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        <View
                            style={{ width: width, height: height * 0.12, backgroundColor: "#fff", flexDirection: "row", alignItems: "center", }}
                        >
                            <ScrollView
                                horizontal={true}
                            >
                                <TouchableOpacity
                                >
                                    <Image
                                        source={require('../img/1.jpg')}
                                        style={{ width: 70, height: 70, borderRadius: 50, padding: 10 }}
                                    />
                                    <View
                                        style={{ width: width * 0.08, backgroundColor: "#fff", height: height * 0.04, borderRadius: 20, marginLeft: width * 0.12, marginTop: height * -0.04, alignItems: "center", justifyContent: "center" }}
                                    >
                                        <Icon
                                            name="plus-circle"
                                            size={23}
                                            color={"#074dc7"}
                                        />
                                    </View>
                                    <Text
                                        style={{ fontSize: 12, textAlign: "center", marginTop: 5 }}
                                    >Your story</Text>
                                </TouchableOpacity>
                                {arr.map((item, index) =>
                                    <>
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() =>
                                                navigation.push("storyScreen", {
                                                    name: item.name,
                                                    image: item.image,
                                                })
                                            }
                                        >
                                            <LinearGradient
                                                colors={["#bc2a8d", "#e95950", "#fccc63"]}
                                                style={{ padding: 2, borderRadius: 70, marginLeft: 5 }}
                                            >
                                                <Image
                                                    source={item.image}

                                                    style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 4, borderColor: "#fff" }}
                                                />
                                            </LinearGradient>

                                            <Text
                                                style={{ textAlign: "center", textTransform: "lowercase", fontSize: 12, fontWeight: "bold" }}
                                            >{item.name}</Text>
                                        </TouchableOpacity>
                                    </>)}
                            </ScrollView>
                        </View>
                        {arr.map((item1, index1) =>
                            <>
                                <View
                                    style={{
                                        width: width, backgroundColor: "#fff",
                                        height: item1.height ? height * 0.8 : height * 0.6
                                    }}
                                >
                                    <View
                                        style={{ width: width, height: height * 0.05, backgroundColor: "#fff", flexDirection: "row", alignItems: "center" }}
                                    >
                                        <Image
                                            source={item1.image}
                                            resizeMode="cover"
                                            style={{ width: 30, height: 30, borderRadius: 15, }}
                                        />
                                        <Text
                                            style={{ fontSize: 12, fontWeight: "bold", marginLeft: 5 }}
                                        >{item1.name}</Text>
                                    </View>
                                    <View
                                        style={{ width: width, height: height * 0.4, backgroundColor: "#fff" }}
                                    ><Image
                                            source={item1.image}
                                            resizeMode="cover"
                                            style={{ width: width, height: height * 0.4, }}
                                        />
                                    </View>
                                    <View
                                        style={{ width: width, height: height * 0.15, backgroundColor: "#ffff" }}
                                    >
                                        <View
                                            style={{ width: width, height: height * 0.05, backgroundColor: "#fff", alignItems: "center", flexDirection: "row", padding: 5 }}
                                        >
                                            <Icon2
                                                onPress={() =>
                                                    like(index1)
                                                }
                                                name={item1.love ? "heart" : "heart-o"}

                                                size={25}
                                                color={item1.love ? "#f00" : "#000"}

                                            />
                                            <Icon
                                                name="comment"
                                                size={25}
                                                color={"#000"}
                                                style={{ marginLeft: 15 }}
                                            />
                                            <Icon
                                                name="share"
                                                size={25}
                                                color={"#000"}
                                                style={{ marginLeft: 15 }}
                                            />
                                        </View>
                                        {item1.love ? <Text
                                            style={{ marginLeft: 5 }}
                                        >Liked by you and {item1.likes} othor</Text> : <Text
                                            style={{ marginLeft: 5 }}
                                        >Liked by {item1.likes} </Text>}
                                        <View
                                            style={{ flexDirection: "row", alignItems: "center" }}
                                        >
                                            <Image
                                                source={require('../img/1.jpg')}
                                                resizeMode="cover"
                                                style={{ width: 30, height: 30, borderRadius: 15, marginTop: 5 }}
                                            />
                                            <TextInput
                                                style={{ width: width * 0.5, backgroundColor: "#fff", fontSize: 12 }}
                                                placeholder="Add your comment....."
                                            ></TextInput>
                                        </View>
                                    </View>

                                </View>
                            </>
                        )}

                    </ScrollView>
                </View>


            </View>

        </>
    )
}
