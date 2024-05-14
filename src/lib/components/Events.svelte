<script lang="ts">
	const posts = [
		{
			title: 'First post',
			date: '2022-01-01',
			content: 'This is the first post',
			image: 'https://picsum.photos/200/300'
		}
	];
</script>

<section class="h-dvh flex flex-col gap-4 p-4">
	<h1 class="font-bold text-2xl">Latest Posts</h1>

	<div>
		{#each posts as post}
			<div class="flex flex-col bg-slate-200 rounded-md gap-2 p-4">
				<div>
					<img src={post.image} alt="" class="rounded-md max-size-xs" />
				</div>

				<div>
					<h1 class="font-bold text-xl pb-2">{post.title}</h1>
					<p>{post.content}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
