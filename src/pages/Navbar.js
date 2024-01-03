import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FetchData } from '../store/actions';
import axios from 'axios';
import { addStudent, addTeacher } from '../store';
export default function Navbar({children}) {
    const [isScrolled, seIsScrolled] = useState(false);
    window.onscroll = () => {
      seIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
    const dispatch=useDispatch()
    useEffect(async()=>{
      const fetchData=async()=>{
        const {
            data: { data },
          } =await axios.get(`http://localhost:8080/student`);
          
       //console.log(data)
        return data;
    }
    const fetchTeacherData=async()=>{
      const {
          data: { data },
        } =await axios.get(`http://localhost:8080/teacher`);
        
     console.log(data)
      return data;
  }
    try{
        const data=await fetchData()
        const data1=await fetchTeacherData()
        //console.log(data)
        dispatch(addStudent(data));
        dispatch(addTeacher(data1));
      }catch(error){
         console.log(error)
      }   
    },[dispatch])
  return (
<>    <Container>
   
        <div className={`header ${isScrolled} ? 'scrolled' :" "`}>
            <h3>Student-Teacher</h3>
        </div>
     <div className="flex content">
        <ul className="list">
            <li><NavLink to='/' className={({isActive})=>isActive ? 'active' : ''} style={{color:'white'}} end>Home</NavLink></li>
            <li><NavLink to='/teacher' className={({isActive})=>isActive ? 'active' : ''}style={{color:'white'}} end> Add Teacher</NavLink></li>
            <li><NavLink to={'/student'} className={({isActive})=>isActive ? 'active' : ''}style={{color:'white'}} end>Add Student</NavLink></li>
            <li><NavLink to={'/studList'} className={({isActive})=>isActive ? 'active' : ''}style={{color:'white'}} end>Students</NavLink></li>
            <li><NavLink to={'/teacherList'} className={({isActive})=>isActive ? 'active' : ''}style={{color:'white'}} end>Teachers</NavLink></li>
        </ul>
     </div>
    </Container>
  {children}
    </>
  )
}
const Container=styled.div`
display:flex;
potition:sticky;
background-color:#383838;
justify-content:space-between;
height:4rem;
width:100%;
padding-bottom:2rem;
padding-left:1rem;
text-transform:capitalize;
color:white;
.scrolled{
    background-color:black;
}
.header{
    font-size:1rem;
    padding-top:1rem;
}
.list{
    padding:1rem;
 display:flex;
 gap:2rem;
 margin-right:3rem;
 list-style:none;
 cursor:pointer;
 li{
    font-size:1.2rem;
    color:white;
    NavLink{
        text-decoration:none;
        color:yellow;
    }
    .active{
        &:hover{
            text-decoration:none;
            color:yellow;
        }
        color:yellow;
        background-color:rgba(0,0,0,0.7);
        padding:0.3rem; 
        height:100%;

    }
 }
}
`;