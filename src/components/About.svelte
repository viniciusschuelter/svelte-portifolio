<script lang="ts">
	import tilt from '../utils/tilt';

	const initialSettings = { scale: 1.1, reverse: false };
</script>

<section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
	<span class="hash-span" id="about">&nbsp;</span>
	<div style="opacity: 1; transform: none">
		<p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
		<h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
			Overview.
		</h2>
	</div>
	<p
		class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
		style="opacity: 1; transform: none"
	>
		I'm a skilled software developer with experience building web applications. I specialize in
		Angular and have professional experience working with Typescript, RxJs, NgRx, Css and Html. I
		also have knowledge to work with Vue, React, or any framework JS based. I'm a quick learner and
		collaborate closely with clients to create efficient, scalable, and user-friendly solutions that
		solve real-world problems.
	</p>
	<div class="mt-20 flex flex-wrap gap-10">
		<div class="xs:w-[250px]" use:tilt={initialSettings}>
			<div
				class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
				style="opacity: 1; transform: none"
			>
				<div
					class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<!-- <img src="/assets/web-0d05165f.png" alt="Web Developer" class="w-16 h-16 object-contain" /> -->
					<h3 class="text-white text-[20px] font-bold text-center">Frontend Developer</h3>
				</div>
			</div>
		</div>
		<div class="xs:w-[250px]" use:tilt={initialSettings}>
			<div
				class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
				style="opacity: 1; transform: none"
			>
				<div
					class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<!-- <img
                        src="/assets/mobile-896ef2f5.png"
                        alt="React Native Developer"
                        class="w-16 h-16 object-contain"
                    /> -->
					<h3 class="text-white text-[20px] font-bold text-center">Angular Specialist</h3>
				</div>
			</div>
		</div>
		<div class="xs:w-[250px]" use:tilt={initialSettings}>
			<div
				class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
				style="opacity: 1; transform: none"
			>
				<div
					class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<!-- <img src="/assets/backend-565fc01f.png" alt="Backend Developer" class="w-16 h-16 object-contain" /> -->
					<h3 class="text-white text-[20px] font-bold text-center">Backend Developer</h3>
				</div>
			</div>
		</div>
		<div class="xs:w-[250px]" use:tilt={initialSettings}>
			<div
				class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
				style="opacity: 1; transform: none"
			>
				<div
					class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<!-- <img src="/assets/creator-dbbffaec.png" alt="Content Creator" class="w-16 h-16 object-contain" /> -->
					<h3 class="text-white text-[20px] font-bold text-center">Frameworks Javascript</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
