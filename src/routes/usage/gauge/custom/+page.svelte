<script lang="ts">
	import { Gauge } from '$lib';
</script>

<!-- START USAGE -->
<Gauge
	value={110}
	min={0}
	max={180}
	start="0km/h"
	end="180km/h"
	reverseGradient
	isPercentage={false}
/>
<!-- END USAGE -->
