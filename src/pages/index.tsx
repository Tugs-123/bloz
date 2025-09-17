import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { NextPage } from "next";
import Head from "next/head";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap";
import CardBody from "react-bootstrap";
import Link from 'next/link';
import MyNavbar from "../../components/my-navbar"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (<>
    <Container>
      <Head>
        <title>Миний блог</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </Head>

      


      {/* Навбар */}
      <MyNavbar />      

      {/* Үндсэн хэсэг */}
      <div className="blog-detail-page">
        <Row>
          <Col md={8}>
            {/* Media object layout */}
            <div className="d-flex admin-intro align-items-start mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Generic placeholder"
                className="rounded-circle me-3"
              />
            <div className="flex-grow-1 ms-3">  
              <h5 className=" fw-bold mb-0">
                1234.mn - Онлайн сургалт
              </h5>
              <p className="welcome-text">
                Бид программчлал технологийн чиглэлээр төрөл бүрийн 
                сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
              </p> 
            </div>            
            </div>
          </Col>
        </Row>
      
      <hr/>

      <div className={`page-wrapper`}>
        <Row className="mb-5">
          <Col md={10}>
            <Card className={`fj-card  fj-card-list`}>
              <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                  <img
                    src="https//source.unsplash.com/user/erondu/150x150"
                    className="rounded-circle mr-4"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                    
                    <div>
                      <Card.Title className="fw-bold mb-1">
                        Төгсөө Чинзориг
                      </Card.Title>
                      <Card.Subtitle className="card-date">
                        2024-06-20
                      </Card.Subtitle>
                    </div>
                </Card.Header>  
                <Card.Body>
                  <Card.Title className="card-main-title">
                    JAMstack архитектур гэж юу вэ?
                  </Card.Title>  
                  <Card.Text className="card-text"> Static маягийн сайт </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md="4">
            <Card className={`fj-card  fj-card-list`}>
               <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                  <img
                    src="https//source.unsplash.com/user/erondu/150x150"
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
          </Col>
        </Row>
      </div>

      <footer className="page-footer">
        <div>
          <Link href="#">Нүүр </Link> 
          {" | "}
          <Link href="#"> Cургалт </Link>
          {" | "}
          <Link href="#"> Facebook </Link>
        </div>
      </footer>
    </div>
      </Container>

 </>
  );
}
