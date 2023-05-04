<script lang="ts">
	import { CodeSnippet } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const exampleCode = `function helloWorld() {
    alert("Hello, world!");
}`;
	// Silly hack with `</${'script'}>` to stop svelte thinking we've exited the script tag early
	const usage = `<script lang="ts">
	const code = \`function helloWorld() {
    alert("Hello, world!");
}\`;
</${'script'}>

<CodeSnippet {code} />`;
</script>

<ExamplePage title="CodeSnippet" {usage}>
	<CodeSnippet code={exampleCode} />
</ExamplePage>
