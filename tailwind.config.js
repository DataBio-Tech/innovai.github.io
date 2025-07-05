module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E86AB", // blue-600
          50: "#EBF4F8", // blue-50
          100: "#D7E9F1", // blue-100
          200: "#AFD3E3", // blue-200
          300: "#87BDD5", // blue-300
          400: "#5FA7C7", // blue-400
          500: "#2E86AB", // blue-500
          600: "#256B89", // blue-600
          700: "#1C5067", // blue-700
          800: "#133545", // blue-800
          900: "#0A1A23", // blue-900
        },
        secondary: {
          DEFAULT: "#A23B72", // pink-600
          50: "#F5E8F0", // pink-50
          100: "#EBD1E1", // pink-100
          200: "#D7A3C3", // pink-200
          300: "#C375A5", // pink-300
          400: "#AF4787", // pink-400
          500: "#A23B72", // pink-500
          600: "#822F5B", // pink-600
          700: "#612344", // pink-700
          800: "#41172D", // pink-800
          900: "#200B16", // pink-900
        },
        accent: {
          DEFAULT: "#F18F01", // orange-500
          50: "#FEF7E6", // orange-50
          100: "#FDEFCD", // orange-100
          200: "#FBDF9B", // orange-200
          300: "#F9CF69", // orange-300
          400: "#F7BF37", // orange-400
          500: "#F18F01", // orange-500
          600: "#C17301", // orange-600
          700: "#915701", // orange-700
          800: "#613B00", // orange-800
          900: "#301E00", // orange-900
        },
        background: "#FFFFFF", // white
        surface: "#F8F9FA", // gray-50
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#6C757D", // gray-600
        },
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#E8F5E8", // green-50
          100: "#D1EBD1", // green-100
          200: "#A3D7A3", // green-200
          300: "#75C375", // green-300
          400: "#47AF47", // green-400
          500: "#28A745", // green-500
          600: "#208637", // green-600
          700: "#186529", // green-700
          800: "#10441B", // green-800
          900: "#08220D", // green-900
        },
        warning: {
          DEFAULT: "#FF6B35", // red-orange-500
          50: "#FFF0EC", // red-orange-50
          100: "#FFE1D9", // red-orange-100
          200: "#FFC3B3", // red-orange-200
          300: "#FFA58D", // red-orange-300
          400: "#FF8767", // red-orange-400
          500: "#FF6B35", // red-orange-500
          600: "#CC562A", // red-orange-600
          700: "#99401F", // red-orange-700
          800: "#662B15", // red-orange-800
          900: "#33150A", // red-orange-900
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FBEAEA", // red-50
          100: "#F7D5D5", // red-100
          200: "#EFABAB", // red-200
          300: "#E78181", // red-300
          400: "#DF5757", // red-400
          500: "#DC3545", // red-500
          600: "#B02A37", // red-600
          700: "#841F29", // red-700
          800: "#58151B", // red-800
          900: "#2C0A0D", // red-900
        },
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          focus: "#F18F01", // orange-500
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(46, 134, 171, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
    },
  },
  plugins: [],
}