import { VStack, Tag, Text, Box, Divider, Flex, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { legonLogo, waccBipLogo } from '../Assets'

export default function About() {
  return (
    <VStack minW={"full"} align={"flex-start"} spacing={"10"} >

      <Tag size={"lg"} >Developers</Tag>
      <Box borderBottom={'1px solid #ccc'}>
        <Text style={{fontWeight: 'bolder', fontSize: '18px'}}>Samuel Kojo Kwofie, PhD</Text>
        <Text>Email: skkwofie@ug.edu.gh</Text>
        <Text>Department of Biomedical Engineering,</Text>
        <Text>School of Engineering Sciences,</Text>
        <Text>University of Ghana,</Text>
        <Text>Legon, Accra</Text>
      </Box>


      <Box borderBottom={'1px solid #ccc'}>
        <Text style={{fontWeight: 'bolder', fontSize: '18px'}}>Issah Abubakari Samori</Text>
        <Text>Email: issahsamori@gmail.com</Text>
        <Text>Department of Biomedical Engineering</Text>
        <Text>School of Engineering Sciences</Text>
        <Text>University of Ghana</Text>
        <Text>Legon, Accra</Text>
      </Box>
      <Divider />
      <Tag size={"lg"} >Affiliations</Tag>
      <Flex flexWrap={"wrap"}>
        <Box display={"flex"} pt="3">
          <Image src={legonLogo} width={55} height={55} />
          <Heading maxW={60} size="md" >{`Department of  Biomedical Engineering`}</Heading>
        </Box>

        <Image src={waccBipLogo} width={170} height={100} ms={12} />

      </Flex>
    </VStack>
  )
}
