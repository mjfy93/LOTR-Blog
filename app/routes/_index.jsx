import { useLoaderData } from "react-router"
import { API_BASE_URL } from "../utils/api"

export async function loader() {
  const response = await fetch(`${API_BASE_URL}/book`, {
    headers: { 'Authorization': 'Bearer LlSu4KLZ6OcHroMGGgZt' }
  })



  return response.json();
}


export default function Home() {
  const data = useLoaderData();
  const booksInfo = Object.entries(data.docs)
  console.log(booksInfo);


  return (
    <div className="homeContainer d-flex align-items-center my-5">
      {booksInfo.map((item, index) => (
        <div className="card bg-transparent" key={index} >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item[1].name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-outline-success">Go somewhere</a>
          </div>
        </div>
      ))}
    </div>
  )
}
