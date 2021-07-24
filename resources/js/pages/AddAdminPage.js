        import React, {Component,Fragment} from 'react';
        import Menu from "../components/Menu";
        import {Button, Col, Container, Form, Row} from "react-bootstrap";
        import Axios from "axios";
        import {toast, ToastContainer} from "react-toastify";
        import 'react-toastify/dist/ReactToastify.css';
        class AddAdminPage extends Component {
            constructor(props) {
                super();
                this.state={
                    Name:"",
                    Email:"",
                    Password:""
                }
                this.AdminName=this.AdminName.bind(this);
                this.AdminEmail=this.AdminEmail.bind(this);
                this.AdminPassword=this.AdminPassword.bind(this);
                this.addFormSubmit=this.addFormSubmit.bind(this);
            }
            AdminName(event){
         let name=event.target.value;
         this.setState({Name:name});
            }
            AdminEmail(event){
                let email=event.target.value;
                this.setState({Email:email});
            }
            AdminPassword(event){
                let password=event.target.value;
                this.setState({Password:password});
            }
            addFormSubmit(event){
                event.preventDefault();
                let Name=this.state.Name;
                let Email=this.state.Email;
                let Password=this.state.Password;
              Axios.post( '/add-admin', {name:Name,email:Email,password:Password}).then(function (response){


                  toast.success('Admin Added Success ', {
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
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name" onChange={this.AdminName}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control onChange={this.AdminEmail} type="email" placeholder="Enter email"/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={this.AdminPassword} type="password" placeholder="Password"/>
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

        export default AddAdminPage;
