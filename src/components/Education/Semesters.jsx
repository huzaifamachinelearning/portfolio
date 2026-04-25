import {VStack,Text} from '@chakra-ui/react'
import SemesterCard from './SemesterCard'

export default function Semesters({semesterData}){

    // const semesterData=[
    //     {semester:4,session:"Fall 2025",subjects:"Database,Operating System",gpa:3.91},
    //    {semester:3,session:"Fall 2025",subjects:"Data Structure,Information Security",gpa:3.98},

    //   {semester:2,session:"Spring 2025",subjects:"Object Oriented Programming,",gpa:4},

    //  {semester:1,session:"Fall 2025",subjects:"Programming Fundamentals,Information Technology",gpa:3.98},

    // ]
    return(
<VStack p={10} boxShadow="xl" borderWidth="2px" borderRadius="xl" _dark={{bg:"gray.700"}}
w="70%" gap={6} align="stretch" 

>

    <Text fontSize="xl" color="blue.600" _dark={{color:"blue.400"}} alignSelf="flex-start">SEMESTER BREAKDOWN</Text>
    {semesterData.map((data,index)=>(
     <SemesterCard
     key={index}
     semester={data.semester}
     session={data.session}
     subjects={data.subjects}
     gpa={data.gpa}
     
     
     />   
    ))}

</VStack>
    );
}


