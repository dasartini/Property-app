import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { Image } from 'react-native'
import icons from '@/constants/icons'

const signIn = () => {

  const handleLogin = () => {

  }



  return (
    <SafeAreaView className='"bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className="w-full h-4/6"/>
        <View className='px-10'>

          <Text className='text-base text-center uppecase font-rubik text-black-200'> Welcome to thingy</Text>
          <Text className='text-3xl text-center font-rubik-bold'>Let's get you closer to {"\n"}
            <Text className='text-primary-300 font-rubik-bold'>Your ideal home</Text>
          </Text>

          <Text className='text-lg font-rubik rext-black-200 text-center mt-5'> Login to ReState with Google</Text>
        </View>

        <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>

          <View className='flex flex-row items-center justify-center'>
            <Image
              source={icons.google}
              className='w-5 h-5' />
              <Text className='font-rubik-medium text-black-300 ml-5'>Continue with Google</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}

export default signIn