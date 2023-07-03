<script lang="ts">
	import { Carousel } from '$lib';

	const items = Array.from({ length: 10 }).map((_, i) => `/carousel/${i}.jpg`);
</script>

<Carousel class="-mx-6" listClass="gap-2 px-6" {items} let:item>
	<img src={item} width="400" height="400" alt="" class="w-[200px] rounded" />
</Carousel>
