import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './playwright_tests',
	testMatch: /.*.spec.ts/,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 13']
			}
		}
	]
};

export default config;
