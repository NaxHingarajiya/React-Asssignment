import React from 'react'
import { Container,Row } from 'react-bootstrap'

export default function Contect() {
  return (
    <div>
    

      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://wallpaperaccess.com/full/3214373.jpg" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>This is home page</h1>
                <h2 className='mt-5 ms-5'>Welcome </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
