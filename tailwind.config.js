const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "outerspace": "#495159",
        "paynesgray": "#37697b",
        "cerulean": "#25809c",
        "processcyan": "#01afdf",
        "robineggblue": "#1dc3ca",
        "turqoise": "#21d0b2",
      }
    },
  },
};
