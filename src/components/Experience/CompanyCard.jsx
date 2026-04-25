import {Card,Flex,Text,List,Tag, HStack,Stack} from '@chakra-ui/react'
import { PiBuildingOfficeFill } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";




export  default function CompanyCard({position,companyName,duration,location,description,achievements,isCurrent}) {
    return (
        <Card.Root  
          padding={3} width="100%" boxShadow="md" borderRadius="xl"  
          _hover={{boxShadow:"xl" ,borderColor:"blue.200"}} _dark={{bg:"gray.700"}}
         transition="box-shadow 0.3s , border-color 0.3s " m={9}
         >
            <Card.Header>
              <Flex justify="space-between">
            <Text color="blue.900" fontSize="2xl" _dark={{color:"blue.300"}}>{position}</Text>
            {isCurrent&& <Tag.Root bg="blue.600" _dark={{bg:"black",color:"white"}} size="lg" borderRadius={30} color="white" fontSize="lg">
             <Tag.Label>current</Tag.Label>
            </Tag.Root>
            }
            </Flex>

        <HStack color="#2F75BC" _dark={{color:"blue.300"}} ><PiBuildingOfficeFill/> <Text as="h2" fontSize="xl" >{companyName}</Text></HStack>
            </Card.Header>
            <Card.Body>
              <HStack gap={5} color="blue.500" _dark={{color:"#E0E0E0"}} ><HStack gap={1}><CiCalendar/> <Text>{duration}</Text></HStack>
                      <HStack gap={1}><IoLocationOutline/>  <Text>{location}</Text></HStack>
              </HStack>

                <Text my={5} fontSize="xl" _dark={{color:"#E0E0E0"}}>
                   {description}
                </Text>


                <Text color="blue.800" fontSize="lg"_dark={{color:"blue.400"}}mb="13px" >Key Achievements:</Text>
                <List.Root fontSize="lg" color="grey.400" >
                    
                        {achievements.map((achievement,index)=>(
                          <List.Item _marker={{color:"blue.500"}}  key={index}>{achievement}</List.Item>
                        ))}
               
               
                
                </List.Root>
                                
            </Card.Body>
            
         </Card.Root>
    );
}