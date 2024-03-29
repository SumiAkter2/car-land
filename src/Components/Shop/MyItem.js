import axios from "axios";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import ShowMyitems from "./ShowMyitems";

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);

  const [user] = useAuthState(auth);
  console.log(user);
  // const [items, setItems] = useItems();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://car-land-server-production.up.railway.app/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myItems.filter((item) => item._id !== id);
          setMyItems(remaining);
        });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    console.log(email);

    const getItems = async () => {
      const url = `https://car-land-server-production.up.railway.app/myItems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          // headers: {
          //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        // if (error.response.status === 403 || error.response.status === 401) {
        //     signOut(auth);
        //     navigate("/login");
        // }
      }
    };
    //
    getItems();
  }, [user]);

  return (
    <div>
      <div>
        <div className="container">
          <div className=" mt-5 gap-5">
            {myItems.map((item) => (
              <ShowMyitems
                key={item._id}
                item={item}
                handleDelete={handleDelete}
              ></ShowMyitems>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
