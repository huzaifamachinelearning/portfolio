import {Card,Flex,Box,Text} from '@chakra-ui/react'


export  default function SemesterCard({semester,session,subjects,gpa}) {
    return (
        <Card.Root  
         borderColor="blue.500" padding={2} w="100%" boxShadow="lg" borderRadius="2xl"  borderWidth="2px"
          bg="blue.50" _dark={{bg:"gray.700"}}
         >
            <Card.Header>
              <Flex justify="space-between">
            <Text  fontSize="2xl" as="h1" _dark={{color:"blue.400"}}>Semester {semester}</Text>
            <Box borderRadius="lg"  color="gray.600" bg="blue.50" p={3} _dark={{color:"#E0E0E0",bg:"black"}}>{session}</Box>

              </Flex>
            </Card.Header>
            <Card.Body>
                <Text color="gray.600"  _dark={{color:"#E0E0E0"}} fontSize="xl">{subjects}
                </Text>
               
            </Card.Body>
            <Card.Footer>
                 <Text color="blue.700" fontSize="lg"_dark={{color:"blue.400"}} > GPA: {gpa}</Text>
                </Card.Footer>
         </Card.Root>
    );
}