import { Controller } from "react-hook-form"; 
import { Input, Textarea, Flex, Field, Button } from "@chakra-ui/react"; 
import ReactQuill from "react-quill-new"; 
import "react-quill-new/dist/quill.snow.css"; 
 

function stripHtmlTags(htmlString){
  
  const doc=new DOMParser().parseFromString(htmlString,'text/html')
  return doc.body.textContent || ""
}


 
export default function ContactForm({ 
  register, 
  handleSubmit, 
  errors, 
  control, 
  onSubmit,
  formRef 
}) { 
  return ( 
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}> 
      <Flex 
        flexDirection="column" 
        gap={8} 
        p={6} 
        // borderRadius="lg" 
        // boxShadow="xl" 
        maxW="30%"
        mx="auto"
        // borderWidth={2}
        

      > 
        <Field.Root invalid={!!errors.name}> 
          <Field.Label fontSize={22} >Name</Field.Label> 
  <Input 
            variant="outline" 
            placeholder="Your Name" 
            {...register("name", { required: "name is required" })} 
            borderColor="blue.400"
            borderWidth="2px"
             size="2xl"
             _hover={{borderColor:"blue.600"}}

          /> 
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText> 
        </Field.Root> 
 
        <Field.Root invalid={!!errors.email}> 
          <Field.Label fontSize={22}>Email</Field.Label> 
          <Input 
            placeholder="Email" 
            {...register("email", { required: "email is required" })} 
           borderColor="blue.400"
            borderWidth="2px"
             size="2xl"
             _hover={{borderColor:"blue.600"}}
          /> 
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText> 
        </Field.Root> 
 
        
        <Field.Root> 
          <Field.Label fontSize={22} >Subject</Field.Label> 
          <Input placeholder="Subject" {...register("subject")} 
         borderColor="blue.400"
            borderWidth="2px"
             size="2xl"
             _hover={{borderColor:"blue.600"}}
          /> 
        </Field.Root> 
 
       
 
       
 
        <Field.Root invalid={!!errors.message}> 
          <Field.Label fontSize={22} >Message</Field.Label> 
          <Controller 
            name="message" 
            control={control} 
            rules={{ required: "message is required" }} 
            render={({ field }) => ( 
              
              <>
              <ReactQuill 
                theme="snow" 
                value={field.value} 
                onChange={field.onChange} 
                style={{ width:"100%",height:"200px",marginBottom:"40px" }} 
                
              /> 
            <Input type="hidden" name="message" value={stripHtmlTags(field.value)}/> 
            </> 
            
            )} 
          /> 
          <Field.ErrorText>{errors.message?.message}</Field.ErrorText> 
        </Field.Root> 
 
            
 
        <Button type="submit" p={7} variant="solid" borderColor="gray.700" bg="blue.600" color="white" mt={4}  fontSize={20} width="200px" > 
          Submit 
        </Button> 
      </Flex> 
    </form> 
  ); 
} 