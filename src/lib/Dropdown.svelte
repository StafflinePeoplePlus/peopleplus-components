<script lang="ts">
	let open = false;
</script>

<div class="inline-block" on:mouseleave={() => (open = false)} role="group">
	<button
		id="dropdownHoverButton"
		class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:mouseenter={() => (open = true)}
		>Dropdown hover <svg
			class="ml-2 h-4 w-4"
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"
			/></svg
		></button
	>
	<!-- Dropdown menu -->
	<div
		id="dropdownHover"
		class="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
		class:hidden={!open}
	>
		<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
			<li>
				<a
					href="/"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Dashboard</a
				>
			</li>
			<li>
				<a
					href="/"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Settings</a
				>
			</li>
			<li>
				<a
					href="/"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Earnings</a
				>
			</li>
			<li>
				<a
					href="/"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Sign out</a
				>
			</li>
		</ul>
	</div>
</div>
