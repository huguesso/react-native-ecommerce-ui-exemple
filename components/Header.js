import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


const Header = () => (
  <View style={styles.top}>
    <TouchableOpacity>
        <Icon
          name="grid"
          color="black"
          size={23}
          style={{ padding: 5 }}
        />
    </TouchableOpacity>
    <Text style={styles.logo}>Woman</Text>
    <View style={styles.icons}>
      <TouchableOpacity>
        <Icon
          name="message-square"
          color="black"
          size={23}
          style={{ padding: 5 }}
        />
        <View style={styles.alert}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="shopping-cart"
          color="black"
          size={23}
          style={{ padding: 5 }}
        />
        <View style={styles.alert}></View>
      </TouchableOpacity>
    </View>
  </View>
  );

export default Header;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    
  },
  logo: {
    fontSize: 23,
    color: 'black',
    margin: 10,
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
  },
  alert:{
      height:11,
      width:11,
      borderRadius:50,
      position:"absolute",
      backgroundColor:"#fd9014",
      right:2,
      top:2
  }
});