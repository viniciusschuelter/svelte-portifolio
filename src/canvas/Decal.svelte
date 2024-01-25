<script lang="ts">
  import { DecalGeometry } from 'three-stdlib'
  import { T } from '@threlte/core'
  import * as THREE from 'three'
	import { onMount } from 'svelte';

    export let mesh: any;
    export let img: any = null;

    let ref: any;

    let decalMat: any;

    const textureLoader = new THREE.TextureLoader()
    const decal = textureLoader.load('/favicon.png')

    decalMat = new THREE.MeshPhongMaterial({
      depthWrite: false,
      depthTest: false,
      polygonOffset: true,
      polygonOffsetFactor: -10,
      map: img,
      transparent: true,
      flatShading: true
    })

    onMount(() => {
      const position = new THREE.Vector3(0, 0, 1);
      const rotation = new THREE.Euler(2 * Math.PI, 0, 6.25);
      const size = new THREE.Vector3(1, 1, 1);
      decalMat.geometry = new THREE.Mesh(new DecalGeometry(mesh, position, rotation, size), decalMat.clone())
    })
  </script>


<T.Mesh is={decalMat} />
