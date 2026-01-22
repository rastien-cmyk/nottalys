module.exports = function(eleventyConfig) {
  // Copier les assets statiques
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("CNAME");
  
  // Watch les fichiers CSS pour rebuild
  eleventyConfig.addWatchTarget("./src/css/");
  
  // Serveur de développement
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true,
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};