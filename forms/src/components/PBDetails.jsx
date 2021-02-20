import React, { Component } from 'react'
import Personal from '../components/Personal.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Business from '../components/Business.jsx';
import Display from '../components/Display.jsx';


class PBDetails extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            busname: '',
            busemail: '',
            busnumber: '',
            country: '',
            ifsccode: '',
            acntNumber: '',
            ach: '',
            currency: 'USD',
            city: '',
            postcode: '',
            address: '',

        }
    }
    setValue = (e) => {

        if (e.target.name === 'fname')
            if (e.target.value.length > 5)
                this.setState({
                    firstName: e.target.value,

                })

            else if (e.target.name === 'lname') {
                if (e.target.value.length > 5)
                    this.setState({
                        lastName: e.target.value,

                    })

            }
            else if (e.target.name === 'email') {
                if (e.target.value.indexOf("@") != -1)
                    this.setState({
                        email: e.target.value,

                    })

            }
            else if (e.target.name === 'number') {

                if (e.target.value.length === 10)
                    this.setState({
                        number: e.target.value,

                    })

            }
            else if (e.target.name === 'busname') {
                if (e.target.value.length > 5)
                    this.setState({
                        busname: e.target.value,

                    })

            }
            else if (e.target.name === 'busemail') {
                if (e.target.value.indexOf("@") != -1)
                    this.setState({
                        busemail: e.target.value,

                    })

            }
            else if (e.target.name === 'busnumber') {
                if (e.target.value.length === 10)
                    this.setState({
                        busnumber: e.target.value,

                    })

            }

    }
    setBankDetails = (e) => {
        if (e.target.name === 'country')

            if (e.target.name === e.target.value) {
                this.setState({ country: e.target.value })
            }

            else if (e.target.name === "ifsc")
                this.setState({ ifsccode: e.target.value })

            else if (e.target.name === "ach")
                this.setState({ ach: e.target.value })

            else
                this.setState({ acntNumber: e.target.value })
    }

    setAddress = (e) => {
        if (e.target.name === 'city')
            this.setState({ city: e.target.value })

        else if (e.target.name === "postcode")
            this.setState({ postcode: e.target.value })

        else
            this.setState({ address: e.target.value })
    }
    render() {
        return (

            <div className="pb">
                <Router>
                    <button ><Link to="/">Personal</Link></button>
                    <button ><Link to="/Business">Business</Link></button>
                    <button ><Link to="/Display">Display</Link></button>
                    <Switch>
                        <Route exact path="/">
                            <Personal />
                        </Route>
                        <Route path="/Business" >
                            <Business />
                        </Route>
                        <Route path="/Display" >
                            <Display />
                        </Route>
                    </Switch>

                </Router>

            </div>


        )
    }

}
export default PBDetails;