import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";

export default function IndexGenres()
{

    useEffect(() =>
    {
        axios.get('https://localhost:7161/api/genres')
            .then((response: AxiosResponse<genreDTO[]>) =>
            {
                console.log(response.data);
                console.log("Test1");
            })
    }, [])

    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genres</Link>

        </>
    )
}