import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import './Inventory.css'
const Inventory = ({ p, handleDelete }) => {
  return (
    <Table>
      <tr>
        <td></td>
        <td>
          <img
           
            src={p.picture}
            alt=""
            style={{
              width: "150px",
            }}
          />
        </td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td>{p.quantity}</td>
        <td>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </td>
        <td>
          <Link to="/additem">
            <button>Added</button>
          </Link>
        </td>
      </tr>
    </Table>
  );
};

export default Inventory;
