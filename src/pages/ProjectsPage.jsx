import Projects from '../components/Projects/Projects.jsx'
import {Flex} from '@chakra-ui/react'

export default function ProjectsPage(){

    return (
         <Flex direction="column" minH="100vh" width="100vw"> 
         
         <Projects/>
         </Flex>
    );
}
