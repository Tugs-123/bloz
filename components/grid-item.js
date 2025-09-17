import Card from 'react-bootstrap/Card';
import Image from "next/image"; 

export default function GridItem () {
    return (
        <Card className={`fj-card  fj-card-list`}>
                       <div className="card-body-wrapper">
                        <Card.Header className="d-flex flex-row">
                          <Image
                            src="https://source.unsplash.com/random/150x150?face"
                            className="rounded-circle mr-4"
                            height="50px"
                            width="50px"
                            alt="avatar"/>
                            <div>
                              <Card.Title className="fw-bold mb-1">
                                 Амарбат Чинзориг
                              </Card.Title>
                              <Card.Subtitle className="card-date">
                                2025-06-20
                              </Card.Subtitle>
                            </div>
                        </Card.Header>  
                        <Card.Body>
                          <Card.Title className="card-main-title">
                            Reac ын цаана юу вэ?
                          </Card.Title>  
                          <Card.Text className="card-text"> Dynamic маягийн сайт </Card.Text>
                        </Card.Body>
                       </div>
        </Card>    
    );
}