<script>
	import { Carousel } from '$lib';

	const items = Array.from({ length: 10 }).map((_, i) => `/carousel/${i}.jpg`);
</script>

<Carousel {items} let:item class="-mx-6 px-6 gap-2">
	<img src={item} width="400" height="400" alt="" class="rounded w-[200px]" />
</Carousel>
