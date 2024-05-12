<script>
	import { Menu } from 'lucide-svelte';
</script>

<div class="navbar bg-base-100 fixed top-0 z-20">
	<div class="flex-1">
		<img src="./dorsu-logo.png" alt="" class="size-10" />
		<a class="btn btn-ghost text-xl hidden lg:flex">Davao Oriental State University</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<div class="hidden lg:flex">
				<li><a href="/">Home</a></li>
				<li><a href="#mission">Mission</a></li>
				<li><a href="#vision">Vision</a></li>
				<li><a href="#about">About</a></li>
			</div>

			<li class="lg:hidden">
				<details>
					<summary> Menu</summary>
					<ul class="p-2 bg-base-100 rounded-t-none">
						<li><a>Home</a></li>
						<li><a>Mission</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
