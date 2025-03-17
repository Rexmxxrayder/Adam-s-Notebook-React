import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface MeshLoaderProps {
    fbxFile: File;
}

const MeshLoader = ({ fbxFile }: MeshLoaderProps) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color="#468585" emissive="#468585" />
        </mesh>
    )
}

export default MeshLoader