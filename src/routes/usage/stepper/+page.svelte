<script lang="ts">
	import { Stepper } from '$lib';

	const steps = [
		{ label: 'Step 1' },
		{ label: 'Step 2' },
		{ label: 'Step 3' },
		{ label: 'Step 4' },
	];
	let currentStep = $state(steps[0]);
</script>

<Stepper {steps} onStepChange={(evt) => (currentStep = evt)} />
<div>{currentStep.label}</div>
