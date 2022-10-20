import React from 'react'
import { Box, Divider, Flex, HStack, Image, Link, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import {IoMdCall} from "react-icons/io";

export const Contact = () => {
  return (
    <Stack alignSelf="center" >
        <VStack>
            <Image w="400" h="400" src='https://www.zoomcar.com/zap/subscribe/build/a5a9b25f3cb492c507d39cc0134cb0c6.svg'/>
        </VStack>
        <Stack direction={{base:"column", md:"row"}}   >
            <VStack p={5} border="1px solid" borderRadius={5} borderColor="gray.300" >
                <Flex flexDirection="column" justifyContent="left" alignItems="left">

                <Text as="b">Write an Email</Text>
                <Text>Expected reply within 24 hours</Text>
                <Link paddingTop={5} color="green" fontSize="15" fontWeight="semibold" to="host.sales.in@zoomcar.com<">host.sales.in@zoomcar.com</Link>
                </Flex>
                
            </VStack>
            <Spacer/>
            <VStack p={5} border="1px solid" borderRadius={5} borderColor="gray.300">
            <Flex flexDirection="column" justifyContent="left" alignItems="left">

                <Text><IoMdCall/></Text>
                <Text as="b">Call Us</Text>
                <Text>Avaliable from 9 am to 9 pm</Text>
                <Text paddingTop={3} color="green" fontWeight="semibold" >0806-897-2200</Text>
                </Flex>
            </VStack>
        </Stack>
       
<Box p={5} textAlign="left" alignItems="flex-start"  bg="#f5f4f5"  borderRadius={5}>
 
 <Text fontWeight="bold" fontSize="6xl" color="gray.300" >NEVER</Text>
 <Text mt="-30px"  fontWeight="bold" fontSize="6xl" color="gray.300" >STOP</Text>
 <Text  mt="-30px" fontWeight="bold" fontSize="6xl" color="gray.300" >LIVING.</Text>
 <Divider />
 
</Box>
        
    </Stack>
  )
}
