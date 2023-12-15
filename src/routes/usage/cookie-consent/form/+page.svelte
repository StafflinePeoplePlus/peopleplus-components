<script lang="ts">
	import { Card, CookieConsentManagement, type CookieCategory } from '$lib';

	const categories: CookieCategory[] = [
		{
			name: 'neccesary',
			title: 'Neccesary Cookies',
			body: 'Necessary cookies enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.',
			required: true,
		},
		{
			name: 'analytics',
			title: 'Analytics Cookies',
			body: "We'd like to collect website analytics information. We collect on device data about how you interact with our site. The data is collected in a way that does not directly identify anyone. For more information please see our Cookies page.",
			cookies: [
				{
					name: '_fbp',
					provider: 'Facebook',
					purpose: 'Marketing/Tracking',
					expiration: '3 months',
				},
				{
					name: '_ga',
					provider: 'Google Analytics',
					purpose: 'Statistics',
					expiration: '2 years',
				},
				{
					name: '_gid',
					provider: 'Google Analytics',
					purpose: 'Statistics',
					expiration: '1 day',
				},
			],
		},
	];

	let consent = {};
</script>

<!-- START USAGE -->
<Card class="mt-4 max-w-prose p-6">
	<CookieConsentManagement {categories} bind:consent />
</Card>
<!-- END USAGE -->
