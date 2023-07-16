
import useSWR from 'swr';
import styles from './character.module.css'
import CardUser from "../components/CardUser";
import {fetchData, users} from "../services/Service";


export interface UsersData {
    id: number;
    fullname: string;
    email: string;
    contact: string;
}

export const Users: React.FC = () => {
    const { data, error } = useSWR<UsersData[]>(users, fetchData, {
        suspense: false,
    });

    return (
        <>
            <h1 style={{ color: "black" }}>Usuarios</h1>

            <div className={styles.container}>
                {data?.map((user) => (
                    <CardUser
                        key={user.id}
                        fullname={user.fullname}
                        email={user.email}
                        contact={user.contact}
                    ></CardUser>
                ))}
            </div>
        </>
    );
};
