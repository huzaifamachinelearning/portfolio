import { Flex } from "@chakra-ui/react"; 
import { ColorModeButton,} from "./components/ui/color-mode"; 

import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Header  from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; 
import EducationPage from "./pages/EducationPage";
import ExperiencePage from"./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage"




function App() {
 

  
    return ( 
    <Router> 
      <Flex direction="column" minH="100vh" width="100vw"> 
        <Header /> 
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/Experience" element={<ExperiencePage />} /> 
          <Route path="/Education" element={<EducationPage />} /> 
          <Route path="/Projects" element={<ProjectsPage />} /> 
          <Route path="/Contact"  element={<ContactPage/>}/>
        </Routes>
        <Footer/>
        <ColorModeButton position={"fixed"} right={0} bottom={0} /> 

      </Flex> 
    </Router> 
  ); 
  }
export default App
