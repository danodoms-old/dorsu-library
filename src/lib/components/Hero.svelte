<script>
	import { onMount, onDestroy } from 'svelte';

	let slides = ['./lib-1.png', './lib-2.png'];
	let currentIndex = 0;
	let interval;

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
	}

	onMount(() => {
		interval = setInterval(nextSlide, 1000); // Switch slide every 5 seconds
	});

	onDestroy(() => {
		clearInterval(interval); // Clear interval on component destruction to prevent memory leaks
	});
</script>

<div class="hero h-dvh flex flex-wrap gap-4">
	<div
		class="chttps://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/402083149_122093160740126270_8589315013911526851_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFyWsFFSR4CBw3obD26WN8POjC7oXLzh_k6MLuhcvOH-VkTUlEdMxXLTMkbOW2_5Kzw7PD4n0N-4u59CS94q_KU&_nc_ohc=xsj5YBAZrF8Q7kNvgGGUhvY&_nc_ht=scontent.fmnl7-1.fna&oh=00_AfDJ0uyuYykefF0Yoz96gWjPyygWY-ElocLZHXq-f4HeFg&oe=663E8A3Barousel overflow-hidden flex-auto brightness"
	>
		{#each slides as slide, i}
			<div
				class="carousel-item relative w-full overflow-hidden"
				style="display: {i === currentIndex ? 'block' : 'none'}"
			>
				<img src={slide} class="w-full" />
			</div>
		{/each}
	</div>

	<div class="p-4">
		<h1 class="mb-5 text-3xl lg:text-5xl font-bold leading-tight">
			Expand your horizons. <br /> Visit our library today
		</h1>
		<button class="btn btn-primary">Contact Us</button>
	</div>
</div>
