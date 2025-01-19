import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
        <Navbar />
      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://tse3.mm.bing.net/th?id=OIP.RSowHQsH0oBWuVbrrRzo9QHaE3&pid=Api&P=0&h=180" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>This is About us page</h1>
                <h2 className='mt-5 ms-5'>Information About Webpage </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
