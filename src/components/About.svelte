<script lang="ts">
	import tilt from '../utils/tilt';
	import { mainlySkills, personalInfo } from '../constants/info';
	import { textVariant, fadeIn } from '../utils/motion';

	const initialSettings = { scale: 1.2, reverse: false };

	function fadeInSkill(index: number): any {
		return ['right', index * 0.5, 0.75 ] 
	}
</script>

<div use:textVariant>
	<p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
	<h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
		Overview.
	</h2>
</div>
<p
	use:fadeIn
	class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
	style="opacity: 1; transform: none"
>
	{@html personalInfo.overview}
</p>
<div class="mt-20 flex flex-wrap gap-10">
	{#each mainlySkills as skill, index}
		<div class="xs:w-[250px]" use:tilt={initialSettings}>
			<div
				use:fadeIn={index * 0.5}
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

<style>
</style>
