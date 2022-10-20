import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import { Stack } from '@chakra-ui/react';
import { Landing } from './Components/Landing';
import { Contact } from './Pages/Contact';
import { Faqs } from './Pages/Faqs';
import { ReferEarn } from './Pages/ReferEarn';
import { Policies } from './Pages/Policies';


function App() {
  return (
    <Stack>
      <Navbar/>
      <AllRoutes/>
      {/* <Contact/> */}
      {/* <Faqs/> */}
      {/* <ReferEarn/> */}
      {/* <Policies/> */}
    </Stack>
  );
}

export default App;

//npm install react-icons --save

