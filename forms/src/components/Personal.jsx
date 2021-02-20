import React, { Component } from 'react'
import BankDetails from '../components/BankDetails.jsx';
import { Link } from 'react-router-dom';

class Personal extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }
    render() {

        return (

            <div>
                <form >
                    <label>First Name
                        <input type="text" name="fname" value={this.props.firstName} onChange={this.props.setValue} />
                    </label><br></br>

                    <label>Last Name
                        <input type="text" name="lname" value={this.props.lastName} onChange={this.props.setValue} />
                    </label><br></br>

                    <label>Email
                        <input type="text" name="email" value={this.props.email} onChange={this.props.setValue} />
                    </label><br></br>

                    <label>PhoneNumber
                        <input type="text" name="number" value={this.props.number} onChange={this.props.setValue} />
                    </label><br></br>

                </form>
                <div>
                    <button ><Link to="./BankDetails">Next</Link></button>
                </div>
            </div>
        );
    }
}
export default Personal;