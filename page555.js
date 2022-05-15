// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Dimensions, Modal, Image, Animated, ActivityIndicator, StatusBar, FlatList, ScrollView, ImageBackground, PermissionsAndroid } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import *as  ImagePicker from 'react-native-image-picker'
// import Slider from '@react-native-community/slider';
// import { Button, Menu, Divider, Provider } from 'react-native-paper';
// const { height, width } = Dimensions.get('screen')

// export default function Page2({ navigation }) {
//     const [img, setimg] = useState("")
//     const [visible, setVisible] = React.useState(false);

//     const openMenu = () => setVisible(true);

//     const closeMenu = () => setVisible(false);

//     const countries = ["select photo", "upload Your photo"]




//     async function requestCameraPermission() {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.CAMERA,
//                 {
//                     title: "Cool Photo App Camera Permission",
//                     message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
//                     buttonNeutral: "Ask Me Later",
//                     buttonNegative: "Cancel",
//                     buttonPositive: "OK"
//                 });
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log("You can use the camera");
//             } else {
//                 console.log("Camera permission denied");
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };
//     useEffect(() => {
//         requestCameraPermission()
//     }, [])


//     function selectFromGallery() {

//         let options = {
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };
//         ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
//             // console.log('Response = ', res);

//             if (res.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (res.error) {
//                 console.log('ImagePicker Error: ', res.error);
//             } else if (res.customButton) {
//                 console.log('User tapped custom button: ', res.customButton);
//                 alert(res.customButton);
//             } else {

//                 setimg(res.assets[0].uri)
//             }
//         });

//     }

//     function launchCamera() {
//         let options = {
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };
//         ImagePicker.launchCamera(options, (res) => {
//             console.log('Response = ', res);

//             if (res.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (res.error) {
//                 console.log('ImagePicker Error: ', res.error);
//             } else if (res.customButton) {
//                 console.log('User tapped custom button: ', res.customButton);
//                 alert(res.customButton);
//             } else {
//                 setimg(res.assets[0].uri)
//             }
//         });

//     }
//     const [m, setm] = useState(false)
//     const [m1, setm1] = useState(false)
//     const [m2, setm2] = useState(false)
//     const [arr, setarr] = useState([

//         {
//             name: "Ahmed hamed",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Salah Darwish",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Zenhom",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Ebn_samir",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Zenhom ",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "mamdouh",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Rsaln_Box",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//         {
//             name: "Mohamed_saied",
//             image: require('../img/9.jpeg'),
//             show: false,
//         },
//     ])


//     return (

//         <>
//             <StatusBar
//                 backgroundColor={"#000"}
//             />

//             <View
//                 style={{ width: width, height: height, backgroundColor: "#000" }}
//             >
//                 <View
//                     style={{ width: width, height: height * 0.06, justifyContent: "space-between", flexDirection: "row", backgroundColor: "#000", alignItems: "center", paddingHorizontal: 10 }}
//                 >
//                     <View
//                         style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#000" }}
//                     >
//                         <Text
//                             style={{ fontSize: 30, color: "#fff", fontFamily: "DancingScript-VariableFont_wght" }}
//                         >
//                             instegram
//                         </Text>


//                     </View>

//                     <View
//                         style={{ width: width * 0.3, height: height * 0.07, alignItems: "center", justifyContent: "space-between", flexDirection: "row", padding: 5 }}
//                     >
//                         <TouchableOpacity

//                         >
//                             <Icon
//                                 name={"plus-square"}
//                                 size={25}
//                                 color="#fff"

//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity>
//                             <Icon
//                                 name={"heart"}
//                                 size={25}
//                                 color="#fff"

//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity>

//                             <Image
//                                 source={require('../img/8.jpeg')}
//                                 style={{ width: width * 0.06, height: height * 0.06, borderRadius: 20 }}
//                                 resizeMode="contain"
//                             />

//                         </TouchableOpacity>

//                     </View>
//                 </View>
//                 <View
//                     style={{ paddingHorizontal: 10, width: width, height: height * 0.15, backgroundColor: "#", alignItems: "center", justifyContent: "center", flexDirection: "row" }}
//                 >
//                     <ScrollView
//                         horizontal={true}
//                     >
//                         <View
//                             style={{ alignItems: "center", justifyContent: "center", height: height * 0.40, width: width * 0.24, }}
//                         >
//                             <Provider>

//                                 <Menu
//                                     visible={visible}
//                                     onDismiss={closeMenu}
//                                     anchor={<Button onPress={openMenu}>




//                                     </Button>}>
//                                     <Menu.Item onPress={() => { }} title="select Photo" />
//                                     <Divider />
//                                     <Menu.Item onPress={() => { }} title="Upload Photo" />
//                                 </Menu>

//                             </Provider>


//                             <View
//                                 style={{ height: height * 0.02 }}
//                             >
//                                 <Text style={{ color: "#fff", fontSize: 12 }}>Your Story</Text>
//                             </View>

//                         </View>

//                         {arr.map((item, index) =>
//                             <>
//                                 <View
//                                     style={{ alignItems: "center", justifyContent: "center", height: height * 0.12, width: width * 0.24, }}
//                                 >

//                                     <TouchableOpacity
//                                         onPress={() =>
//                                             setm1(true)
//                                         }
//                                         style={{ width: width * 0.18, height: height * 0.08, borderRadius: 180, backgroundColor: "#000", }}
//                                     >

//                                         <Image
//                                             source={item.image}
//                                             style={{ width: width * 0.18, height: height * 0.08, borderRadius: 180, }}


//                                         />
//                                     </TouchableOpacity>

//                                     <View
//                                         style={{ height: height * 0.02 }}
//                                     >
//                                         <Text style={{ color: "#fff", fontSize: 12, textTransform: 'lowercase' }}>{item.name}</Text>
//                                     </View>
//                                 </View>
//                             </>
//                         )}
//                     </ScrollView>
//                 </View>


//             </View>
//         </>
//     )
// }

// // import * as React from 'react';
// // import { View, Image } from 'react-native';
// // import { Button, Menu, Divider, Provider, } from 'react-native-paper';
// // export default function Page2({ navigation }) {

// //     const [visible, setVisible] = React.useState(false);

// //     const openMenu = () => setVisible(true);

// //     const closeMenu = () => setVisible(false);

// //     return (
// //         <Provider>

// //             <Menu
// //                 visible={visible}
// //                 onDismiss={closeMenu}
// //                 anchor={<Button onPress={openMenu}>
// //                     <View
// //                         style={{ width: width * 0.18, height: height * 0.08, borderRadius: 180, backgroundColor: "#000", }}

// //                     >
// //                         <Image
// //                             source={require('../img/9.jpeg')}
// //                             style={{ width: width * 0.18, height: height * 0.08, borderRadius: 180, }}
// //                         />

// //                         <View
// //                             style={{ width: width * 0.09, backgroundColor: "#000", height: height * 0.04, borderRadius: 20, marginLeft: width * 0.12, marginTop: height * -0.04, alignItems: "center", justifyContent: "center" }}
// //                         >
// //                             <Icon
// //                                 name="plus-circle"
// //                                 size={25}
// //                                 color={"#fff"}
// //                             />
// //                         </View>
// //                     </View>



// //                 </Button>}>
// //                 <Menu.Item onPress={() => { }} title="select Photo" />
// //                 <Divider />
// //                 <Menu.Item onPress={() => { }} title="Upload Photo" />
// //             </Menu>

// //         </Provider>
// //     );
// // };

<Provider>

    <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>
        </Button>}>
        <Menu.Item onPress={() => { }} title="select Photo" />                 <Divider />
        <Menu.Item onPress={() => { }} title="Upload Photo" />
    </Menu>

</Provider>
