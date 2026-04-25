import { VStack,HStack,Button,Box,Text,Icon,Image,AspectRatio } from "@chakra-ui/react";
import {Link as chakraLink} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import image from '../assets/profileImage.png'

export default function Home(){

  const links=[
{href:"https://github.com/huzaifamachinelearning/",
  icon:LuGithub
},
{href:"https://www.linkedin.com/in/huzaifa-gohar-03b067305/",
  icon:FiLinkedin
},
{href:"/Contact",
  icon:MdOutlineMailOutline
}

  ]

    return(
      <>
      <HStack  justifyContent="center" mt={250} gap={10}>
       <AspectRatio  w="300px" ratio={1}>
        <Image
        src={image}
        borderRadius="50%"
        objectFit="contain"
        boxShadow="2xl"
         />
        </AspectRatio> 
        <VStack gap={5} align="flex-start" >
                <Text fontSize="15px" color="gray.600"  _dark={{color:"#E0E0E0",fontWeight:"bold"}}>Hi I am Huzaifa Gohar</Text>
                <Text fontSize="16px" color="gray.900" _dark={{color:"#E0E0E0",fontSize:"20px"}}>Full Stack Developer & Creative Problem Solver</Text>
                <Text color="gray.600"  _dark={{color:"#E0E0E0"}} width="750px" fontSize="16px">I craft beautiful, functional web experiences with modern technologies. 
                    Passionate about web development,artificial intelligence and team work.</Text>
                    <Button
                    as={Link}
                    to="/Projects"
                    bg="blue.600"
                    color="white"
                    borderRadius={25}
                    // boxShadow="0px 10px 15px rgba(14, 61, 172, 0.27)"
                    fontSize="16px"
                    size="md"
                    py={6}
                    px={6}
                    >View My Work</Button>
            <HStack gap={6}>
              {links.map((link,index)=>(
            <Box borderRadius="50%" 
            key={index}
                as={chakraLink}
                
                 
                  display="flex" justifyContent="center" alignItems="center"
                   href={link.href}>
                  <Icon as={link.icon} boxSize={7}  />  
                </Box> ))}
                </HStack>
                </VStack>
</HStack>
        <Box w="70%" mx="auto"  boxShadow="lg" p={10} fontSize={20} mt={20} borderRadius={15} _dark={{bg:"gray.700"}}>
          <Text mb={8} fontSize={20} fontWeight="500">About Me</Text>

          <Text>
           A university undergraduate student with four semester completed and an excellent over all 
academic record with current cgpa of 3.96</Text>
<Text my={5}> Enthusiastic about learning new things while having 
a knack for problem solving and mathematical thinking. Reasonably proficient in several programming languages including java, 
javascript ,python ,having a strong command on sql. Completed a certified course in Artificial Intelligence and successfully led a database design project</Text>
<Text> Hobbies include reading books, learning new languages and learning about interesting mathematical and computer science concepts</Text>
 </Box>
 </>
    );
  }