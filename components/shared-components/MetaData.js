import { NextSeo } from "next-seo";

export default function Metadata({ title, description, defaultTitle, defaultdescription }) {
  return (
    <NextSeo
      title={title || defaultTitle}
      description={description || defaultdescription}
    />
  );
}