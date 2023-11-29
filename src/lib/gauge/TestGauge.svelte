<script lang="ts">
	import { Gauge } from '$lib';
	function formatPercentage(value: number) {
		return `${value}%`;
	}

	const value = 90;
</script>

<Gauge {value} start="Start" end="End" min={0} max={100} formatLabel={formatPercentage} />
