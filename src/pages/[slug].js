import {Row, Col} from "react-bootstrap"
import Layout from "components/layout"
import Image from "next/image"
import { getPostBySlug } from "lib/api"
import {getAllPosts} from "lib/api"
import { PortableText } from "@portabletext/react"
import HighlightedCode from "components/HighlightedCode"
import { urlFor } from "lib/api"
const components = {
  types: {
    code: ({ value }) => (
        <>
      <HighlightedCode language={value.language}>
                {value.code}       
        <div className="code-filename">{value.filename}</div>
      </HighlightedCode>
      </>
    ),
    image: ({ value }) => (
        <div className={`blog-image blog-image-${value.position}`}>
      <Image
        src={urlFor(value).width(200).height(150).fit('max').url()}
        alt={value.alt} 
        width={400}
        height={500}
        className="img-fluid rounded"
      />
      <div className="code-filename">{value.alt}</div>
      </div>
    )
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    link: ({ value, children }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
}



export default  ({post}) =>  {

    return <Layout>
        <Row>
            <Col md="12">
                {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
                <div className="blog-detail-header">

                    <p className="lead mb-0">
                        <Image
                            src={urlFor(post.publisher.picture).height(100).url()}
                            className="rounded-circle mr-3"
                            height={50}
                            width={50}
                        />
                        {post.publisher.title},{post.date}
                    </p>

                    <h1 className="font-weight-bold blog-detail-header-title mb-0">
                            {post.title}, 
                    </h1>
            
                    <h2 className="blog-detail-header-subtitle mb3">{post.subtitle}</h2>

                        <Image 
                            src={ urlFor(post.cover_image).height(200).url() }
                            className="img-fluid rounded"
                             height={200}
                            width={300}
                            alt={post.cover_image.alt}
                        />
                        <div className="code-filename">
                                {post.cover_image.alt} 
                        </div>
                </div>
            <br/>

            <PortableText value={post.content} components={components} />

            </Col>
        </Row>
    </Layout>
}

    export const getStaticProps = async ({ params }) => {

        const post = await getPostBySlug(params.slug);

        return {
            props: {
                post: post[0],
            }
        }
    }

    export const getStaticPaths = async () => {
        
        const posts = await getAllPosts();

    const data = posts.map((post) => ({
        params: {
            slug: post.slug,
        }
        }));
    return {
            paths: data,
            fallback: false,    
        }
    }