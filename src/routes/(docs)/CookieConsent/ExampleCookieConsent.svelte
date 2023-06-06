<script lang="ts">
	import { CookieConsentBanner, type CookieCategory } from '$lib';

	const categories: CookieCategory[] = [
		{
			name: 'neccesary-consent',
			title: 'Neccesary Cookies',
			body: 'Necessary cookies enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.',
			required: true
		},
		{
			name: 'analytics-consent',
			title: 'Analytics Cookies',
			body: "We'd like to collect website analytics information. We collect on device data about how you interact with our site. The data is collected in a way that does not directly identify anyone. For more information please see our Cookies page.",
			cookies: [
				{
					name: '_fbp',
					provider: 'Facebook',
					purpose: 'Marketing/Tracking',
					expiration: '3 months'
				},
				{
					name: '_ga',
					provider: 'Google Analytics',
					purpose: 'Statistics',
					expiration: '2 years'
				},
				{
					name: '_gid',
					provider: 'Google Analytics',
					purpose: 'Statistics',
					expiration: '1 day'
				}
			]
		}
	];

	let dismissed = false;
</script>

{#if !dismissed}
	<CookieConsentBanner
		class="absolute"
		{categories}
		cookiePolicy="/"
		on:accept={() => {
			alert('Accepted all cookies!');
			dismissed = true;
		}}
		on:reject={() => {
			alert('Rejected all cookies!');
			dismissed = true;
		}}
		on:save={(evt) => {
			alert(`Save cookie consent! - ${JSON.stringify(evt.detail)}`);
			dismissed = true;
		}}
	/>
{/if}
