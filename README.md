# 🚀 Vue.js CI/CD Deployment on FTP CPanel (via GitHub Actions)

This project demonstrates how to set up a **Vue 3 + Vite** project using **Bun** or **Node.js**, with automated deployment to **FTP CPanel VPS** using GitHub Actions.

---

## 📦 Tech Stack

- ⚡ [Vue 3](https://vuejs.org/)
- ⚗️ [Vite](https://vitejs.dev/)
- 🧪 [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/)
- 🛠 GitHub Actions CI/CD

---

## 🧪 Development

Run locally with **Bun**:

```bash
bun install
bun run dev
```

Or with npm:

```bash
npm install
npm run dev
```

## ▶ GitHub Actions CI/CD

Automatic deployment is also set up via .github/workflows/deploy.yml. On every push to main, it:

- Installs dependencies
- Runs the build script (to generate `dist` directory)
- Upload `dist` directory into target Host(server) via FTP/CPanel.

## 📁 Directory Structure

```bash
.
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD
├── src/                           # Vue app source code
├── dist/                          # Auto-generated after build
├── index.html
├── vite.config.ts
└── package.json
```

## 🛠 Scripts in package.json


```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🔐 Notes

You need to add some GitHub Actions env variables.

- `FTP_IP`
- `FTP_PORT`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PATH`

## 👤 Author

Seyyed Ali Mohammadiyeh (Max Base)

📬 maxbasecode@gmail.com

🔗 https://github.com/BaseMax

## 🪪 License

MIT
