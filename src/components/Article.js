import React from 'react'
import data from '../helper/data.js'
import { Card, Button,Container, Row } from "react-bootstrap";

const Article = () => {
    return (
        // https://react-bootstrap.netlify.app/components/cards/#cards  REACTSTRAP CART LİNK
        <Container>   
        <Row xs={2} md={3} lg={4} className="g-4 mt-4">  
        {data.map((item) => {
            return (
            <Card key={item.id} className='container article-design' style={{ width: '18rem', height:'30rem' }} >
                <Card.Img className='card-image' variant="top" src={item.image1} />
                <Card.Body>
                    <Card.Title className='post'>{item.title}</Card.Title>
                    <Card.Text className='post-info'>
                    {item.snippet}
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
            )})}
        </Row>
        </Container>
    )
}

export default Article
