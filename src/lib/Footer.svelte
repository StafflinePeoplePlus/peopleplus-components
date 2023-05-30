<script lang="ts">
	let className = '';
	export { className as class };
</script>

<footer class="rounded-lg bg-white shadow dark:bg-gray-800 {className}">
	<div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
			© 2023
			<a href="https://peopleplus.co.uk/" class="hover:underline"> PeoplePlus™ </a>
			. All Rights Reserved.
		</span>
		<ul
			class="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<li>
				<a href="/" class="mr-4 hover:underline md:mr-6">About</a>
			</li>
			<li>
				<a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
			</li>
			<li>
				<a href="/" class="mr-4 hover:underline md:mr-6">Licensing</a>
			</li>
			<li>
				<a href="/" class="hover:underline">Contact</a>
			</li>
		</ul>
	</div>
</footer>
