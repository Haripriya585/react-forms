import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        console.log(this.props);
        return (
            <div >
                <div >
                    <h1>Personal Data</h1>
                    <p>Name : {this.props.firstname}</p>
                    <p>Last Name :{this.props.lastname}</p>
                    <p>Email :{this.props.email}</p>
                    <p>Number :{this.props.number}</p>
                </div>
            </div>
        )
    }
}