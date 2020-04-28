import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  Platform,
  Dimensions,
  ImageBackground,
  ScrollView 
} from 'react-native';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather';

const width = Dimensions.get("window").width ;
const cat1 = require("./assets/images/1.jpg") ;
const cat2 = require("./assets/images/2.jpg") ;
const cat3 = require("./assets/images/3.jpg") ;
const cat4 = require("./assets/images/4.jpg") ;
const prod1 = require("./assets/images/products/1.jpg") ;
const prod2 = require("./assets/images/products/2.jpg") ;
const prod3 = require("./assets/images/products/3.jpg") ;
const prod4 = require("./assets/images/products/4.jpeg") ;
const prod5 = require("./assets/images/products/5.jpg") ;
const prod6 = require("./assets/images/products/6.jpg") ;


import Header from "./components/Header" ;

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.blockHeader}>
        <View style={styles.search}>
          <TextInput
              style={styles.textInputStyle}
              onChangeText={text => console.log(text)}
              value={'What are you looking  for ?'}
              underlineColorAndroid="transparent"
              placeholder="What are you looking  for ?"
          />
          <View style={styles.iconSearchable}>
            <Icon name="search" size={23} color="gray" />
          </View>
        </View>
        <View style={styles.category}>
            <View style={[styles.item,{flexDirection:"row"}]}>
              <Icon name="file-text" size={23} color="black" />
              <Text style={styles.text}>Categories</Text>
            </View>
            <View style={styles.vertical}></View>
            <View style={[styles.item,{flexDirection:"row"}]}>
                <Icon name="camera" size={23} color="black" />
                <Text style={styles.text}>Best deal</Text>
            </View>
        </View>
      </View>
      <View style={styles.body}> 
        <ScrollView>
        <ScrollView
          horizontal={true}
        > 
        {/* just define data array objet to simplifie this 
          data=[{
            'image':'',
            'title':'',
            'price':''
          }]
          and map array  
        */}
          <ImageBackground source={cat4} style={styles.element}>
              <View style={styles.elementText}>
                <Text style={styles.textElement}>Stich detail tunic</Text>
                <Text style={styles.textElement}>$88.00</Text>
              </View>
          </ImageBackground>
          <ImageBackground source={cat2} style={styles.element}>
              <View style={styles.elementText}>
                <Text style={styles.textElement}>Hello detail nother</Text>
                <Text style={styles.textElement}>$55.00</Text>
              </View>
          </ImageBackground>
          <ImageBackground source={cat3} style={styles.element}>
              <View style={styles.elementText}>
                <Text style={styles.textElement}>Tribled detail huirte</Text>
                <Text style={styles.textElement}>$100.00</Text>
              </View>
          </ImageBackground>
        </ScrollView>
          <View>
            <Text style={{padding:15,fontSize:25,fontWeight:"bold"}}>Produits</Text>
          </View>
          <View style={styles.product}>
            <View style={styles.productItem}>
              <ImageBackground source={prod1} style={styles.productItemImage}>
                <Text style={styles.textPositionAlert}>New</Text>
              </ImageBackground>
              <Text style={styles.text}>Rainchard Blue</Text>
              <Text style={styles.text}>$55.0</Text>
            </View>
            <View style={[styles.productItem]}>
              <ImageBackground source={prod2} style={styles.productItemImage}>
                {/* <Text style={styles.textPositionAlert}>New</Text> */}
              </ImageBackground>
              <Text style={styles.text}>Sumple black</Text>
              <Text style={styles.text}>$55.0</Text>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.productItem}>
              <ImageBackground source={prod4} style={styles.productItemImage}>
                {/* <Text style={styles.textPositionAlert}>New</Text> */}
              </ImageBackground>
              <Text style={styles.text}>Tainchard </Text>
              <Text style={styles.text}>$77.0</Text>
            </View>
            <View style={[styles.productItem]}>
              <ImageBackground source={prod6} style={styles.productItemImage}>
                <Text style={styles.textPositionAlert}>New</Text>
                <Text style={[styles.textPositionAlert,{top:30,backgroundColor:"#fd9014"}]}>Sale</Text>
              </ImageBackground>
              <Text style={styles.text}>Purtheru black</Text>
              <Text style={styles.text}>$85.0</Text>
            </View>
          </View>
        </ScrollView>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
  search:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"#fff",
    borderColor:"#fff",
  },
  textInputStyle:{
    height: 50,
    borderWidth: 1,
    width:width*0.95,
    paddingLeft: 10,
    borderColor: '#cecece',
    backgroundColor: '#FFFFFF',
  },
  iconSearchable:{
    position:"absolute",
    right:25,
    top:11,
    alignItems:"center",
    justifyContent:"center",
  },
  blockHeader:{
    flex:1,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  body:{
    flex:4,
    marginTop:10,
  },
  category:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#fff"
  },
  vertical:{
    height:30,
    borderWidth:1,
    marginTop:15

  },
  item:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    paddingLeft:10,
    fontSize:15
  },
  element:{
    resizeMode:'cover',
    flex:1,
    justifyContent:"center",
    width:width*0.55,
    height:250,
    marginRight:15
  },
  elementText:{
    position:"absolute",
    bottom:10,
    // paddingBottom:10,
    paddingLeft:10,
  },
  textElement:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
  },
  text:{
    color:"gray",
    fontSize:15,
    fontWeight:"bold",
    paddingLeft:10
  },
  product:{
    flex:1,
    flexDirection:"row",
    marginLeft:8,
    marginRight:8
  },
  productItem:{
    flex:1,
    height:200,
    marginRight:5,
    marginTop:20
  },
  productItemImage:{
    resizeMode:"cover",
    flex:1,
    justifyContent:"center",
  },
  textPositionAlert:{
    position:"absolute",
    left:10,
    top:5,
    color:"#fff",
    backgroundColor:"green",
    width:40,
    borderRadius:3,
    textAlign:"center",
  }
});
