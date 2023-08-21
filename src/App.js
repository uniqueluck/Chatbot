import React from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBot from 'react-simple-chatbot';

function App() {
  const steps = [
    {
      id: '1',
      message: 'Welcome to Niri Global Services Pvt Ltd! How can we assist you today?',
      trigger: 'userResponse',
    },
    {
      id: 'userResponse',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'Great! Here are some things you can do:',
      trigger: '3',
    },
    {
      id: '3',
      options: [
        { value: 'services', label: 'Learn about our services', trigger: 'servicesInfo' },
        { value: 'team', label: 'Get more information about our team', trigger: 'teamInfo' },
        { value: 'process', label: 'Inquire about our development process', trigger: 'processInfo' },
        
      ],
    },
    {
      id: 'servicesInfo',
      message: 'We offer a range of services including... ',
      trigger: 'info',
    },
    {
      id:'info',
      options: [
        { value: 'web desing', label: 'Web Desing', trigger:'Web Design' },
        { value: 'Web Devlopment', label: 'Web Devlopment', trigger: 'Web Devlopment' },
        { value: 'Product Management', label: 'Product Management', trigger: 'Product Management' },
        { value: 'Marketing', label: 'Marketing', trigger:'Marketing' },
        { value: 'Graphic Design', label: 'Graphic Design', trigger: 'Graphic Design' },
        
      ],
    },
    {
      id: 'teamInfo',
      message: 'Our skilled and experienced IT experts collaborate to provide top-notch solutions.',
      trigger: 'moreQuestions',
    },
    {
      id: 'processInfo',
      message: 'Our development process involves planning, design, implementation, and testing.',
      trigger: 'moreQuestions',
    },
    {
      id: 'moreQuestions',
      message: 'Do you have any more questions?',
      trigger: 'moreQuestionsOptions',
    },
    {
      id: 'Web Design',
      message: '"Transforming ideas into visually appealing websites that resonate with your audience, blending creativity and functionality seamlessly."',
      trigger: 'contactinfo',
    },
    {
      id: 'Web Devlopment',
      message: '"Unlock your digital potential with our comprehensive web development services, crafting dynamic websites and applications that merge stunning design with seamless functionality.".',
      trigger: 'contactinfo',
    },
    {
      id: 'Product Management',
      message: '"Comprehensive product management services that guide ideation, development, and launch, ensuring seamless execution from concept to market success."',
      trigger: 'contactinfo',
     
    },
    {
      id: 'Marketing',
      message: '"Unlock success with tailored marketing strategies that captivate audiences and drive results." ',
      trigger: 'contactinfo',
    },
    {
      id: 'Graphic Design',
      message: '"Transforming ideas into captivating visuals through expert Graphic Design services, delivering impactful and compelling designs for your brands success."',
      trigger: 'contactinfo',
    },
    {
      id: 'contactinfo',
      message: 'You can reach out to us via phone at       +91 880-693-1555',
      trigger:'moreQuestions',
    
    },
    {
      id: 'moreQuestionsOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'userrResponse' },
        { value: 'no', label: 'No', trigger: 'farewell' },
      ],
    },
    {
      id: 'userrResponse',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: '"Please send your query to our official email address.Our team Response on your mail as soon as possible"',
      trigger:'mail',
    },
   {
      id: 'mail',
      message: 'mail:hr@niriglobal.com',
      trigger:'farewell',
    },





    {
      id: 'farewell',
      message: ' Thank you for chatting with me. Have a great day!...',
      end: true,
    },


    
   
  ];



  return (
    <>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </>
  );
}

export default App;