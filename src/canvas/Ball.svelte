<script lang="ts">
    import { forwardEventHandlers, T, useThrelte } from '@threlte/core'
	import { useTexture } from '@threlte/extras';

    export let decal: any = null;

    $:texture = useTexture(decal);
</script>


<T.Group speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <T.AmbientLight intensity={0.25} />
    <T.DirectionalLight position={[0, 0, 0.05]} />
    <T.Mesh castShadow receiveShadow scale={2.75}>
        <T.IcosahedronGeometry args={[1, 1]} />
        <T.MeshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        {#await texture then img}
            <T.BasicShadowMap
                position={[0, 0, 1]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1}
                map={img}
                flatShading
            />
        {/await}
    </T.Mesh>
</T.Group>