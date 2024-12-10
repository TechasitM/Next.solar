import Link from "next/link";
export default  function Navbar(){
    return(
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ws-w0?</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/assignment">Assignment</a></li>
          <li><a href="/bio">Bio</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a href="/project_type">project_type</a></li>
                <li><a href="/projects">projects</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>  
    )
}