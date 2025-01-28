import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style.css';
import Journey from './Journey';
// images
import Me from '../assets/myPic.jpg';
import Linkedin from '../assets/Ln.webp';
import ReactJs from '../assets/react.webp';
import HTML from '../assets/Html.webp';
import CSS from '../assets/css.png';
import JavaScript from '../assets/JS.png';
import NodeJs from '../assets/node.svg';
import Figma from '../assets/figma.png';
import Canva from '../assets/canva.webp';
import Sass from '../assets/sass.svg';
import Express from '../assets/express.png';
import Git from '../assets/git-bash.svg';
import GitHub from '../assets/github.svg';
import Boostrap from '../assets/bts.png';
import TailwindCSS from '../assets/ts.avif';
import GraphQL from '../assets/graphql.png';
import Docker from '../assets/docker.jpg';
import AWS from '../assets/aws.png';
import MongoDB from '../assets/mdb.png';
import MySQL from '../assets/mySql.png';
import Insta from '../assets/in.webp';
import Chat1 from '../assets/chat1.png';
import Chat2 from '../assets/chat2.png';
import Chat3 from '../assets/chat3.png';
import Chat4 from '../assets/chat4.png';
import Landing from '../assets/lan.png';
import Dashboard from '../assets/db.png';
import LinkedinClone from '../assets/linkedin.png';
import Amazon from '../assets/Amazon Clone.png';
import InnerGlow from '../assets/Inner-Glow.mp4';
import Inner_glow_img from '../assets/InnerGlow.png'
import YouTube from '../assets/YT.png';
import Topper from '../assets/top.png';
import Exp from '../assets/Exp.png';
import FoodFront from '../assets/buyer.mp4';
import FoodBack from '../assets/seller.mp4';
import Bloggify from '../assets/Blog.mp4';
import Extension from '../assets/Extension.mp4';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');

  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 25; i++) {
      const size = Math.random() * 25 + 10;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 5 + 's';
      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDelay,
          }}
        ></div>
      );
    }
    return bubbles;
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    // adaptiveHeight: true,
  };

  return (
    <div className='bg-black text-white'>
      {/* Fixed Header */}
      <div className='fixed top-0 left-0 w-full flex flex-row justify-evenly p-5 text-xl font-bold border-b-2 bg-black z-10'>

        <div className={activeSection === 'about' ? 'text-red-600 border-b-2 border-red-600' : 'cursor-pointer'}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >About</div>

        <div className={activeSection === 'project' ? 'text-red-600 border-b-2 border-red-600' : 'cursor-pointer'}
            onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}
        >Project</div>
        
        <div className={activeSection === 'skill' ? 'text-red-600 border-b-2 border-red-600' : 'cursor-pointer'}
            onClick={() => document.getElementById('skill').scrollIntoView({ behavior: 'smooth' })}
        >Skill</div>

        <div className={activeSection === 'resume' ? 'text-red-600 border-b-2 border-red-600' : 'cursor-pointer'}
            onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
        >Resume</div>

        <div className={activeSection === 'journey' ? 'text-red-600 border-b-2 border-red-600' : 'cursor-pointer'}
            onClick={() => document.getElementById('journey').scrollIntoView({ behavior: 'smooth' })}
        >Journey</div>

      </div>

      {/* Scrollable Content */}
      <div className=''> 
        <section id="about" className='min-h-screen flex items-center justify-center'>
          <div className='flex flex-row justify-evenly items-center'>
            <div>
              <img className='rounded-full h-96 w-full object-cover' src={Me} alt='img'/>
            </div>
            <div className='h-1/2 w-1/2'>
              <h1 className='text-5xl font-bold'>Hello, I'm <span className=' text-red-600'>Lovely Singh</span></h1>
              <h2 className='text-4xl font-bold'>MERN-Stack Developer</h2>
              <br/>
              <p>I'm a Passionate MERN Stack Developer with  hands-on experience in building scalable and optimized web applications.</p>
              <p>
              Currently enhancing Backend skills and Data Structures & Algorithms (DSA) problem-solving skills, actively practicing on LeetCode & GeeksforGeeks to strengthen logic-building abilities. Recognized as a Top Performer during an internship for delivering high-impact projects and awarded a scholarship for academic excellence.
              </p>
              <p>I thrive on solving complex technical challenges and delivering efficient solutions, always eager to learn, grow and take on new challenges.</p><br/>
              <p>Connect with me:  lovely1211zmn@gmail.com</p>
            </div>
          </div>
        </section>

          <div id='social' className='-mt-28 flex flex-row text-center mb-10 justify-center items-center'>
             <a href="https://www.linkedin.com/in/lovely-singh-612aa4293/" target="_blank" rel="noopener noreferrer">
               <img src={Linkedin} alt="LinkedIn" className='rounded-full mx-2 w-16 border-4 border-red-600'/>
             </a>
             <a href="https://github.com/lovely1211/" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
               <img src={GitHub} alt="Github" className='bg-white mx-2 border-4 border-red-600 rounded-full w-16'/>
             </a>
             <a href="https://www.instagram.com/forpersonal01/" target="_blank" rel="noopener noreferrer">
               <img src={Insta} alt="Instagram" className='mx-2 bg-white border-4 border-red-600 rounded-full w-16'/>
             </a>
          </div>

        <h2 className='text-4xl font-bold'>Projects</h2>
        <section id="project" className="min-h-screen flex items-center justify-center">
          <div className="w-full flex justify-center"> 
            <div className="carousel-container w-4/5"> 
            <Slider {...sliderSettings}>

            <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/InnerGlow', '_blank')}>
                <video 
                  className="w-full cursor-pointer" 
                  src={InnerGlow}  
                  alt="Project 0"
                  autoPlay   
                  muted  
                  poster={Inner_glow_img}  
                />
                  <p className="text-lg">InnerGlow is a mental health platform to help individuals achieve inner peace and emotional balance.</p>
                  <a href="https://github.com/lovely1211/InnerGlow"           className="underline hover:no-underline text-sm">GitHub</a>
            </div>

            <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/GoodFood', '_blank')}>
                <video 
                  className="w-full cursor-pointer" 
                  src={FoodFront}  
                  alt="Project 0"
                  autoPlay    
                  muted    
                />
                <p>Deployed on Render: 
                  <a href="https://goodfoodfront.onrender.com"
                  className="underline hover:no-underline text-sm"> GoodFood</a>
                </p>
            </div>

            <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/GoodFood', '_blank')}>
                <video 
                  className="w-full cursor-pointer" 
                  src={FoodBack}  
                  alt="Project 0"
                  autoPlay    
                  muted    
                />
            </div>

            <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/My-Blog', '_blank')}>
                <video 
                  className="w-full cursor-pointer" 
                  src={Bloggify}  
                  alt="Project 00"
                  autoPlay    
                  muted    
                />
                <p className="text-lg">Visit on GitHub:</p>
                  <a href="https://github.com/lovely1211/My-Blog"           className="underline hover:no-underline text-sm">GitHub</a>
            </div>

              <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/My-Chat-App', '_blank')}>
                <img className="carousel-img cursor-pointer" src={Chat1} alt="Project 2" />

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">My-Chat-App - Real time chat web application using MERN Stack and Socket.io</p>
                  <a href="https://github.com/lovely1211/My-Chat-App"           className="underline hover:no-underline text-sm">GitHub</a>
                </div>
              </div>

              <div className='relative inline-block'>
                <img className="carousel-img" src={Chat2} alt="Project 2" />
                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <a href="https://lovely1211.github.io/Portfolio/Project_Report.pdf" className="underline hover:no-underline text-md">Project Report</a>
                </div>
              </div>

              <div onClick={() => window.open('https://github.com/My-Chat-App', '_blank')}>
                <img className="carousel-img cursor-pointer" src={Chat3} alt="Project 2" />
              </div>

              <div onClick={() => window.open('https://github.com/My-Chat-App', '_blank')}>
                <img className="carousel-img cursor-pointer" src={Chat4} alt="Project 2" />
              </div>

              <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/Linkedin_AI_Reply', '_blank')}>
                <video 
                  className="w-full cursor-pointer" 
                  src={Extension}  
                  alt="Project 00"
                  controls    
                  muted    
                />
              </div>
              
              <div className='relative inline-block'>
                <img className="carousel-img " src={Dashboard} alt="Project 1"/>

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Real-Time Insights: Capturing Customer Feedback for Continuous Improvement</p>
                  <a href="https://github.com/shivamsharmxa/Feedback-Collection" className="underline hover:no-underline text-sm">GitHub</a>
                </div>
              </div>
              
              <div className='relative inline-block' >
                <img className="carousel-img" src={Topper} alt="Project 1" />
                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Achieved Top Position in Internship Program</p>
                  <a href="https://www.linkedin.com/posts/lovely-singh-612aa4293_zidiodevelopment-internshipopportunity-zidio-activity-7218136592429768704-2ONQ?utm_source=share&utm_medium=member_desktop" className="underline hover:no-underline text-sm">See Here</a>
                </div>
              </div>
              
              <div className='relative inline-block'>
                <img className="carousel-img " src={Exp} alt="Project 1" />

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Received Experience Certificate for Outstanding Performance During Internship</p>
                  <a href="https://www.linkedin.com/posts/lovely-singh-612aa4293_i-am-writing-to-thank-you-for-giving-me-the-activity-7212700719856930816-Wips?utm_source=share&utm_medium=member_desktop" className="underline hover:no-underline text-sm">See Here</a>
                </div>
              </div>
              
              <div className='relative inline-block' onClick={() => window.open('https://github.com/lovely1211/Amazon-clone', '_blank')}>
                <img className="carousel-img cursor-pointer" src={Amazon} alt="Project 1" />

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Amazon Clone</p>
                </div>
              </div>
              
              <div className='relative inline-block'>
                <img className="carousel-img" src={YouTube} alt="Project 1" />

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">YouTube Clone</p>
                </div>
              </div>

              <div className='relative inline-block'>
                <img className="carousel-img " src={Landing} alt="Project 1" />

                <div className="absolute bottom-0 w-full bg-red-650 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Landing Page</p>
                </div>
              </div>
              
              <div className='relative inline-block'>
                <img className="carousel-img" src={LinkedinClone} alt="Project 1" />

                <div className="absolute bottom-0 w-full bg-red-950 bg-opacity-50 text-yellow-500 font-bold text-center p-3">
                  <p className="text-lg">Linkedin Clone</p>
                </div>
              </div>
            </Slider>

            </div>
          </div>
        </section>

        <section id="skill" className='min-h-screen flex items-center justify-center'>
          <div>
            <h2 className='text-4xl font-bold mb-8'>Skills</h2>
            <div className='grid grid-cols-5 gap-12'>
            <p>
              <img className='w-20 rounded-lg' src={ReactJs} alt=''/>ReactJs</p>
            <p>
            <img className='w-20 rounded-lg bg-white' src={NodeJs} alt=''/>NodeJs</p>
            <p>
            <img className='w-20 rounded-lg' src={MongoDB} alt=''/>MongoDB</p>
            <p>
            <img className='w-20 rounded-lg' src={Express} alt=''/>ExpressJs</p>
            <p>
            <img className='w-20 rounded-lg' src={JavaScript} alt=''/>JavaScript</p>
            <p>
            <img className='w-20 rounded-lg' src={MySQL} alt=''/>MySQL</p>
            <p>
            <img className='w-20 rounded-lg' src={Git} alt=''/>Git</p>
            <p>
            <img className='w-20 rounded-lg bg-white' src={GitHub} alt=''/>GitHub</p>
            <p>
            <img className='w-20 rounded-lg bg-white' src={GraphQL} alt=''/>GraphQL</p><p>
            <img className='w-20 rounded-lg bg-white' src={Docker} alt=''/>Docker</p><p>
            <img className='w-20 rounded-lg bg-white' src={AWS} alt=''/>AWS</p>
            <p>
            <img className='w-20 rounded-lg bg-white' src={HTML} alt=''/>HTML</p>
            <p>
            <img className='w-20 rounded-lg' src={CSS} alt=''/>CSS</p>
            <p>
            <img className='w-20 rounded-lg' src={Boostrap} alt=''/>Boostrap</p>
            <p>
            <img className='w-20 rounded-lg' src={TailwindCSS} alt=''/>TailwindCSS</p>
            <p>
            <img className='w-20 rounded-lg' src={Canva} alt=''/>Canva</p>
            <p>
            <img className='w-20 rounded-lg' src={Figma} alt=''/>Figma</p>
            <p>
            <img className='w-20 rounded-lg bg-white' src={Sass} alt=''/>Sass</p>
            </div>
          </div>
        </section>

        <section id="resume" className='min-h-screen flex items-center justify-center'>
          <div>
            <h2 className='text-4xl font-bold my-8'>Resume</h2>
            <div className='w-full '>
              <embed src="https://lovely1211.github.io/Portfolio/Resume.pdf" type="application/pdf" width="100%" height="460px" />
            </div>
          </div>
        </section>

        <section id="journey" className="min-h-screen flex items-center justify-center">
          <Journey />
        </section>

      </div>
      
      {/* Bubble Background */}
      <div className="absolute inset-0">{generateBubbles()}</div>
    </div>
  );
};

export default Portfolio;

// npm run build,  npm run deploy