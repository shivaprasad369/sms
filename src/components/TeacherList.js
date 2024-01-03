import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { details } from "../store";
import { Link } from "react-router-dom";
import axios from 'axios'
export default function TeacherList() {
  const d = useSelector((state) => state.sms.teachersData);
  const dispatch = useDispatch();
  console.log(d)
  const deleteHandler = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:8080/teacherDelete/${id}`);
  };
  return (
    <Container>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Teacher ID.</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {d.length > 0 ? (
            d.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.id}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ gap: "2rem", marginRight: "1rem" }}
                  >
                    <Link
                      to={"/details"}
                      onClick={() =>
                        dispatch(details({ id: data.id, type: "teacher" }))
                      }
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: 700,
                      }}
                    >
                      View
                    </Link>
                  </button>
                  <button type="button" className="btn btn-danger" onClick={()=>deleteHandler(data.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>No Data Present</h1>
          )}
        </tbody>
      </table>
    </Container>
  );
}
const Container = styled.div`
  margin: 4rem;
`;
