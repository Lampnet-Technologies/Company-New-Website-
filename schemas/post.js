import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "string",
      options: {
        list: [
          { title: "Software Engineering", value: "Software Engineering" },
          { title: "Product", value: "Product" },
          { title: "UI/UX Design", value: "UI/UX Design" },
          { title: "Data Management", value: "Data Management" },
          { title: "Information Security", value: "Information Security" },
          { title: "Business Intelligence", value: "Business Intelligence" },
        ],
        layout: "radio",
      },
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      title: "Excerpt",
      name: "description",
      description: "This is brief descrption of the article",
      type: "string",
      // validation: (Rule) => Rule.required(),
      options: {
        maxLength: 200,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
