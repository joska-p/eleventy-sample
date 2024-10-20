import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import dayjs from "dayjs"

export default async function (eleventyConfig) {
  // Pass-through images
  eleventyConfig.addPassthroughCopy("./src/images")

  // Add Date filters
  eleventyConfig.addFilter("date", (dateObj) => {
    return dayjs(dateObj).format("MMMM D, YYYY")
  })

  eleventyConfig.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString()
  })

  eleventyConfig.addFilter("year", () => {
    return dayjs().format("YYYY")
  })

  // Add pages collection
  eleventyConfig.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order
    })
  })

  eleventyConfig.setInputDirectory("src")
  eleventyConfig.setOutputDirectory("public")

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)
}
