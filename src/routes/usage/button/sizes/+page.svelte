<script lang="ts">
	import { Button } from '$lib';
</script>

<div class="space-y-2">
	<div class="flex items-center gap-2">
		<Button variant="secondary" size="lg">Large</Button>
		<Button variant="secondary">Default</Button>
		<Button variant="secondary" size="md">Medium</Button>
		<Button variant="secondary" size="sm">Small</Button>
	</div>

	<div class="flex items-center gap-2">
		<Button variant="secondary" shape="square" size="lg">Large</Button>
		<Button variant="secondary" shape="square">Default</Button>
		<Button variant="secondary" shape="square" size="md">Medium</Button>
		<Button variant="secondary" shape="square" size="sm">Small</Button>
	</div>

	<div class="flex items-center gap-2">
		<Button variant="secondary" shape="pill" size="lg">Large</Button>
		<Button variant="secondary" shape="pill">Default</Button>
		<Button variant="secondary" shape="pill" size="md">Medium</Button>
		<Button variant="secondary" shape="pill" size="sm">Small</Button>
	</div>

	<div class="flex items-center gap-2">
		<Button icon variant="secondary" size="lg">
			<span aria-hidden="true">&RightArrow;</span>
			<span class="sr-only">Right</span>
		</Button>
		<Button icon variant="secondary">
			<span aria-hidden="true">&RightArrow;</span>
			<span class="sr-only">Right</span>
		</Button>
		<Button icon variant="secondary" size="md">
			<span aria-hidden="true">&RightArrow;</span>
			<span class="sr-only">Right</span>
		</Button>
		<Button icon variant="secondary" size="sm">
			<span aria-hidden="true">&RightArrow;</span>
			<span class="sr-only">Right</span>
		</Button>
	</div>
</div>
