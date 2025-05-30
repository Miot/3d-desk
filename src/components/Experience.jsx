import { Stage, OrbitControls } from '@react-three/drei'
import Desk from './Desk'

const Experience = () => {
    return (
        <>
            <Stage shadows={false}>
                <Desk></Desk>
            </Stage>
            <OrbitControls />
        </>
    )
}

export default Experience;
