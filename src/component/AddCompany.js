import React, { Component } from 'react'

export class AddCompany extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            place: ""
        }
    }


    render() {
        return (
            <div className="container">

                <form className="p-5 border my-5">
                    <h1 className="text-center">Add Company</h1>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                            id="companyName"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.place}
                            onChange={this.handleChange}
                            id="location"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddCompany
