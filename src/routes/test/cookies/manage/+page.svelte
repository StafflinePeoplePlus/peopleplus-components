<script lang="ts">
	import { CookieConsentManagement } from '$lib';
	import { categories } from '../categories';
</script>

<CookieConsentManagement {categories} consent={{ 'category-2': true }} />
