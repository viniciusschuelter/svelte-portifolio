<script lang="ts">
    import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
    import { T } from '@threlte/core'
    import * as THREE from 'three'

    export let mesh: any;

    const textureLoader = new THREE.TextureLoader()
    const decal = textureLoader.load('/favicon.png')
    const decalMat = new THREE.MeshPhongMaterial({
      depthWrite: false,
      polygonOffset: true, //Without this the polygons are overlapping the target and causing artifacts
      polygonOffsetFactor: -4,
      map: decal,
      transparent: true //if the decal is a png with transparency this is needed
    })

    export function addDecal(position: any, rotation: any;) {
      const material = decalMat.clone()
      const size = new THREE.Vector3(1, 1, 1)
      const m = new THREE.Mesh(new DecalGeometry(mesh, position, rotation, size), material)
      m.renderOrder = decals.length // give decals a fixed render order
      decals = decals.concat([m])
    }

    let decals: any[] = []
  </script>
  {#each decals as decal}
    <T.Mesh is={decal} />
  {/each}