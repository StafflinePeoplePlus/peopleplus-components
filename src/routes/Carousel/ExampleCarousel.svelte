<script>
	import { Carousel } from '$lib';

	const items = Array.from({ length: 20 }).map(
		(_, i) => `https://picsum.photos/200/200?random=${i}`
	);
</script>

<Carousel {items} let:item class="!-mx-6 !px-6" itemClass="!w-[200px] mr-2">
	<img src={item} width="200" height="200" alt="" class="rounded" />
</Carousel>
