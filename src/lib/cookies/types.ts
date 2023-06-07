export type CookieDescription = {
	name: string;
	provider: string;
	purpose: string;
	expiration: string;
};

export type CookieCategory = {
	title: string;
	body: string;
	name: string;
	required?: boolean;
	cookies?: CookieDescription[];
};
