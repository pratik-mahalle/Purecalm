import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './rcommunity.css'; 
import { Link } from 'react-router-dom';

const RCommunity = () => {
  // Sample data for recommended communities (you can replace it with your actual data)
  const recommendedCommunities = [
    {
      id: 1,
      url: "/community/1",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Community 1",
      description: "Description for Community 1"
    },
    {
      id: 2,
      url: "/community/2",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Community 2",
      description: "Description for Community 2"
    },
    {
      id: 3,
      url: "/community/3",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Community 3",
      description: "Description for Community 3"
    }
    
  ];

  return (
    <div className="community-page">
      <Container>
        <h1 className="text-center cHeaing">Recommended Communities</h1>
        <Row xs={1} md={2} lg={3} className="g-4 cCards">
          {recommendedCommunities.map(community => (
            <Col key={community.id}>
                <Link to={community.url} className="card-link">
                    <Card className="h-100 communitycard">
                        <div className="community-image d-flex justify-content-center align-items-center">
                            <Image src={community.image} roundedCircle fluid /> {/* Image component */}
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center">{community.title}</Card.Title>
                            <Card.Text className="text-center">{community.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RCommunity;
