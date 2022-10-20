import { Divider, Flex, HStack, Image, ListItem, SimpleGrid, Stack, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react';
import {AiFillCar} from "react-icons/ai";
import {FaBirthdayCake,FaIdCard} from "react-icons/fa";
import {TbGlassOff} from "react-icons/tb";
import {BsFillCreditCard2BackFill} from "react-icons/bs";
import {IoMdClock} from "react-icons/io";

export const Policies = () => {
    function DataTabs({ data }) {
        return (
          <Tabs overflow="hidden"  alignSelf="center" maxW="1200px" >
            <TabList >
              {data.map((tab, index) => (
                <Tab key={index}>{tab.label}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel p={4} key={index}>
                  {tab.content}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        )
      }
     
    
      // 2. Create an array of data
      const tabData = [
        {
          label: 'Fee Policy: Returns Fee Policy ',
          content: <Stack>
            <Text>Zoomcar takes pride in being completely transparent with our members. Here is a comprehensive list of fees for certain scenarios after you have created your reservation.</Text>
          
            <TableContainer   maxW="1200px" >
                <Table variant='simple' >
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                
                    <Tbody  maxW="1200px" >
                    <Tr>
                        <Td  as="b">Cancellation</Td>
                        <Td><Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text as="b">Enjoy Free Cancellations upto 6 hours before the Booking start</Text>
                            <Text>If the cancellation happens less than 6 hours from booking start time, 50% of the booking fee will be charged as cancellation fee. If the cancellation happens post the booking start time, then the entire booking fee will be charged as cancellation fee.</Text>
                            <Text as="b">Enjoy Unlimited Free Booking Modifications</Text>
                            <Text>Please reach out to us or use the app if you would like to modify your booking. We allow unlimited free re-schedules and you can move your booking to anytime in the next 6 months. A small fee is charged if the modification is done in the last 6 hours from booking start time. Keep Zooming!</Text>
                            </Flex> 
                        </Td>
                       
                    </Tr>
                    <Tr>
                        <Td as="b">Reschedule before start #</Td>
                        <Td>
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>Modifications prior to 6 hours from booking start are absolutely free of cost! A small fee (INR 200) is charged if the modification is done in the last 6 hours from booking start time.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Extension post start #</Td>
                        <Td>
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>For Doorstep Bookings: Extension within 2 hours of Bookings End time will lead to cancellation of Doorstep Collection. No refunds applicable</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Shortening post start</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>No charges or refunds applicable</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Late Return</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>Late return would be charged on the basis of the amount of time for which the user is late. Late penalty will be much higher than normal booking fee.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Pricing plan change</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>Pricing plan (free km per hour) cannot be changed post booking creation. Pricing will be charged on an half hour basis.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Free Kilometres</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>The free kilometres allotted to the customer will be proportional to the number of hours booked and the flexi package chosen.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Minimum Duration</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>The minimum booking duration for which the prices will be charged is 4 hours.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Discounts</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>Discount is applicable only on trips of a duration equal or greater than 8 hours at the time of booking. Discount is applicable only on the booking fee after adjustment for credits (excluding refundable deposit, if any) paid in advance to book the car. Discount will not be applicable on blackout days. List of upcoming blackout days / peak seasons is here (Please ensure that you select your city to view corresponding blackout days/peak season). Zoomcar reserves the right to cancel a booking if any unwarranted use of a discount coupon is identified.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Fuel Policy</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>Free Fuel is only included in pricing for with fuel bookings. Members will only be eligible for reimbursement of fuel expenses upon the submission of a Bill containing the quantity of fuel filled, the date on which the fuel was bought and the cost of the fuel.
In case of No Fuel bookings, the vehicle should be returned by the Member, upon the completion of the booking, with fuel at the same level as at the start of the booking.
If the Vehicle is returned with lesser fuel than the fuel level at the start of the trip then Refuelling penalty will be applicable.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr>
                        <Td as="b">Speed Governor</Td>
                        <Td >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text>The Vehicle may be enabled with speed governor in compliance with the applicable Government regulations, that limits speed of the Vehicle upto 80 km/h. You will also be notified by SMS on your registered number.</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    <Tr  maxW="1200px">
                        <Td  maxW="1200px" as="b">Breakdown of vehicle</Td>
                        <Td  maxW="1200px" >
                          <Flex flexDirection="column" justifyContent="left" alignItems="left">
                            <Text  maxW="1200px"  >1. The Member shall be responsible for the costs related to the repair, recovery, and loss of use of any Zoomcar vehicle resulting from any of the foregoing, up to the current damage fee, as set forth in the Fee Policy / Rate Schedule (if such costs are because of the fault of the Member or if the fault is not directly established to any other person/ entity, or where any cost is not paid / reimbursed by the insurer of Zoomcar vehicles or the insurer of the other vehicle involved in the accident).
2. Where the Member is not responsible for the breakdown of the Zoomcar vehicle, Zoomcar shall refund an amount equal to the cost of the unused hours of such booking. Further, Zoomcar shall not be liable for any further costs borne by the Member as a consequence of the breakdown of the Zoomcar vehicle</Text>
                          </Flex>
                        </Td>
                     
                    </Tr>
                    
                    </Tbody>
                   
                </Table>
                </TableContainer>
                <Text as="b">Note:</Text>
              <UnorderedList paddingLeft={10}>
                <ListItem># Handover pursuant to the original booking, extensions and modifications are subject to availability of the vehicle.</ListItem>
                <ListItem>Your free KMs are calculated based on the latest scheduled pick up time to the latest scheduled drop off time or to the actual drop off time whichever is later.</ListItem>
                <ListItem>All Refunds made shall be through the original payment account only within 1 working day. We are giving full refunds of any amount paid by you as under:
                  <UnorderedList>
                    <ListItem>as a security deposit and/or,</ListItem>
                    <ListItem>amount falling under the free cancellation period and/ or,</ListItem>
                    <ListItem>any other valid charges that you are entitled to.</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>In case, you opt for getting the refund amount in the form of Zoomcar Coupons, then the amount you are entitled to receive will be considered as settled irrespective of whether the coupon is utilized or not.</ListItem>
                <ListItem>Zoomcar reserves the right to charge a fee for specific pre-defined accessories.</ListItem>
                
                 </UnorderedList>
          </Stack> ,
        },
        {
          label: 'Eligilibity',
          content:
          <SimpleGrid columns={{base:2, md:3}} p={5} spacing={6}>

          
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><AiFillCar size='100px'/></Text><Text >Customer should be 24 year and older to book Mercedes A Class, Mercedes GLA, Mercedes CLA, Audi Q3, Toyota Fortuner, Ford Endeavour, else booking will be cancelled</Text></VStack>
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaBirthdayCake size='100px'/></Text><Text >Members must be 18 years of age or older</Text></VStack>
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaIdCard size='100px'/></Text><Text >Member must possess a valid Light Motor Vehicle (Non Transport) Indian license and Aadhar card</Text></VStack>
  
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><TbGlassOff size='100px'/></Text><Text >Members must have had no alcohol or drug related driving violations in the past seven years</Text></VStack>
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><BsFillCreditCard2BackFill size='100px'/></Text><Text >Payments are only accepted through credit card, debit card or net banking</Text></VStack>
              <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><IoMdClock size='100px'/></Text><Text >There is no minimum amount of time that an individual must hold a license before becoming a member or reserving a Zoomcar vehicle</Text></VStack>
          
          </SimpleGrid>  
          ,
        },
        {
          label: 'Platform Terms of Use',
          content:
            
            <SimpleGrid columns={{base:2, md:3}} p={5} spacing={6}>

          
            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><AiFillCar size='100px'/></Text><Text >Customer should be 24 year and older to book Mercedes A Class, Mercedes GLA, Mercedes CLA, Audi Q3, Toyota Fortuner, Ford Endeavour, else booking will be cancelled</Text></VStack>
            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaBirthdayCake size='100px'/></Text><Text >Members must be 18 years of age or older</Text></VStack>
            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaIdCard size='100px'/></Text><Text >Member must possess a valid Light Motor Vehicle (Non Transport) Indian license and Aadhar card</Text></VStack>

            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><TbGlassOff size='100px'/></Text><Text >Members must have had no alcohol or drug related driving violations in the past seven years</Text></VStack>
            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><BsFillCreditCard2BackFill size='100px'/></Text><Text >Payments are only accepted through credit card, debit card or net banking</Text></VStack>
            <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><IoMdClock size='100px'/></Text><Text >There is no minimum amount of time that an individual must hold a license before becoming a member or reserving a Zoomcar vehicle</Text></VStack>
        
        </SimpleGrid> ,
        },
        {
          label: 'Privacy Policy',
          content:
          <SimpleGrid columns={{base:2, md:3}} p={5} spacing={6}>

          
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><AiFillCar size='100px'/></Text><Text >Customer should be 24 year and older to book Mercedes A Class, Mercedes GLA, Mercedes CLA, Audi Q3, Toyota Fortuner, Ford Endeavour, else booking will be cancelled</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaBirthdayCake size='100px'/></Text><Text >Members must be 18 years of age or older</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaIdCard size='100px'/></Text><Text >Member must possess a valid Light Motor Vehicle (Non Transport) Indian license and Aadhar card</Text></VStack>

          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><TbGlassOff size='100px'/></Text><Text >Members must have had no alcohol or drug related driving violations in the past seven years</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><BsFillCreditCard2BackFill size='100px'/></Text><Text >Payments are only accepted through credit card, debit card or net banking</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><IoMdClock size='100px'/></Text><Text >There is no minimum amount of time that an individual must hold a license before becoming a member or reserving a Zoomcar vehicle</Text></VStack>
      
      </SimpleGrid> 
        },
        {
          label: 'INTER STATE TRAVEL',
          content:
          <SimpleGrid columns={{base:2, md:3}} p={5} spacing={6}>

          
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><AiFillCar size='100px'/></Text><Text >Customer should be 24 year and older to book Mercedes A Class, Mercedes GLA, Mercedes CLA, Audi Q3, Toyota Fortuner, Ford Endeavour, else booking will be cancelled</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaBirthdayCake size='100px'/></Text><Text >Members must be 18 years of age or older</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><FaIdCard size='100px'/></Text><Text >Member must possess a valid Light Motor Vehicle (Non Transport) Indian license and Aadhar card</Text></VStack>

          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><TbGlassOff size='100px'/></Text><Text >Members must have had no alcohol or drug related driving violations in the past seven years</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><BsFillCreditCard2BackFill size='100px'/></Text><Text >Payments are only accepted through credit card, debit card or net banking</Text></VStack>
          <VStack border="1px solid gray"  p={5} spacing={6} ><Text ><IoMdClock size='100px'/></Text><Text >There is no minimum amount of time that an individual must hold a license before becoming a member or reserving a Zoomcar vehicle</Text></VStack>
      
      </SimpleGrid> 
        },
      ]
    
      // 3. Pass the props and chill!
      return (
        <Stack  alignSelf="center"   maxW="1200px" >
            <Text>Policies</Text>
            <DataTabs data={tabData} />
            <Divider/>
   <VStack>
   <Image
   mt={50}
      maxW="1600px"
      w="full"
      src="https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp"
    />
   </VStack>
   <Divider />
             
        </Stack>
      ) 
    
}
