import { Card,Flex,Text,Button,Image,Tag,Link } from "@chakra-ui/react";


import { RiExternalLinkLine } from "react-icons/ri";

function ProjectCard({name,url,overview,image,technologies}){
    return(
        <>
        <Card.Root  boxShadow="lg" borderRadius={20}  
        transition="all 0.3s"
        _hover={{borderColor:"blue.500" ,boxShadow:"xl"}}
    
         
    _dark={{bg:"gray.800"}}
size="lg"
        >
          <Card.Header h="40%" p={0}>
      <Image
            src={image}
            alt={"error"}
            h="100%"
           borderTopRadius={15}
           objectFit="cover"
            />
           </Card.Header>
           <Card.Body p={5} >
            
            {/* <VStack p={10} align="flex-start" gap={3}pt={8}> */}
             <Text fontSize="23px" as="h3" mb={2}  color="blue.800" _dark={{color:"blue.400"}}>
             {name}
            </Text>
            

            <Text color="gray.500" fontSize="19px" lineClamp="4" _dark={{color:"#E0E0E0"}} mb={2} >{overview}</Text>
            <Flex gap={6}  align="center" mb={2} >
                {
                    technologies.map((technology)=>(
            <Tag.Root colorPalette="blue" size="lg" borderRadius="xl" color="blue.600" key={technology}   _dark={{color:"blue.300"}}> 
             <Tag.Label>{technology}</Tag.Label>
            </Tag.Root>

                    ))
                }
            
            </Flex>
            {/* </VStack> */}
            </Card.Body>
           <Card.Footer align="center" px={35}>
            
            
            <Button 
            as={Link}
            href={url}
            target="blank"
             bg="blue.600"
            p={6}
             
             
             color="white"
              borderRadius="13px"
             w="100%"
             variant="solid"
             _hover={{bg:"blue.700"}}
             
            //  fontSize="lg"
             
             
             >
                <RiExternalLinkLine />
              <Text as="h1"  fontSize="lg">Link</Text>
            </Button>

           </Card.Footer>
        </Card.Root>
</>);}
export default ProjectCard


