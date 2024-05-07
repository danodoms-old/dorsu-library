<script>
	import { Menu } from 'lucide-svelte';
</script>

<div class="navbar bg-base-100 fixed top-0 z-20">
	<div class="flex-1">
		<img
			src="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/326587908_879720266485528_5082257765551372395_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5WewWI18pvxehHtvTmVVa5oAcXauLde7mgBxdq4t17kmIQlxPehl2DBUc55WJuduIBRBZ5uLazoo-ygz4QYz5&_nc_ohc=2McJQpNh3o0Q7kNvgE5ha4A&_nc_ht=scontent-mnl1-2.xx&oh=00_AfAaPzVS-SSbm7LPc4ehplX3yYTJIk0bXnz7bBdTJbjCCg&oe=663E1F38"
			alt=""
			class="size-10"
		/>
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
