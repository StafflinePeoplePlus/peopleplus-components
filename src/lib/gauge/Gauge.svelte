<script lang="ts">
	import { actions, type UseActions } from '../actions';
	import { twMerge } from 'tailwind-merge';

	export let className: string | undefined = undefined;
	export let use: UseActions = [];
	export let percentage: number | 0;
	export let leftText: string;
	export let rightText: string;

	const max = 100;
	const min = 0;
	const range = max - min;
	const gaugeAngle = 180;

	$: percent = (percentage - min) / range;
	$: needleAngle = gaugeAngle * percent - gaugeAngle / 2;
</script>

<div class={twMerge('-mb-10 h-52 w-52', className)}>
	<svg use:actions={use} {...$$restProps} viewBox="0 0 100 100">
		<defs>
			<linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:#ff0000;" />
				<stop offset="50%" style="stop-color:#ffff00;" />
				<stop offset="100%" style="stop-color:#0de50d;" />
			</linearGradient>
		</defs>
		<path
			d="M 10,50 A 40,40 0 0 1 90,50"
			fill="none"
			stroke="url(#gaugeGradient)"
			stroke-width="12%"
			stroke-linecap="round"
		/>
		<g
			class="transition-transform duration-300 ease-in-out"
			style="transform: rotate({needleAngle}deg); transform-origin: 50% 50%;"
		>
			<line
				x1="50%"
				y1="22%"
				x2="50%"
				y2="18%"
				class="stroke-slate-900"
				stroke-width="1.5%"
				stroke-linecap="round"
			/>

			<circle
				cx="50%"
				cy="10%"
				r="7%"
				stroke="#718096"
				stroke-width="2%"
				class="fill-white/60 stroke-slate-900"
			/>
		</g>

		<text
			x="50%"
			y="52.5%"
			font-size="135%"
			class="bg-slate-900 place-self-center"
			class:text-lg={percentage === 100}
			text-anchor="middle"
		>
			{percentage}%
		</text>

		<text x="0%" y="65%" font-size="40%" class="text-gray-700" text-anchor="start">
			{leftText}
		</text>

		<text x="100%" y="65%" font-size="40%" class="text-gray-700" text-anchor="end">
			{rightText}
		</text>
	</svg>
</div>
