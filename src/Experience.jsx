import { Physics } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
// import { Bloom, ToneMapping, EffectComposer } from '@react-three/postprocessing'
import { Sparkles } from '@react-three/drei'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)

    return <>

        <color args={ ['#bdedfc' ] } attach="background" />

        {/* Bloom Postprocessing */}
        {/* <EffectComposer disableNormalPass={ true }>
            <Bloom
                luminanceThreshold={ 1.1 }
                mipmapBlur
                intensity={ 2 }
            />
            <ToneMapping />
        </EffectComposer> */}

        <Physics debug={ false }>
            <Lights />
            <Level count={ blocksCount } seed={ blocksSeed } />
            <Player />
        </Physics>
    </>
}