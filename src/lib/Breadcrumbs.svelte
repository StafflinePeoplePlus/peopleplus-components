<nav
	class="justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
	aria-label="Breadcrumb"
>
	<ol class="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
		<li>
			<div class="flex items-center">
				<a
					href="/"
					class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
				>
					test.com
				</a>
			</div>
		</li>
		<li aria-current="page">
			<div class="flex items-center">
				<svg
					aria-hidden="true"
					class="w-6 h-6 text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				<a
					href="/"
					class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
					>develop</a
				>
			</div>
		</li>
		<li aria-current="page">
			<div class="flex items-center">
				<svg
					aria-hidden="true"
					class="w-6 h-6 text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="mx-1 text-sm font-medium text-gray-500 md:mx-2 dark:text-gray-400"
					>Fix #6597</span
				><span
					class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden sm:flex"
					>v2.0</span
				>
			</div>
		</li>
	</ol>
	<div>
		<button
			id="dropdownDefault"
			data-dropdown-toggle="dropdown"
			class="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700"
			><svg
				class="w-3 h-3 mr-1"
				aria-hidden="true"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				><path
					d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zM80 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"
				/></svg
			>Fix #6597<svg
				class="w-4 h-4 ml-1"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></button
		>
		<div
			id="dropdown"
			class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
		>
			<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
				<li>
					<a
						href="/"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>New branch</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Rename</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Delete</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
