import {fetchRickAndMorty, rickAndMortyCharacter} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import styles from './character.module.css'
import CardUser from "../components/CardUser";

interface CharacterData {
    results: Array<{
        id: number;
        name: string;
        image:string
        species:string
    }>;
}

export const Users: React.FC = () => {
    const { data, error } = useSWR<CharacterData>(rickAndMortyCharacter, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Usuarios</h1>

            <div className={styles.container}>
                {data?.results.map((character) => (
                    <CardUser  key={character.id} name={character.name} image={character.image}  description={character.species}></CardUser>

                ))}
            </div>


        </>
    );
};

