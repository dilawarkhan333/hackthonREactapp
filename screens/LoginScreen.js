import { View, Text, TouchableOpacity, Image, TextInput,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../index'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import auth from '@react-native-firebase/auth';


// signInWithEmailAndPassword

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const LoginUser = () => {
   
  auth().signInWithEmailAndPassword(email,password)
 
    .then(() => {
      console.log('User account created & signed in!');
      navigation.navigate("Home")
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
       
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });

}




  return (
    <View style={tw`flex-1 bg-green-600 `} >
        <ScrollView>
        
      <SafeAreaView  style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View  style={tw`flex-row justify-center`}>
          <Image source={require('../assests/images/login.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
     
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor:"white",paddingTop:32, paddingLeft:32,paddingRight:32}} 
       >
          
          <View style={tw`form space-y-2`}>
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
            <TouchableOpacity style="flex items-end">
              <Text style={tw`text-gray-700 mb-5`}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
      
      onPress={()=> LoginUser('Login') }
          style={tw`py-3 bg-yellow-400 rounded-xl`}
      >
          <Text style={tw`font-xl font-bold text-center text-gray-700`}>
              Login
          </Text>
      </TouchableOpacity>
            
          </View>
          <Text style={tw`text-xl text-gray-700 font-bold text-center py-5`}>Or</Text>
          <View style={tw`flex-row justify-center space-x-12`}>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require('../assests/icons/google.png')} style="w-10 h-10" />
            </TouchableOpacity>
            {/* <TouchableOpacity style="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/apple.png')} style="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity style="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/facebook.png')} style="w-10 h-10" />
            </TouchableOpacity> */}
          </View>
          <View style={tw`flex-row justify-center mt-7`}>
              <Text style={tw`text-gray-500 font-semibold`}>
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text style={tw`font-semibold text-yellow-500`}> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
      </ScrollView>
    </View>
    
  )
}