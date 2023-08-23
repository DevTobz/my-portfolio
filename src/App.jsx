import './App.css'
import About from './components/about'
import Experience from './components/experience'
import Project from './components/projects'
import Contact from './components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'
import {NavLink,Link } from 'react-scroll'
import { useEffect,useRef } from 'react'


function App() {
    const innerRef = useRef(null);
    const outerRef = useRef(null);
    const nameDiv = useRef(null);


    useEffect(()=>{

    })

    const handleMouse =(e)=>{
      let x = e.clientX;
      let y = e.clientY;

      let inner = innerRef.current;
      let outer = outerRef.current;
      inner.style.top = y + 'px';
      inner.style.left = x + 'px';
      outer.style.top = y + 'px';
      outer.style.left = x + 'px';
    }


  return (
    <>
    <div className="container" onMouseMove={(e)=>handleMouse(e)}>
      
      <div className="fixed-div">
          <div className="inner-fixed">
            <div id='i-div1'>
              <p id='name'>Hi, I'm Akintelure Oluwatobi</p>
              <p id='position'>Full Stack Software Developer</p>
              <p id='p-pdesc'>I love to explore new technologies and frameworks to create efficient and innovative solutions technological stacks.</p>
            </div>
            <div id='i-div2'>
                <div className='nav-wrapper'>
                 <Link activeClass="activeLink" to="aboutId" spy={true} smooth={true} offset={-70} duration={500}>
                 <div className="nav-list">
                    <div className='filled-div'></div>
                    <div className='ptext'><p>ABOUT</p></div>  
                 </div>
                 </Link>
            
                 <Link activeClass="activeLink" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
                 <div className="nav-list">
                  <div className='filled-div'></div>
                  <div className='ptext'><p>EXPERIENCE</p></div>                
                 </div>
                 </Link>

                 <Link activeClass="activeLink" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                 <div className="nav-list">
                  <div className='filled-div'></div>                
                  <div className='ptext'><p>PROJECTS</p></div>
                 </div>
                  </Link>

                <Link activeClass="activeLink" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                 <div className="nav-list">
                  <div className='filled-div'></div>
                  <div className='ptext'><p>CONTACT</p></div>                  
                 </div>
                </Link>
              </div>
            </div>
              
            <div id='i-div3'>
              <div className="socials">
                <div className="social-div">
                  <FontAwesomeIcon icon={faGithub} size='xl'/>
                </div>
                <div className="social-div">
                  <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                </div>
                <div className="social-div">
                  <FontAwesomeIcon icon={faTwitter} size='xl'/>
                </div>
              </div>
            </div>
        </div>

      </div>
      
      
      <div className="scrollable">

        <div className="scroll1">
          <About/>
          <Experience/>
          <Project/>
          <Contact/>
      

        </div>
         
      </div>
      <div className="inner-cursor" ref={innerRef}></div>
      <div className="outer-cursor" ref={outerRef}> </div>

    </div>
    
    </>
  )
}

export default App
