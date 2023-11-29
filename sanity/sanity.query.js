import client from "./sanity.client";
import { groq } from "next-sanity";

export async function getBlog() {
  try {
    const result = await client.fetch(
      groq`*[_type == "post"]{
            _id,
            title,
            "slug": slug.current, 
            description,
            publishedAt,
            mainImage{ 
              asset->{
                url,
                _id
              } 
            },  
            categories,
            body,
            'name':author->name,
            'authorImage':author->image
          }`
    );
    // if (!result || result.error) {
    //   throw new Error("An error occurred while fetching blog data");
    // }
    // if (!result.ok) {
    //   throw new Error("An error occured");
    // }
    return result;
  } catch (error) {
    console.error("Error in getBlog:", error);
    throw error;
  }
}

export async function getPost(slug) {
  try {
    const result = await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        description,
        publishedAt,
        mainImage{ 
          asset->{
            url,
            _id
          }
        },  
        category,
        body,
        'name':author->name,
        'authorImage':author->image
      }`,
      { slug }
    );

    // If the query is successful, return the result
    return result;
  } catch (error) {
    // If an error occurs, handle it here
    console.error("Error fetching post:", error);
    throw error;
  }
}
