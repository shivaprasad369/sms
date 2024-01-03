import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTeacher } from "../store";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function AddTeacher() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
    qualification: "",
  });
  const navigate = useNavigate();
  const d = useSelector((state) => state.sms.teachersData);
  const dispatch = useDispatch();
  const submitHandler = async(e) => {
    e.preventDefault();
  

    console.log(d);
    const response = await axios.post(
        "http://localhost:8080/teacherCreate",
        data,
      );
    alert("Added Successfully");
    navigate("/teacherList");
  };
  return (
    <Container>
      <div className="content">
        <div className="header">
          <h2>Add Teacher</h2>
        </div>
        <div className="form" onSubmit={submitHandler}>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              name="id"
              placeholder="Enter Id"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              name="qualification"
              placeholder="Enter Qualification"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
  justify-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: 0.6rem;
  width: 40rem;
  margin-left: 23%;
  .header {
    font-size: 1.4rem;
    gap: 1rem;
  }
  .form {
    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      gap: 1rem;
      input {
        border: none;
        height: 3rem;

        padding: 0.5rem;
        border-radius: 0.3rem;
        &:focus {
          background-color: rgba(0, 0, 0, 0.1);
          border: none;
          color: white;
          font-size: 1rem;
          font-weight: 700;
        }
      }
      button {
        height: 3rem;
        width: 30%;
        border: none;
        border-radius: 0.2rem;
        font-size: 1.2rem;
        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          border: none;
          border-radius: 0.2rem;
        }
      }
    }
  }
`;
