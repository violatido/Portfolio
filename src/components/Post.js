import React, { useState, useEffect } from "react"; //useEffect fetches sanity data
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
    <main>
      <section>
        <h1></h1>
        <h2></h2>
        <div></div>
      </section>
    </main>
  );
}