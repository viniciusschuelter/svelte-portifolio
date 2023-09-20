<script lang="ts">
	import { textVariant } from '../utils/motion';
	import { Motion } from 'svelte-motion';
	import tilt from '../utils/tilt';
	import { mainlySkills, personalInfo } from '../constants/info';

	const initialSettings = { scale: 1.1, reverse: false };
	
</script>

<section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
	<span class="hash-span" id="about">&nbsp;</span>
    <Motion variants={textVariant(5)} let:motion>
        <div use:motion>
            <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
            <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Overview.
            </h2>
        </div>
    </Motion>
	<p
		class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
		style="opacity: 1; transform: none"
	>
		{@html personalInfo.overview}
	</p>
	<div class="mt-20 flex flex-wrap gap-10">
		{#each mainlySkills as skill}
			<div class="xs:w-[250px]" use:tilt={initialSettings}>
				<div
					class="w-full orange-pink-gradient p-[1px] rounded-[20px] shadow-card"
					style="opacity: 1; transform: none"
				>
					<div
						class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
					>
						<!-- <img src="/assets/web-0d05165f.png" alt="Web Developer" class="w-16 h-16 object-contain" /> -->
						<h3 class="text-white text-[20px] font-bold text-center">{skill.name}</h3>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
</style>
