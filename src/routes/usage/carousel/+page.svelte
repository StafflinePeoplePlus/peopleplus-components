<script lang="ts">
	import { Carousel } from '$lib';

	const items = Array.from({ length: 10 }).map((_, i) => `/carousel/${i}.jpg`);
</script>

<!-- START USAGE -->
<Carousel class="-mx-8" listClass="gap-2 px-8" {items} let:item>
	<img src={item} width="400" height="400" alt="" class="w-[200px] rounded" />
</Carousel>
<!-- END USAGE -->
