import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
export default function Details() {

  const detail=useSelector((state)=>state.sms.detail);
  console.log(detail)
const navigate=  useNavigate()
  return (
    <Container>
        <div className="header">
          <h2>Details</h2>
        </div>
      
      <div className="content">
        <div className="row1" style={{display:'flex'}}>
          <h4><b>Name :</b> {detail.name}</h4>
          <h4><b>Email :</b> {detail.email}</h4>
        </div>
        <div className="row2" style={{display:'flex'}}>
          <h4><b>Phone :</b>{detail.phone}</h4>
          <h4><b>ID(if student then regno)  :</b> {detail.regno}</h4>
        </div>
        <div className="row3"style={{display:'flex'}}>
          <h4><b>Course(if Teacher then Qualification) :</b> {detail.course}</h4>
        </div>
      </div>
          <button onClick={()=>navigate('..')}>Back</button>
    </Container>
  )
}
const Container=styled.div`
margin:6rem;
text-align:center;
background-color:rgba(0,0,0,0.1);
border-radius:0.3rem;
gap:1rem;
width:fit;
.header h2{
  padding-top:3rem;
  gap:0.3rem;
  font-size:2.4rem;
  font-weight:700;
}
.content{
  padding:2rem;

  .row1{
  
    gap:2rem;
    h4{
      gap:2rem;
      padding:2rem;
    }
  }
  .row2{
    gap:2rem;
    h4{
      gap:2rem;
      padding:2rem;
    }
  }
  .row3{
    gap:2rem;
    h4{
      gap:2rem;
      padding:2rem;
    }
  }
}
button{
  margin-bottom:1rem;
  border:none;
  padding:0.5rem;
  width:15%;
  color:white;
  font-weight:700;
  font-size:1.5rem;
  background-color:red;
}
@media only screen and (max-width: 600px) {
  margin-top:20rem;
  width:90%;
  margin-left:1.5rem;
}
`;