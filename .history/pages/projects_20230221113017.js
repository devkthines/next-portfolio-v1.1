import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import {GoMarkGithub} from 'react-icons/go';
import StockImage from '../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
import axios from 'axios';
import {AiOutlineLink} from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
      const hello = `%cHello. Welcome to the Projects Page. This Page Shows you any projects I have developed from scratch by following tutorials while learning or on my own with my experience. Thank you for Looking!`;
      const style = 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;'
      console.log(hello, style);
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/projects");
    setUser(response.data);
  };
  return (
    <>
    <div id='projects'>
    <h1 className='conLine'>Projects </h1>
    {/* <div id='projectCont'> */}
<Container fluid>
  <Row>
    {users.map(x =>
    <Col className='d-flex justify-content-center mt-2 mb-2' xl={3} lg={3} md={6} sm={6} xs={12}>
  <div className="projCont">
  <img src={StockImage} alt="Avatar" className="projImage"/>
  <div className='hiddentProjects'> <h3 className="content-text">{x.title}</h3>
        <p className="content-text">{x.subTitle}</p>
       <a className='content-links' href={x.gitLink}><GoMarkGithub/></a>
       <a className='content-links' href={x.demoLink}><AiOutlineLink/></a> </div>
</div>

 </Col>
     )}</Row></Container>
{/* </div> */}
</div>
    </>
  );
}

