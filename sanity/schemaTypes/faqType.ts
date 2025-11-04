import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      description: "FAQ Question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      description: "FAQ Answer",
      title: "Answer",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "question",
    },
    prepare({ title }) {
      return {
        title: title || "FAQ Question",
        subtitle: "FAQ answer",
      };
    },
  },
});
