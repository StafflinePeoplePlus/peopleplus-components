<script lang="ts">
	import { BackgroundImage, Button, Jumbotron, Typography } from '$lib';
</script>

<Jumbotron>
	<BackgroundImage src="/jumbotron.jpg" />
	<Typography variant="heading" as="h1">This is a title</Typography>
	<Typography variant="sub-heading">This is a subtitle</Typography>
	<Button href="https://peopleplus.co.uk">Primary</Button>
	<Button href="https://learningplus.co.uk" variant="secondary">Secondary</Button>
</Jumbotron>
