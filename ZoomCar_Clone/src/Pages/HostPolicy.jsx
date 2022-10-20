
    import { Flex, HStack, ListItem, Stack, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
    import React from 'react';
    import {AiFillCar} from "react-icons/ai";
    import {FaBirthdayCake,FaIdCard} from "react-icons/fa";
    import {TbGlassOff} from "react-icons/tb";
    import {BsFillCreditCard2BackFill} from "react-icons/bs";
    import {IoMdClock} from "react-icons/io";
    
    export const HostPolicy = () => {
        function DataTabs({ data }) {
            return (
              <Tabs>
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
              label: 'Fee Policy: Host Fee Policy ',
              content: <Stack>
                <Text>Zoomcar takes pride in being completely transparent with our members. Here is a comprehensive list of fees for certain scenarios after you have created your reservation.</Text>
              
                <TableContainer w="85%">
                    <Table variant='simple' >
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                    
                        <Tbody >
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
                        <Tr>
                            <Td as="b">Breakdown of vehicle</Td>
                            <Td >
                              <Flex flexDirection="column" justifyContent="left" alignItems="left">
                                <Text>1. The Member shall be responsible for the costs related to the repair, recovery, and loss of use of any Zoomcar vehicle resulting from any of the foregoing, up to the current damage fee, as set forth in the Fee Policy / Rate Schedule (if such costs are because of the fault of the Member or if the fault is not directly established to any other person/ entity, or where any cost is not paid / reimbursed by the insurer of Zoomcar vehicles or the insurer of the other vehicle involved in the accident).
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
              label: 'Platform Terms of Use',
              content:
                'Perhaps the surest dish ever invented but fills the stomach more than rice.',
            },
            {
              label: 'C2C Terms and Conditions - Host & Rentery',
              content:
                'Perhaps the surest dish ever invented but fills the stomach more than rice.',
            },
            {
              label: 'Privacy Policy',
              content:
                'Perhaps the surest dish ever invented but fills the stomach more than rice.',
            },
          ]
        
          // 3. Pass the props and chill!
          return (
            <Stack>
                <Text>Policies</Text>
                <DataTabs data={tabData} />
               
                 
            </Stack>
          ) 
        
    }
    