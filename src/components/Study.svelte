<script lang="ts">
	import { personalInfo, studyProjects } from '../constants/info';
	import { fadeIn, textVariant } from '../utils/motion';
	import tilt from '../utils/tilt';
	import github from '../lib/images/github.svg';

	const initialSettings = { scale: 1.05, reverse: false };
</script>

<div use:textVariant style="opacity: 1; transform: none;">
	<p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My study</p>
	<h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
		Projects.
	</h2>
</div>
<p
	use:fadeIn
	class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
	style="opacity: 1; transform: none"
>
	{@html personalInfo.studyOverview}
</p>
<div class="mt-20 flex flex-wrap gap-7">
	{#each studyProjects as project}
		<div>
			<div class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" use:tilt={initialSettings}>
				<div class="relative w-full h-[230px]">
					<img
						src={project.image}
						alt="project_image"
						class="w-full h-full object-cover rounded-2xl"
					/>

					<div class="absolute inset-0 flex justify-end m-3 card-img_hover">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:click={() => window.open(project.projectLink, '_blank')}
							class="gray-bg-opacity w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img src={github} alt="source code" class="w-1/2 h-1/2 object-contain" />
						</div>
					</div>
				</div>

				<div class="mt-5">
					<h3 class="text-white font-bold text-[24px]">{project.name}</h3>
					<p class="mt-2 text-secondary text-[14px]">{project.description}</p>
				</div>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each project.tags as tag, index}
						<p key={`${project.name}-${tag.name}`} class={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
