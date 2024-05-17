<script>
	import { Menu } from 'lucide-svelte';
</script>

<div
	class="navbar bg-white bg-opacity-90 fixed top-0 z-30 outline-1 outline outline-slate-200 backdrop-blur"
>
	<div class="flex-1">
		<img src="./dorsu-logo.png" alt="logo" class="size-10" />
		<a class="btn btn-ghost text-xl hidden md:flex" href="/">
			<div class=" outline-1 outline-secondary text-start flex-col">
				<p class="text-xs outline-1 outline-secondary uppercase font-extrabold p-0 m-0">
					Davao Oriental State University
				</p>
				<p class="text-sm outline-1 outline-secondary uppercase font-bold m-0 p-0">
					Banaybanay Campus Library
				</p>
			</div>
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<div class="hidden lg:flex">
				<li><a href="/">Home</a></li>
				<li><a href="#mission">Mission</a></li>
				<li><a href="#vision">Vision</a></li>
				<!-- <li><a href="#about">About</a></li> -->
			</div>

			<li class="lg:hidden">
				<details>
					<summary> Menu</summary>
					<ul class="p-2 bg-base-100 rounded-t-none z-40">
						<li><a href="/">Home</a></li>
						<li><a href="#mission">Mission</a></li>
						<li><a href="#vision">Vision</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
