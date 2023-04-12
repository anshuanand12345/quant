import React from 'react';
import "./About.css";

const About = () => {
  return (
    <nav className='nav'>
      <div className='about'>
        <h1> PLACEMENT TRAINING & STUDENT PLACEMENT CENTRE </h1>
        <div className='details'>
          <p>
            Department of Training and Placement at East Point Group of Institutions (EPGI) gives high priority to the importance of training and mentoring for every individual. Students are exposed to best hands-on in-demand trainings on both Technical and Non-Technical front. Department is well equipped with excellent infrastructure to support each and every stage of the placement processes.
            Prof. Dhananjay Kumar, an able professional with 10+ years of academic and industry experience heads the department of Training & Placement at EPGI. It is the outcome of department’s continuous effort that college has 200+ such noble clients for whom EPGIT is a preferred college for all their Placement requirements. Each and every student of the college is given equal and ample support towards:
            Industrial trainings, Internships, Final Placements and Entrepreneurial mentoring. Campus placement is organized at college level throughout the year so that maximum number of students get placed. Training and Placement Cell also guides the students for higher studies. It is as a result of our unique training methodology; we are always been preferred by premier corporates to acquire fresh talent.
          </p>
          <img src="./pic.png" alt="Site Logo" />
        </div>

        <div className='purpose'>
          <div className='vision'>
            <h3>VISION</h3>
            <p>To reduce the gap between candidate’s skills and the industry’s expectation by incorporating continuous industry specific trainings thereby producing competent resources equipped with personal and professional etiquette.</p>
          </div>
          <div className='vision'>
            <h3>MISSION</h3>
            <p> EPGIT-T&P Cell is dedicated towards achieving 100% On-Campus placements by making students industry ready. To ensure 360-degree development in student’s performance, department is always ready to impart numerous training programs, workshops, seminars, industry interactions, and also industry visits.</p>
          </div>
        </div>

        <div className='training'>
          <div className='mission'>
            <h3>Training & Development</h3>
            <p>All the students of EPGI are trained on Basic English, Quantitative Aptitude, Soft skills and Technical skills right from 2nd Year level. Selection of the topics and methodology of training delivery is done by the mutual concern of: Industry experts, College experts (Management & Principal), Heads of the Department, Alumni along with T&P cell, thereby enabling us to choose the best training for the students. Department specific technical trainings are catered to the students to improve their career opportunities in their respective fields.</p>
          </div>
         
        </div>
      </div>
    </nav>
  )
}

export default About;