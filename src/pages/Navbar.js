import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
import { addStudent, addTeacher } from "../store";
export default function Navbar({ children }) {
  const [isScrolled, seIsScrolled] = useState(false);
  window.onscroll = () => {
    seIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const dispatch = useDispatch();
  const fetchData = useCallback(()=>
  
  async () => {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/student`);

    //console.log(data)
    return data;
  },[]
  )
  const fetchTeacherData = useCallback(()=>
  
  async () => {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/teacher`);

    console.log(data);
    return data;
  },[]
  )
  const funct=useCallback(()=>()=>

{
    try {
      const data = fetchData();
      const data1 = fetchTeacherData();
      //console.log(data)
      dispatch(addStudent(data));
      dispatch(addTeacher(data1));
    } catch (error) {
      console.log(error);
    }
  },[fetchData,fetchTeacherData,dispatch]
  ) 
  useEffect( () => {
    funct()
  });
  return (
    <>
      {" "}
      <Container>
        <div className={`header ${isScrolled} ? 'scrolled' :" "`}>
          <h3>Student-Teacher</h3>
        </div>
        <div className="flex content">
          <ul className="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                style={{ color: "white" }}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teacher"
                className={({ isActive }) => (isActive ? "active" : "")}
                style={{ color: "white" }}
                end
              >
                {" "}
                Add Teacher
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/student"}
                className={({ isActive }) => (isActive ? "active" : "")}
                style={{ color: "white" }}
                end
              >
                Add Student
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/studList"}
                className={({ isActive }) => (isActive ? "active" : "")}
                style={{ color: "white" }}
                end
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/teacherList"}
                className={({ isActive }) => (isActive ? "active" : "")}
                style={{ color: "white" }}
                end
              >
                Teachers
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
      {children}
    </>
  );
}
const Container = styled.div`
  display: flex;
  potition: sticky;
  background-color: #383838;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 1rem;
  text-transform: capitalize;
  color: white;
  .scrolled {
    background-color: black;
  }
  .header {
    font-size: 1rem;
    padding-top: 1rem;
  }
  .list {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    margin-right: 3rem;
    list-style: none;
    cursor: pointer;
    li {
      font-size: 1.2rem;
      color: white;
      NavLink {
        text-decoration: none;
        color: yellow;
      }
      .active {
        &:hover {
          text-decoration: none;
          color: yellow;
        }
        color: yellow;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0.3rem;
        height: 100%;
      }
    }
  }
`;
