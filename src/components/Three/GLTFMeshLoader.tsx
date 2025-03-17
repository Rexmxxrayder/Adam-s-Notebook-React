import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface MeshLoaderProps {
  file: File;
}

const GltfMeshLoader = ({ file }: MeshLoaderProps) => {
  const { scene } = useThree();

  useEffect(() => {
    const gltfLoader = new GLTFLoader();

    const fileUrl = URL.createObjectURL(file);

    gltfLoader.load(
      fileUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.01, 0.01, 0.01); 
        scene.add(model);

        console.log('Modèle chargé avec succès!');
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('Erreur de chargement du modèle GLTF:', error);
      }
    );

    return () => {
      URL.revokeObjectURL(fileUrl);
    };
  }, [file, scene]);

  return null;
};

export default GltfMeshLoader;