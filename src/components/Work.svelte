<script lang="ts">
	import { workExperiences } from "../constants/info";

</script>

<div style="opacity: 1; transform: none;">
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
			<div id="" class="vertical-timeline-element">
				<span
					class="vertical-timeline-element-icon bounce-in"
					style="background: rgb(230, 222, 221);"
					><div class="flex justify-center items-center w-full h-full">
						<img src="/assets/meta-e386841a.png" class="w-[60%] h-[60%] object-contain" />
					</div></span
				>
				<div
					class="vertical-timeline-element-content bounce-in"
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
					<span class="vertical-timeline-element-date">{ experience.date }</span>
				</div>
			</div>
		{/each}
	</div>
</div>
