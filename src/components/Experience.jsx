import { Stage, OrbitControls } from '@react-three/drei'
import Desk from './Desk'

const Experience = () => {
    return (
        <>
            <color attach="background" args={['#e5e5e5']} />
            <Stage shadows={false}>
                <Desk></Desk>
            </Stage>
            <OrbitControls />
        </>
    )
}

export default Experience;
