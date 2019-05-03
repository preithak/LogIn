import React, { Component } from 'react';
 
import { StyleSheet, View, Image, KeyboardAvoidingView, Alert , Text, TouchableOpacity, StatusBar} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="white" />

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ForInput from '../src/ForInput';

import Buttons from '../src/Buttons';

import imgLogo from '../assets/meem.jpeg';

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={email:'', password:'', emailTouched:false, passwordTouched:false, hidePassword:true};

    };

    //to store the email value
    handleEmail = (email) => {
        this.setState({email:email});
    };
    //to store password value
    handlePassword = (password) => {
        this.setState({password:password});
    };
    //to handle login press
    handleLogInPress = () =>{
        Alert.alert('Thank you for Logging In','Username: '+this.state.email+'\nPassword: '+this.state.password);
    };
    
    //create a reference for password TextInput which will be assigned later
    passwordRef = React.createRef();
    //focus on password when next button pressed in email
    handleEmailPress = () => {
        if (this.passwordRef.current) {
            this.passwordRef.current.focus();
        }
    };

    //to check if email & password is entered
    //for checking if email field has been blured
    handleEmailBlur = () => {
        this.setState({ emailTouched: true });
      };
    //for checking if password field has beed blured
    handlePasswordBlur = () => {
        this.setState({ passwordTouched: true });
      };

    managePasswordVisibility = () =>
    {
    this.setState({ hidePassword: !this.state.hidePassword });
    }
    
    render() {
        const {email, password, emailTouched, passwordTouched} = this.state;

        const emailError = !email && emailTouched ? 'This field can\'t be empty' : undefined;
        const passwordError = !password && passwordTouched ? 'This field can\'t be empty' : undefined;
        const visible12 = 'visibility';
        const visible22 = 'visibility-off';
        return(
            <KeyboardAvoidingView style={styles.container} >
            {/* <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor='black'/> */}
            
                <Image source={imgLogo} style={styles.img}/>

                <View style={styles.form}>

                    {/* Test Icon
                    {myIcon}
                    */}
                    <View style={styles.textContainerUsername}>
                        <ForInput
                            value={this.state.email}
                            placeholder='Username'
                            placeholderTextColor="white" 
                            onChangeText={this.handleEmail} 
                            keyboardType='email-address'
                            autoCorrect={false}
                            returnKeyType='next'
                            onSubmitEditing={this.handleEmailPress}
                            onBlur={this.handleEmailBlur}
                            error={emailError}

                        />
                    </View>
                    
                    <View style={styles.textContainerPassword}>
                    <View
                    style = {styles.forPass}>
                    <View
                    style={styles.forPassInputWrite}>                    
                    <ForInput
                        ref={this.passwordRef} //assign the created reference to this TextInput
                        value={this.state.password}
                        placeholder='Password'
                        placeholderTextColor="white" 
                        secureTextEntry = {this.state.hidePassword}
                        onChangeText={this.handlePassword}
                        returnKeyType='done'
                        onBlur={this.handlePasswordBlur}
                        error={passwordError}
                        
                    />
                    </View>

                    <View
                    style={styles.forPassInputShow}>
                     <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.passwordVisibleBtn}
                        onPress={this.managePasswordVisibility}
                    >
                        <MaterialIcons name={this.state.hidePassword ? visible12 : visible22 }
                            color='white'
                            size={hp('5')}/>
                    </TouchableOpacity> 
                    </View>

                    </View>
                    </View>
                    <Buttons 
                        label='Log In' 
                        onPress={this.handleLogInPress}
                        disabled={!email || !password}
                    />

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    img:{
        flex: 1,
        resizeMode: "contain",
        alignSelf: "center",
        width:wp('75%'),
      },
    form:{
        flex:1,
        justifyContent:'center',
        width:'80%',
    },
    textContainerUsername:{
        height:hp('6'),
        borderBottomWidth:2,
        borderBottomColor:'#86D404',
        marginBottom:hp('3')
    },
    textContainerPassword:{
        height:hp('6'),
        borderBottomWidth:2,
        borderBottomColor:'#86D404',
        marginBottom:hp('5'),
        marginTop:hp('1'),
    },
    forPass: {
        flexDirection :'row',
    },
    forPassInputWrite:{
        flex:1,
    },
    forPassInputShow:{
        width:wp('10')
    },
});
export default LoginScreen;