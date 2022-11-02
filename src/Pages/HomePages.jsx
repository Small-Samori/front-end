import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { siteMap } from '../Assets'

export default function HomePages() {
  return (
    <VStack align={"flex-start"}  spacing="5">
        <Text>
          DengueML implements a random forest model to predict anti-dengue properties of compounds. It allows the repurposing of compounds and drugs by predicting whether they are active against dengue virus.
        </Text>

        <Text>The pipeline utilized for the machine learning model development is show below:</Text>

        <Image src={siteMap} width="45vw"  />
    </VStack>
  )
}
