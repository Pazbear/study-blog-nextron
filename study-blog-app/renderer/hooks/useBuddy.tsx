import useSWR from "swr";

import {getMyBuddies} from "../api/buddyApi";

export const useBuddy = () => {
    const {data, mutate, error} = useSWR("getMyBuddies", getMyBuddies);
    const useBuddyLoading = !data && !error;
    const useBuddyFetched = !error && data;

    return {
        useBuddyLoading,
        useBuddyFetched,
        useBuddyData : data,
        useBuddyMutate : mutate,
    }
}