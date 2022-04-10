module.exports = {
  content: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
