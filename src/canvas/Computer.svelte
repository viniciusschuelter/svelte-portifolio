<script>
    import { Group } from 'three'
    import { T, forwardEventHandlers } from '@threlte/core'
    import { useGltf } from '@threlte/extras'
  
    export const ref = new Group()
  
    const gltf = useGltf('src/lib/scenes/pc/scene-transformed.glb', { useDraco: true })
  
    const component = forwardEventHandlers()
  </script>
  
  <T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
    {#await gltf}
      <slot name="fallback" />
    {:then gltf}
      <T.Group position={[0.39, 0.3, 0.32]} scale={[0.05, 0.02, 0.05]}>
        <T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials['Material.006']} />
        <T.Mesh geometry={gltf.nodes.Object_5.geometry} material={gltf.materials['Material.031']} />
      </T.Group>
      <T.Group position={[0.48, 0.24, 0.12]} scale={[0.82, 1, 1]}>
        <T.Mesh geometry={gltf.nodes.Object_7.geometry} material={gltf.materials['Material.025']} />
        <T.Mesh geometry={gltf.nodes.Object_8.geometry} material={gltf.materials['Material.002']} />
        <T.Mesh geometry={gltf.nodes.Object_9.geometry} material={gltf.materials['Material.007']} />
        <T.Mesh geometry={gltf.nodes.Object_10.geometry} material={gltf.materials['Material.005']} />
      </T.Group>
      <T.Group position={[0.48, 0.29, -0.28]} rotation={[0.02, 0, 0]} scale={[0.82, 1, 1]}>
        <T.Mesh geometry={gltf.nodes.Object_12.geometry} material={gltf.materials['Material.006']} />
        <T.Mesh geometry={gltf.nodes.Object_13.geometry} material={gltf.materials['Material.007']} />
      </T.Group>
      <T.Group position={[0.48, 0.32, 0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.61, 1]}>
        <T.Mesh geometry={gltf.nodes.Object_15.geometry} material={gltf.materials['Material.025']} />
        <T.Mesh geometry={gltf.nodes.Object_16.geometry} material={gltf.materials['Material.003']} />
        <T.Mesh geometry={gltf.nodes.Object_17.geometry} material={gltf.materials['Material.004']} />
        <T.Mesh geometry={gltf.nodes.Object_18.geometry} material={gltf.materials['Material.008']} />
      </T.Group>
      <T.Group position={[0.47, 0.19, 0.66]}>
        <T.Mesh geometry={gltf.nodes.Object_20.geometry} material={gltf.materials['Material.025']} />
        <T.Mesh geometry={gltf.nodes.Object_21.geometry} material={gltf.materials['Material.002']} />
      </T.Group>
      <T.Group position={[1.37, 0.18, 0.66]} scale={[1, 1.72, 1]}>
        <T.Mesh geometry={gltf.nodes.Object_23.geometry} material={gltf.materials['Material.007']} />
        <T.Mesh geometry={gltf.nodes.Object_24.geometry} material={gltf.materials['Material.006']} />
      </T.Group>
      <T.Group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]}>
        <T.Mesh geometry={gltf.nodes.Object_28.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_29.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[1.4, 0.26, 0.07]} scale={[0.02, 0, 0.03]}>
        <T.Mesh geometry={gltf.nodes.Object_31.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_32.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]}>
        <T.Mesh geometry={gltf.nodes.Object_34.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_35.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[-0.43, 0.26, 0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]}>
        <T.Mesh geometry={gltf.nodes.Object_39.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_40.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[-0.43, 0.26, 0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]}>
        <T.Mesh geometry={gltf.nodes.Object_44.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_45.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[0.48, 0.22, 0.67]} rotation={[0, -Math.PI / 2, 0]} scale={[0.02, 0, 0.04]}>
        <T.Mesh geometry={gltf.nodes.Object_47.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_48.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Group position={[-0.46, 0.26, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0, 0.02]}>
        <T.Mesh geometry={gltf.nodes.Object_52.geometry} material={gltf.materials['Material.010']} />
        <T.Mesh geometry={gltf.nodes.Object_53.geometry} material={gltf.materials['Material.011']} />
      </T.Group>
      <T.Mesh
        geometry={gltf.nodes.Object_26.geometry}
        material={gltf.materials['Material.005']}
        position={[1.4, 0.3, 0.72]}
        rotation={[0.17, 0, 0]}
        scale={[1.2, 0.95, 0.95]}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_37.geometry}
        material={gltf.materials['Material.005']}
        position={[0.48, 0.24, 0.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.82, 1, 1]}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_42.geometry}
        material={gltf.materials['Material.005']}
        position={[0.48, 0.24, 0.24]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.82, 1, 1]}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_50.geometry}
        material={gltf.materials['Material.025']}
        position={[0.46, 1.04, 0.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.14, 0.1, 0.1]}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_55.geometry}
        material={gltf.materials.material_0}
        position={[-0.5, 0.26, 0.01]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0}
      />
    {:catch error}
      <slot name="error" {error} />
    {/await}
  
    <slot {ref} />
  </T>
  