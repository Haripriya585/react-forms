import React, { Component } from 'react'
import BankDetails from '../components/BankDetails.jsx';
import { Link } from 'react-router-dom';
class Business extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props);
        return (
            <div>
                <form className="personal-form">
                    <label>Business Name
                        <input type="text" name="busname" value={this.props.busname} onChange={this.props.setValue} />
                    </label><br></br>

                    <label>Email
                        <input type="text" name="busemail" value={this.props.busemail} onChange={this.props.setValue} />
                    </label><br></br>

                    <label>Phone Number
                        <input type="text" name="busnumber" value={this.props.busnumber} onChange={this.props.setValue} />
                    </label><br></br>

                </form>
                <div>
                    <button ><Link to="./BankDetails">Next</Link></button>
                </div>
            </div>
        );
    }
}
export default Business;