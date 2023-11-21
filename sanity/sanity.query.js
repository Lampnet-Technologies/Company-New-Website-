import client from "./sanity.client";
import { groq } from "next-sanity";

export async function getBlog() {
  return client.fetch(
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
}

export async function getPost(slug) {
  return client.fetch(
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
}
