import React from 'react'
import { connect } from "react-redux";


const Table = (props) => {
    return (
        <>
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
                    {props.jobList.map((ele, index) => (
                        <tr key={index * index}>
                            <td>{ele.companyName}</td>
                            <td>{ele.place}</td>
                            <td>{ele.jobTitle}</td>
                            <td>{ele.jobQty}</td>
                            <td>{ele.salary}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    jobList: state.jobList
})

// const mapDispatchToProps = {

// }


export default connect(mapStateToProps, null)(Table)
