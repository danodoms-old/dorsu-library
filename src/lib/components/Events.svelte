<script lang="ts">
	const posts = [
		{
			title: 'Newly Acquired Books from Bangko Sentral ng Pilipinas',
			date: '2024-04-19',
			content:
				'Explore our Newly Acquired Books from Bangko Sentral ng Pilipinas, the most recent additions to the DORSU - BC Library Collections. Thank you so much to BSP-KRN for these reading materials. Mabuhay BSP!',
			image: './post-1.jpg'
		}
	];

	import { Facebook, Megaphone } from 'lucide-svelte';
</script>

<section class="h-dvh flex flex-col gap-4 p-4">
	<div class="flex gap-2 mx-auto p-8">
		<h1 class="font-extrabold text-3xl">Latest Posts</h1>
		<Megaphone class="my-auto size-8" />
	</div>

	<div class="flex flex-wrap gap-4 overflow-auto rounded-lg">
		{#each posts as post}
			<div class="flex flex-col w-96 flex-initial bg-slate-200 rounded-md gap-4 p-4">
				<div
					class="bg-slate-300 rounded-md flex place-content-center"
					style="background-image: url({post.image});"
				>
					<img src={post.image} alt="" class="max-size-xs w-40" />
				</div>

				<div>
					<h1 class="font-bold text-xl text-pretty pb-4">{post.title}</h1>
					<p class="text-sm text-justify">{post.content}</p>
				</div>
			</div>
		{/each}

		<div class="flex flex-col w-96 flex-initial bg-slate-200 rounded-md gap-2 p-4">
			<div class="flex place-content-center my-auto">
				<div class="opacity-40">
					<h1 class="font-bold text-xl pb-2">See more posts on</h1>
					<a
						class="cursor-pointer"
						href="https://www.facebook.com/profile.php?id=61553788100562"
						target="_blank"
						><Facebook class="size-32 mx-auto" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
