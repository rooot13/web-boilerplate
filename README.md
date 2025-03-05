📁 README.md

# 🚀 Web-Boilerplate

A **modern and flexible** web boilerplate built with **Next.js, TypeScript, Supabase, Prisma, Kinde, and ShadCN**. This project provides a strong foundation for quickly launching scalable and secure web applications.

## 📌 Features
✅ **Authentication** with [Kinde](https://kinde.com/)  
✅ **Database & ORM** using [Supabase](https://supabase.com/) + [Prisma](https://www.prisma.io/)  
✅ **Fully Styled UI** with [ShadCN](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)  
✅ **Feature & Pricing Sections** included out of the box  
✅ **Scalable Architecture** for easy project expansion  

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/web-boilerplate.git
cd web-boilerplate

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and configure the required variables:

# Database
DATABASE_URL="your_supabase_database_url"
DIRECT_URL="your_direct_database_url"

# Kinde Authentication
KINDE_ISSUER_URL=your_kinde_url
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
KINDE_LOGOUT_REDIRECT_URI=http://localhost:3000

4️⃣ Run the Development Server

npm run dev

The project will be available at http://localhost:3000 🚀

⸻

🔧 Technologies Used
	•	Frontend: Next.js + TypeScript
	•	UI & Styling: Tailwind CSS + ShadCN
	•	Database & ORM: Supabase + Prisma
	•	Authentication: Kinde
	•	State Management: React Hooks

⸻

📁 Project Structure

📦 web-boilerplate
│── 📂 app
│   ├── 📂 components
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PricingCard.tsx
│   │   └── data
│   │       ├── featureData.ts
│   │       └── pricingData.ts
│   ├── 📂 pages
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   └── api
│   │       └── auth.ts
│── 📂 styles
│   ├── globals.css
│── 📂 prisma
│   ├── schema.prisma
│── .env
│── package.json
│── tsconfig.json
│── README.md



⸻

💡 Contributing

Contributions are welcome! To contribute:
	1.	Fork the repo and create a new branch.
	2.	Make your changes.
	3.	Open a Pull Request.

⸻

📜 License

This project is open-source under the MIT License.

⸻

⭐ Show Some Love

If you like this boilerplate, please consider starring the repo on GitHub! 🌟

git remote add origin https://github.com/yourusername/web-boilerplate.git
git push -u origin main



⸻

🚀 Happy Coding! 🎯

---

### ✅ **Final Steps**
1. **Save this file as `README.md` in your project root.**
2. **Commit and push it to GitHub**:
   ```sh
   git add README.md
   git commit -m "Added README file"
   git push origin main



⸻
