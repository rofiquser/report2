import React, {Component,Fragment} from 'react';
import ErrorImg from '../../image/error.jpg';
class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <img className="isError" src={ErrorImg} alt=""/>
            </Fragment>
        );
    }
}

export default WentWrong;
