<script lang="ts">
    import { forwardEventHandlers, T, useThrelte } from '@threlte/core';
    import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";
	import { useTexture, Float } from '@threlte/extras';
    import * as THREE from "three";

    export let decal: any = null;
    let mesh: any;
    let material: any;

    const texture = useTexture(decal);


    
    function createDecal(img: any): void {
        const decalMat = new THREE.MeshPhongMaterial({
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -4,
            map: img,
            transparent: true,
        });
        const position = new THREE.Vector3(0, 0, 1);
        const rotation = new THREE.Euler(2 * Math.PI, 0, 6.25);
        const size = new THREE.Vector3(1, 1, 1);
        const m = new THREE.Mesh(new DecalGeometry(mesh, position, rotation, size), decalMat);
        mesh.needsUpdate = true;
        console.log(m);
    }

</script>


<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <T.AmbientLight intensity={0.25} />
    <T.DirectionalLight position={[0, 0, 0.05]} />
    <T.Mesh castShadow receiveShadow scale={2.75} 
    on:create={({ ref }) => {
    console.log(ref);
    mesh = ref; //should be an array
    //   ref.visible = true;
    }}>
        <T.IcosahedronGeometry args={[1, 1]} />
        <T.MeshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        {#await texture then img}
        {createDecal(img)}
            <!-- <T.MeshPhongMaterial
                flatShading
                depthWrite={false}
                transparent={true}
                polygonOffset={true}
                polygonOffsetFactor={-4}
                map={img}
                on:create={({ ref }) => {
                  material = ref;
                  createDecal(img)
                  console.log(ref);
                }}
            /> -->
        {/await}
    </T.Mesh>
</Float>