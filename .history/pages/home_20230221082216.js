import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdVolunteerActivism } from 'react-icons/md';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';
import PicOfMe from '../images/image_67220481.JPG'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import $ from 'jquery'
import ResPDF from '../resume/hinesResumeCoverLetter.pdf'
import Popover from 'react-bootstrap/Popover';

export default function Home() {
  useEffect(() => {
    LoveIt();
    const hello = `%cHello. Welcome to the
    Console Magic I have designated to this portfolio.
    I hope you enjoy as you discover all the small
    insignificant details that makes this stand out!`;
    const style = 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;'
    console.log(hello, style);
  }, [])
  function LoveIt() {
    var words = [
      "Love to help others.",
      "am a CrossFitter.",
      "am a Passionate Web Developer."
    ], i = 0;
    setInterval(function () {
      $('#changer').fadeOut(function () {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
    }, 1500);

  };
  const btnName = {
    'gitHub': {
      'id': 1,
      "placement": "bottom",
      "info": "gitHub",
      "icon": <a href="https://github.com/devkthines" target='_blank'>
        <button className='quickLinks'><AiFillGithub /></button></a>
    },
    'linkedIn': {
      'id': 2,
      "placement": "bottom",
      "info": "linkedIn",
      "icon": <a href="https://www.linkedin.com/in/korey-hines-17b0a9263" target='_blank'><button className='quickLinks'><GrLinkedinOption />
      </button></a>
    },
    'gMaps': {
      'id': 3,
      "placement": "bottom",
      "info": "gMaps",
      "icon": <a href="https://goo.gl/maps/BovFkBEjUMQ6VBob9" target='_blank'>
        <button className='quickLinks'><MdLocationOn /></button></a>
    },
    'gMail': {
      'id': 4,
      "placement": "bottom",
      "info": "gMail",
      "icon": <a href="mailto:dev.kthines@gmail.com"><button className='quickLinks'><AiOutlineMail /></button></a>
    },
    'upWork': {
      'id': 5,
      "placement": "bottom",
      "info": "upWork",
      "icon": <a href="https://www.upwork.com/freelancers/~01ae4feb16c6fa7213?viewMode=1" target='_blank'>
        <button className='quickLinks'><SiUpwork /></button></a>
    },
    'redPDF': {
      'id': 6,
      "placement": "bottom",
      "info": "resume",
      "icon": <a className='aLink' target="_blank" href={ResPDF}>
        <button className='quickLinks'><AiOutlineFilePdf /></button></a>
    },
    'phone': {
      'id': 7,
      "placement": "bottom",
      "info": "phone",
      "icon": <a href="tel:2093669363" >  <button className='quickLinks'><BsFillPhoneFill /></button></a>
    }
  }

  return (
    <div id='home'>
      <Container fluid>
        <Row className="">
          <Col className='d-flex flex-column justify-content-center align-items-center' xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className='change'> <h2 >&lt;h2&gt;Hey there, I'm Korey.&lt;/h2&gt;</h2></div>
            <div className='change'><h2 id='spec'>I <span id='changer'> am a Passionate Web Developer.</span></h2></div>
            <div className='change'>




              {Object.entries(btnName).map(([k, v]) => (
                <div className='d-inline-block' key={v.id}>
                  <OverlayTrigger
                    trigger="hover"
                    key={v.id}
                    placement={v.placement}
                    overlay={

                      <Tooltip id={`tooltip-${v.placement}`}>
                        {v.info}
                      </Tooltip>
                    }
                  >
                    {v.icon}
                  </OverlayTrigger>
                </div>
              ))}


            </div>
          </Col>

          <Col id='secCol' className='text-center mt-5' xl={6} lg={6} md={6} sm={12} xs={12}>
            <img id='picMe' src={PicOfMe} alt="" />

          </Col>
        </Row>
        <Row className='mt-5'>
          {/* <div id='what'> */}
          <Col className='d-flex justify-content-center mb-1' xl={3} lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem', height: '14rem' }} id='uno'>
              <Card.Body>
                <Card.Title><h2><MdVolunteerActivism /> Volunteering</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Besides Coding, I love to help others in any way I have. The reward of being able to do something for someone
                  without expecting anything in return is satisfying and rewarding.
                </Card.Text>
              </Card.Body>
            </Card> </Col><Col className='d-flex justify-content-center mb-1' xl={3} lg={3} md={6} sm={6} xs={12}>   <Card style={{ width: '18rem', height: '14rem' }}>
              <Card.Body>
                <Card.Title><h2><IoLogoCss3 /> User Interfaces</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  I have a passion for React and CSS, and anything to do with the design and development of User Interfaces! It is where I
                  tend to spend most of my time!
                </Card.Text>
              </Card.Body>
            </Card> </Col><Col className='d-flex justify-content-center mb-1' xl={3} lg={3} md={6} sm={6} xs={12}>  <Card style={{ width: '18rem', height: '14rem' }}>
              <Card.Body>
                <Card.Title><h3><IoLogoJavascript /> All Things JS</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  I have Experience and a strong foundation in the MERN Stack, and am capable of using Node.js, Express, MongoDB, and anything
                  I set out to learn.
                </Card.Text>
              </Card.Body>
            </Card>  </Col><Col className='d-flex justify-content-center mb-1' xl={3} lg={3} md={6} sm={6} xs={12}>  <Card style={{ width: '18rem', height: '14rem' }}>
              <Card.Body>
                <Card.Title><h3><CgGym /> Crossfit Lover</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  If I need to take a break from coding, you can usually find me at the gym hitting the refresh button and pushing
                  my body to the limits. I do it for mental and physical health.
                </Card.Text>
              </Card.Body>
            </Card></Col>
          {/* </div> */}

        </Row>
      </Container>
    </div>
  )
}