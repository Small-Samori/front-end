import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { siteMap } from '../Assets'

export default function HomePages() {
  return (
    <VStack height={'20%'} display={'flex'} justifyContent={"center"} alignItems={"flex-start"} flexDirection={'column'} spacing="5">
      <Text>DengueML implements a random forest model to predict anti-dengue virus activity of queried compounds. 
        It allows for the repurposing of compounds including drugs by predicting whether they are active against dengue virus. 
        The robust machine learning model underlying DengueML was trained using bioactive dataset obtained from dengue virus inhibition study with an accuracy, 
        area under the curve of the receiver operating characteristics curve (AUC-ROC), precision and recall of 0.94, 0.8, 0.94 and 0.94, respectively. 
        DengueML takes the SMILES structures of compounds as input and returns a predicted anti-dengue virus activity alongside a confidence score (between 0 and 1).</Text>
    </VStack>
  )
}
