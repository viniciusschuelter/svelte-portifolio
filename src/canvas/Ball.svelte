<script lang="ts">
    import { forwardEventHandlers, T, useThrelte } from '@threlte/core';
    import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";
	import { useTexture, Float } from '@threlte/extras';
    import * as THREE from "three";
    import Decal  from './Decal.svelte'

    export let decal: any = null;
    let mesh: any;
    let material: any;

    const texture = useTexture(decal);

</script>


<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <T.AmbientLight intensity={0.25} />
    <T.DirectionalLight position={[0, 0, 0.05]} />
    <T.Mesh castShadow receiveShadow scale={2.75} 
    on:create={({ ref }) => {
        mesh = ref;
    }}>
        <T.IcosahedronGeometry args={[1, 1]} />
        <T.MeshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        {#await texture then img}
            <Decal {mesh} {img} />
        {/await}
    </T.Mesh>
</Float>