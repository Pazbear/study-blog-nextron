import useSWR from "swr";

import {auth} from "../api/userApi";

export const useUser = () => {
    const {data, mutate, error} = useSWR("login", auth);
    const useUserLoading = !data && !error;
    const useUserLoggedIn = !error && data;

    return {
        useUserLoading,
        useUserLoggedIn,
        useUserData : data,
        useUserMutate : mutate,
    }
}