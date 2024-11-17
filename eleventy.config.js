import htmlmin from "html-minifier-terser";
import { minify } from "terser";

export default function (eleventyConfig) {
  // Include images and favicon in the build process
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Minify JS output
  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    },
  );

  return {
    // Use Nunjucks in HTML files
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      data: "data",
      includes: "includes",
      output: "_site",
    },
  };
}
