import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			citi: 'var(--citi)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			inter: ['Inter', 'sans-serif']
		}

  	},
	spacing: {
		'20': '1.667rem',
		'30': '1.875rem',
		'35': '2.917rem',
		'40': '3.333rem',
		'45': '3.75rem',	
		'50': '4.167rem',
		'60': '5rem',
		'70': '6.25rem',
		'80': '6.667rem',
		'88': '7.333rem',
		'100': '8.333rem',
		'280': '23.333rem',
		'326': '26rem',
		'360': '30rem',


	},
	margin: {
		'1': '0.083rem',
		'5': '0.417rem',
		'8': '0.667rem',
		'10': '0.833rem',
		'15': '1.25rem',
		'20': '1.667rem'


	},
	gap: {
		'4': '0.333rem',
		'11': '0.917rem',
		'12': '1rem',
		'15': '1.25rem',
		'20': '1.667rem'
	},
	padding:{
		'4': '0.333rem',
		'10': '0.833rem'
	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
