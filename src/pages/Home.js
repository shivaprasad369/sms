import React from 'react'
import styled from 'styled-components';
export default function Home() {
  return (
    <Container>
      <div className="header">
        About Us
      </div>
      <div className="body">
        <p> a student portal is the entire online platform which provides students with various academic resources 
            such as course schedules, contacts, grades, class materials,
             etc. A student portal is often a part of the LMS platform implemented in the educational institution.
             a student portal is the entire online platform which provides students with various academic resources such as course schedules, contacts, grades, class materials, etc. A student portal is often a part of the LMS platform implemented in the educational institution.</p>
      </div>
    </Container>
  )
}
const Container=styled.div `
display:flex-col;
padding:4rem;
margin:4rem;
border-radius:1rem;
background-color:rgba(0,0,0,0.3);
gap:1.4rem;
.header{
    color:#393939;
    font-weight:700;
    font-size:2rem;
    gap:2rem;

}
.body{
    display:flex;
    font-size:1.2rem;
    padding:2rem;    
}
`;
