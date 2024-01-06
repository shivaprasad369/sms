import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addStudent,details } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";
export default function StudentList() {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    console.log(id);
   await axios.delete(`http://localhost:8080/studDelete/${id}`);
  };
  const fetchData=async()=>{
    
    const data=await axios.get(`http://localhost:8080/student`);
    dispatch(addStudent(data.data.data))
  }
  useEffect(()=>{
   
    fetchData()
  })
  const data= useSelector((state) => state.sms.studentsData);
 // const detail = useSelector((state) => state.sms.detail);
  console.log(data);
  return (
    <Container>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Regno.</th>
            <th scope="col">Course</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <>
         {data.length > 0 && (
            data.map((data) => (
              <tr key={data.regno}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.regno}</td>
                <td>{data.course}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ gap: "2rem", marginRight: "1rem" }}
                    onClick={() =>
                      dispatch(details({ id: data.regno, type: "student" }))
                    }
                  >
                    <Link
                      to={"/details"}
                      style={{
                        color: "white",
                        fontSize: "1rem",
                        textDecoration: "none",
                        fontWeight: 700,
                      }}
                    >
                      View
                    </Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteHandler(data.regno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
          </>
        </tbody>
      </table>
    </Container>
  );
}
const Container = styled.div`
  margin: 4rem;
`;
