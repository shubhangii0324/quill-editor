import type { Config } from "tailwindcss";

const config: Config = {
  content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        dark_gray: 'var(--dark_gray)',
        light_gray: 'var(--light_gray)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        light_blue: 'var(--light_blue)',
        border_color: 'var(--border_color)',
        orange: 'var(--orange)',
        content_background: 'var(--content_background)',
        text_gray: 'var(--text_gray)',
        status_blue: 'var(--status_blue)',
        status_orange: 'var(--status_orange)',
        status_yellow: 'var(--status_yellow)',
        status_green: 'var(--status_green)',
        status_purple: 'var(--status_purple)',
        status_torquoise: 'var(--status_torquoise)',
        bg_light_blue: 'var(--bg_light_blue)',
      }
    },
  },
  plugins: [],
};
export default config;
