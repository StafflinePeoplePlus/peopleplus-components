export type CookieStrings = {
	viewCookies: string;
	name: string;
	provider: string;
	expiry: string;
	purpose: string;
	tableCaption: string;
	manageCookies: string;
	cookiesDescription: string;
	saveChanges: string;
	cookieConsent: string;
	acceptAll: string;
	acceptAllCookies: string;
	rejectAll: string;
	rejectAllCookies: string;
	cancel: string;
	customise: string;
	customiseCookies: string;
	saveAndClose: string;
};
export const cookieStrings = {
	en: {
		viewCookies: 'View Cookies',
		name: 'Name',
		provider: 'Provider',
		expiry: 'Expiry',
		purpose: 'Purpose',
		tableCaption: 'List of cookies and their purpose.',
		manageCookies: 'Manage Cookies',
		cookiesDescription:
			"We use necessary cookies to make our site work. We'd also like to set analytics cookies that help us make improvements by measuring how you use the site. These will be set only if you accept.",
		saveChanges: 'Save changes',
		cookieConsent: 'Cookie Consent',
		acceptAll: 'Accept all',
		acceptAllCookies: 'Accept all cookies',
		rejectAll: 'Reject all',
		rejectAllCookies: 'Reject all cookies',
		cancel: 'Cancel',
		customise: 'Customise',
		customiseCookies: 'Customise cookies',
		saveAndClose: 'Save and close',
	},
} satisfies Record<string, CookieStrings>;
export const defaultCookieStrings = cookieStrings['en'];
