import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../backend";
import { useEffect } from "react";

export const useCatQuery = (category) => {
    console.log(category, "from query")
    const { data, isLoading, error } = useQuery({
        queryKey: ["catListing"],
        queryFn: async () => {
            const res = await axios.post(`${API}house/get_listing_with_cat`, {
                category: category,
            });
            return res;
        },
        deps: [category]
    });

    useEffect(() => {
        // This effect will run whenever the category changes
        // or the component mounts
        return () => {
            // Cleanup code
        };
    }, [category]);

    return { data, isLoading, error };
};