import Layout from "@/components/layout";

export default function ProjectTypePage(){
    const project_type = [
        {id : 1, pjt_name : "CC"},
        {id : 2, pjt_name : "CGM"},
        {id : 3, pjt_name : "IT"},
        {id : 4, pjt_name : "IoT"},
        {id : 5, pjt_name : "SEC"},
    ];
    return(
        <Layout>
        <div>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Project Type</th>
                    </tr>
                </thead>
                <tbody>
                    { project_type.map((pt,key) =>
                    <tr key={key}>
                        <td>{pt.id}</td>
                        <td>{pt.pjt_name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        </Layout>
    )
}