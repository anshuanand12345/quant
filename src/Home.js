import React from 'react';
import "./Home.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  return (
    <nav className='nav'>
      <div className='box'>
        <div className='boxbar'>
          <h3> General Aptitude </h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Arithmatic Aptitude</li>
            <li> <ArrowForwardIosIcon className='icons' /> Data Interpretation</li>
            <li> <ArrowForwardIosIcon className='icons' /> Online Aptitude Test</li>
            <li> <ArrowForwardIosIcon className='icons' /> Data Interpretation Test</li>
          </ul>      
        </div> 
        <div className='boxbar'>
          <h3> Verbal and Reasoning </h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Verbal Ability</li>
            <li> <ArrowForwardIosIcon className='icons' /> Logical Reasoning</li>
            <li> <ArrowForwardIosIcon className='icons' /> Verbal Reasoning</li>
            <li> <ArrowForwardIosIcon className='icons' /> Non Verbal Reasoning</li>
          </ul>   
        </div> 
        <div className='boxbar'>
          <h3> Current Affairs & GK</h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Current Affairs</li>
            <li> <ArrowForwardIosIcon className='icons' /> Basic General Knowledge</li>
            <li> <ArrowForwardIosIcon className='icons' /> General Science</li>
            <li> <ArrowForwardIosIcon className='icons' /> Read more...</li>
          </ul>   
        </div> 
        <div className='boxbar'>
          <h3> Interview</h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Placement Papers</li>
            <li> <ArrowForwardIosIcon className='icons' /> Group Discussion</li>
            <li> <ArrowForwardIosIcon className='icons' /> HR Interview</li>
            <li> <ArrowForwardIosIcon className='icons' /> Read more...</li>
          </ul>
        </div>
        <div className='boxbar'>
          <h3> Online Tests </h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Aptitude Test</li>
            <li> <ArrowForwardIosIcon className='icons' /> Verbal Ability Test</li>
            <li> <ArrowForwardIosIcon className='icons' /> Logical Reasoning Test</li>
            <li> <ArrowForwardIosIcon className='icons' /> C Programming Test</li>
          </ul>
        </div>
        <div className='boxbar'>
          <h3> Technical MCQs</h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Networking Questions</li>
            <li> <ArrowForwardIosIcon className='icons' /> Database Questions</li>
            <li> <ArrowForwardIosIcon className='icons' /> Basic Electronics</li>
            <li> <ArrowForwardIosIcon className='icons' /> Digital Electronics</li>
          </ul>
        </div> 
        <div className='boxbar'>
          <h3> Technical MCQs</h3>
          <ul>
            <li> <ArrowForwardIosIcon className='icons' /> Networking Questions</li>
            <li> <ArrowForwardIosIcon className='icons' /> Database Questions</li>
            <li> <ArrowForwardIosIcon className='icons' /> Basic Electronics</li>
            <li> <ArrowForwardIosIcon className='icons' /> Digital Electronics</li>
          </ul>
        </div> 
        
      </div>
    </nav>
  )
}

export default Home;