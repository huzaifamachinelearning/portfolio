import { VStack,Box,Text,Circle } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";
import { PiSuitcase } from "react-icons/pi";
import {Icon} from '@chakra-ui/react'



export default function Projects(){



    return(
<VStack justify="space-evenly"  gap={7} mt="100px" >
<Circle size="90px" mt={20} 
 
 display="flex"
  justifyContent="center"
  alignItems="center"
   bgGradient="to-b" gradientFrom="blue.500" gradientTo="blue.800"
  boxShadow="0px 10px 30px rgba(0, 0, 255,0.25)" 
  
  >


<Icon  color="white" fontSize="40px">
    <PiSuitcase />
</Icon>
</Circle>
<Text fontSize="25px" >My Projects</Text>
<Box w="600px">
<Text color="gray.600" fontSize="19px" textAlign="center" _dark={{color:"#E0E0E0"}}>A collection of my recent 
    work showcasing web applications, 
    mobile apps, and creative solutions. Each project represents
     a unique challenge and learning experience.</Text>
     </Box>
<ProjectGrid/>
</VStack>
);
}