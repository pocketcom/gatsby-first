import React from "react"
import { Card } from "react-bootstrap"
import {Link} from "gatsby"

function Blogitem({title,date,src,link}){
    return(
                <Card className="mt-4">
                    <Card.Img variant="top" src={src}/>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{date}</Card.Text>
                    <Link to={`/${link}`}>seemore</Link>
                </Card>
    )

}
export default Blogitem