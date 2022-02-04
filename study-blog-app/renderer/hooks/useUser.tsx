import useSWR from "swr";

import {auth} from "../api/userApi";

export const useUser = () => {
    const {data, mutate, error} = useSWR("login", auth);
    const loading = !data && !error;
    const loggedIn = !error && data;

    return {
        loading,
        loggedIn,
        user : data,
        mutate,
    }
}