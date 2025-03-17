import React from 'react'
import { useState, useEffect } from 'react'
import Visualizer from '../components/Three/Visualizer';

const ModelPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("http://localhost:5019/api/model")
            .then((response) => response.blob())
            .then((blob) => {

                setFile(new File([blob], "LetterBoss", { type: "application/x-fbx" }));
            })
            .catch((error) => {
                console.error("Erreur de téléchargement du modèle :", error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (<>
                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                    <Visualizer fbxFile={file!} width={1920} height={1080} />
                </div>
            </>
            )}
        </>
    );
}

export default ModelPage