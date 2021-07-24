import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddAdminPage from "../pages/AddAdminPage";
import AllAdminPage from "../pages/AllAdminPage";
import AllUserPage from "../pages/AllUserPage";
import AllContactPage from "../pages/AllContactPage";
import OrderInformation from "../pages/orderInformation";
import AddKamPage from "../pages/addKamPage";
import AddInstructionPage from "../pages/addInstructionPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
               <Switch>
                   <Route exact path="/" component={HomePage}/>
                   <Route exact path="/add" component={AddAdminPage}/>
                   <Route exact path="/all-admin" component={AllAdminPage}/>
                   <Route exact path="/all-user" component={AllUserPage}/>
                   <Route exact path="/all-contact" component={AllContactPage}/>
                   <Route exact path="/order-information" component={OrderInformation}/>
                   <Route exact path="/add-kam" component={AddKamPage}/>
                   <Route exact path="/add-instruction" component={AddInstructionPage}/>
               </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
