import {fetchProyects,proyects} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface LocalizationsData {
        id: number;
        title: string;
        description:string;
}

export const Proyects: React.FC = () => {
    const { data, error } = useSWR<LocalizationsData[]>(proyects, fetchProyects, {
        suspense: false,
    });

    return (
        <>
            <h1 style={{color:"black" }}>Proyectos</h1>


            <div className={styles.container}>
                {data?.map((localizations) => (
                    <AntCard  key={localizations.id} title={localizations.title}  description={localizations.description}></AntCard>
                ))}
            </div>

            <div className={styles.buttonAgregar}>
            </div>
        </>
    );
};

