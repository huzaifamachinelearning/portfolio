import {Box,Flex} from '@chakra-ui/react'

export default function TimeLine({number}){
    return(
<Flex
direction="column"

align="center"
position="relative"

height={number*540}
justifyContent="space-around"

m={10}
>
    <Box 
    width="2px"
    bg="blue.500"
    
    position="absolute"
    top={0}
    bottom={0}
    left="auto"
    right="auto"
    >

    </Box>
{
    Array.from({length:number},(e ,i)=>{i}).map((k,index)=>{
        
        return(
        <Flex boxSize={10} borderRadius="full" bg="blue.100" key={index} align="center" justifyContent="center" zIndex={1} >
            <Box boxSize={6} bg={index==0?"blue":"blue.400"} borderRadius="full"  >
            
            </Box>
        </Flex>);
})
}

</Flex>
    );

};