<script>
	import Intro from '../components/Intro.svelte';
	import About from '../components/About.svelte';
	import Work from '../components/Work.svelte';
	import Section from '../components/Section.svelte';
	import Scene from '$lib/components/Scene.svelte';
</script>

<svelte:head>
	<title>Svelte Portifolio</title>
	<meta name="description" content="Svelte Portifolio" />
</svelte:head>

<Section Component={About} idName="about"></Section>
<Section Component={Work} idName="work"></Section>

<Scene />
<style>
</style>