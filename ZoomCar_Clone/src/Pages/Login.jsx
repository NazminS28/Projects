import { Button, FormControl, FormHelperText, FormLabel, HStack, Image, Input, InputLeftAddon, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const Login = () => {


  const {LoginUser} = useContext(AuthContext)

  const [name,SetName] = useState("")

  const [Loading, setLoading] = useState(false);
  const navigatekaro = useNavigate()


  const toast = useToast()

  const handleClick = () => {

    setLoading(true);

    setTimeout(() => {

       
      prompt("ENTER OTP")  
     

     
      LoginUser(name)
     
      navigatekaro("/");
    }, 2000);
  };

  return (
    <Stack direction={{base:"column" ,md:"row"}} justify="center" width="full"  spacing={50} p={5}>
        <VStack >
            <Image src='https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg'/>
            
        </VStack>

        <VStack  w={400} spacing={5} p={5}>
        <Text as="b">Enter details to login/sign-up
</Text>
        <FormControl >
            <FormLabel>User Name</FormLabel>
            <Input value={name} onChange={(e)=>SetName(e.target.value)} type='name' />
           
            </FormControl>


        <FormControl>
            <FormLabel>password </FormLabel>
            <Input type='password' />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <Button onClick={handleClick} color="white" bg='rgb(16,163,16)' >Continue</Button>
        </VStack>
    </Stack>
  )
}
