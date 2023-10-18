import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <div className='product-details' >
                    <div className='product-head'>
                        <h5>Product Sell</h5>
                        <div> <input placeholder='Search Here' />&nbsp;
                            <select>
                                <option>last 30 days</option>
                                <option>last 15 days</option>
                                <option>last 7 days</option>
                                <option>last 3 days</option>
                            </select>
                        </div>
                    </div>

                    <div className='product-table'>
                        <table>
                            <tr>
                                <td width={850}>Product Name</td>
                                <td width={100}>Stock</td>
                                <td width={100}>Price</td>
                                <td width={100}>Total Sale</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-data'>
                                        <img src='https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg' width={80} height={50} />
                                        <div className='table-data-titles'>
                                            <h5>This is the Product name</h5>
                                            <p>This is The product Details </p>
                                        </div>

                                    </div>
                                </td>
                                <td>35 in stock</td>
                                <td style={{color:'black',fontWeight:'bolder'}}>$ 45.06</td>
                                <td>$ 100</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-data'>
                                        <img src='https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg' width={80} height={50} />
                                        <div className='table-data-titles'>
                                        <h5>This is the Product name</h5>
                                            <p>This is The product Details </p>
                                        </div>

                                    </div>
                                </td>
                                <td>30 in stock</td>
                                <td style={{color:'black',fontWeight:'bolder'}}>$ 48.06</td>
                                <td>$ 90</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-data'>
                                        <img src='https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg' width={80} height={50} />
                                        <div className='table-data-titles'>
                                        <h5>This is the Product name</h5>
                                            <p>This is The product Details </p>
                                        </div>

                                    </div>
                                </td>
                                <td>32 in stock</td>
                                <td style={{color:'black',fontWeight:'bolder'}}>$ 45.06</td>
                                <td>$ 100</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-data'>
                                        <img src='https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg' width={80} height={50} />
                                        <div className='table-data-titles'>
                                        <h5>This is the Product name</h5>
                                            <p>This is The product Details </p>
                                        </div>

                                    </div>
                                </td>
                                <td>32 in stock</td>
                                <td style={{color:'black',fontWeight:'bolder'}}>$ 45.06</td>
                                <td>$ 100</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product