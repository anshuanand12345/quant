import React from 'react';
import "./Sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DatasetIcon from '@mui/icons-material/Dataset';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupsIcon from '@mui/icons-material/Groups';
import DialerSipIcon from '@mui/icons-material/DialerSip';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Sidebar = () => {
  return (
      <main class="bg-success text-white">
          <div className='sidebar'>
              <Nav.Link href="/home" className='sidemenu'>  <DriveFileMoveIcon className='icons' /> Arithmetic Aptitude </Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <EqualizerIcon className='icons' /> Logical Reasoning</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <TaskAltIcon className='icons' />Verbal Reasoning</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <DatasetIcon className='icons' />Data Interpretation</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <InsertPageBreakIcon className='icons' />Non-Verbal Reasoning</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <QuizIcon className='icons' /> Online Test</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <GroupsIcon className='icons' />Group Discussion</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'><DialerSipIcon className='icons' /> Personal Interview</Nav.Link>
              <Nav.Link href="/home" className='sidemenu'> <NewspaperIcon className='icons' />Placement Papers</Nav.Link>


          </div>
    </main>
     
  )
}

export default Sidebar;