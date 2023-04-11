<script>
	import Intro from '../components/Intro.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import About from '../components/About.svelte';
	import Work from '../components/Work.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Intro />
<About />
<Work />

<style>
</style>
