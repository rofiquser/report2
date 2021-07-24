import React, {Component,Fragment} from 'react';
import Menu from "./Menu";
import LoadingImg from '../../image/loading.gif';
import {Col, Container, Row} from "react-bootstrap";

class Loading extends Component {
    render() {
        return (
            <Fragment>

                  <img className="loading" src={LoadingImg} alt=""/>

            </Fragment>
        );
    }
}

export default Loading;
