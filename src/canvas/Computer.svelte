<script lang="ts">
  import {
    GLTF, 
    Float,

  } from '@threlte/extras'
  import { T, useTask } from '@threlte/core'
	import * as THREE from 'three';
  
  let r = 0;

  let rotation: any = new THREE.Euler(r, 0, r, 'XZY')

  useTask((delta) => {
    r += 0.5 * delta;
    rotation  = new THREE.Euler(r, 0, r, 'XZY')
  })
  
  const url = "sci-fi__laptop/scene.gltf"
</script>

<T.DirectionalLight position={[1, 10, -1]}/>
<T.AmbientLight />

<Float rotationIntensity={3}>
  <GLTF url={url} scale={4.5} position={[1, 0, 1]} rotation={[0, 0.3, 0.3]} castShadow/>
</Float>

