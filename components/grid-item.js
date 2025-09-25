import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Link from "next/link"
import moment from "moment"
import "moment/locale/mn"; // Монгол локаль файлыг ачаалж байна
import { urlFor } from "lib/api"

export default function GridItem ({post}) {
  
    return (
        <Card className={`fj-card  fj-card-list`}>
                       <div className="card-body-wrapper">
                        <Card.Header className="d-flex flex-row">
                          <Image
                            src={urlFor(post.publisher.picture).height(100).url()}
                            className="rounded-circle mr-4"
                            height={50}
                            width={50}
                            alt="avatar"/>
                            <div>
                              <Card.Title className="fw-bold mb-1">
                                 {post.publisher.title}
                              </Card.Title>
                              <Card.Subtitle className="card-date">
                                {   moment(post.date).format("lll") }
                              </Card.Subtitle>
                            </div>
                        </Card.Header>  
                        <Link href={`/${post.slug}`}>
                        <div className="view overlay">
                            <Card.Img
                                  src={ urlFor(post.image).width(200).height(150).fit('max').url() }
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