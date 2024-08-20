import {  NavLink } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.nav `
background-color: #333;
color: white;
padding: 1rem 0;

ul{
display: flex;
justify-content: center;
gap: 1rem;
list-style: none;
}

a {
color: white;
text-decoration: none;
}

&:hover {
border-bottom: 2pm solid orange;
color: orange;
}

.active {
color: orange;

}
`;
const Navbar = () => {
  return (
   <Wrapper>
    <ul>
        <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/student">Students</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/blog">Blog</NavLink>
        </li>
    </ul>
   </Wrapper>
  )
}

export default Navbar