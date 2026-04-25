import {Card,Flex,Box,Text} from '@chakra-ui/react'


export  default function UniversityCard({university}) {
    return (
      
        <Card.Root  
         borderColor="blue.500" padding={2} w="70%"  boxShadow="lg" borderRadius="2xl"  borderWidth="2px"
          mb={8} _light={{color:"gray.600"}} _dark={{color:"white",bg:"gray.700"}}
         >
            <Card.Header>
              <Flex justify="space-between">
            <Text color="blue.600" fontSize="2xl" as="h1" _dark={{color:"blue.400"}}>{university.institute}</Text>
            <Box borderRadius="lg"  color="gray.600" bg="blue.50" _dark={{bg:"black",color:"white"}} p={3}>{university.duration}</Box>

              </Flex>
            </Card.Header>
            <Card.Body>
                <Text  fontSize="xl" _dark={{color:"#E0E0E0"}}>{university.degree}</Text>
               
            </Card.Body>
            <Card.Footer>
                 <Text color="blue.600" fontSize="17px"  _dark={{color:"blue.400"}}>Current CGPA: {university.cgpa} </Text>
                </Card.Footer>
         </Card.Root>
         
    );
}