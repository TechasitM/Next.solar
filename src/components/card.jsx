import Link from "next/link";
export default  function card(){
    return(
        <div className="flex items-center justify-center min-h shadow-xl">
  <div className="px-5 py-5 card w-96 bg-base-100">
    <div className="card-body">
      <h2 className="card-title">Bio</h2>
      <p>Some description here.</p>
      <div className="card-actions justify-end">
        <Link href="/bio" className="hover:bg-base-300">Click here</Link>
      </div>
    </div>
  </div>
</div>          
    )
}