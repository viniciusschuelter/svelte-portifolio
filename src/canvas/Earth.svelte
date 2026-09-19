<script>
  import { Group } from 'three'
  import { T } from '@threlte/core'
  import { useGltf, useGltfAnimations, useDraco } from '@threlte/extras'

  let { fallback, error: errorSnippet, children, ...restProps } = $props()

  export const ref = new Group()

  const dracoLoader = useDraco()

  const gltf = useGltf('/earth.glb', { dracoLoader })
  
  export const { actions, mixer } = useGltfAnimations(gltf, ref)
</script>

<T is={ref} dispose={false} {...restProps}>
  {#await gltf}
    {@render fallback?.()}
  {:then gltf}
    <T.Group name="Sketchfab_Scene">
      <T.Group name="Sketchfab_model" rotation={[-1.54, -0.06, 0]}>
        <T.Group name="root">
          <T.Group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <T.Group name="Clouds_1">
              <T.Mesh name="Object_4" geometry={gltf.nodes.Object_4.geometry} material={gltf.materials.Clouds} />
            </T.Group>
            <T.Group name="Planet_2">
              <T.Mesh name="Object_6" geometry={gltf.nodes.Object_6.geometry} material={gltf.materials.Planet} />
            </T.Group>
          </T.Group>
        </T.Group>
      </T.Group>
    </T.Group>
  {:catch error}
    {@render errorSnippet?.({ error })}
  {/await}

  {@render children?.({ ref })}
</T>