<script lang="ts">
	import { Stepper } from '$lib';

	const steps = [
		{ label: 'Step 1' },
		{ label: 'Step 2' },
		{ label: 'Step 3' },
		{ label: 'Step 4' },
	];
	let currentStep = steps[0];
</script>

<Stepper {steps} on:changeStep={(evt) => (currentStep = evt.detail)} />
<div>{currentStep.label}</div>
