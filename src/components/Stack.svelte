<script lang='ts'>
	import { Canvas } from "@threlte/core";
	import Ball from "../canvas/Ball.svelte";
	import { stacks } from "../constants/info";


</script>

<div class='flex flex-row flex-wrap justify-center gap-10'>
  {#each stacks as stack}
    <div class='w-28 h-28'>
      <Canvas>
        <Ball decal={stack.icon}/>
      </Canvas>
    </div>
  {/each}
</div>