import React from "react";

export default function Sales() {
    return (
        <div>
            <h2>Sales</h2>
            <div className="flex-container">
                <div className="w-100 m-3">
                    <h2>Monthly Sales</h2>
                    <table className="table table-striped table-dark table-bordered">
                        <thead className="thead">
                            <tr>
                                <th>Month</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan</td>
                                <td>$ 20,000</td>
                            </tr>
                            <tr>
                            <td>Feb</td>
                            <td>$ 10,000</td>
                            </tr>
                            <tr>
                            <td>Mar</td>
                            <td>$ 9,000</td>
                            </tr>
                            <tr>
                            <td>Apr</td>
                            <td>$ 30,000</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="w-100 m-3">
                    <h2>Yearly Sales</h2>
                    <table className="table table-striped table-dark table-bordered">
                        <thead className="thead">
                            <tr>
                                <th>Year</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2022</td>
                                <td>$ 40,000</td>
                            </tr>
                            <tr>
                                <td>2021</td>
                                <td>$ 40,000</td>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td>$ 40,000</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}