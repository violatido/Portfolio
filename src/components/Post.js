import React, { useState, useEffect } from "react"; //useEffect fetches sanity data
import { Link } from "react-router-dom"
import sanityClient from "../client.js"; // this is where the sanity project id is
  

export default function Post() {
  // set state, query for info
  const [postData, setPost] = useState(null); // set initial state to null

  useEffect(() => {
    // `` is where the groq queries live, * reps all data
    // grab all types == post, grabbing title/slug/image of each one
    sanityClient
      .fetch(
        `*[_type == "post"]{ 
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      // fetch the post data, then set the post (setting the state)
      .then((data) => setPost(data))
      // if any errors:
      .catch(console.error)
  }, []); 
      // [] makes it run only once

  return (
    <main className="bg-green-100 min-h-screen p-12"> {/* the entire page  */}      
      <section className="container mx-auto"> {/* the content */}
        <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog!</h2>
        <div classname="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* makes a grid */}
            {/* map over postData */}
            {postData && postData.map((post, index) => (
          <article> 
            <Link to={"/post/" + post.slug.current} key={post.slug.current}> {/* title links us to individual posts (current slug key) */}
            <span 
              className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" 
              key={index}
            >
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className="w-full h-full rounded-r object-cover absolute"
              />
              <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                  {post.title}
                </h3>
              </span>
            </span>
            </Link>
          </article>
))}
        </div>
      </section>
    </main>
  );
}