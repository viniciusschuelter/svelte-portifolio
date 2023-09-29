<script lang="ts">
  // import { DecalGeometry } from "three-stdlib";
  import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";
  import { T } from '@threlte/core'
  import * as THREE from 'three'
	import { onMount } from 'svelte';
	// import { useTexture } from "@threlte/extras";

    export let mesh: any;
    export let img: any = null;

    let ref: any;

    let decalMat: any;

    // const textureLoader = new THREE.TextureLoader()
    // const decal = textureLoader.load(img)
    // const texture = useTexture(img);
    
    decalMat = new THREE.MeshNormalMaterial({
      depthWrite: false,
      polygonOffset: true, //Without this the polygons are overlapping the target and causing artifacts
      polygonOffsetFactor: -4,
      normalMap: img,
      transparent: true //if the decal is a png with transparency this is needed
    })

    onMount(() => {
      const position = new THREE.Vector3(0, 0, 1);
      const rotation = new THREE.Euler(2 * Math.PI, 0, 6.25);
      const size = new THREE.Vector3(2, 2, 2);
      decalMat.geometry = new DecalGeometry(mesh, position, rotation, size);
      console.log(decalMat)
    })
    
    function createDecal(ref: any): void {
      // console.log(ref)
      // const position = new THREE.Vector3(0, 0, 1);
      // const rotation = new THREE.Euler(2 * Math.PI, 0, 6.25);
      // const size = new THREE.Vector3(1, 1, 1);
      // ref.geometry = new DecalGeometry(mesh, position, rotation, size);
    }
  </script>


<T.Mesh is={decalMat} />

  <!-- <T.MeshNormalMaterial
    ref={ref}
    flatShading
    depthWrite={false}
    transparent={true}
    polygonOffset={true}
    polygonOffsetFactor={-4}
    normalMap={img}
    on:create={({ ref }) => createDecal(ref)}
/> -->