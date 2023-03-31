<script>
	import { spring } from 'svelte/motion';
	
	export const from = 0;
	export const to = 20;
	
	let springyRotation = spring(0, {
		stiffness: 0.1,
		damping: 0.15
	});
	
	$: springyRotation.set(0);
	
	$: style = `
        display: flex;
		transform: translateY(${$springyRotation}px) translateZ(0px)
	`;	
</script>

<!-- trigger onclick so demo works on mobile -->
<span style={style}>
	<slot/>
</span>