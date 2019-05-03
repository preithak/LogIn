import React, {Component} from 'react';

import {StyleSheet,TextInputProps, Text, View, TextInput,} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// props=TextInputProps &{
//     error?:string 
// };

class ForInput extends Component{
    constructor(props){
        super(props);
        this.state={isFocused:false};
    }
    textInputRef = React.createRef();
    focus = () => {
        if (this.textInputRef.current) {
          this.textInputRef.current.focus();
        }
      };


    render(){
        const{error, style, ...otherProps} = this.props;
        return(
            <View style={[styles.container, style]}>
                <TextInput
                ref={this.textInputRef}
                selectionColor='#86D404'
                style={[styles.forInput, style]}
                {...otherProps}
                />
                <Text style={styles.errorText}>{error || ""}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: hp('0.5')
      },    
    forInput:{
        height: hp('6'),
        //borderColor: '#86D404',
        //backgroundColor:'white',
       // borderBottomWidth: StyleSheet.hairlineWidth,
       //marginTop: hp('1'),
       //marginBottom: hp('1'),
        color:'white',
        fontSize:hp('2.5'),
        //backgroundColor:'red'

    },
    errorText: {
        // Setting a fixed text height prevents the label
        // "jump" when we show/hide it
        height: hp('3'),
        color: 'red'
      }
});

export default ForInput;