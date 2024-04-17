<script lang="ts">
	import { Button } from '$lib';
</script>

<div class="flex items-center gap-2">
	<!-- START USAGE -->
	<Button icon>
		<span aria-hidden="true">&LeftArrow;</span>
		<span class="sr-only">Left</span>
	</Button>
	<Button icon variant="borderless">
		<span aria-hidden="true">&UpArrow;</span>
		<span class="sr-only">Up</span>
	</Button>
	<Button icon variant="secondary">
		<span aria-hidden="true">&RightArrow;</span>
		<span class="sr-only">Right</span>
	</Button>
	<Button icon="md" variant="secondary">
		<span aria-hidden="true">&RightArrow;</span>
		<span class="sr-only">Right</span>
	</Button>
	<Button icon="sm" variant="secondary">
		<span aria-hidden="true">&RightArrow;</span>
		<span class="sr-only">Right</span>
	</Button>
	<!-- END USAGE -->
</div>
