<svelte:head>
	<title>Implementation Guidelines &middot; PeoplePlus Svelte Components</title>
</svelte:head>

<div class="prose prose-red dark:prose-invert">
	<h1>Implementation Guidelines</h1>
	<p class="lead">
		Below are some guidelines that components in this library should follow. Use this document to
		help guide the design of the component APIs and their behaviour.
	</p>
	<p>
		The following principles apply to writing components for this component library. Some of the
		guidelines here may not apply or make sense in an application context.
	</p>
	<div>
		<h3>Keep project goals in mind</h3>
		<p>
			Ensure all contributions consider the goals of the project layed out on the <a href="/#goals"
				>homepage</a
			>
			including following
			<a href="https://www.w3.org/WAI/standards-guidelines/">accesibility guidelines</a>.
		</p>
	</div>
	<div>
		<h3>Prefer slots over properties</h3>
		<p>
			Where a property will just be rendered into the DOM, prefer to provide it via slots instead of
			props.
		</p>
		<h4>Example</h4>
		<p>Prefer this:</p>
		<pre>{'<InputLabel>My input label</InputLabel>'}</pre>
		<p>Over this:</p>
		<pre>{'<InputLabel text="My input label" />'}</pre>
		<h4>Rationale</h4>
		<p>Slots allow for more than just text, for example icons, bold & italics, links.</p>
	</div>
	<div>
		<h3>Prefer components over multiple properties</h3>
		<p>
			Where there are multiple properties referring to one aspect of the component, prefer to
			separate that section out into a component that can then be provided by a slot.
		</p>
		<h4>Example</h4>
		<p>Prefer this:</p>
		<pre>{'<Navbar><NavBarTitle href="/">PeoplePlus</NavBarTitle></Navbar>'}</pre>
		<p>Over this:</p>
		<pre>{'<Navbar title="PeoplePlus" titleHref="/" />'}</pre>
		<h4>Rationale</h4>
		<p>
			Along with the benefits provided by using a slot over a property for the text content, this
			also groups related properties, and makes it easier to expose many properties and events
			without needing to prefix them all, or even using `$$restProps`.
		</p>
	</div>
</div>
