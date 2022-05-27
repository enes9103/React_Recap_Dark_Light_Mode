// https://api.github.com/users/enes9103/followers?per_page=100

import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const UsersPage = () => {
    const [followersList, setFollowersList] = useState([]);

    const getFollowers = async () => {
        const { data } = await axios.get("https://api.github.com/users/enes9103/followers?per_page=100");
        setFollowersList(data);
        // console.log(data);
    };

    useEffect(() => {
        getFollowers();
    }, []);

    return (
      
        <Container>   
        <Row xs={2} md={3} lg={4} className="g-4 mt-4">
          {followersList.map((follower, index) => (
            <Col key={index}>
              <Card className='container'>
                <Card.Img variant="top" src={follower.avatar_url} />
                <Card.Body>
                  <Card.Text>{follower.login}</Card.Text>
                  <Button
                    href={follower.html_url}
                    style={{ borderRadius: "50px" }}
                    variant="primary"
                  >
                    VIEW PROFILE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
}

export default UsersPage
