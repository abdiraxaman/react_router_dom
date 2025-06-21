import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <nav>
        <h1>logo</h1>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App