module.exports = {
  content: ["index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'blob': 'animate-blob 5s ease-in-out infinite',
      },
      keyframes: {
        'animate-blob': {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
      },
      
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
};
