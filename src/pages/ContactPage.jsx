import Contact from '../components/Contact/Contact.jsx'
import {Flex} from '@chakra-ui/react'

export default function ContactPage(){

    return (
         <Flex direction="column" minH="100vh" width="100vw"> 
         
         <Contact/>
         </Flex>
    );
}