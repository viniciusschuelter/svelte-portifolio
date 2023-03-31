import { spring } from "svelte/motion";


export default function elevator(node: HTMLElement, position= 0): void {
    let tranlateY = spring(0, { damping:0, stiffness: 0.005 });
	$: tranlateY.set(position);
    tranlateY.subscribe((val) => node.style.transform = `translateY(${val}px) `)
}