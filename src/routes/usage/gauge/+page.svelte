<script lang="ts">
	import { Gauge } from '$lib';
	function formatPercentage(value: number) {
		return `${value}%`;
	}

	const value = 80;
</script>

<!-- START USAGE -->
<Gauge {value} start="Start" end="Complete" min={0} max={100} formatLabel={formatPercentage} />
<!-- END USAGE -->
