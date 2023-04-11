<script lang="ts">
	import { Motion } from 'svelte-motion';

	//     const staggerContainer = (staggerChildren, delayChildren) => {
	//   return {
	//     hidden: {},
	//     show: {
	//       transition: {
	//         staggerChildren: staggerChildren,
	//         delayChildren: delayChildren || 0,
	//       },
	//     },
	//   };
	// }
</script>

<Motion let:motion>
	<section
		use:motion
		class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
	>
		<!-- <span class='hash-span' id={idName}>
        &nbsp;
    </span> -->

		<slot />
	</section>
</Motion>
