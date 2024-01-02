import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native'
import React,{useState} from 'react'
import { themeColors } from '../index'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import tw from 'twrnc';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const createUser = () => {
      
      auth().createUserWithEmailAndPassword(email,password)
     
        .then(() => {
         Alert('User account created');
          navigation.navigate("Login")
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert('That email address is already in use!');
           
          }
      
          if (error.code === 'auth/invalid-email') {
            Alert('That email address is invalid!');
          }
      
          console.error(error);
        });

    }

  return (
    <View style={tw`flex-1 bg-white bg-green-600 `}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
            <TouchableOpacity 
                
                style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
            <Image source={require('../assests/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <ScrollView>
      <View style={tw`flex-1 bg-white px-8 pt-8 rounded-tl-3xl rounded-tr-3xl mt-10`}
       
      >
      
        <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4`}>Full Name</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
                value={name}
                placeholder='Enter Your Name'
                onChangeText={txt=>setName(txt)}
            />
            <Text style={tw`text-gray-700 ml-4`}>Email Address</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
                value={email}
                placeholder='Enter Email'
                onChangeText={txt=>setEmail(txt)}
            />
            <Text style={tw`text-gray-700 ml-4`}>Password</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7`}
                secureTextEntry
                value={password}
                placeholder='Enter Password'
                onChangeText={txt=>setPassword(txt)}
            />
            <TouchableOpacity
      
            onPress={()=> createUser('Signup') }
                style={tw`py-3 bg-yellow-400 rounded-xl`}
            >
                <Text style={tw`font-xl font-bold text-center text-gray-700`}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        
        </View>
       
        <Text style={tw`text-xl text-gray-700 font-bold text-center py-5`}>
            Or
        </Text>
        <View style={tw`flex-row justify-center`}>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
                <Image source={require('../assests/icons/google.png')} 
                    style={tw`w-10 h-10`} />
            </TouchableOpacity>
            {/* <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity> */}
        </View>
        <View style={tw`flex-row justify-center mt-7`}>
            <Text style={tw`text-gray-500 font-semibold`}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
                <Text style={tw`font-semibold text-yellow-500`}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
    
  )
}