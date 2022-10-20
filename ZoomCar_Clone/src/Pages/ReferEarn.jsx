import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import {BsWhatsapp} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";
import {TbBrandTwitter} from "react-icons/tb";
import {GiBreakingChain} from "react-icons/gi";
 
export const ReferEarn = () => {

  return (
    <Stack  margin="auto" alignSelf="center" >
        <VStack textAlign="left" alignItems="flex-start" p={5} spacing={5} >

       
            <Text as="b" fontSize={20}>Refer And Earn</Text>
            <Text>You Earn ₹4,999/-</Text>
            <Text>Your Friend Gets upto ₹4,999/-</Text>
            <Text>You Both Win</Text>
            <Image w="200" h="200" src='https://www.zoomcar.com/zap/subscribe/build/2dac7c3e3ed475d15bf341d377b66ed9.svg'/>
      
        </VStack>

        <Stack direction={{base:"column", md:"row"}} justifyContent="space-around" >
           
                <VStack  >
                <Text fontSize="4xl" p={5}  border="1px solid" borderColor="gray.300" borderRadius={50}  ><BsWhatsapp/></Text>
                <Text><Link to="/">Whatsapp </Link> </Text>
                </VStack>
                <VStack  >
                <Text fontSize="4xl"  p={5}  border="1px solid" borderColor="gray.300" borderRadius={50} ><AiOutlineFacebook/></Text>
                <Text><Link to="/">Facebook </Link> </Text>
                <Text></Text>
                </VStack>
                <VStack >
                <Text fontSize="4xl" p={5}  border="1px solid" borderColor="gray.300" borderRadius={50}  ><TbBrandTwitter/></Text>
                <Text><Link to="/">Twitter </Link> </Text>
                <Text></Text>
                </VStack>
                <VStack >
                <Text fontSize="4xl" p={5}  border="1px solid" borderColor="gray.300" borderRadius={50}  ><GiBreakingChain/></Text>
                <Text><Link to="/">Copy Code </Link> </Text>
                <Text></Text>
                </VStack>
           
        </Stack>
        <Accordion allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton>
    
        Term and Condition
        
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul>
        <li>Referral code must be applied at the time of registering for the program</li>
        <li>Referred Users will become eligible only after successful enrolment of their car and sharing their vehicle on the Zoomcar platform.</li>
        <li>Referrer will be eligible upto ₹5,000 and referred will be eligible upto ₹5,000 for every successful enrollment</li>
        <li>The referral bonuses will be disbursed as per the below mentioned schedule:</li>
        <li>The referrer and the referred person would get the amount credited directly to their Zoomcar account. If the referrer is a non-host, then the referral benefit will be credited to their bank account</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
    </Stack>
  )
}
