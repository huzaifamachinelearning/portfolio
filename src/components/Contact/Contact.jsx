import { Box, Heading } from "@chakra-ui/react"; 
import { useForm } from "react-hook-form"; 
import ContactForm from './ContactForm' 
import {useRef} from "react"
import emailjs from "emailjs-com"
import { Toaster, toaster } from "../ui/toaster.jsx"
 
export default function Contact() { 
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset, 
  } = useForm(); 
  
const formRef =useRef()

const sendEmail=()=>{
  emailjs.sendForm("service_lqv2w0r","template_vo8vxtw",formRef.current,"hUbpn6DHUpg2wqYp1").then(
    (response)=>{
      console.log("success",response.status,response.text)
      toaster.create({
  title: "email confirmation message",
  description: "email sent",
  type:"success"
})
    },
    (error)=>{

console.log(error)
  toaster.create({
  title: "email status message",
  description: "failed to send email",
  type:"error"
})
    }
  )
}

 
  const onSubmit = (data) => { 
    console.log("Form Data:", data); 
    sendEmail()
    reset()
    
  }; 
 
  return ( 
    <Box p={6} mt="100px"  > 
      <Heading fontSize="4xl" mb="20px"  textAlign="center" color="blue.400"> 
        Contact Me
      </Heading> 
      <ContactForm
        register={register} 
        handleSubmit={handleSubmit} 
        control={control} 
        errors={errors} 
        onSubmit={onSubmit} 
        formRef={formRef}
      />
      <Toaster/> 
    </Box> 
  ); 
} 
 

