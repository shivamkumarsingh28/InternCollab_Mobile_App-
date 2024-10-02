import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { colors } from "../constants/theme";
  import { fonts } from "../constants/fonts";
  
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { useNavigation } from "@react-navigation/native";
  
  const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    const handleLogin = () => {
      navigation.navigate("Login");
    };

    const handleHome = () => {
      navigation.navigate("Root");
    };

    const SignupUser = async () => {
  
        const response = await fetch('http://192.168.100.53:8080/api/auth/register',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({
                userName: username,
                email: email,
                password: password,
            })
        });
        if (response.ok) {
            const data = await response.json();
            // await AsyncStorage.setItem('accessToken', data['token']);
            // Alert("ready to go home page")
            console.log(data);
            navigation.navigate("Login");
    
        }
    }
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
          <Ionicons
            name={"arrow-back-outline"}
            color={colors.primary}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Let's get</Text>
          <Text style={styles.headingText}>started</Text>
        </View>
        {/* form  */}
        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <SimpleLineIcons
              name={"user"}
              size={30}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your UserName"
              placeholderTextColor={colors.secondary}
              keyboardType="phone-pad"
              onChangeText={(user)=>setUsername(user)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
              onChangeText={(email)=>setEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={colors.secondary}
              secureTextEntry={secureEntery}
              onChangeText={(password)=>setPassword(password)}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntery((prev) => !prev);
              }}
            >
              <SimpleLineIcons name={"eye"} size={20} color={colors.secondary} />
            </TouchableOpacity>
          </View>
          
  
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={SignupUser}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHome}>
              <Text style={styles.signupText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 20,
    },
    backButtonWrapper: {
      height: 40,
      width: 40,
      backgroundColor: colors.gray,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      fontSize: 32,
      color: colors.primary,
      fontFamily: fonts.SemiBold,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.secondary,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      padding: 2,
      marginVertical: 10,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 10,
      fontFamily: fonts.Light,
    },
    forgotPasswordText: {
      textAlign: "right",
      color: colors.primary,
      fontFamily: fonts.SemiBold,
      marginVertical: 10,
    },
    loginButtonWrapper: {
      backgroundColor: colors.primary,
      borderRadius: 100,
      marginTop: 20,
    },
    loginText: {
      color: colors.white,
      fontSize: 20,
      fontFamily: fonts.SemiBold,
      textAlign: "center",
      padding: 10,
    },
    continueText: {
      textAlign: "center",
      marginVertical: 20,
      fontSize: 14,
      fontFamily: fonts.Regular,
      color: colors.primary,
    },
    googleButtonContainer: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 10,
    },
    googleImage: {
      height: 20,
      width: 20,
    },
    googleText: {
      fontSize: 20,
      fontFamily: fonts.SemiBold,
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      gap: 5,
    },
    accountText: {
      color: colors.primary,
      fontFamily: fonts.Regular,
    },
    signupText: {
      color: colors.primary,
      fontFamily: fonts.Bold,
    },
  });
  