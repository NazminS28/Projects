import { Box, Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import {GrLocation} from "react-icons/gr";
import {RiFileCopy2Line} from "react-icons/ri";
import {FiPhoneCall} from "react-icons/fi";
import { AuthContext } from '../Context/AuthContext';

// ammi G bol

export const Navbar = () => {
  const {userName , isAuth, LogOutUser} = useContext(AuthContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
    <>


  
   
    <Box display={{base:"none",md:"block", lg:"block"}} >

   
      <HStack  bg="black" p={3}>

<HStack spacing={5}  >
<IconButton onClick={onOpen} variant='outline' color="white" fontSize={25} border="none" aria-label='Search database' icon={<AiOutlineMenu />} />
<Link to="/">
<Image src='https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png'></Image>

</Link>
</HStack>

<Spacer></Spacer>

<HStack spacing={10} >


  <NavLink to="/bah">
  <HStack bg="white" p={3} borderRadius={25} spacing={5}>
    <Image src='https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg'/>
  
    <Text>Become a Host</Text>
  </HStack>
    </NavLink>

  
  <Link to="/policy">
    
    <Text color="white"  fontSize={15} fontWeight="semibold" >Policy</Text>
    

    </Link>

    
    <Link to="/contact">
   
    <Text color="white"  fontSize={15} fontWeight="semibold"  >Help & Support</Text>
    
    
    </Link>

    <Link to="/refer">

    <Text color="white"  fontSize={15} fontWeight="semibold"  >Refer & Earn</Text>

    </Link>

    <Link to="/faq">

    <Text color="white"  fontSize={15} fontWeight="semibold"  >Faqs</Text>
    
 

    </Link>

    
 {
  isAuth && <Text color="white"  fontSize={15} fontWeight="semibold"  >{userName}</Text>
 }

{
  isAuth==false ?  <Link to="/login">
  
    
  <Text  color="white"  fontSize={15} fontWeight="semibold" >Login or Signup</Text>
  
</Link>
:  <Text onClick={LogOutUser} color="white"  fontSize={15} fontWeight="semibold" >LogOut</Text>

  
    
  
  


 }


    

</HStack>

<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerHeader borderBottomWidth='1px'>ZoomCar</DrawerHeader>
    <DrawerBody>

    
    
    <Link to="/login">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
    <Text><CgProfile/></Text>
    <Text>Login or Signup</Text>
    
    </HStack>
    </Link>
    <Link to="/log">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
    <Text><GrLocation/></Text>
    <Text>Change City</Text>
    
    </HStack>
    </Link>

    <Link to="/bah">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
    <Image src='https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg'/>
    <Text>Become a Host</Text>
    
    </HStack>
    </Link>

    <Link to="/policy">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
    <Text><RiFileCopy2Line/></Text>
    <Text>Zoomcar Fleet Vehicles policies</Text>
    
    </HStack>
    </Link>

    <Link to="/hostpo">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
    <Text><RiFileCopy2Line/></Text>
    <Text>Zoomcar host Vehicles Policies</Text>
    
    </HStack>
    </Link>

    <Link to="/contact">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  

    <Text><FiPhoneCall/></Text>
    <Text>Help & Support</Text>
    
    </HStack>
    </Link>

    <Link to="/refer">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
  
    <Text><FiPhoneCall/></Text>
    <Text>Refer & Earn</Text>
    
    </HStack>
    </Link>
    <Link to="/faq">
    <HStack bg="white" p={3} borderRadius={25} spacing={5}>
  
  
    <Text><FiPhoneCall/></Text>
    <Text>Faqs</Text>
    
    </HStack>
    </Link>

    </DrawerBody>
  </DrawerContent>
</Drawer>



      </HStack>


      </Box>

              <Box display={{base:"block",md:"none"}} >
        <HStack  p={5}>
              <HStack spacing={5} border="1px solid black" >
        <IconButton onClick={onOpen} variant='outline' color="black" border="none" aria-label='Search database' icon={<AiOutlineMenu />} />

        </HStack>
        </HStack>
        </Box>


      </>
  )
}
