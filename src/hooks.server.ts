import { sequence } from '@sveltejs/kit/hooks';

const headers = async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
	return response;
};

export const handle = sequence(headers);
