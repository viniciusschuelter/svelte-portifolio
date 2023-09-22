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
