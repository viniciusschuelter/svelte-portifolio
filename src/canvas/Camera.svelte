<script lang="ts">
  import { T } from '@threlte/core';
  
  export let camera: any;

  let rotation = 75;

  function drag(e: any) {
    if (isMiddleMouseDown) {
      rotation += e.movementX
      rotateCamera()
    }
  }
  function rotateCamera() {
    const sensitivity = 100
    const distance = 10
    const pos = [Math.sin(rotation / sensitivity), 1, Math.cos(rotation / sensitivity)].map(comp => comp * distance)
    camera.position.set(...pos)
    camera.lookAt(0, 1, 0)
    camera = camera //force svelte re-render
  }
  let isMiddleMouseDown = false
  function mouseDown(e: any) {
    isMiddleMouseDown = e.button === 1 //1 is middle mouse
  }
  function mouseUp(e: any) {
    isMiddleMouseDown = false
  }
</script>
<svelte:window on:mousedown={mouseDown} on:mouseup={mouseUp} on:mousemove={drag} />

<T.PerspectiveCamera
  makeDefault
  bind:ref={camera}
  on:create={() => {
    rotateCamera()
  }}
/>