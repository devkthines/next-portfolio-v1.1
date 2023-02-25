import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FcGraduationCap } from 'react-icons/fc';
import { FaToolbox } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';

import { DiMongodb } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Skills() {
  const [now, setNow] = useState(0);
  const handleChange = (e) => {
    setNow(e.currentTarget.value)
  }
  useEffect(() => {
    const hello = `%cHello. This is My Resume. This Breaks down what I learned, what experience I got, and my soft/technical skills.
    I am always learning as well, I want to become a software engineer eventually. Thanks for Looking!`;
    const style = 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;'
    console.log(hello, style);
  },[])
  const softSkill = ['Communication', 'Team Leader', 'Integrity', 'Fast Learner', 'Commitment', 'Hard Working','Empathy','Self-Aware']
  const btnName = {
    'HTML': {
      'id': 1,
      "icon": <button className='btnIcon' onClick={handleChange} value={95}><AiFillHtml5 /></button>
    },
    'CSS': {
      'id': 2,
      "icon": <button className='btnIcon' onClick={handleChange} value={95}><DiCss3 /></button>
    },
    'JS': {
      'id': 3,
      "icon": <button className='btnIcon' onClick={handleChange} value={80}><IoLogoJavascript /></button>
    },
    'React': {
      'id': 4,
      "icon": <button className='btnIcon' onClick={handleChange} value={75}><DiReact /></button>
    },
    'Redux': {
      'id': 5,
      "icon": <button className='btnIcon' onClick={handleChange} value={60}><SiRedux /></button>
    },
    'Node.js': {
      'id': 6,
      "icon": <button className='btnIcon' onClick={handleChange} value={50}><FaNodeJs /></button>
    },
    'MongoDB': {
      'id': 7,
      "icon": <button className='btnIcon' onClick={handleChange} value={40}><DiMongodb /></button>
    }
  }


  return (
    <>
      <Container id='resume'>
        <h1 className='conLine'>Resume</h1>
        <Row>
          <Col  xl={6} md={6} sm={6} xs={12}> <div className='resBody'>
            <h3><FcGraduationCap /> Education</h3>

            <h5>March 2021- March 2022</h5>
            <h6>Persevere</h6>
            <p>Learned Full-Stack Web Development based on the MERN stack.
              Spent approximately 2000 hours working on lessons, projects, and group projects.</p>

          </div>
          </Col>
          <Col  xl={6} md={6} sm={6} xs={12}><div className='resBody'>  <h3><FaToolbox /> Experience</h3>
            <p>No Web Development Experience Yet... Coming Soon!!</p>

          </div></Col>
        </Row>
        <Row>
          <Col  className='d-flex justify-content-center text-center mt-3'  xl={6} md={6} sm={6} xs={12}>
            <Card className='spec'>
              <Card.Title> <h1>Technical Skills</h1></Card.Title>
              <Card.Header >
                {Object.entries(btnName).map(([k, v]) => (
                  <div key={v.id}>
                    {v.icon}
                  </div>
                ))}
              </Card.Header>
              <Card.Body>
                <h6>Click Above to Discover</h6>
                <BsFillArrowUpCircleFill id='blinker' />
                <ProgressBar animated label={`${now}%`} now={now} />
              </Card.Body>
            </Card>

          </Col>
          <Col className='d-flex justify-content-center text-center mt-3'  xl={6} md={6} sm={6} xs={12}>
              <Card className='spec'>
                <Card.Header><h1>Soft Skills</h1></Card.Header>
                <Card.Body id='softSk'>
                  {softSkill.map(x => <Badge>{x}</Badge>)}
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>


    </>
  )
}