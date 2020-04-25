import React from 'react'
import { connect } from "react-redux";
import { deleteJob } from "../redux/action/actions";
import { Link } from "react-router-dom"

class Table extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            joblist: []
        }


    }
    prevState = this.state;
    nextProps = this.props;

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            jobList: nextProps.jobList,
        };
    }

    //sorting salary in the ascending order
    handleSalaryAsc = () => {
        this.setState({
            jobList: this.state.jobList.sort((a, b) => Number(a.salary) - Number(b.salary))
        })
    }

    //sorting salary in the decending order
    handleSalaryDsc = () => {
        this.setState({
            jobList: this.state.jobList.sort((a, b) => Number(b.salary) - Number(a.salary))
        })
    }

    //sorting nos. of opening in ascending order
    openingAscOrder = () => {
        this.setState({
            jobList: this.state.jobList.sort((a, b) => Number(a.jobQty) - Number(b.jobQty))
        })
    }

    //sorting nos. of opening in descending order
    openingDscOrder = () => {
        this.setState({
            jobList: this.state.jobList.sort((a, b) => Number(b.jobQty) - Number(a.jobQty))
        })
    }

    render() {

        console.log(this.state.jobList);

        return (
            <>
                <div className="text-center">
                    <div className="btn-group  m-3">
                        <button type="button" class="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By Salary
                         </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => this.handleSalaryAsc()}>Low to High</button>
                            <button className="dropdown-item" onClick={() => this.handleSalaryDsc()}>High to low</button>
                        </div>
                    </div>
                    <div className="btn-group m-3">
                        <button type="button" class="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By Nos. Openings
                    </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => this.openingAscOrder()}>Low to High</button>
                            <button className="dropdown-item" onClick={() => this.openingDscOrder()}>High to low</button>
                        </div>
                    </div>

                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Nos. Openings</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.jobList !== undefined && this.state.jobList.map((ele, index) => (
                            <tr key={index}>
                                <td>{ele.companyName}</td>
                                <td>{ele.place}</td>
                                <td>{ele.jobTitle}</td>
                                <td>{ele.jobQty}</td>
                                <td>{ele.salary}</td>
                                <td><Link to={`/edit/${index}`} className="btn btn-success">Edit</Link></td>
                                <td><button className="btn btn-danger" onClick={() => this.props.deleteJob(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    jobList: state.jobList
})

const mapDispatchToProps = (Dispatch) => {
    return {
        deleteJob: (index) => Dispatch(deleteJob(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)
