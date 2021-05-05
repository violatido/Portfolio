import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  // query for data
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project]{
      title,
      date,
      description,
      projectType,
      link,
      tags
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error);
  }, []);

  return 
}