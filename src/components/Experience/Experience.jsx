import { HStack, VStack,Text,Heading,Spinner,Alert,Box } from "@chakra-ui/react";
import {useState,useEffect} from 'react'

import CompanyCard from './CompanyCard'
import TimeLine from "./TimeLine";

export default function Experience(){

 const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
   useEffect(() => { 
    
    const fetchExperience = async () => { 
      setIsLoading(true); 
      setError(null); 
 
      try { 
        
        const response = await fetch(import.meta.env.BASE_URL + "/Experience.json"); 
 
        if (!response.ok) { 
          throw new Error(` error! status: ${response.status}`); 
        } 
 
        const data = await response.json(); 
        setData(data); 
      } catch (err) { 
        
        setError("Failed to fetch experience data: " + err.message); 
      } finally { 
        
        setIsLoading(false); 
      } 
    }; 
 
    fetchExperience(); 
  }, []); 

   if (isLoading) { 
    return ( 
      <Box textAlign="center" py={10}> 
        <Spinner size="xl" color="blue.500" /> 
        <Text mt={4}>Loading experience data...</Text> 
      </Box> 
    ); 
  } 
 
  
  if (error) { 
    return ( 
      <Alert.Root status="error" variant="subtle"> 
        <Alert.Indicator /> 
        <Alert.Title>{error}</Alert.Title> 
      </Alert.Root> 
    ); 
  } 

return(
   
    <VStack mx="auto" w="80%" mt="100px">
        <Heading color="blue.800" _dark={{color:"blue.400"}} fontSize="4xl" mt={100} alignSelf="flex-start">Work Experience</Heading>
        <HStack  w="100%" align="center" >
   
<TimeLine number={data.length}/>
       

<VStack p={8} w="90%">
{
    data.map((item,index)=>(
    <CompanyCard key={index} {...item}/>     
    ))
}

</VStack>

 </HStack>
 </VStack>
 


    );

}


