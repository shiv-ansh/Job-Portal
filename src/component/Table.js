import React from 'react'

const Table = () => {
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
            </table>
        </>
    )
}

export default Table
