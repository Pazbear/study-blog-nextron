import useSWR from "swr";

import {getWorksByMe} from "../api/workApi";

export const useWork = () => {
    const {data, mutate, error} = useSWR("myWorks", getWorksByMe);
    const loading = !data && !error;
    const fetched = !error && data;

    return {
        useWorkLoading :loading,
        useWorkFetched : fetched,
        useWorkData : data,
        useWorkMutate :mutate,
    }
}