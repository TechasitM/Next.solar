'use client'

import { useState,useEffect } from "react"

export default function Projectlist(){
    const [project, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/project.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    })
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra bg-lime-100">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Year</th>
                        <th>Project Name</th>
                        <th>Project Type</th>
                    </tr>
                </thead>
                <tbody>
                    { project.map((project,key) =>
                    <tr key={key}>
                        <td>{project.id}</td>
                        <td>{project.prj_year}</td>
                        <td>{project.prj_name}</td>
                        <td>{project.prj_type}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}