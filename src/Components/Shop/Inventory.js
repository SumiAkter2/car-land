import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Inventory.css'
const Inventory = ({ p, handleDelete }) => {

    return (
        <div>

            <Table>
                <tr>
                    <td></td>
                    <td> <img className='' src={p.picture} alt="" style={{
                        'width': '150px'
                    }} /> </td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>
                        <button onClick={() => handleDelete(p._id)}>Delete</button>
                    </td>
                    <td>
                        <Link to='/additem'>
                            <button >Added</button></Link>
                    </td>
                </tr>
            </Table>
            {/* <div className='d-flex align-items-center justify-content-center allItem-info'>
                <div className='items-img'>

                </div>
                <div>
                    <h5 className='fw-bold'></h5>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h5>{p.price}$</h5>

                    </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default Inventory;