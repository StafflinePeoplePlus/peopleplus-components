<script lang="ts">
	export let absolute = false;
</script>

<div
	class="{absolute
		? 'absolute'
		: 'fixed'} bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
>
	<div class="mx-auto grid h-full max-w-lg grid-cols-5">
		<button
			data-tooltip-target="tooltip-home"
			type="button"
			class="group inline-flex flex-col items-center justify-center rounded-l-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
		>
			<svg
				class="mb-1 h-6 w-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
				/>
			</svg>
			<span class="sr-only">Home</span>
		</button>
		<div
			id="tooltip-home"
			role="tooltip"
			class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
		>
			Home
			<div class="tooltip-arrow" data-popper-arrow />
		</div>
		<button
			data-tooltip-target="tooltip-wallet"
			type="button"
			class="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
		>
			<svg
				class="mb-1 h-6 w-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
				/>
			</svg>
			<span class="sr-only">Wallet</span>
		</button>
		<div
			id="tooltip-wallet"
			role="tooltip"
			class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
		>
			Wallet
			<div class="tooltip-arrow" data-popper-arrow />
		</div>
		<div class="flex items-center justify-center">
			<button
				data-tooltip-target="tooltip-new"
				type="button"
				class="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
			>
				<svg
					class="h-6 w-6 text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					/>
				</svg>
				<span class="sr-only">New item</span>
			</button>
		</div>
		<div
			id="tooltip-new"
			role="tooltip"
			class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
		>
			Create new item
			<div class="tooltip-arrow" data-popper-arrow />
		</div>
		<button
			data-tooltip-target="tooltip-settings"
			type="button"
			class="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
		>
			<svg
				class="mb-1 h-6 w-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
				/>
			</svg>
			<span class="sr-only">Settings</span>
		</button>
		<div
			id="tooltip-settings"
			role="tooltip"
			class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
		>
			Settings
			<div class="tooltip-arrow" data-popper-arrow />
		</div>
		<button
			data-tooltip-target="tooltip-profile"
			type="button"
			class="group inline-flex flex-col items-center justify-center rounded-r-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
		>
			<svg
				class="mb-1 h-6 w-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
				/>
			</svg>
			<span class="sr-only">Profile</span>
		</button>
		<div
			id="tooltip-profile"
			role="tooltip"
			class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
		>
			Profile
			<div class="tooltip-arrow" data-popper-arrow />
		</div>
	</div>
</div>
