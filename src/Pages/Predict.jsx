import {
  Box, Flex, Input, Stack, VStack, Text, Button, Divider, Heading, Tag, Show, StatGroup, Stat, StatLabel,
  StatHelpText,
  StatArrow
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { apiService } from '../Services/ApiServices';
import { Colors } from '../Utils'

export default function Predict() {
  const [isLoading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);
  const [compound, setCompound] = useState('');
  const [file, setFile] = useState();
  const [fileDataResult, setFileDataResult] = useState([]);

  const toggleLoading = (val) => {
    setLoading((_prev) => (val));
    if (val === true) {
      setFileDataResult((_prev) => ([]))
    }
  }
  const toggleDone = (val) => setDone((_prev) => (val))

  const handleCompoundSubmit = async () => {
    toggleLoading(true);
    toggleDone(false);
    const result = await apiService.postCompound({ cpd: compound });
    if (result?.success === true) {
      const _data = result?.data;
      const _formattedData = [];
      _formattedData.push({
        compound: compound,
        confidence: _data.confidence,
        prediction: parseInt(`${_data?.prediction || 0}`, 10) === 1,
      })
      setFileDataResult((_prev) => (_formattedData))
    }
    toggleLoading(false);
    toggleDone(true);
  }

  const handleFileSubmit = async () => {
    toggleLoading(true);
    toggleDone(false);
    const result = await apiService.postFile({ cpd: file });
    if (result?.success === true) {
      const _data = result?.data;
      const _formattedData = [];
      for (let _index = 0; _index < _data?.compound?.length; _index++) {
        _formattedData.push({
          compound: _data?.compound[_index],
          confidence: _data?.confidence[_index],
          prediction: parseInt(`${_data?.prediction[_index] || 0}`, 10) === 1,
        })
      }
      setFileDataResult((_prev) => (_formattedData))
    }
    toggleLoading(false);
    toggleDone(true);
  }

  const changeCompound = (e) => setCompound((_prev) => (e?.target?.value))
  const changeFile = (e) => {
    setFile((_prev) => (e.target.files[0]));
  }


  const handleExampleClick = () => {
    document.getElementById("compound-input").value = "CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl";
    setCompound((_prev) => "CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl");
  }

  return (
    <VStack minW={'full'} spacing={10} flexWrap="wrap">
      {/* user input form */}
      <Box display={"flex"} justifyContent="space-around" minW={"full"} borderWidth={1} borderTopWidth={30} borderColor={Colors.primary} overflowWrap="anywhere" flexWrap={"wrap"}>
        <Stack p={12} flex={1} >
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ display: "inline" }}>Compound in SMILES notations</Text>
            <Button w={"50px"} h={"20px"} fontSize={"10px"} bg={Colors.primary} color={'#fff'} marginLeft={"10px"} onClick={handleExampleClick}>Example</Button>
          </Box>
          <Input onChange={changeCompound} type={"text"} placeholder='CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl' id='compound-input' />
          <Button isLoading={isLoading} onClick={handleCompoundSubmit} w={"fit-content"} bg={Colors.primary} color={'#fff'} >Submit</Button>
        </Stack>
        <Show above="md" >
          <Divider orientation='vertical' />
        </Show>
        <Stack p={12} flex={1} >
          <Text>Text file of SMILES notations</Text>
          <Input type={"file"} onChange={changeFile} />
          <Flex justifyContent={'space-between'}>
            <Button isLoading={isLoading} onClick={handleFileSubmit} w={"fit-content"} bg={Colors.primary} color={'#fff'} >Upload</Button>
          </Flex>
        </Stack>

      </Box>
      {/* Result display */}


      {!isLoading && isDone &&
        <VStack minW={"full"} borderWidth={1} borderTopWidth={30} borderColor={Colors.primary} p={12} spacing="10" align={"flex-start"} flexWrap={"wrap"} >
          <VStack align={"flex-start"} textAlign={"left"} minW={"full"}>
            <Heading>Result</Heading>
            <StatGroup  >

              {fileDataResult?.map((val, index, arr)   => <Stat mr={5}>
                <StatLabel>{val?.compound}</StatLabel>
                <Tag colorScheme={val?.prediction ? "green" : "gray"} >{val?.prediction ? "Active" : "Inactive"}</Tag>
                <StatHelpText>
                  <StatArrow type={val?.prediction ? "increase" : "decrease"} />
                  {val?.confidence} {"  Confidence"}
                </StatHelpText>
              </Stat>
              )}

            </StatGroup>


          </VStack>
        </VStack>
      }


    </VStack>
  )
}
