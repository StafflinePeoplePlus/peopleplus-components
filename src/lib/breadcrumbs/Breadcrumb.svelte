<li
	class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
>
	<slot />
</li>

<style>
	li::after {
		content: '\203A';
		color: darkgray;
		padding-left: 10px;
	}

	li:last-child::after {
		content: '';
	}

	li:last-child {
		color: dimgray;
	}
</style>
