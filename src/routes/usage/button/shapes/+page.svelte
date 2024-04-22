<script lang="ts">
	import { Button } from '$lib';
</script>

<div class="space-y-2">
	<div class="grid auto-cols-[200px] grid-flow-col items-center gap-2">
		<!-- START USAGE -->
		<Button shape="square">Square</Button>
		<Button>Rounded (default)</Button>
		<Button shape="pill">Pill</Button>
		<!-- END USAGE -->
	</div>

	<div class="grid auto-cols-[200px] grid-flow-col items-center gap-2">
		<Button variant="secondary" shape="square">Square</Button>
		<Button variant="secondary">Rounded (default)</Button>
		<Button variant="secondary" shape="pill">Pill</Button>
	</div>

	<div class="grid auto-cols-[200px] grid-flow-col items-center gap-2">
		<Button icon shape="square" variant="secondary">
			<span aria-hidden="true">&LeftArrow;</span>
			<span class="sr-only">Left</span>
		</Button>
		<Button icon variant="secondary">
			<span aria-hidden="true">&UpArrow;</span>
			<span class="sr-only">Up</span>
		</Button>
		<Button icon shape="pill" variant="secondary">
			<span aria-hidden="true">&RightArrow;</span>
			<span class="sr-only">Right</span>
		</Button>
	</div>
</div>
