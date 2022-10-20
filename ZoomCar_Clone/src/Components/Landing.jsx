import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, HStack, Image, Input, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Landing = () => {
  const [Roundtrip,setRoundtrip]=useState(true);
  const [Defimg,setDefimg]=useState("https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg?1661426287");
  return (
    <Stack>
       <VStack>
       <HStack width="100%">
        <Image display={{base:"none", md:"block"}} w="100%" src={Defimg}/>
        <Image display={{base:"block", md:"none"}} w="100%" src="https://zoomcar-assets.zoomcar.com/images/original/9cecdb00e88fa2175d00e9d2b36c6bffd0e54207.jpg?1661348340"/>     
        </HStack>
        <Stack border="1px solid" style={{position:"absolute" , top:"450px" }}>
          <HStack>
          
            <Button onClick={()=>{
              setRoundtrip(true)
              setDefimg("https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg?1661426287")
            }}>Round TRip </Button>
            <Button onClick={()=>{
              setRoundtrip(false)
              setDefimg("https://www.zoomcar.com/img/banner_airport.png")
            }}>Airport Round TRip</Button>
            
          </HStack>
         {
          Roundtrip ? <>
           <Input placeholder="Enter Location"/>
          <Button>Find Car</Button>
          </> : <>
          <Input placeholder="Enter Location"/>
          <Input type="Date" placeholder='10/12/2022 '/>
          <Button>Find Car</Button></>
         }
        </Stack>
       </VStack>

          <Divider/>
          <Stack justifyContent="space-around"   alignSelf="center" p={5} direction={{base:"column", md:"row"}}>
            <VStack textAlign="left"  alignItems="flex-start" border="1px solid"  w="400px" >
              <HStack >
                <VStack >
                    <Text as="b">Your BFF headling for a vacay?</Text>
                    <Text p="3">You earn 500 in Z-Points. Your frinds gets 20% off on first booking</Text>
                </VStack>
                <VStack>
                  <Image w={100} h={200}  src='https://zoomcar-assets.zoomcar.com/images/original/207f2f9653395ea8b5b5acf04cd722aa1b88b0f0.png?1661344619'/>
                </VStack>
              </HStack>
                    <Text>REFER FRIENDS</Text> 
            </VStack>
            <VStack textAlign="left"  alignItems="flex-start" border="1px solid" w="400px" >
            <HStack>
                <VStack>
                    <Text as="b">UP TO 20% OFF</Text>
                    <Text>on your first booking from the app!</Text>
                    <Text border="dashed" color="gray.400">Use Code: ZOOMNEW</Text>
                </VStack>
                <VStack>
                  <Image w={100} h={200}  src='https://www.zoomcar.com/img/cellphone.png'/>
                </VStack>
              </HStack>
                    <Text color="green" as="b">Install Zoomcar App now!</Text>
           
            </VStack>

          </Stack>
         

         
        <Accordion defaultIndex={[0]} allowMultiple bg="rgb(250,250,250)">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='center'>
          About Us
        <AccordionIcon />
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Link textDecoration="none" textAlign="center" to="/"><Text>Zoomcar Team</Text></Link>
        <Link  textAlign="center" to="/"><Text>Zoomcar Subscription</Text></Link>
        <Link textAlign="center" to="/"><Text>Zoomcar Blog</Text></Link>
        <Link textAlign="center" to="/"><Text>Careers @ Zoomcar</Text></Link>
      
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
       

    <vStack>
        <Text as="b" p={5}>SELF DRIVE CARS IN PUNE</Text>
        <Text fontSize={12} p={5}>The cultural capital of Maharashtra, Pune was once home to the mighty Marathas, and retains their legacy in the many monuments it is home to, as well as the rich culture which is lovingly preserved by the people of the city. Pune is called the Oxford of the East and is fast emerging as the preferred destination for several multinational companies too. With opportunities for education, jobs and a vibrant nightlife, Pune attracts youngsters from all over the country.
These money-savvy youngsters seek the convenience of self-drive cars without the liability of buying and owning one.  Zoomcar fills this need with a well-maintained fleet of cars from every segment. Choose a Zoomcar self-drive car rental in Pune and experience the convenience it provides.</Text>
        
        
        <Text as="b" p={5}>SELF DRIVE CAR ON RENT IN PUNE</Text>
        <Text fontSize={12} p={5}>Besides a range of cars to choose from, Zoomcar also offers its users a choice of flexible tariff plans. Pick a plan keeping in mind your requirement to make the most of every booking. If you are looking for a vehicle to commute to work or college, the Zoom commute is the right plan for you. Travel alone, or carpool with your friends, sharing the cost of rental for maximum savings. Pune is central to several tourist destinations, the most popular among which are Lonavla and Khandala. Make every weekend fun with a self-drive car rental to a new destination. Zoomcar not only ensures freedom safety and privacy but also comes with features which are designed to ensure a hassle free ride. </Text>
    
        <Text as="b" p={5}>CAR RENTAL IN PUNE</Text>
        <Text fontSize={12} p={5}>For frequent travelers shuttling between Pune to Mumbai on a regular basis, taking a car for rent in Pune is ideal as they have the convenience of embarking on the journey at any time of the day. The well maintained Mumbai-Pune expressway is a pleasure to drive on. For those visiting the temple town of Shirdi from Pune, a rental car would be more reasonable and convenient when compared to a chauffeur driven car as the queues at the temples are unpredictable. It is a 4-hour drive from Pune to Shirdi.</Text>

        <Text as="b" p={5}>ABOUT ZOOMCAR</Text>
        <Text fontSize={12} p={5}>No more worries about petrol mileage, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag. 
Self drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go.</Text>
    
    </vStack>
    
        <Text fontSize={80}  color="gray.200" as="b">Never</Text>
        <Text fontSize={80} marginTop="-50px" color="gray.200" as="b">Stop</Text>
        <Text fontSize={80}  color="gray.200" as="b">Living.</Text>
    
    </Stack>
  )
}
