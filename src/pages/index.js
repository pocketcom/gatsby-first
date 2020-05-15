import React from "react"
import {graphql,useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import Kv from "../components/Kv"
import { Container, Row, Col } from "react-bootstrap"
import Blogitem from "../components/Blogitem"

const IndexPage = () => {

  const data =useStaticQuery(graphql`
  query{
    allContentfulBlogPost(sort:{
      fields:createdDate,
      order:DESC
    }){
      edges{
        node{
          title
          slug
          createdDate(formatString:"YYYY/MM/DD")
          thumbnail{
            fluid{
              src
            }
          }
        }
      }
    }
  }
  `)
  console.log("data",data)
  return (

  <Layout>
    <Kv></Kv>
    <Container>
      <Row>
        {data.allContentfulBlogPost.edges.map((edge,index)=>(
        <Col sm="4" key={index}>
        <Blogitem
        title={edge.node.title}
        date={edge.node.createdDate}
        src={edge.node.thumbnail.fluid.src}
        link={`/blog/${edge.node.slug}`}
        />
      </Col>
        ))}

      </Row>
    </Container>
  </Layout>
  )
  }

export default IndexPage
