import { VStack, Text, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Step_1, Step_2, Step_3 } from '../Assets';

export default function Tutorial() {
  return (
    <VStack minW={'full'} align={'flex-start'} spacing={'10'}>
      <Box>
        <Text style={{ fontWeight: 'bolder', display: 'inline' }}>Step 1:</Text>
        <Text style={{ display: 'inline', marginLeft: '5px' }}>
          Navigate to the “Predict” page of the platform
        </Text>
        <Image src={Step_1} />

        <Text style={{ fontWeight: 'bolder', display: 'inline' }}>Step 2:</Text>
        <Text style={{ display: 'inline', marginLeft: '5px' }}>
          Paste SMILES structure of your compound in the text field
        </Text>
        <Image src={Step_2} />

        <Text style={{ fontWeight: 'bolder', display: 'inline' }}>Step 3:</Text>
        <Text style={{ display: 'inline', marginLeft: '5px' }}>
          Click the “Submit” button to submit compound the analysis
        </Text>
        <Image src={Step_3} />
      </Box>
    </VStack>
  );
}
