import useSWR from 'swr';
import ListProject from "../components/ListProject";
import {fetchData, ViewProject} from "../services/Service";
import Addproject from "../components/Addproject";


export interface ViewProjectData {
    id: number;
    title: string;
    estimate: number;
    description: string;
    estimatedTime: string;
    workLevel: string;
    typeWork: string;
    skills: {
        id: number;
        idProject: number;
        description: string;
        users:{
            id:number;
            fullname:string;
            email:string;
            contact:string;
            states:string;
            idSkill: number;
        }[];
    }[];
}

export const Project: React.FC = () => {
    const { data, error } = useSWR<ViewProjectData[]>(ViewProject, fetchData, {
        suspense: false,
    });

    return (
        <>
            <h1 style={{ color: "aliceblue" }}>Projects</h1>
            <div>
                <Addproject></Addproject>
                {data?.map((dataProject,) => (
                    <ListProject
                        key={dataProject.id}
                        id={dataProject.id}
                        title={dataProject.title}
                        estimate={dataProject.estimate}
                        description={dataProject.description}
                        estimatedTime={dataProject.estimatedTime}
                        workLevel={dataProject.workLevel}
                        typeWork={dataProject.typeWork}
                        skills = {dataProject.skills}
                    />
                ))}

            </div>

        </>
    );
};
