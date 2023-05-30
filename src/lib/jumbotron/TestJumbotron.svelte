<script lang="ts">
	import { BackgroundImage, Button, Jumbotron, Typography } from '$lib';
</script>

<Jumbotron>
	<BackgroundImage src="/jumbotron.jpg" />
	<Typography variant="title-xl" as="h1">This is a title</Typography>
	<Typography variant="subtitle">This is a subtitle</Typography>
	<Button href="https://peopleplus.co.uk">Primary</Button>
	<Button href="https://learningplus.co.uk" variant="secondary">Secondary</Button>
</Jumbotron>
