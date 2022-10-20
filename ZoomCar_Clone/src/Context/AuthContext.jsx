import { useToast } from '@chakra-ui/react'
import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {

    const [isAuth, setisAuth ] = useState(false)
    const [userName, SetUserName] = useState("")
    const toast = useToast()

    const LoginUser = (name)=>{
       
    
        toast({
            title: 'Login Successfull.',
           
            status: 'success',
            duration: 3000,
            isClosable: true,
          })


        SetUserName(name)
        setisAuth(true)
    }

    const LogOutUser = ()=>{
        toast({
            title: 'Logout Successfull.',
           
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
    
        SetUserName("")
        setisAuth(false)
    }

  return (
    <AuthContext.Provider value={{userName,isAuth, LoginUser,LogOutUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider