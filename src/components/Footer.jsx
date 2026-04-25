import { HStack,VStack,Text,Icon,Separator,SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import {Link} from 'react-router-dom'
import {Link as ChakraLink} from '@chakra-ui/react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Footer(){
    
    const linkColor=useColorModeValue("#d4d4d8","black")
    const links=[{text:'Education',link:"/Education"},{text:'Projects',link:"/Projects"},{text:'Experience',link:"/Experience"},{text:"Contact",link:"/Contact"}]
    const connect=[{href:"https://github.com/huzaifamachinelearning/", icon:LuGithub},
        {href:"https://www.linkedin.com/in/huzaifa-gohar-03b067305/", icon:FiLinkedin},
        {href:"/Contact", icon:MdOutlineMailOutline}
    ]
    return(
        <VStack minH="40vh"bg="black" _dark={{bg:"white"}} align="stretch"  justifyContent="space-between" pb="25px" mt={40} w="100%">
        <SimpleGrid  minChildWidth="400px" gap={10} pt="70px" pl="40px" align="stretch"  >
<VStack  justifySelf="left" align="left" gap={6}>
    
<Text color="white" _dark={{color:"black"}} fontWeight="bold" fontSize={25}  >Huzaifa Gohar</Text>
<Text fontSize={20} color="gray.200" _dark={{color:"black"}} w="670px" > Building beautiful and functional web experiences.
     Let's create something amazing together.</Text>


</VStack>

<VStack  gap={6}  >
    <Text color="white" _dark={{color:"black"}} fontWeight="bold" fontSize={25}>Quick Links</Text>
    <VStack gap={2} >
        {links.map((link,index)=>(
           <Link to={link.link} key={index} style={{color:linkColor,fontSize:"20px"}} color="#d4d4d8" fontSize="20px" _dark={{color:"black"}} >{link.text}</Link> 
        )


        )}
    </VStack>
</VStack>

<VStack  gap={6}  >
  <Text color="white" _dark={{color:"black"}} fontWeight="bold" fontSize={25}>Connect</Text>
  <HStack gap="40px">
    {connect.map((connection)=>(
        <ChakraLink href={connection.href} key={connection.href} target="blank">
           <Icon as={connection.icon} boxSize={8} color="white" _dark={{color:"black"}} />
            
        </ChakraLink>
    ))}
    
    </HStack>  
</VStack>


        </SimpleGrid>
     <Text color="gray.400" ml="40px" >&copy; 2025 Huzaifa Gohar. All rights reserved.</Text>   

    </VStack>
    );
}