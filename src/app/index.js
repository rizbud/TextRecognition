import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth } from '../libraries/responsive'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import ml from '@react-native-firebase/ml'

const Main = (props) => {
  const [response, setResponse] = useState(null)
  const [text, setText] = useState(null)

  const handleClick = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, async (res) => {
      setResponse(res)
      const process = await ml().cloudDocumentTextRecognizerProcessImage(res.uri)
      console.log(process)
      setText(process.text)
    })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={handleClick}>
          <Text>Klik Saya</Text>
        </TouchableOpacity>
        {response  && (
          <Image
            source={{ uri: response.uri }}
            style={{ width: responsiveWidth(95), height: response.height }}
            resizeMethod="resize"
            resizeMode="stretch"
          />
        )}
        {text && <Text>{text}</Text>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Main