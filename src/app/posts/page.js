import Link from "next/link";

const Posts = async () => {
  const response = await fetch("http://localhost:5000/posts", {cache:"no-store"})
  const post = await response.json();
  // console.log(post);
  return (
    <div>
      <h2 className="text-2xl text-green-500 text-center my-2">
        Total Posts: {post?.length}
      </h2>

      <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
        {post?.map((data) => (
          <div key={data?.id}>
            <div className="card w-80 bg-gray-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{data?.title}</h2>
                <p>{data?.body}</p>
                <p>{data?.author}</p>
                <p>{data?.date}</p>
                <div className="card-actions justify-end">
                 <Link href={`posts/${data.id}`}> 
                 <button className="btn btn-primary">See more</button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
