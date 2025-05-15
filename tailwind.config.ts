import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for portfolio
				"electric-purple": "#4B9FFF",
				"deep-royal": "#0066CC",
				"dark": "#121212",
				"light-gray": "#f0f0f0",
				"medium-gray": "#888888",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				"neon-pulse": {
					"0%, 100%": {
						boxShadow: "0 0 5px rgba(83, 45, 255, 0.5), 0 0 10px rgba(83, 45, 255, 0.3)",
					},
					"50%": {
						boxShadow: "0 0 10px rgba(83, 45, 255, 0.8), 0 0 20px rgba(83, 45, 255, 0.5), 0 0 30px rgba(83, 45, 255, 0.3)",
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					}
				},
				"rotate-slow": {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					}
				},
				'scanner-line': {
					'0%': { left: '-5%' },
					'100%': { left: '105%' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' }
				},
				'glitch-opacity': {
					'0%': { opacity: '0.3' },
					'27%': { opacity: '0.1' },
					'52%': { opacity: '0.3' },
					'68%': { opacity: '0.1' },
					'100%': { opacity: '0.3' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"neon-pulse": "neon-pulse 2s infinite",
				"float": "float 6s ease-in-out infinite",
				"rotate-slow": "rotate-slow 15s linear infinite",
				'scanner-line': 'scanner-line 2s linear infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'glitch-opacity': 'glitch-opacity 4s ease-in-out infinite'
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["'JetBrains Mono'", "monospace"],
			}
		}
	},
	plugins: [],
} satisfies Config;
