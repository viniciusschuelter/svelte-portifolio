<script lang="ts">

	export let Component: any;
	export let idName: string;


</script>

<!-- <Motion initial='visible' variants={staggerContainer()} let:motion> -->
	<section
		class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
	>
		<span class='hash-span' id={idName}> &nbsp;</span>
		<svelte:component this={Component} />
	</section>
<!-- </Motion> -->
