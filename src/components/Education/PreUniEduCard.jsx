import {Card,Flex,Box,Text} from '@chakra-ui/react'


export  default function PreUniEduCard({institute,degree,subjects,duration,grade,percentage}) {
    return (
        <Card.Root  
          padding={3} w="100%"  boxShadow="xl" borderRadius="3xl"  borderWidth="1px"
          _dark={{bg:"gray.700"}}
         >
            <Card.Header>
              <Flex justify="space-between">
            <Text  fontSize="2xl" as="h1"_dark={{color:"blue.400"}} >{institute}</Text>
            <Box borderRadius="lg"  color="gray.600" bg="blue.50" p={3} _dark={{bg:"black" ,color:"white"}}>{duration}</Box>

              </Flex>
            </Card.Header>
            <Card.Body>
                <Text color="gray.600" _dark={{color:"#E0E0E0"}} fontSize="xl">{degree}</Text>
                <Text color="gray.500"_dark={{color:"#E0E0E0"}}>{subjects}</Text>
               
            </Card.Body>
            <Card.Footer>
                 <Text color="blue.600" fontSize="17px" _dark={{color:"blue.400"}}>Grade {grade} ({percentage})</Text>
                </Card.Footer>
         </Card.Root>
    );
}