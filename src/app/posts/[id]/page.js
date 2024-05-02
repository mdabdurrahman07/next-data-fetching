import Link from "next/link";
export async function generateStaticParams() {
    const response = await fetch(`http://localhost:5000/posts`) 
    const posts = await response.json() 
    const values = posts.map((data) => {
        return {id: data?.id}
    })
    return values
  }
const DetailsPage =async ({params}) => {
    // console.log(params.id)
    const response = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await response.json()
    // console.log(post)
    return (
        <div>
             <div className="w-full">
       
            <div className="card w-[70%] mx-auto bg-gray-500 shadow-xl my-3">
              <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p>{post?.body}</p>
                <p>{post?.author}</p>
                <p>{post?.date}</p>
                <div className="card-actions justify-end">
                 <Link href="/posts"> 
                 <button className="btn btn-primary">Back</button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
      
      </div>
      
    );
};

export default DetailsPage;