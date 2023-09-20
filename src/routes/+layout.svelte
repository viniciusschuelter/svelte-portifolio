<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
  	import '../app.css';
	import Intro from '../components/Intro.svelte';
</script>

<div class="relative z-0 bg-primary">
	<div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
		<Header />
		<Intro />
	</div>

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
