<script lang="ts">
  import {
    GLTF, 
    Float,

  } from '@threlte/extras'
  import { T, useFrame } from '@threlte/core'
	import * as THREE from 'three';
  
  let r = 0;

  let rotation: any = new THREE.Euler(r, 0, r, 'XZY')

  useFrame((_, delta) => {
    r += 0.5 * delta;
    rotation  = new THREE.Euler(r, 0, r, 'XZY')
  })
  
  const url = "static/computer_and_laptop/scene.gltf"
</script>

<T.DirectionalLight position={{ x: 1, y: 10, z: -1 }}/>
<T.AmbientLight />

<Float rotationIntensity={3}>
  <GLTF url="sci-fi__laptop/scene.gltf" scale={4} castShadow/>
</Float>

