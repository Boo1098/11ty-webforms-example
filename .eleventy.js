module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({"node_modules/simpledotcss/simple.min.css": "public/simple.min.css"});

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
