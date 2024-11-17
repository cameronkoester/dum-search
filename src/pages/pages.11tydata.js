export default () => {
  let pagesData = {
    permalink: "/{{ page.fileSlug }}/",
    layout: "layouts/base.html",
  };

  if (process.env.ELEVENTY_ENV === "prod") {
    pagesData.date = "git Last Modified";
  }

  return pagesData;
};
