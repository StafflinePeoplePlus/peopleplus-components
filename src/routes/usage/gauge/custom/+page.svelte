<script lang="ts">
	import { Gauge } from '$lib';

	function formatSpeed(value: number) {
		return `${value}`;
	}

	const value = 110;
</script>

<!-- START USAGE -->
<Gauge
	{value}
	min={0}
	max={180}
	start="0km/h"
	end="180km/h"
	reverseGradient
	formatLabel={formatSpeed}
/>
<!-- END USAGE -->
