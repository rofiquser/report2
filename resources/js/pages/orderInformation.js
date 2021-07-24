import React, {Component,Fragment} from 'react';
import Axios from "axios";
import Menu from "../components/Menu";

import {Col, Container, Row} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

class OrderInformation extends Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            // loading: true,
            // isError: false,
            // deleteId: ""
        }
        // this.AdminDelete = this.AdminDelete.bind(this);
        // this.AdminDelete = this.AdminDelete.bind(this);
    }

componentDidMount() {
    Axios.get('/order-information').then((response) => {
        if (response.status === 200) {

            this.setState({orderList: response.data, loading: false, isError: false});
        } else {
            this.setState({loading: false, isError: true});
        }


    }).catch((error) => {
        this.setState({loading: false, isError: true});
    });

}

// AdminDelete() {
//     // alert(this.state.deleteId);
//     Axios.post('/AdminDelete', {id: this.state.deleteId}).then((response) => {
//         alert(response.data);
//         this.componentDidMount();
//
//     }).catch((error) => {
//         alert(error.data);
//     })
// }
    render() {
        // if (this.state.loading === true) {
        //     return (
        //         <Menu>
        //             <Loading/>
        //         </Menu>
        //     )
        // } else if (this.state.isError === true) {
        //     return (
        //         <Menu>
        //             <WentWrong/>
        //         </Menu>
        //     )
        //
        // } else {


            const data = this.state.orderList;
            const column = [
                // {dataField: 'id', text: 'ID'},
                {dataField: 'Response', text: 'Response'},
                {dataField: 'Inc_Date', text: 'Inc_Date'},
                {dataField: 'Account', text: 'Account'},
                {dataField: 'Amount', text: 'Amount'},
                {dataField: 'Tips', text: 'Tips'},
                {dataField: 'Percentage', text: 'Percentage'},
                {dataField: 'ChargesFiverr', text: 'ChargesFiverr'},
                {dataField: 'ClientUserId', text: 'ClientUserId'},
                {dataField: 'Response', text: 'Response'},
                {dataField: 'ClientName', text: 'ClientName'},
                {dataField: 'EmailAddress', text: 'EmailAddress'},
                {dataField: 'ClientLinkedIn', text: 'ClientLinkedIn'},
                {dataField: 'OrderPageURL', text: 'OrderPageURL'},
                {dataField: 'Remarks', text: 'Remarks'},
                {dataField: 'SpreadsheetLink', text: 'SpreadsheetLink'},
                {dataField: 'Allocation', text: 'Allocation'},
                {dataField: 'OrderStatus', text: 'OrderStatus'},
                {dataField: 'Delivered_By', text: 'Delivered_By'},
                {dataField: 'DeliDate', text: 'DeliDate'},
                {dataField: 'DeliAmount', text: 'DeliAmount'},
                {dataField: 'DeliLastTime', text: 'DeliLastTime'},


            ];
            // console.log(this.state.orderList);
            // const selectRow = {
            //     mode: 'radio',
            //     clickToSelect: true,
            //     onSelect: (row, isSelect, rowIndex) => {
            //         this.setState({deleteId: row['id']});
            //     }
            //
            // }
            console.log(this.state.orderList);
            return (
                <Fragment>
                    <Menu>
                        <Container className="mr-5">
                            <Row>
                                <Col>

                                    <BootstrapTable keyField='id'
                                                    data={data}
                                                    columns={column}
                                                    // selectRow={selectRow}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                </Fragment>
            );
        }
    // }
}

export default OrderInformation;
