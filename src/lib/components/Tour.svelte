<script lang="ts">
	import { Map } from 'lucide-svelte';

	let currentSlide = 0;
	let slides = ['./lib-1.png', './lib-2.png'];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
</script>

<div class="h-dvh flex flex-col p-4">
	<div class="flex gap-2 mx-auto p-8 pt-4">
		<h1 class="font-extrabold text-3xl">Take a Tour</h1>
		<Map class="my-auto size-8" />
	</div>

	<!-- ---------------------------- -->

	<div class="flex flex-col flex-wrap gap-4">
		<!-- VIDEO -->
		<div class="relative w-full h-0">
			<iframe
				allow="fullscreen"
				allowfullscreen
				src="https://streamable.com/e/rpmp5k?"
				class="absolute inset-0 border-none overflow-hidden"
			></iframe>
		</div>

		<!-- CAROUSEL -->
		<div class="relative overflow-hidden w-full rounded-lg mx-auto flex-auto">
			<div
				class="slides flex transition-transform duration-500 ease-in-out"
				style="transform: translateX({-currentSlide * 100}%)"
			>
				{#each slides as slide}
					<img src={slide} alt="Slide" class="slide w-full h-auto object-contain" />
				{/each}
			</div>
			<button
				on:click={prevSlide}
				class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
			>
				&#10094;
			</button>
			<button
				on:click={nextSlide}
				class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
			>
				&#10095;
			</button>
		</div>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		transition: transform 0.5s ease;
	}
</style>
