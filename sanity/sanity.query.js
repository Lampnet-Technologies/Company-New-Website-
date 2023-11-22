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
    // If the query is successful, return the result
    return result;
  } catch (error) {
    console.error("Error fetching post:", error);
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

    // You can throw the error again if you want to propagate it to the calling code
    throw error;
    // Alternatively, you can return a default value or an object indicating an error
    // return { error: "An error occurred while fetching the post." };
  }
}

// export async function getPost(slug) {
//   return client.fetch(
//     groq`*[_type == "post" && slug.current == $slug][0]{
//       _id,
//       title,
//       description,
//       publishedAt,
//       mainImage{
//         asset->{
//           url,
//           _id
//         }
//       },
//       category,
//       body,
//       'name':author->name,
//       'authorImage':author->image
//     }`,
//     { slug }
//   );
// }
