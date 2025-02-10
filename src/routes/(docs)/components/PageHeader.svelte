<script lang="ts">
	import Typography from '$lib/Typography.svelte';

	interface Props {
		title: string;
		subtitle: string;
	}

	let { title, subtitle }: Props = $props();
</script>

<svelte:head>
	<title>{title} &middot; PeoplePlus Svelte Components</title>
</svelte:head>

<header class="mb-8">
	<Typography variant="main-heading" as="h1">{title}</Typography>
	<Typography variant="body-xl" as="h2" class="mt-3">{subtitle}</Typography>
</header>
