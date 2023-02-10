import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { siteMap } from '../Assets'

export default function HomePages() {
  return (
    <VStack height={'30%'} display={'flex'} justifyContent={"center"} alignItems={"flex-start"} flexDirection={'column'} spacing="5">
      <Text>
        DengueML implements a random forest model to predict anti-dengue properties of compounds. It allows the repurposing of compounds and drugs by predicting whether they are active against dengue virus.
      </Text>



      <Text>
        DengueML’s underlying model scored the following when tested:
        <ul style={{marginLeft: "50px"}}>
          <li>Accuracy - 0.94</li>
          <li>Area Under ROC curve (AUC-ROC) - 0.8</li>
          <li>Precision - 0.94</li>
          <li>Recall - 0.94</li>
        </ul>
      </Text>


      <Text>DengueML takes the SMILES structures of compounds as input and returns a prediction of the compound’s activity against Dengue virus alongside a confidence value (between 0 and 1)</Text>
    </VStack>
  )
}
