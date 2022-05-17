import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

class PaymentMethodSelector extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {

        const padding={
            padding:'20px'
        }

        return (
            <div style={padding}>
                <h2>Select Payment Method</h2>
                <Card className={'border border-dark bg-light'}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Link to={'/card-payment'} className={'btn btn-primary'} >Card</Link>
                            </Col>
                            <Col>
                                <Link to={'/mobile-payment'} className={'btn btn-success'} >Mobile</Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default PaymentMethodSelector;