import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../index'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-green-600 `}  >
        <View  style={tw`flex-1 justify-around my-4`}>
            <Text 
                style={tw`text-white font-bold text-4xl text-center`}  >
                Let's Get Started!
            </Text>
            <View style={tw`flex-row justify-center`} >
                <Image source={require('../assests/images/inner.png')}
                    style={{width: 350, height: 350}} />
            </View>
            <View >
                <TouchableOpacity
                   onPress={()=> navigation.navigate('SignUp')}
                    style={tw`py-3 bg-yellow-400 mx-7 rounded-xl`}>
                        <Text 
                            style={tw`text-xl font-bold text-center text-gray-700`}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View style={tw`flex-row justify-center`} >
                    <Text style={tw`text-white font-semibold`}>Already have an account?</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Login')}  >
                        <Text style={tw`font-semibold text-yellow-400`}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}