import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import Axios from "axios";

class AddInstructionPage extends Component {
    constructor(props) {
        super();
        this.state={
            Account:"",
            OrderStatus:"",
            DeliveredBy:""
        }
        this.Account=this.Account.bind(this);
        this.OrderStatus=this.OrderStatus.bind(this);
        this.DeliveredBy=this.DeliveredBy.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }
    Account(event){
        let Account=event.target.value;
        this.setState({Account:Account});
    }
    OrderStatus(event){
        let OrderStatus=event.target.value;
        this.setState({OrderStatus:OrderStatus});
    }
    DeliveredBy(event){
        let DeliveredBy=event.target.value;
        this.setState({DeliveredBy:DeliveredBy});
    }
    addFormSubmit(event){
        event.preventDefault();
        let Account=this.state.Account;
        let OrderStatus=this.state.OrderStatus;
        let DeliveredBy=this.state.DeliveredBy;
        Axios.post( '/add-instruction', {Account:Account,OrderStatus:OrderStatus,DeliveredBy:DeliveredBy}).then(function (response){
            toast.success('Instruction Added Success ', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });

        }).catch((error)=>{
            alert(error)
        })
    }

    render() {
        return (

            <Fragment>
                <Menu>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} md={6} sm={6} >
                                <Form onSubmit={this.addFormSubmit}>
                                    <Form.Group className="mb-3" controlId="Account">
                                        <Form.Label>Account </Form.Label>
                                        <Form.Control type="text" placeholder="Account" onChange={this.Account}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="OrderStatus">
                                        <Form.Label>Order Status </Form.Label>
                                        <Form.Control onChange={this.OrderStatus} type="text" placeholder="Order Status "/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="DeliveredBy">
                                        <Form.Label>Delivered By</Form.Label>
                                        <Form.Control onChange={this.DeliveredBy} type="text" placeholder="Delivered By"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Add
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover
                        />
                    </Container>
                </Menu>
            </Fragment>
        );
    }
}

export default AddInstructionPage;
