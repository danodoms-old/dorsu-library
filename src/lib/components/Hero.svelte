<script lang="ts">
	import { MapPin, Clock } from 'lucide-svelte';
	import { fly, fade, slide, draw, scale } from 'svelte/transition';
	import { expoIn, expoInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

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

	let animate = false;

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				animate = true;
			}, 0);
		});
	});
</script>

<div
	class="hero h-dvh flex flex-col gap-8 p-4 justify-center bg-center bg-cover bg-no-repeat background-blend-multiply"
	style="background-image: url('./lib-2-upscaled.png');"
>
	{#if animate}
		<div
			class="flex-initial pt-20 flex-col flex justify-center z-20"
			in:fly={{ y: 100, duration: 1000, easing: expoInOut }}
		>
			<img src="./dorsu-logo.png" class="size-20 mx-auto mb-4" alt="" />

			<h1
				class="text-2xl text-white lg:text-5xl font-bold text-center text-balance leading-tight drop-shadow-lg"
			>
				Davao Oriental State University <br />
				<span class="text-xl lg:text-3xl"> Banaybanay Campus Library </span>
			</h1>
		</div>

		<div
			class="p-6 flex-col gap-4 flex bg-white rounded-lg bg-opacity-90 z-20"
			in:fly={{ y: -100, duration: 1000, delay: 500, easing: expoInOut }}
		>
			<h1 class="text-2xl lg:text-3xl font-bold leading-tight">
				Expand your horizons. Visit our library today
			</h1>
			<div class="flex gap-2">
				<MapPin class="animate-bounce" />
				<p>Banaybanay, Davao Oriental, Philippines</p>
			</div>

			<div class="flex gap-2 outline-1 flex-wrap mb-2">
				<Clock class="my-auto" />
				<p class=" outline-1 my-auto">Library Hours: 8:00 AM - 5:00 PM</p>
				<p class="my-auto">Monday - Friday</p>

				{#if isOpen}
					<p class="font-bold skeleton py-1 px-2 rounded-md bg-yellow-300">NO NOON BREAK</p>
					<p class="font-bold skeleton py-1 px-2 rounded-md">Open Now</p>
				{:else}
					<p class="font-bold skeleton py-1 px-2 rounded-md bg-red-300">Closed Now</p>
				{/if}
			</div>

			<a
				class="btn btn-primary"
				href="https://www.facebook.com/profile.php?id=61553788100562"
				target="_blank">Contact Us</a
			>
		</div>
	{/if}

	<div class="bg-neutral-800 opacity-70 w-full h-full absolute z-0"></div>
</div>
