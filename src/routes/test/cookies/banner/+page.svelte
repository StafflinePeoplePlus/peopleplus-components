<script lang="ts">
	import { CookieConsentBanner } from '$lib';
	import { categories } from '../categories';
</script>

<CookieConsentBanner {categories} consent={{ 'category-2': true }} />
