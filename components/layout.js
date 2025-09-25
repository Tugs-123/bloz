import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/my-navbar"
import Intro from "components/intro"
import Head from "next/head"; 
import Link from "next/link"

const Layout =({children}) => {
    return   <Container>
        <pre>{/*JSON.stringify(post, null, 2)*/}</pre> 
    
          {/* Навбар */}
          <MyNavbar />  

        <div className={`page-wrapper`}>
            {children}
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

        </Container>

}

export default Layout;
