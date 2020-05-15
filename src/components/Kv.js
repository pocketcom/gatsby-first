import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Style from "./Kv.module.scss"
function Kv(){




    return(
        <div className={Style.wrap}>
            <div className={Style.overlay}></div>
            <Container className={Style.content}>
                <Row>
                    <Col sm={12} className="mx-auto">
                        <div className={Style.siteHeading}>
                            <h1>こんにちは</h1>
                            <span>test string</span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}
export default Kv