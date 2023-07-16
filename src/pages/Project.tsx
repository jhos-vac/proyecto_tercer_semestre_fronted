import useSWR from 'swr';
import ListProject from "../components/ListProject";
import {fetchData, project} from "../services/Service";

export interface ProjectData {
    id: number;
    idUsers: number;
    title: string;
    budget: number;
    description: string;
    startDate: Date | null;
    users: string;
}

export const Project: React.FC = () => {
    const { data, error } = useSWR<ProjectData[]>(project, fetchData, {
        suspense: false,
    });

    return (
        <>
            <h1 style={{ color: "aliceblue" }}>Proyectos</h1>
            <div>
                {data?.map((dataProject) => (
                    <ListProject
                        key={dataProject.id}
                        id={dataProject.id}
                        idUsers={dataProject.idUsers}
                        title={dataProject.title}
                        budget={dataProject.budget}
                        description={dataProject.description}
                        startDate={dataProject.startDate}
                        users={dataProject.users}
                    />
                ))}
            </div>
        </>
    );
};
