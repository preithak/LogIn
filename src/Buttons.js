import React, {Component} from 'react';

import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Buttons extends Component{
    
    render(){
        const { disabled, label, onPress } = this.props;
        const containerStyle = [
          styles.container,
          disabled
            ? styles.containerDisabled
            : styles.containerEnabled
        ];

        

        return(
           <TouchableOpacity
           style={containerStyle}
           onPress={onPress}
           disabled={disabled}
           >
            <Text style={styles.text}>{label}</Text>
           
           </TouchableOpacity>
        );
    }
}

const styles =StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#86D404',
        marginBottom: hp('1'),
        paddingVertical: hp('2'),
        borderRadius: wp('1'),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
      },
      containerEnabled:{
        opacity:1,
      },
      containerDisabled:{
        opacity:0.3
      },
      text: {
        color: 'white',
        textAlign: "center",
        height: hp('3.5'),
        fontSize:hp('2.5')
      }

});

export default Buttons;