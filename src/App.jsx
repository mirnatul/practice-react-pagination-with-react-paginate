import { useState, useEffect } from "react"
import User from "./User"


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('users.json')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1 className="font-semibold text-5xl py-5 bg-cyan-200 text-center">Pagination</h1>

      <User users={users}></User>
      {/* <div className="grid grid-cols-4 m-3 gap-6">
        {
          users.map((user) => <div
            key={user.index}
            className='border-2 p-4 rounded-md border-green-600 bg-lime-100'
          >
            <p>User No: {user.index}</p>
            <p>{user.name}</p>
            <p>{user.name} years old</p>
          </div>)
        }
      </div> */}
    </div>
  )
}

export default App
