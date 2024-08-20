import { useParams } from "react-router-dom"

const StudentPreview = () => {
    const {id} = useParams();
    console.log("params", id)

  return (
    <div>StudentPreview</div>
  )
}

export default StudentPreview