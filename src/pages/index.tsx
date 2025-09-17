// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { NextPage } from "next";
import Head from "next/head";
import { Container, Row, Col, Navbar, Nav,Image, Button,Card,CardHeader } from "react-bootstrap";
import Link from 'next/link';
import MyNavbar from "components/my-navbar"
import Intro from "components/intro"
import Listitem from "components/list-item"
import GridItem from "components/grid-item"

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
          <Col md={8 }>
            {/* Media object layout */}
            <Intro />
          </Col>
        </Row>
      
      <hr/>

      <div className={`page-wrapper`}>
        <Row className="mb-5">
          <Col md={10}>
              <Listitem />
          </Col>

          <Col md="4">
              <GridItem/>    
          </Col>
          <Col md="4">
              <GridItem/>    
          </Col>
          <Col md="4">
              <GridItem/>    
          </Col>
          <Col md="4">
              <GridItem/>    
          </Col>
          <Col md="4">
              <GridItem/>    
          </Col>
          <Col md="4">
              <GridItem/>    
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
