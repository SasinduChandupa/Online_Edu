import React from 'react';
import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import Online from './pages/Online';
import './App.css';

function App() {

  function hello1() {
    console.log("hello 1");
  }

  const hello2 = () => {
    console.log("hello 2");
  }

  function hello3(name) {
    console.log("hello 3 " + name);
  }

  const styles_dev = {
    color: 'red', fontFamily: 'fancy', fontSize: '2rem'
  }

  return (
    <div id="wrapper">
      <HeaderContent />
      <BodyContent>
        <h1 style={styles_dev} >Educated Premier Online Institute</h1>
        <br />
        <p className="p1">Discover the ultimate online learning experience at Best Learn Education, where quality meets convenience. Our institute offers expertly crafted courses across a wide range of subjects, empowering students to learn at their own pace. Join a vibrant community of learners, gain new skills, and unlock your potential from anywhere in the world.</p>
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'20px',  flexWrap: 'wrap'}}>
          <button onClick={hello1} style={{ fontWeight: 'bold', padding: '10px 30px', fontSize: '16px', cursor: 'pointer', border: '1px solid #333', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s ease, transform 0.2s ease', borderRadius: '12px'}}>Online Lecturers</button>  <br/> <br/>
          <button onClick={hello2} style={{ fontWeight: 'bold', padding: '10px 25px', fontSize: '16px', cursor: 'pointer', border: '1px solid #333', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s ease, transform 0.2s ease', borderRadius: '12px' }}>Previous Lectures</button> <br/> <br/>
          <button onClick={() => hello3("Sasi")} style={{ fontWeight: 'bold', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: '1px solid #333', backgroundColor: '#f0f0f0', transition: 'background-color 0.3s ease, transform 0.2s ease', borderRadius: '12px' }}>Upcoming Lectures</button>
        </div>
        <br /><br />
        <p style={{
          color: 'yellow',
          fontSize: '1rem',
          fontFamily: 'sans-serif',
          padding: '20px 80px',
          backgroundColor: '#2c3e50',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          lineHeight: '1.6',
          margin: '20px auto',
          maxWidth: '800px'
        }}>
          <strong style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Welcome to Educated Premier Online Institute –
          </strong>
          Your Gateway to Quality Education
          <br /><br />
          At our Website, we believe in making education accessible, flexible, and engaging for everyone. Whether you’re looking to upgrade your skills, earn a certification, or explore a new subject, our platform offers a wide variety of online courses tailored to meet your learning goals.
          <br /><br />
          Our courses are designed by industry experts, ensuring that you gain practical knowledge that is both relevant and up-to-date. With interactive lessons, video tutorials, quizzes, and assignments, you’ll have all the resources you need to succeed at your own pace, from the comfort of your home.
          <br /><br />
          <strong style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Why Choose Us?</strong>
          <br /><br />
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
            <li><strong>Diverse Course Offerings:</strong> From programming and digital marketing to business management and personal development, we have something for everyone.</li>
            <li><strong>Flexible Learning:</strong> Learn at your own pace, on your own schedule, with 24/7 access to course materials.</li>
            <li><strong>Expert Instructors:</strong> Learn from top professionals who bring years of industry experience and knowledge.</li>
            <li><strong>Affordable and Accessible:</strong> Quality education shouldn’t break the bank. We offer affordable pricing options, often with scholarships and discounts.</li>
          </ul>
          <br /><br />
          Join thousands of learners who have already started their educational journey with [Your Website Name]. Empower yourself with the knowledge and skills that will shape your future. Start learning today!
        </p>
        <br /><br />
      </BodyContent>
      <FooterContent />
    </div>
  );
}

export default App;
