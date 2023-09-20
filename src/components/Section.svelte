<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { staggerContainer } from '../utils/motion';

	export let Component: any;
	export let idName: string;
</script>

<Motion initial={false} whileFocus='visible' variants={staggerContainer(5, 5)} let:motion>
	<section
		use:motion
		class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
	>
		<span class='hash-span' id={idName}> &nbsp;</span>
		<Component />
	</section>
</Motion>
