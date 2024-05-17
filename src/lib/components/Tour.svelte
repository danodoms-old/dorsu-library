<script lang="ts">
	import { text } from '@sveltejs/kit';
	import { Map, SquareLibrary, Star } from 'lucide-svelte';

	let currentSlide = 0;
	let slides = ['./lib-1.png', './lib-2.png'];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
</script>

<div class="h-auto md:h-dvh flex flex-col p-4 outline-1 justify-center gap-4">
	<div class="flex gap-2 mx-auto p-8 pt-4">
		<h1 class="font-extrabold text-3xl">Take a Tour</h1>
		<Map class="my-auto size-8" />
	</div>

	<!-- ---------------------------- -->

	<div class="flex flex-wrap gap-4 outline-1 justify-center">
		<!-- VIDEO -->
		<div class="h-dvh md:h-auto flex-auto rounded-xl bg-black">
			<iframe
				allow="fullscreen"
				allowfullscreen
				src="https://streamable.com/e/rpmp5k?"
				class="h-full w-full overflow-hidden"
			></iframe>
		</div>

		<!-- CAROUSEL -->
		<div class="relative flex-auto md:flex-1 overflow-hidden rounded-lg mx-auto">
			<div
				class="flex transition-transform duration-500 ease-in-out"
				style="transform: translateX({-currentSlide * 100}%)"
			>
				{#each slides as slide}
					<img src={slide} alt="Slide" class="slide h-auto object-cover" />
				{/each}
			</div>
			<button
				on:click={prevSlide}
				class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
			>
				&#10094;
			</button>
			<button
				on:click={nextSlide}
				class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
			>
				&#10095;
			</button>
		</div>
	</div>

	<div class="bg-neurtal-200 rounded-md flex flex-wrap gap-4">
		<p class="text-justify font-light text-lg flex-auto md:flex-1 p-4 bg-neutral-200 rounded-md">
			<SquareLibrary class="mb-2" />Our library provides a wide array of resources to support the
			diverse academic needs of our students. Whether your focus is on science, technology,
			business, humanities, or any other discipline, we have the materials you need to excel in your
			studies.
		</p>

		<p class="text-justify font-light text-lg flex-auto bg-neutral-200 rounded-md p-4 md:flex-1">
			<Star class="mb-2" />
			Our collection includes textbooks, academic journals, and research papers, all available in a quiet,
			friendly environment perfect for studying and research. We invite you to explore and take full
			advantage of our resources to enhance your learning experience.
		</p>
	</div>
</div>

<style>
	.slide {
		transition: transform 0.5s ease;
	}
</style>
