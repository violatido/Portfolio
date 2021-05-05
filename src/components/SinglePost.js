import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  // takes out sections of necessary url from sanity
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
  // pulls out the url of an image from sanity studio


// creates building blocks of urlFor()
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // whatever slug clicked on will be viewes
    sanityClient.fetch(`*[slug.current == "${slug}"]{ 
      title,
      _id,
      slug,
      mainImage{
        asse->{
          _id,
          url
        }
      },
      body,
      "name": author->name, 
      "authorImage": author->
    }`
    )
    .then((data) => setSinglePost(data[0])) //grabs first piece of data from function 
    .catch(console.error); 
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>


  return <h1>SinglePost Page</h1>
}