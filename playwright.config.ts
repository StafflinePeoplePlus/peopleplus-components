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
			name: 'a11y',
			use: { ...devices['Desktop Chrome'] },
			testMatch: 'a11y.spec.ts',
		},
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
			testIgnore: 'a11y.spec.ts',
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
			testIgnore: 'a11y.spec.ts',
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
			testIgnore: 'a11y.spec.ts',
		},
		{
			name: 'mobile',
			use: { ...devices['Pixel 7'] },
			testIgnore: 'a11y.spec.ts',
		},
	],
};

export default config;
