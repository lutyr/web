module.exports = (conf) => {
  conf.addPassthroughCopy("src/styles/fonts");
  conf.addPassthroughCopy("src/images")
  return {
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      output: "_site",
      includes: "sections",
    },
  };
};
