import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './playwright_tests',
	testMatch: /.*.spec.ts/,
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 1 : '75%',
	retries: 3,
	reporter: process.env.CI ? [['html'], ['github']] : undefined,
	fullyParallel: true,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: true,
		timeout: 180 * 1000,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 13'],
			},
		},
	],
};

export default config;
