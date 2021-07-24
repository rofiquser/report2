import React, {Component, Fragment} from 'react';
import Axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import Menu from "../components/Menu";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class AddKamPage extends Component {
    constructor(props) {
        super();
        this.state={
            Name:"",
            Email:"",
            Password:"",
            Department:"",
            fields: {},
            nameError:"",
            emailError:"",
            passwordError:"",
            DepartmentError:""
        }
        this.Name=this.Name.bind(this);
        this.Email=this.Email.bind(this);
        this.Password=this.Password.bind(this);
        this.Department=this.Department.bind(this);

        this.addFormSubmit=this.addFormSubmit.bind(this);
    }

    Name(event){
            let name=event.target.value;
            this.setState({Name:name});
    }

    Email(event){
        let email=event.target.value;
        this.setState({Email:email});
    }
    Password(event){
        let password=event.target.value;
        this.setState({Password:password});
    }
    Department(event){
        let Department=event.target.value;

        this.setState({Department:Department});
    }

    addFormSubmit(event){

        event.preventDefault();
        let Name=this.state.Name;
        let Email=this.state.Email;
        let Password=this.state.Password;
        let Department=this.state.Department;

        if (Name===""){
                 let nameErrors="Name Field is Empty..";
                 this.setState({nameError:nameErrors})
        }
        else if (typeof Name !== "undefined") {
            if (!Name.match(/^[a-zA-Z]+$/)) {
                let nameErrors = "Only letters..";

                this.setState({nameError: nameErrors})
            }
            this.setState({nameError: ""});

            if (Email === "") {
                let emailError = "Name Field is Empty..";
                this.setState({emailError: emailError})
            }
            else if (typeof Email !== "undefined") {
                let lastAtPos = Email.lastIndexOf('@');
                let lastDotPos = Email.lastIndexOf('.');
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Email.indexOf('@@') === -1 && lastDotPos > 2 && (Email.length - lastDotPos) > 2)) {
                    Email = "Email is not valid";
                    this.setState({emailError: Email})

                }

                else if (Password === "") {
                    this.setState({emailError: ""});
                    let password = "Password Field is Empty..";
                    this.setState({passwordError: password})

                } else if (Department === "") {
                    this.setState({passwordError: ""});

                    let DepartmentError = "Department Field is Empty..";
                    this.setState({DepartmentError: DepartmentError});
                } else if (typeof Department !== "undefined") {
                    if (!Department.match(/^[a-zA-Z]+$/)) {
                        let DepartmentError = "Only letters..";
                        this.setState({DepartmentError: DepartmentError});

                    }
                    else{
                        this.setState({DepartmentError: ""});
                        Axios.post( '/add-kam', {name:Name,email:Email,password:Password,department:Department}).then(function (response){
alert(response.data);
                             // if (response.statusText==='0'){
                             //     toast.success('Kam Added Success ', {
                             //         position: "top-center",
                             //         autoClose: 3000,
                             //         hideProgressBar: false,
                             //         closeOnClick: true,
                             //         pauseOnHover: true,
                             //         draggable: true,
                             //         progress: 0,
                             //     });
                             //
                             //
                             // }
                        //      else{
                        //          alert("dfd");
                        //      }
                        // }).catch((error)=>{
                        //     alert(error)
                        })

                    }


                }
            }
        }



    }
    render() {
        return (
            <Fragment>
                <Menu>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} md={6} sm={6} >
                                <h3 className="text-center">Add Kam</h3>
                                <Form onSubmit={this.addFormSubmit}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" onChange={this.Name}/>
                                        <span style={{color: "red"}}>{this.state.nameError}</span>
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={this.Email} type="email" placeholder="Enter email"/>
                                        <span style={{color: "red"}}>{this.state.emailError}</span>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={this.Password} type="password" placeholder="Password"/>
                                        <span style={{color: "red"}}>{this.state.passwordError}</span>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="department">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control onChange={this.Department} type="text" placeholder="Department"/>
                                        <span style={{color: "red"}}>{this.state.DepartmentError}</span>
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

export default AddKamPage;
