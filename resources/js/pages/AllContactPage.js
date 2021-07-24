import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import Axios from "axios";
import Loading from "../components/Loading";
import WentWrong from "../components/WentWrong";
import {Col, Container, Row} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

class AllContactPage extends Component {
    constructor() {
        super();
        this.state = {
            dataList: [],
            loading: true,
            isError: false,
            deleteId: ""
        }
        this.AdminDelete = this.AdminDelete.bind(this);
        this.AdminDelete = this.AdminDelete.bind(this);
    }

    componentDidMount() {
        Axios.get('/ContactList').then((response) => {
            if (response.status == 200) {

                this.setState({dataList: response.data, loading: false, isError: false});
            } else {
                this.setState({loading: false, isError: true});
            }


        }).catch((error) => {
            this.setState({loading: false, isError: true});
        });

    }

    AdminDelete() {
        // alert(this.state.deleteId);
        Axios.post('/ContactList', {id: this.state.deleteId}).then((response) => {
            alert(response.data);
            this.componentDidMount();

        }).catch((error) => {
            alert(error.data);
        })
    }


    render() {
        if (this.state.loading === true) {
            return (
                <Menu>
                    <Loading/>
                </Menu>
            )
        } else if (this.state.isError === true) {
            return (
                <Menu>
                    <WentWrong/>
                </Menu>
            )

        } else {


            const data = this.state.dataList;
            const column = [
                {dataField: 'id', text: 'ID'},
                {dataField: 'name', text: 'Name'},
                {dataField: 'email', text: 'Email'}


            ];
            const selectRow = {
                mode: 'radio',
                clickToSelect: true,
                onSelect: (row, isSelect, rowIndex) => {
                    this.setState({deleteId: row['id']});
                }

            }

            return (
                <Fragment>
                    <Menu>
                        <Container>
                            <Row>
                                <Col>
                                    <button onClick={this.AdminDelete}
                                            className="btn btn-danger btn-small mb-2">Delete
                                    </button>
                                    <BootstrapTable keyField='id'
                                                    data={data}
                                                    columns={column}
                                                    selectRow={selectRow}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                </Fragment>
            );
        }
    }
}

export default AllContactPage;
