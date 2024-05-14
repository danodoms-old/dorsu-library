<script lang="ts">
	import { MapPin, Clock } from 'lucide-svelte';

	// Function to determine if the current time is within range
	function isTimeInRange(start: string, end: string): boolean {
		const now = new Date();
		const currentMinutes = now.getHours() * 60 + now.getMinutes();

		const [startHours, startMinutes] = start.split(':').map(Number);
		const [endHours, endMinutes] = end.split(':').map(Number);

		const startTotalMinutes = startHours * 60 + startMinutes;
		const endTotalMinutes = endHours * 60 + endMinutes;

		if (startTotalMinutes <= endTotalMinutes) {
			// Range does not span midnight
			return currentMinutes >= startTotalMinutes && currentMinutes < endTotalMinutes;
		} else {
			// Range spans midnight
			return currentMinutes >= startTotalMinutes || currentMinutes < endTotalMinutes;
		}
	}

	// Function to check if the current day is a weekday
	function isWeekday(): boolean {
		const day = new Date().getDay();
		return day !== 0 && day !== 6; // 0 is Sunday and 6 is Saturday
	}

	// Determine if the place is open
	let isOpen = isWeekday() && isTimeInRange('08:00', '17:00');
</script>

<div
	class="hero h-dvh flex flex-col gap-4 p-4 justify-center pt-20 bg-[url('./lib-2-upscaled.jpg')] bg-center bg-cover bg-no-repeat background-blend-multiply"
>
	<!-- CAROUSEL -->
	<!-- <div class="carousel rounded-box flex-auto w-1/2 h-1/2">
		<div class="carousel-item">
			<img src="./lib-2.png" class="" />
		</div>
		<div class="carousel-item">
			<img src="./lib-1.png" class="" />
		</div>
	</div> -->

	<div class="flex-1 flex-col flex justify-center">
		<img src="./dorsu-logo.png" class="size-20 mx-auto mb-4" alt="" />
		<h1
			class="text-2xl text-white lg:text-5xl font-bold text-center text-balance leading-tight drop-shadow-lg"
		>
			Davao Oriental State University <span> Banaybanay Campus Library </span>
		</h1>
	</div>

	<div class="p-4 flex-col gap-4 flex bg-white rounded-md bg-opacity-90">
		<h1 class="text-2xl lg:text-3xl font-bold leading-tight">
			Expand your horizons. Visit our library today
		</h1>
		<div class="flex gap-2">
			<MapPin class="animate-bounce" />
			<p>Banaybanay, Davao Oriental, Philippines</p>
		</div>

		<div class="flex gap-2 outline-1 flex-wrap">
			<Clock class="my-auto" />
			<p class=" outline-1 my-auto">Library Hours: 8:00 AM - 5:00 PM</p>

			{#if isOpen}
				<p class="font-bold skeleton py-1 px-2 rounded-md bg-yellow-300">NO NOON BREAK</p>
				<p class="font-bold skeleton py-1 px-2 rounded-md">Open Now</p>
			{:else}
				<p class="font-bold skeleton py-1 px-2 rounded-md bg-red-300">Closed Now</p>
			{/if}
		</div>

		<button class="btn btn-primary">Contact Us</button>
	</div>
</div>
