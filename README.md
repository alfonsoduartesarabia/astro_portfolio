# Personal website / portfolio

Built my portfolio website with Astro for the first time. 

![screenshot](/astro_portfolio//public//assets//portfolioscreenshot.png)

## 📚 Stack
- Platform : [Astro](https://astro.build/)
- Deployment: [Cloudfare](https://www.cloudflare.com/)
- Packet Manager: [npm](https://www.npmjs.com/)
- CSS : [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
│   ├── assets/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |


## 📝 License

This project is licensed under the [MIT license](/LICENSE).