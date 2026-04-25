import {VStack,Text} from '@chakra-ui/react'
import PreUniEduCard from './PreUniEduCard'


export default function PreviousEducation({previousEduData}){


    
    return(
<VStack p={6} 
w="72%" gap={6} 

>

    <Text fontSize="2xl" color="blue.600" _dark={{color:"blue.400"}} alignSelf="flex-start">Previous Education</Text>
    {
    previousEduData.map((data,index)=>(
     <PreUniEduCard 
     key={index}
     institute={data.institute}
     degree={data.degree}
     subjects={data.subjects}
     duration={data.duration}
     grade={data.grade}
     percentage={data.percentage}
     
     
     />   
    ))}

</VStack>
    );
}


