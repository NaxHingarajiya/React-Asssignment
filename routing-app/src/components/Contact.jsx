import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <div>
        <Navbar />
      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://media.istockphoto.com/photos/hand-pressing-a-contact-us-button-picture-id487923098?k=6&m=487923098&s=612x612&w=0&h=fzAGlVKaTlnYJuZpRCD9ScQcyOzonwtwvOGMmvZBO1U=" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>This is Contact page</h1>
                <h2 className='mt-5 ms-5'>+91 96627 25041 </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
