<script lang="ts">
	import { Canvas } from "@threlte/core";
	import { personalInfo } from "../constants/info";
	import elevator from "../utils/elevator";
	import Computer from "../canvas/Computer.svelte";

</script>

<section class="relative w-full h-screen mx-auto">
	<div
		class="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
	>
		<div class="flex flex-col justify-center items-center mt-5">
			<div class="w-5 h-5 rounded-full bg-[#fe5938]" />
			<div class="w-1 sm:h-80 h-40 orange-gradient" />
		</div>
		<div>
			<h1
				class="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white"
			>
				Hey, I'm
				<span class="text-[#fe5938]">{personalInfo.name}</span>
			</h1>
			<p
				class="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100"
			>
				{@html personalInfo.bio}
			</p>
		</div>
	</div>

		<Canvas	>
			<Computer />
		</Canvas>
	<!-- </div> -->

    <div class="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
            <div class="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <dev id="box" use:elevator={15} class="w-3 h-3 rounded-full bg-secondary mb-1"></dev>
            </div>
        </a>
    </div>
</section>

<style>
</style>
