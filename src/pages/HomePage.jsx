import Home from '../components/Home.jsx'
import {Flex} from '@chakra-ui/react'

export default function HomePage(){

    return (
         <Flex direction="column" minH="100vh" width="100vw"> 
         
         <Home/>
         </Flex>
    );
}