/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins"], orbitron: ["Orbitron"] },
      textColor: { primary: "#0ca678" },
      backgroundColor: { primary: "#0ca678" },
    },
  },
  plugins: [],
};
