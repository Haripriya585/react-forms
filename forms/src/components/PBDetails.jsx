import React, { Component } from 'react'
import Personal from '../components/Personal.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Business from '../components/Business.jsx';


class PBDetails extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            Country: '',
            IFSC_code: '',
            account_Number: '',
            Country_Id: '',
            city: '',
            postcode: '',
            address: '',
            error: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                Country: '',
                IFSC_code: '',
                account_Number: '',
                Country_Id: '',
                city: '',
                postcode: '',
                address: '',
            }
        }
    }
    render() {
        return (

            <div className="pb">
                <Router>
                    <button ><Link to="/">Personal</Link></button>
                    <button ><Link to="/Business">Business</Link></button>
                    <Switch>
                        <Route exact path="/">
                            <Personal />
                        </Route>
                        <Route path="/Business" >
                            <Business />
                        </Route>
                    </Switch>

                </Router>

            </div>


        )
    }

}
export default PBDetails;