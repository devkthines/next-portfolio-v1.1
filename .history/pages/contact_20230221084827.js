import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup'
import React from 'react';
import { useFormik } from 'formik';
import $ from 'jquery'
export default function Contact() {
  useEffect(() => {
    const hello = `%cHello. Welcome to the Contact Page. This Page Breaks down how you can get ahold of me, and it is submitted to an actual database as well. It is pretty nifty!`;
    const style = 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;'
    console.log(hello, style);
  },[])
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string()
        .matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be Valid US Number')
        .required('Required'),
      subject: Yup.string()
        .min(4, 'Must be at least 4 Characters')
        .required('Required'),
      message: Yup.string().min(30, 'Must be a Minimum of 30 characters').required('Required')

    }),
    validateOnChange: false, // this one
    validateOnBlur: false, // and this one
    onSubmit: values => {
      axios
        .post("http://localhost:5000/contact", values)
        .then(response => {
          console.log(`%cThank You for Submitting and Finding this Message after Submitting!`,
 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;')
          formik.resetForm()
          $("#hider").removeClass('hide').addClass('visible')
          $("#formation").addClass('hide')
        })
    },
  });
  return (<>
    <Container fluid id='contact'>
     <div id='formation'> <h1 className='conLine'>Contact </h1>
      <h2>I'm always open to discussing development projects or partnerships.</h2>
      <form onSubmit={formik.handleSubmit}>
      <Row className='mt-3 mb-3'>
        <Col className='mt-3'  xl={6} md={6} sm={6} xs={12}>
          <input
           className={(formik.errors.name && formik.touched.name ? ' invalid' : '')}
            id="name"
            type="text"
            name='name'
            placeholder='Enter Your Full Name'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null} </Col>
        <Col  className="mt-3"xl={6} md={6} sm={6} xs={12}>
          <input id="email" name='email' placeholder='Enter Your Email'
           className={(formik.errors.email && formik.touched.email ? ' invalid' : '')} {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}</Col>
      </Row>
      <Row className='mt-3 mb-3'>
        <Col>

          <input
           className={(formik.errors.phone && formik.touched.phone ? ' invalid' : '')}
          id="phone" type="phone" name='phone' placeholder='Enter Your Phone #'
           {...formik.getFieldProps('phone')} />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </Col></Row>
      <Row className='mt-3 mb-3'><Col>
        <input id="subject" type="subject" name='subject' placeholder='Enter Subject'
          className={(formik.errors.subject && formik.touched.subject ? ' invalid' : '')}
        {...formik.getFieldProps('subject')} />
        {formik.touched.subject && formik.errors.subject ? (
          <div>{formik.errors.subject}</div>
        ) : null}
      </Col>     </Row>
      <Row className='mt-3 mb-3'><Col className='text-center'>
        <textarea
         className={(formik.errors.message && formik.touched.message ? ' invalid' : '')}
        id="message" type="message" name='message' placeholder='Type Your Message' {...formik.getFieldProps('message')} />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null} </Col>
      </Row><Row className='mt-3 mb-3'>
        <Col className='text-center'> <button id='contactBtn' type="submit" className='mx-auto'>Submit</button></Col>
      </Row></form></div>
      <Row className='mt-3 mb-3'>
        <Col><div id='hider' className='hide'> <h1>Submitted Successfully!</h1>
        <p>I will be in touch with you within 48 hours. Thank you!</p></div></Col>
      </Row>
  </Container>
    </>
  );
};