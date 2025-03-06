module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          fontFamily: {
            'circular': ['Circular Std', 'sans-serif'],
          },
          // Custom font sizes
          fontSize: {
            'xs': '0.75rem',    // Extra Small
            'sm': '0.875rem',   // Small
            'base': '1rem',      // Base
            'lg': '1.125rem',    // Large
            'xl': '1.25rem',     // Extra Large
            '2xl': '1.5rem',     // 2X Large
            '3xl': '1.875rem',   // 3X Large
            '4xl': '2.25rem',    // 4X Large
            '5xl': '3rem',       // 5X Large
            '6xl': '4rem',       // 6X Large
            'custom': '2rem',    // Custom font size
          },
          // Custom breakpoints for responsiveness
          screens: {
            'mobile-320-400': { min: '320px', max: '400px' }, 
            'mobile-401-480': { min: '401px', max: '480px' }, 
            'mobile-481-600': { min: '481px', max: '600px' }, 
            'mobile-601-768': { min: '601px', max: '768px' }, 
            'mobile-769-900': { min: '769px', max: '900px' }, 
            'mobile-901-1200': { min: '901px', max: '1200px' },
            // You can also keep Tailwind's default breakpoints (e.g., 'sm', 'md', 'lg') if needed
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          },
        },
      },
      variants: {},
      plugins: [],
  };