import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addStudent } from "../store";
export default function AddStudent() {
  const [studDetail, setStudDetails] = useState({
    name: "",
    email: "",
    phone: "",
    regno: "",
    course: "",
  });
  const navigate = useNavigate();
  //const students = useSelector((state) => state.sms.studentsData);
  const dispatch = useDispatch();
  const submithandler = async (e) => {
    e.preventDefault();
    //console.log(students)
     await axios.post(
      "http://localhost:8080/studCreate",
      studDetail
    );
    const data=await axios.get(`http://localhost:8080/student`);
    dispatch(addStudent(data.data.data))
    alert("added successfully");
    navigate("/studList");
  };
  return (
    <Container>
      <div className="content">
        <div className="header">
          <h2>Add Student</h2>
        </div>
        <div className="form">
          <form onSubmit={submithandler}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) =>
                setStudDetails({
                  ...studDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setStudDetails({
                  ...studDetail,
                  ...studDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              onChange={(e) =>
                setStudDetails({
                  ...studDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="regno"
              placeholder="Enter Registration number"
              onChange={(e) =>
                setStudDetails({
                  ...studDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              onChange={(e) =>
                setStudDetails({
                  ...studDetail,
                  [e.target.name]: e.target.value,
                })
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
  @media only screen and (max-width: 600px) {
    margin:0;
    paggind:0;
    background-color:white;
   .content{
     margin-top:20rem;
     width:90%;
     border-radius:1rem;
     background-color:rgba(0,0,0,0.4);
     padding:1rem;
    form{

    }
   }
  }
`;
