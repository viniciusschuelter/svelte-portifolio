<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<nav class="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
		<div class="w-full flex justify-between items-center max-w-7xl mx-auto">
			<a class="flex items-center gap-2" href="/">
				<img class="w-[2rem]" src={logo} alt="SvelteKit" />
				<p class="text-white text-[18px] font-bold cursor-pointer flex">
					Vinicius Shuelter &nbsp;
					<span class="sm:block hidden">| Senior Software Engineer</span>
				</p>
			</a>
			<ul class="list-none hidden sm:flex flex-row gap-10">
				<li class="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
					<a href="#about">About</a>
				</li>
				<li class="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
					<a href="#work">Work</a>
				</li>
				<li class="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div class="sm:hidden flex flex-1 justify-end items-center">
				<img src="/assets/menu-242d80a8.svg" alt="menu" class="w-[28px] h-[28px] object-contain cursor-pointer" />
				<div class="hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
					<ul class="list-none flex justify-end items-start flex-col gap-4">
						<li class="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
							<a href="#about">About</a>
						</li>
						<li class="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
							<a href="#work">Work</a>
						</li>
						<li class="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
</style>
