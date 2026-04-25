import {VStack,Box,Text,  Spinner, 
  Alert,} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import UniversityCard from './UniversityCard';
import Semesters from './Semesters';
import PreviousEducation from './PreviousEducation';

export default function Education(){
     const [education, setEducation] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
   useEffect(() => { 
    
    const fetchEducation = async () => { 
      setIsLoading(true); 
      setError(null); 
 
      try { 
         
        const response = await fetch("/Education.json"); 
 
        if (!response.ok) { 
          throw new Error(` error! status: ${response.status}`); 
        } 
 
        const data = await response.json(); 
        setEducation(data); 
      } catch (err) { 
        
        setError("Failed to fetch education data: " + err.message); 
      } finally { 
        
        setIsLoading(false); 
      } 
    }; 
 
    fetchEducation(); 
 
    
  }, []); 

   if (isLoading) { 
    return ( 
      <Box textAlign="center" py={10}> 
        <Spinner size="xl" color="blue.500" /> 
        <Text mt={4}>Loading education data...</Text> 
      </Box> 
    ); 
  } 
 
  // 5. Error State UI (using Chakra UI Alert) 
  if (error) { 
    return ( 
      <Alert.Root status="error" variant="subtle"> 
        <Alert.Indicator /> 
        <Alert.Title>{error}</Alert.Title> 
      </Alert.Root> 
    ); 
  } 

    return(

        
<VStack p={8} mt="100px" align="center"  >
    <Text fontSize={50} color="blue.600"  _dark={{color:"blue.400"}} fontWeight="400">Education</Text>
    <UniversityCard  university={education.UniversityEducation}/>
    <Semesters semesterData={education.Semesters}/>
    <PreviousEducation previousEduData={education.PreviousEducation}/>

</VStack>



    );
}