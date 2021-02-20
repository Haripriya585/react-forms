import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Address from '../components/Address.jsx'
import currency from '../components/currency.json';
export default class BankDetails extends Component {
    constructor(props) {
        super(props)
    }
    getCurrency() {
        if (this.props.country == "United States Of America") {
            this.props.currency = "USD";
        } else {
            return "INR";
        }
    }
    render() {
        return (
            <div>
                <form className="personal-form">
                    <label>Country
                        <select name="country" onChange={this.props.setBankDetails} value={this.props.country}>
                            <option value="United States Of America">United States Of America</option>
                            <option value="India">India</option>
                            <option value="china">China</option>
                            <option value="Europe">Europe</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                        </select>
                    </label><br></br>
                    <p>Curency:{this.props.currency}</p><br></br>
                    <label>IFSC code
                        <input type="text" name="ifsc" onChange={this.props.setBankDetails} value={this.props.ifsccode} />
                    </label><br></br>
                    <label>ACH routing number
                        <input type="text" name="ach" onChange={this.props.setBankDetails} value={this.props.ach} />
                    </label><br></br>
                    <label>Account Number
                        <input type="text" name="acntno" onChange={this.props.setBankDetails} value={this.props.acntNumber} />
                    </label><br></br>

                </form>
                <div>
                    <button className="previousbtn"><Link to="/">Previous</Link></button>
                    <button><Link to="/Address">Next</Link></button>
                </div>
            </div>
        )
    }
}