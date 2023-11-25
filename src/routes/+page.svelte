<script>
	import About from '../components/About.svelte';
	import Work from '../components/Work.svelte';
	import Section from '../components/Section.svelte';
	import Stack from '../components/Stack.svelte';
	import Project from '../components/Project.svelte';
</script>

<svelte:head>
	<title>Svelte Portifolio</title>
	<meta name="description" content="Svelte Portifolio" />
</svelte:head>

<Section Component={About} idName="about"></Section>
<Section Component={Work} idName="work"></Section>
<Stack />
<Section Component={Project} idName="project"></Section>

<style>
</style>