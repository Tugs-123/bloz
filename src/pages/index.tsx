import { Row, Col } from "react-bootstrap";
import GridItem from "components/grid-item"
import {getAllPosts} from "lib/api";
import {Post}from "lib/types";
import Layout from "components/layout";
import Intro from "components/intro";

export default function Home( {posts}: { posts: Post[] }) {
  return (
  <Layout>  
            
                  <div className="blog-detail-page">
                          <Row>
                            <Col md={8 }>
                              {/* Media object layout */}
                              <Intro />
                            </Col>
                          </Row>
                    </div>
        
                  <hr/>
        <Row className="mb-5">
          {posts.map((post:Post) =>(
            <Col key={post._id} md="4">
                <GridItem  post = {post}/>    
            </Col> 
            ))}
        </Row>
  </Layout> 
  );
}

export  const getStaticProps =  async ()=> {

  const posts  = await getAllPosts();
  
  return {
    props: {
      posts: posts,
    }
  }
}
