import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MeshLoader from "./MeshLoader";

interface VisualizerProps {
    fbxFile: File;
    width?: number;
    height?: number;
}

const Visualizer = ({ fbxFile, width = 300, height = 150 }: VisualizerProps) => {
    const roundWidth = Math.max(1, Math.round(width));
    const roundHeight = Math.max(1, Math.round(height));
    console.log(fbxFile);
    const timestamp = new Date().toISOString();
    console.log(`useEffect exécuté à ${timestamp}`);
    return (
        <Canvas style={{ height: roundHeight, width: roundWidth, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdBA6} />
            <color attach="background" args={['#F0F0F0']} />

            <OrbitControls enableZoom enablePan enableRotate />
            
            <MeshLoader fbxFile={fbxFile} />
        </Canvas>
    )
}

export default Visualizer