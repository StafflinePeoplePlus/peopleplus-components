<svelte:head>
	<title>PeoplePlus Svelte Components</title>
</svelte:head>

<div class="prose prose-red dark:prose-invert">
	<h1>PeoplePlus Svelte Components</h1>
	<p>A collection of high quality, accessible components for Svelte and SvelteKit.</p>
	<h2 id="goals">Goals</h2>
	<ul>
		<li>
			<strong>Accessible by Default</strong>
			<p>
				As much as is technically possible all components should, without specific thought from the
				library consumer, be accessible following the Web Content Accessibility Guidelines.
			</p>
		</li>
		<li>
			<strong>Made for Svelte</strong>
			<p>
				Components and their APIs should be designed for Svelte, and we should take advantage of
				this fact where we can. For example by using stores, actions, etc.
			</p>
		</li>
		<li>
			<strong>Server Rendering & SvelteKit</strong>
			<p>
				All components should be renderable on a server environment such as Cloudflare
				Pages/Workers.
			</p>
		</li>
		<li>
			<strong>Works without JavaScript</strong>
			<p>
				Where possible, all components should work without JavaScript enabled. They may have reduced
				functionality and/or accessiblity when this is the case, but core functionality should still
				be possible.
			</p>
		</li>
		<li>
			<strong>Light & Dark Mode</strong>
			<p>All components should support both light and dark mode via Tailwind.</p>
		</li>
	</ul>
	<h2>Acknowledgments</h2>
	<p>This library builds on top of and/or takes inspiration from the following projects:</p>
	<ul>
		<li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
		<li><a href="https://flowbite.com/">Flowbite</a> - A collection of Tailwind CSS components</li>
		<li>
			<a href="https://captaincodeman.github.io/svelte-headlessui/">svelte-headlessui</a> - Unofficial
			implementation of Tailwind HeadlessUI for svelte
		</li>
	</ul>
</div>
