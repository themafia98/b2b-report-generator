import { useState } from "react";

export interface IWorkItem {
    id: number;
    description: string;
    hours: string;
}

export function useWorkList(initial: IWorkItem[] = []) {
    const [workList, setWorkList] = useState<IWorkItem[]>(initial);
    const addWorkItem = () => setWorkList([...workList, { id: Date.now(), description: "", hours: "" }]);
    const updateWorkItem = (id: number, field: keyof IWorkItem, value: string) => {
        setWorkList(workList.map(item => item.id === id ? { ...item, [field]: value } : item));
    };
    const removeWorkItem = (id: number) => setWorkList(workList.filter(item => item.id !== id));
    return { workList, addWorkItem, updateWorkItem, removeWorkItem };
}

