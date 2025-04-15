// tailwind.config.js
module.exports = {
    content: [
      './views/pages/*.pug','./views/layout/main.pug','./views/layout/variants/*.pug',
    ],
    theme: {
      extend: {
        colors:{
            "main-bg":"var(--main-bg)",
            "main-bg-fg":"var(--main-bg-fg)",
            "main-fg":"var(--main-fg)",
            "main-accent1":"var(--main-accent1)"
        }
      },
    },
    plugins: [],
  };
  