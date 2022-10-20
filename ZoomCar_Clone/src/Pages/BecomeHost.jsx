
import { Box, Button, Divider, Highlight, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'

const BecomeHost = () => {
  return (
    <Stack p={5} spacing={10} maxW="1400px" marginTop="50px">
    
    <VStack>
    <Image
      maxW="1600px"
      w="full"
      src="https://www.zoomcar.com/zap/subscribe/build/a2ff940380f1315a0c0aacefb766e858.jpg"
    />

<VStack position={"relative"}  textAlign="left" padding="10" w="50%" alignItems="flex-start" p={5} spacing={10} style={{ top:"-400px", left:"-180px"}} >
       <Text color="white" fontWeight="bold" fontSize="4xl"  >Share Your Car And Earn Up to Rs. 50,000 per Month</Text>
       <Text color="white" >
        7 seater cars get an additional joining bonus of Rs.4500 on Sign up
       </Text>
       <Button size="lg" colorScheme='whatsapp'>Start Earning</Button>

    </VStack>
   
    </VStack>
    

   

    <VStack  >
  
        <Text  marginTop={"-400px"} >SS</Text>
    <video  width="100%" controls autoplay>
      <source src="https://www.zoomcar.com/zap/subscribe/build/64440836bb2a2ee19961407349dece57.mp4" type="video/mp4" />
    </video>
    </VStack>
    <Divider />
   <VStack>
   <Image
   mt={50}
      maxW="1600px"
      w="full"
      src="https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp"
    />
   </VStack>
   <Divider />
   <VStack>
    <Text w="80%" fontSize="5xl" >3 Simple steps to Start Earning with your car in 24 hours</Text>
   </VStack>
   <Divider />
   <VStack>

    <Stack direction={{base:"column", md:"row"}} spacing={5} p={5} >

      <VStack p={5}  w={{base:"100%", md:"50%"}}  textAlign="left" alignItems="flex-start" spacing={10}  >
      <Text fontWeight="semibold" fontSize="4xl" >1. Sign Up for Free</Text>
      <Text color="gray" w="80%" >
      <Highlight query='It takes less than 2 mins' 
      styles={{ color: 'green.500', textDecoration:"underline" }}>
      Become part of the Zoomcar Host program for absolutely free by filling up a short form after sign-up. It takes less than 2 mins to fill the form. No hidden charges
     </Highlight>

      </Text>
      
      </VStack>
 <Spacer />
      <VStack  w={{base:"100%", md:"50%"}} >
        <Image w="50rem" src='https://www.zoomcar.com/zap/subscribe/build/bb6776beb9b8bacdc711e5a43f401134.svg' />
      </VStack>

    </Stack>

    <Stack direction={{base:"column-reverse", md:"row"}} spacing={5} p={5} >

     
      <VStack p={5}  w={{base:"100%", md:"50%"}}>
        <Image w="full" src='https://www.zoomcar.com/zap/subscribe/build/29d798d8bc5d57bf22445ed3cc67cff1.svg' />
      </VStack>

      <Spacer />

      <VStack p={5}  w={{base:"100%", md:"50%"}}  textAlign="left" alignItems="flex-start" spacing={10}  >
      <Text fontWeight="semibold" fontSize="4xl" >2. Set your account for sharing</Text>
      <Text color="gray" >
      <Highlight query='2-4 business' 
      styles={{ color: 'green.500', textDecoration:"underline" }}>
      Once you have signed up on the app, you can download the Zoomcar Host app and within 2-4 business hours, your profile will be available for login. Provide your KYC details & sharing location and you are now ready to share your car
     </Highlight>

      </Text>
      
      </VStack>


    </Stack>

    
    <Stack direction={{base:"column", md:"row"}} spacing={5} p={5} >

      <VStack p={5} w={{base:"100%", md:"50%"}}  textAlign="left" alignItems="flex-start" spacing={10}  >
      <Text fontWeight="semibold" fontSize="4xl" >3. Share your car and Ear</Text>
      <Text color="gray" w="80%" >
      <Highlight query='Now you are ready to receive bookings and earn' 
      styles={{ color: 'green.500', textDecoration:"underline" }}>
      Share your car through the app by selecting the dates when your car is available. Our experts will visit your location at the start of sharing and install the safety devices in your car.
       Now you are ready to receive bookings and earn
     </Highlight>

      </Text>
      
      </VStack>
 <Spacer />
      <VStack  w={{base:"100%", md:"50%"}} >
        <Image w="50rem" src='https://www.zoomcar.com/zap/subscribe/build/fc0cb48e9b85b44423a6660ba79ad43e.svg' />
      </VStack>

    </Stack>

    





   </VStack>
   <Divider />

    <VStack>
      <Text fontWeight="semibold" fontSize="4xl" >
        HOW WE PROTECT YOUR CAR
      </Text>

      <SimpleGrid spacing={5} p={5} columns={{base:2, md:3}} >

          <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

            <Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/e2bfa54a9b46567921c3f14e1276c68e.svg' />

            <Text fontWeight="semibold" fontSize="xl" >
            We cover major damages & repair
            </Text>

            <Text color="gray" >
            Zoomcar provides damage cover and repair handling in case of an unlikely incident of any accident incurred by a guest during the sharing period/when your car is serving a booking.
            </Text>
              
          </VStack>

          <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

<Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/1f4b5b69d928bbf104735bdea4914f79.svg' />

<Text fontWeight="semibold" fontSize="xl" >
Your Car Stays in Safe Hands!
</Text>

<Text color="gray" >
All our renters are verified individuals with valid Driving license, and have excellent driving stats in the past on our platform. We have complete contact and address details of all our renters.
</Text>
  
         </VStack>

          
         <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

<Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/eb002ff59dd838a60fd664d21539d877.svg' />

<Text fontWeight="semibold" fontSize="xl" >
Contactless sharing
</Text>

<Text color="gray" >
Our Keyless technology enables contactless pick-up & drop of your car.
</Text>
  
         </VStack>

         <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

<Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/eb002ff59dd838a60fd664d21539d877.svg' />

<Text fontWeight="semibold" fontSize="xl" >
Contactless sharing
</Text>

<Text color="gray" >
Our Keyless technology enables contactless pick-up & drop of your car.
</Text>
  
         </VStack>

         <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

<Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/584189ee6116aeef9f0bfad788813be1.svg' />

<Text fontWeight="semibold" fontSize="xl" >
Flexibility in sharing
</Text>

<Text color="gray" >
Share your car whenever you want, as per your usage and convenience
</Text>
  
         </VStack>

         <VStack  p={5} borderRadius={5}  border="1px solid" borderColor="gray.300" spacing={5} alignItems="flex-start" textAlign="left" >

<Image w="100%" src='https://www.zoomcar.com/zap/subscribe/build/a0073dafcc39c09bcf084add77f94472.svg' />

<Text fontWeight="semibold" fontSize="xl" >
24 x 7 customer support
</Text>

<Text color="gray" >
Call us, Chat with us, drop an Email to us, we've got your back round the clock!
</Text>
  
         </VStack>



          

      </SimpleGrid>

      <Divider />

      <VStack>
    <Text w="80%" fontSize="5xl" >3 Simple steps to Start Earning with your car in 24 hours</Text>
   </VStack>

   <Divider />
 
 <VStack p={5} spacing={5} textAlign="left" alignContent="flex-start" >

 <Text fontWeight="semibold" fontSize="4xl" >
        Growing Rapidly
      </Text>

      <Text color="gray.400" >
      Join Host program and be part of the largest tech enabled car sharing marketplace
      </Text>

      <Stack  direction={{base:"column", md:"row"}} spacing={5} p={5} >

<VStack  boxSize="200px"  p={5} borderRadius={5}   borderColor="gray.300" spacing={5}  >

  <Image  src='https://www.zoomcar.com/zap/subscribe/build/e3a6d127cac35a3a7a139256bb3761eb.png' />

  <Text fontWeight="semibold" fontSize="2xl" >
  25,000+
  </Text>

  <Text color="gray" >
  Satisfied Host
  </Text>
    
</VStack>



<Stack borderColor="gray.500" border="1px solid" h="100px" >.</Stack>

<VStack  boxSize="200px"  p={5} borderRadius={5}   borderColor="gray.300" spacing={5}  >

  <Image  src='https://www.zoomcar.com/zap/subscribe/build/4a5f55fc81b9a6df6a460a025fdfa509.png' />

  <Text fontWeight="semibold" fontSize="2xl" >
 50 Laaat+
  </Text>

  <Text color="gray" >
  Booking Served
  </Text>
    
</VStack>

<Stack borderColor="gray.500" border="1px solid" h="100px" >.</Stack>

<VStack  boxSize="200px"  p={5} borderRadius={5}   borderColor="gray.300" spacing={5}  >

  <Image  src='https://www.zoomcar.com/zap/subscribe/build/36da13bf403485c4efacd507efd93735.png' />

  <Text fontWeight="semibold" fontSize="2xl" >
 32 Cr+
  </Text>

  <Text color="gray" >
  Kms Runs
  </Text>
    
</VStack>


<Stack borderColor="gray.500" border="1px solid" h="100px" >.</Stack>

<VStack boxSize="200px"   p={5} borderRadius={5}   borderColor="gray.300" spacing={5}  >

  <Image  src='https://www.zoomcar.com/zap/subscribe/build/c0db9479a08980b830b63433f60d336c.png' />

  <Text fontWeight="semibold" fontSize="2xl" >
 Rs. 00 Cr+
  </Text>

  <Text color="gray" >
  Earned By Hosts
  </Text>
    
</VStack>


</Stack>

<Divider />

 </VStack>


    </VStack>
    <Divider />

    <VStack bg="#f5f4f5" padding={10} spacing={5} borderRadius={5} >
      <Text fontWeight="semibold" fontSize="4xl" >
      Users love Zoomcar Host program. Our app has 4.5+ rating on play store!
      </Text>
      <video width="100%" controls autoplay >
      <source src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4" type="video/mp4" />
    </video>
    </VStack>

    <Divider />

    <Stack>
    <Stack alignItems="center" justifyContent="space-around" p={5} spacing={5} borderRadius={5}  direction={{base:"column", md:"row"}} >

<Text fontWeight="semibold" fontSize="4xl" >Still Condused ?</Text>
<VStack>

  <Text fontWeight="semibold" fontSize="2xl" >
  We are here to help
  </Text>

  <Text color="gray" >
  Visit detailed FAQs section or contact us for more details.
  </Text>



</VStack>

<Image w="300px" src='https://www.zoomcar.com/zap/subscribe/build/1481c0a139f0327896e2b071d9e392bd.svg'  />

</Stack>

<Stack  alignItems="center" alignSelf="center" p={5} spacing={5} direction={{base:"column", md:"row"}} >

<Button  size="lg" colorScheme='whatsapp'>Whatsapp</Button>
<Button size="lg" colorScheme='whatsapp'>Contact Us</Button>
</Stack>
    </Stack>
<Divider />
<VStack>
   <Image
   mt={50}
      maxW="1600px"
      w="full"
      src="https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp"
    />
   </VStack>

<Box p={5} textAlign="left" alignItems="flex-start"  bg="#f5f4f5"  borderRadius={5}>
 
 <Text fontWeight="bold" fontSize="6xl" color="gray.300" >NEVER</Text>
 <Text mt="-30px"  fontWeight="bold" fontSize="6xl" color="gray.300" >STOP</Text>
 <Text  mt="-30px" fontWeight="bold" fontSize="6xl" color="gray.300" >LIVING.</Text>
 <Divider />
 
</Box>

<Text>More ABout Zoocar Host</Text>

  </Stack>
  )
}

export default BecomeHost
