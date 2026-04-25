import ProjectCard from './ProjectCard.jsx'
import {SimpleGrid,Box, Spinner, Alert, Text, } from "@chakra-ui/react"
import {useState,useEffect} from 'react'
export default function ProjectGrid(){

const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
   useEffect(() => { 
    
    const fetchProjects = async () => { 
      setIsLoading(true); 
      setError(null); 
 
      try { 
       
        const response = await fetch("/Projects.json"); 
 
        if (!response.ok) { 
          throw new Error(`HTTP error! status: ${response.status}`); 
        } 
 
        const data = await response.json(); 
        setData(data); 
      } catch (err) { 
        
        setError("Failed to fetch projects data: " + err.message); 
      } finally { 
         
        setIsLoading(false); 
      } 
    }; 
 
    fetchProjects(); 
 
  
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
<SimpleGrid minChildWidth="400px" gap={20} w="96%" p={6}
// columns={{sm:2,md:3,lg:3}}
>
  
  {data.map((project,index) => (
        <ProjectCard
        key={index}
         {...project}
        />
        
      ))} 

</SimpleGrid>
);
}
