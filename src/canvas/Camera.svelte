<script lang="ts">
    import { forwardEventHandlers, T, useThrelte } from '@threlte/core'
  const { renderer, invalidate } = useThrelte()
    const el = document.getElementById('int-target')
    const component = forwardEventHandlers()
  </script>
  <T.PerspectiveCamera
  makeDefault
  let:ref
>
  <T.OrbitControls
  autoRotate
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
    args={[ref, renderer.domElement]}
    on:change={invalidate}
  />
</T.PerspectiveCamera>