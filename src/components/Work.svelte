<script lang="ts">
	import { workExperiences } from "../constants/info";
	import { fadeIn, textVariant, zoomIn } from "../utils/motion";

</script>

<div use:textVariant style="opacity: 1; transform: none;">
	<p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
		What I have done so far
	</p>
	<h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
		Work Experience.
	</h2>
</div>
<div class="mt-20 flex flex-col">
	<div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
		{#each workExperiences as experience}	
			<div use:fadeIn id="" class="vertical-timeline-element">
				<span
					use:zoomIn={0.1}
					class="vertical-timeline-element-icon"
					style="background: rgb(230, 222, 221);"
					>
					<div class="flex justify-center items-center w-full h-full">
						<img src="{experience.img}" class="rounded-full object-contain" />
					</div>
				</span>
				<div
					class="vertical-timeline-element-content"
					style="background: rgb(29, 24, 54); color: rgb(255, 255, 255);"
				>
					<div
						class="vertical-timeline-element-content-arrow"
						style="border-right: 7px solid rgb(35, 38, 49);"
					/>
					<div>
						<h3 class="text-white text-[24px] font-bold">{ experience.title }</h3>
						<p class="text-secondary text-[16px] font-semibold" style="margin: 0px;">{ experience.companyName }</p>
					</div>
					<ul class="mt-5 list-disc ml-5 space-y-2">
						{#each experience.points as point}	
							<li class="text-white-100 text-[14px] pl-1 tracking-wider">
								{ point }
							</li>
						{/each}
					</ul>
					<span use:fadeIn={0.75} class="vertical-timeline-element-date">{ experience.date }</span>
				</div>
			</div>
		{/each}
	</div>
</div>
