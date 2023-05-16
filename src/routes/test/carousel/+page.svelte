<script>
	import { Carousel } from '$lib';

	const items = Array.from({ length: 10 }).map((_, i) => `/carousel/${i}.jpg`);
</script>

<Carousel class="gap-2 px-2" {items} let:item>
	<img src={item} width="400" height="400" alt="" class="rounded w-[200px]" />
</Carousel>
