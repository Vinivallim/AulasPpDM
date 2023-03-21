import React from 'react'
import { View, Text } from 'react-native'

import { Comp1, Comp2, Comp3 } from './src/Multi'
import CatApp from './src/Cat'
import Cafe from './src/Catstate'
import DisplayAnImage from './src/CatImage'

export default () => (
  <View>
    <CatApp/>
    <Comp1/>
    <Cafe/>
    <DisplayAnImage/>
  </View>
)
