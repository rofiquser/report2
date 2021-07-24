import React, {Component,Fragment} from 'react';
import Menu from "../components/Menu";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import Axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {

    constructor(props) {
        super();
        this.state={
            AccountData:[],
            ordersStatusList:[],
            deliveredList:[],
            Responsible:"",
            Inc_Date:"",
            Account:"",
            Amount:"",
            Tips:"",
            Percentage:"",
            ChargesFiverr:"",
            ClientUserId:"",
            ClientName:"",
            EmailAddress:"",
            ClientLinkedIn:"",
            OrderPageURL:"",
            Remarks:"",
            SpreadsheetLink:"",
            Allocation:"",
            OrderStatus:"",
            Delivered_By:"",
            DeliDate:"",
            DeliAmount:"",
            DeliLastTime:"",
            ResponseEmpty:"",
            Modal:false,


        }
        this.Responsible=this.Responsible.bind(this);
        this.Inc_Date=this.Inc_Date.bind(this);
        this.Account=this.Account.bind(this);
        this.Amount=this.Amount.bind(this);
        this.Tips=this.Tips.bind(this);
        this.Percentage=this.Percentage.bind(this);
        this.ChargesFiverr=this.ChargesFiverr.bind(this);
        this.ClientUserId=this.ClientUserId.bind(this);
        this.EmailAddress=this.EmailAddress.bind(this);
        this.ClientLinkedIn=this.ClientLinkedIn.bind(this);
        this.ClientName=this.ClientName.bind(this);
        this.OrderPageURL=this.OrderPageURL.bind(this);
        this.SpreadsheetLink=this.SpreadsheetLink.bind(this);
        this.Remarks=this.Remarks.bind(this);
        this.Allocation=this.Allocation.bind(this);
        this.OrderStatus=this.OrderStatus.bind(this);
        this.Delivered_By=this.Delivered_By.bind(this);
        this.DeliDate=this.DeliDate.bind(this);
        this.DeliAmount=this.DeliAmount.bind(this);
        this.DeliLastTime=this.DeliLastTime.bind(this);
        this.onSubmitValue=this.onSubmitValue.bind(this);

        this.EditModalShow=this.EditModalShow.bind(this);

        this.AccountNumberShow=this.AccountNumberShow.bind(this);

        this.editModalHide=this.editModalHide.bind(this);

    }


    EditModalShow(){
if (this.state.Modal===false){
    this.setState({Modal:true})
}
    }
    editModalHide(){
        if (this.state.Modal===true){
            this.setState({Modal:false})
        }

    }

    Responsible(event){
        let Responsible=event.target.value;
        if (Responsible.length===0){
            this.setState({ResponseEmpty:"Responsible Field is empty"});
        }
        this.setState({Responsible:Responsible})
    }
    Inc_Date(event){
        let Inc_Date=event.target.value;
        this.setState({Inc_Date:Inc_Date});
    }
    Account(event){
        let Account=event.target.value;
        this.setState({Account:Account});
    }
    Amount(event){
        let Amount=event.target.value;

        this.setState({Amount:Amount});
    }
    Tips(event){
        let Tips=event.target.value;
        this.setState({Tips:Tips});
    }
    Percentage(event){
        let Percentage=event.target.value;
        this.setState({Percentage:Percentage});
    }

    ChargesFiverr(event){
        let ChargesFiverr=event.target.value;
        this.setState({ChargesFiverr:ChargesFiverr});
    }
    ClientUserId(event){
        let ClientUserId=event.target.value;
        this.setState({ClientUserId:ClientUserId});
    }

    ClientName(event){
        let ClientName=event.target.value;
        this.setState({ClientName:ClientName});
    }
    EmailAddress(event){
        let EmailAddress=event.target.value;
        this.setState({EmailAddress:EmailAddress});
    }

    ClientLinkedIn(event){
        let ClientLinkedIn=event.target.value;
        this.setState({ClientLinkedIn:ClientLinkedIn});
    }
    OrderPageURL(event){
        let OrderPageURL=event.target.value;
        this.setState({OrderPageURL:OrderPageURL});
    }

    SpreadsheetLink(event){
        let SpreadsheetLink=event.target.value;
        this.setState({SpreadsheetLink:SpreadsheetLink});
    }

    Remarks(event){
        let Remarks=event.target.value;
        this.setState({Remarks:Remarks});
    }
    Allocation(event){
        let Allocation=event.target.value;
        this.setState({Allocation:Allocation});
    }
    OrderStatus(event){
        let OrderStatus=event.target.value;
        this.setState({OrderStatus:OrderStatus});
    }
    Delivered_By(event){
        let Delivered_By=event.target.value;
        this.setState({Delivered_By:Delivered_By});
    }
    DeliDate(event){
        let DeliDate=event.target.value;
        this.setState({DeliDate:DeliDate});
    }

    DeliAmount(event){
        let DeliAmount=event.target.value;
        this.setState({DeliAmount:DeliAmount});
    }
    DeliLastTime(event){
        let DeliLastTime=event.target.value;

        this.setState({DeliLastTime:DeliLastTime});
    }

    onSubmitValue(event){
        event.preventDefault();
        let Response=this.state.Responsible;
        let Inc_Date=this.state.Inc_Date;
        let Account=this.state.Account;
        let Amount=this.state.Amount;
        let Tips=this.state.Tips;
        let Percentage=this.state.Percentage;
        let ChargesFiverr=this.state.ChargesFiverr;
        let ClientUserId=this.state.ClientUserId;
        let ClientName=this.state.ClientName;
        let EmailAddress=this.state.EmailAddress;
        let ClientLinkedIn=this.state.ClientLinkedIn;
        let OrderPageURL=this.state.OrderPageURL;
        let Remarks=this.state.Remarks;
        let SpreadsheetLink=this.state.SpreadsheetLink;
        let Allocation=this.state.Allocation;
        let OrderStatus=this.state.OrderStatus;
        let Delivered_By=this.state.Delivered_By;
        let DeliDate=this.state.DeliDate;
        let DeliAmount=this.state.DeliAmount;
        let DeliLastTime=this.state.DeliLastTime;
        Axios.post('/add-details',{
            Response:Response,
            Inc_Date:Inc_Date,
            Account:Account,
            Amount:Amount,
            Tips:Tips,
            Percentage:Percentage,
            ChargesFiverr:ChargesFiverr,
            ClientUserId:ClientUserId,
            ClientName:ClientName,
            EmailAddress:EmailAddress,
            ClientLinkedIn:ClientLinkedIn,
            OrderPageURL:OrderPageURL,
            Remarks:Remarks,
            SpreadsheetLink:SpreadsheetLink,
            Allocation:Allocation,
            OrderStatus:OrderStatus,
            Delivered_By:Delivered_By,
            DeliDate:DeliDate,
            DeliAmount:DeliAmount,
            DeliLastTime:DeliLastTime
        }).then(function (response){
           if (response.status===200){
               toast.success('Record Added Successfully', {
                   position: "top-center",
                   autoClose: 3000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: false,
                   draggable: true,
                   progress: 0,
               });
           }
        }).catch((error)=>{

        })

    }

    componentDidMount() {

this.AccountNumberShow();
this.OrderStatusList();
this.DeliveredList();

    }

    AccountNumberShow(){
        Axios.get("/account-number-show").then((response)=>{

            this.setState({AccountData:response.data})

        }).catch((error)=>{

        })
    }

    OrderStatusList(){
        Axios.get("/order-status-list").then((response)=>{

            this.setState({ordersStatusList:response.data})

        }).catch((error)=>{

        })
    }

    DeliveredList(){
        Axios.get("/delivered-list").then((response)=>{

            this.setState({deliveredList:response.data})

        }).catch((error)=>{

        })
    }

    render() {

        let dropdownValue=this.state.AccountData;
       let data= dropdownValue.map((item,i)=>{
           return(
               <option value="">{item.Account}</option>
           )

        });

        // order status list


        let status=this.state.ordersStatusList;
        let orderStatusData= status.map((item,i)=>{
            return(
                <option value="">{item.OrderStatus}</option>
            )

         });

         let delivered=this.state.deliveredList;
         let deliveredData= delivered.map((item,i)=>{
             return(
                 <option value="">{item.DeliveredBy}</option>
             )

          });

        //   let val1 = sessionStorage.getItem("AdminSession");


// console.log(orderStatusList);
        return (
            <Fragment>
                <Menu>
                    <Container>
                        <Row>
                        <Col xl={8} md={8}>
                            <Form onSubmit={this.onSubmitValue}>
                                  <Form.Group as={Row} className="mb-3" controlId="Responsible">
                                    <Form.Label column sm={2}>
                                        Responsible
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Responsible" onChange={this.Responsible} />
                                    </Col>
                                </Form.Group>
                                {/* {val1} */}

                                <Form.Group as={Row} className="mb-3" controlId="Inc_Date">
                                    <Form.Label column sm={2}>
                                        Inc_Date
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="date" onChange={this.Inc_Date}/>
                                    </Col>
                                </Form.Group>


                                    <Form.Group controlId="formBasicSelect" as={Row} className="mb-3">
                                        <Form.Label column sm={2}>
                                            Account
                                        </Form.Label>
                                        <Col sm={10}>

                                        <Form.Control as="select" >
                                        <option>Select Account</option>

                                     {data}

                                        </Form.Control>

                                        </Col>
                                    </Form.Group>



                                <Form.Group as={Row} className="mb-3" controlId="Account">
                                    <Form.Label column sm={2}>
                                        Amount
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="Amount" onChange={this.Amount} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Tips">
                                    <Form.Label column sm={2}>
                                        Tips
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="Tips" onChange={this.Tips}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Percentage">
                                    <Form.Label column sm={2}>
                                        Percentage
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="Percentage" onChange={this.Percentage} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="ChargesFiverr">
                                    <Form.Label column sm={2}>
                                        Charges Fiverr
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder=" Charges Fiverr" onChange={this.ChargesFiverr} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="ClientUserId">
                                    <Form.Label column sm={2}>
                                        Client User Id
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder=" Client User Id" onChange={this.ClientUserId}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="ClientName">
                                    <Form.Label column sm={2}>
                                       Client Name
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder=" Client Name" onChange={this.ClientName} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="EmailAddress">
                                    <Form.Label column sm={2}>
                                        Email Address
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="  Email Address" onChange={this.EmailAddress} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="ClientLinkedIn">
                                    <Form.Label column sm={2}>
                                        Client LinkedIn
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder=" Client LinkedIn" onChange={this.ClientLinkedIn} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="OrderPageURL">
                                <Form.Label column sm={2}>
                                    Order page URL
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Order page URL" onChange={this.OrderPageURL}/>
                                </Col>
                            </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="SpreadsheetLink">
                                    <Form.Label column sm={2}>
                                        Spreadsheet Link
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Spreadsheet Link" onChange={this.SpreadsheetLink}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="Remarks">
                                    <Form.Label column sm={2}>
                                        Remarks
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Remarks" onChange={this.Remarks}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Allocation">
                                    <Form.Label column sm={2}>
                                        Allocation(Team/ Emp.  Name)
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Allocation(Team/Emp. Name)" onChange={this.Allocation}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="formBasicSelect" as={Row} className="mb-3">
                                        <Form.Label column sm={2}>
                                            Order Status
                                        </Form.Label>
                                        <Col sm={10}>

                                        <Form.Control as="select" >
                                        <option>Select order status</option>
                                     {orderStatusData}
                                        </Form.Control>

                                        </Col>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicSelect" as={Row} className="mb-3">
                                        <Form.Label column sm={2}>
                                        Delivered By
                                        </Form.Label>
                                        <Col sm={10}>

                                        <Form.Control as="select" >
                                        <option>Select Delivered By</option>
                                     {deliveredData}
                                        </Form.Control>

                                        </Col>
                                    </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="DeliDate">
                                    <Form.Label column sm={2}>
                                        Deli_Date
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="date" placeholder="Delivery Date" onChange={this.DeliDate} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="DeliAmount">
                                    <Form.Label column sm={2}>
                                        Deli Amount
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="Delivery Amount" onChange={this.DeliAmount} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="DeliLastTime">
                                    <Form.Label column sm={2}>
                                        Deli_Last_Time
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="date" placeholder="Delivery Last Time" onChange={this.DeliLastTime}/>
                                    </Col>
                                </Form.Group>
                                <Form.Label column sm={2}>

                                </Form.Label>
                                <Button type="submit" className="btn mr-2">Submit</Button>
                                <Button type="button" className="btn mr-2" onClick={this.EditModalShow}>Edit</Button>
                            </Form>



                            <Modal show={this.state.Modal} onHide={this.editModalHide} size={"lg"}>
                            <Modal.Header closeButton>
                            <Modal.Title>Update</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Form onSubmit={this.onSubmitValue}>
                                    <Form.Group as={Row} className="mb-3" controlId="Responsible">
                                        <Form.Label column sm={2}>
                                            Responsible
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Responsible" onChange={this.Responsible} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Inc_Date">
                                        <Form.Label column sm={2}>
                                            Inc_Date
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="date" onChange={this.Inc_Date}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="Account">
                                        <Form.Label column sm={2}>
                                            Account
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Account " onChange={this.Account} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Account">
                                        <Form.Label column sm={2}>
                                            Amount
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder="Amount" onChange={this.Amount} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Tips">
                                        <Form.Label column sm={2}>
                                            Tips
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder="Tips" onChange={this.Tips}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Percentage">
                                        <Form.Label column sm={2}>
                                            Percentage
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder="Percentage" onChange={this.Percentage} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="ChargesFiverr">
                                        <Form.Label column sm={2}>
                                            Charges Fiverr
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder=" Charges Fiverr" onChange={this.ChargesFiverr} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="ClientUserId">
                                        <Form.Label column sm={2}>
                                            Client User Id
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder=" Client User Id" onChange={this.ClientUserId}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="ClientName">
                                        <Form.Label column sm={2}>
                                            Client Name
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder=" Client Name" onChange={this.ClientName} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="EmailAddress">
                                        <Form.Label column sm={2}>
                                            Email Address
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="  Email Address" onChange={this.EmailAddress} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="ClientLinkedIn">
                                        <Form.Label column sm={2}>
                                            Client LinkedIn
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder=" Client LinkedIn" onChange={this.ClientLinkedIn} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="OrderPageURL">
                                        <Form.Label column sm={2}>
                                            Order page URL
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Order page URL" onChange={this.OrderPageURL}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="SpreadsheetLink">
                                        <Form.Label column sm={2}>
                                            Spreadsheet Link
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Spreadsheet Link" onChange={this.SpreadsheetLink}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="Remarks">
                                        <Form.Label column sm={2}>
                                            Remarks
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Remarks" onChange={this.Remarks}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Allocation">
                                        <Form.Label column sm={2}>
                                            Allocation(Team/ Emp.  Name)
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Allocation(Team/Emp. Name)" onChange={this.Allocation}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="OrderStatus">
                                        <Form.Label column sm={2}>
                                            Order Status
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Order Status" onChange={this.OrderStatus} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="Delivered_By">
                                        <Form.Label column sm={2}>
                                            Delivered By
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Delivered By" onChange={this.Delivered_By}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="DeliDate">
                                        <Form.Label column sm={2}>
                                            Deli_Date
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="date" placeholder="Delivery Date" onChange={this.DeliDate} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="DeliAmount">
                                        <Form.Label column sm={2}>
                                            Deli Amount
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" placeholder="Delivery Amount" onChange={this.DeliAmount} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="DeliLastTime">
                                        <Form.Label column sm={2}>
                                            Deli_Last_Time
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="date" placeholder="Delivery Last Time" onChange={this.DeliLastTime}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Label column sm={2}>

                                    </Form.Label>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" className="btn btn-sm" onClick={this.editModalHide}>
                            Close
                            </Button>
                            <Button variant="primary" className="btn btn-sm">
                           Update
                            </Button>
                            </Modal.Footer>
                            </Modal>




                        </Col>

                        </Row>

                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                        />
                    </Container>
                </Menu>
            </Fragment>
        );
    }
}

export default HomePage;
