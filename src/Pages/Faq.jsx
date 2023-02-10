import { VStack, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <VStack minW={'full'} align={'flex-start'} spacing={'10'}>
      <Box>
        <Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>1. What is DengueML?</Text>
          <Text>
            DengueML is a web server that uses machine learning techniques to
            predict the anti-dengue activity of compounds based on their
            chemical structures.
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            2. How does DengueML works?
          </Text>
          <Text>
            The DengueML platform takes chemical structures (in SMILES
            notations) from users and passes them through our machine-learning
            model. The platform returns the model’s prediction (whether active
            or inactive) alongside the model’s confidence.
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            3. What is the meaning of a query with output, for example, active
            with a 0.85 confidence score?
          </Text>
          <Text>
            This means the submitted query or compound may elicit anti-dengue properties, and the model is 0.85 (out of 1.0) confident with its prediction
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            4. Are there any limitations with DengueML?
          </Text>
          <Text>
            Yes, there are. The model is limited to the chemical space defined by its training dataset.
            As we train the model on bigger datasets, we hope to expand the domain of the model.
            Also, DengueML’s predictions need to be corroborated with experimental validation.
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            5. Will there be any future updates or modifications to DengueML?
          </Text>
          <Text>
            Yes, we are continually training the model on bigger and better
            datasets to improve the model’s performance.
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            6. What is the current version of DengueML?{' '}
          </Text>
          <Text>The current version of DengueML is version 1.0 </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>
            7. Where can I send any other questions or my complaints?
          </Text>
          <Text>
            Please send complaints on the About Page <Link style={{color: "blue"}} to={"/about"}>here</Link>
          </Text>
          <Text style={{ fontWeight: 'bolder', marginTop: '10px' }}>8. How to cite DengueML?</Text>
          <Text>
            Please cite as DengueML(www.dengueml.com)
          </Text>
        </Text>
      </Box>
    </VStack>
  );
}
