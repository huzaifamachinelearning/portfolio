import { Flex, Image, Link,Heading,Avatar,Box } from "@chakra-ui/react"; 
import { map } from "lodash"; 
import { v4 as uuidv4 } from "uuid"; 

 
export default function Header()  { 
  const MenuItems = [ 
     { 
      label: "Home", 
      link: "#/", 
    },
     { 
       label: "Education", 
       link: "#/Education", 
     }, 
  
     { 
       label: "Experience", 
       link: "#/Experience", 
     }, 
     { 
       label: "Projects", 
       link: "#/Projects", 
     }, 
     {
         label:"Contact",
         link:"#/Contact"
     }
    
   ];
 
  return ( 
    <Flex 
      height="100px"
      position="fixed"
      top={0}
      
      zIndex={10}
      
      alignItems="center" 
      px={{ 
        base: "18px", 
        sm: "36px", 
        md: "48px", 
        lg: "56px", 
        xl: "72px", 
        "2xl": "96px", 
      }} 
      
      
      boxShadow="xs" 
      justifyContent="space-between" 
      _light={{ bg: "white" }} 
      _dark={{ bg: "#222429ff" }} 
      width="100%" 
    > 
    
       <Avatar.Root  size="2xl" bg="blue.600"  >
       <Avatar.Fallback fontSize={20} color="white" >H G</Avatar.Fallback> 
      </Avatar.Root>
      
     
      <Flex gap={4} > 

        
        {map(MenuItems, (nav) => { 
          return ( 
            <Link 
              key={uuidv4()} 
              fontFamily="roboto" 
              fontWeight="500"
              fontSize={25} 
              color="blue.600"
              _hover={{ color: "gray.500" }} 
              _dark={{color:"blue.400"}}

              href={nav?.link || "#"} 
            > 
              {nav?.label} 
 </Link> 
          ); 
        })} 
      </Flex> 
    </Flex> 
  ); 
};
