import { Outlet } from "react-router-dom"


const Contact = () => {
  return (
    <div style={{ fontSize: "8rem"}}>
        <h1>Contact</h1>

        <Outlet />
    </div>
  )
}

export default Contact