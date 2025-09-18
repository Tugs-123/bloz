import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Link from "next/link"

export default function GridItem ({post}) {
    return (
        <Card className={`fj-card  fj-card-list`}>
                       <div className="card-body-wrapper">
                        <Card.Header className="d-flex flex-row">
                          <Image
                            src={post.publisher.picture}
                            className="rounded-circle mr-4"
                            height={50}
                            width={50}
                            alt="avatar"/>
                            <div>
                              <Card.Title className="fw-bold mb-1">
                                 {post.publisher.title}
                              </Card.Title>
                              <Card.Subtitle className="card-date">
                                {post.date}
                              </Card.Subtitle>
                            </div>
                        </Card.Header>  
                        <Link href={`/${post.slug}`}>
                        <div className="view overlay">
                            <Card.Img
                                  src={post.image}
                                  alt="Card Image cap" />
                        </div>
                        <Card.Body>
                          <Card.Title className="card-main-title">
                            {post.title}
                          </Card.Title>  
                          <Card.Text className="card-text"> {post.subtitle} </Card.Text>
                        </Card.Body>
                        </Link>
                       </div>
        </Card>    
    );
}