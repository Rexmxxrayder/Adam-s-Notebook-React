import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

interface MeshLoaderProps {
    file: File;
}

const FBXMeshLoader = ({ file }: MeshLoaderProps) => {
    const { scene } = useThree();

    useEffect(() => {
        const fbxLoader = new FBXLoader()
        const fileUrl = URL.createObjectURL(file);
        fbxLoader.load(
            fileUrl,
            (object) => {
                object.scale.set(.01, .01, .01)
                scene.add(object);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )
        return () => {
            URL.revokeObjectURL(fileUrl);
        };
    }, [file, scene]);

    return null;
}

export default FBXMeshLoader