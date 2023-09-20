<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { personalInfo } from '../constants/info';
	import { navLinks } from '../constants/general';
</script>

<header>
	<nav class="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
		<div class="w-full flex justify-between items-center max-w-7xl mx-auto">
			<a class="flex items-center gap-2" href="/">
				<img class="w-[2rem]" src={logo} alt="SvelteKit" />
				<p class="text-white text-[18px] font-bold cursor-pointer flex">
					{ personalInfo.fullName } &nbsp;
					<span class="sm:block hidden">| { personalInfo.occupation }</span>
				</p>
			</a>
			<ul class="list-none hidden sm:flex flex-row gap-10">
				{#each navLinks as link}
					<li class="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
						<a href="#{link.id}">{ link.title }</a>
					</li>
				{/each}
			</ul>
			<div class="sm:hidden flex flex-1 justify-end items-center">
				<img src="/assets/menu-242d80a8.svg" alt="menu" class="w-[28px] h-[28px] object-contain cursor-pointer" />
				<div class="hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
					<ul class="list-none flex justify-end items-start flex-col gap-4">
						{#each navLinks as link}
							<li class="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
								<a href="#{link.id}">{ link.title }</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
