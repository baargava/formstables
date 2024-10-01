import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const Tables = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
      setData(data.data);
      console.log(data.data)
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
      console.log(error)
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="flex items-center justify-center mx-4 mt-8">

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                <td className="px-4 py-2 border border-gray-300">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tables