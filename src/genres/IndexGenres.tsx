import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../utils/Button";
import customConfirm from "../utils/customConfirm";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPage from "../utils/RecordsPerPageSelect";
import { genreDTO } from "./genres.model";

export default function IndexGenres()
{
    const [genres, setGenres] = useState<genreDTO[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() =>
    {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, recordsPerPage]);

    function loadData()
    {
        axios.get(urlGenres, {
            params: { pageNumber, recordsPerPage }
        })
            .then((response: AxiosResponse<genreDTO[]>) =>
            {
                const totalAmountOfRecords =
                    parseInt(response.headers['totalamountofrecords'], 10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage))
                setGenres(response.data);
            })
    }


    async function deleteGenre(id: number)
    {
        try
        {
            await axios.delete(`${urlGenres}/${id}`);
            loadData();
        } catch (error: any)
        {
            if (error && error.response)
            {
                console.error(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genres</Link>

            <RecordsPerPage onChange={amountOfRecords =>
            {
                setPageNumber(1);
                setRecordsPerPage(amountOfRecords);
            }} />

            <Pagination currentPage={pageNumber} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPageNumber(newPage)} />
            <GenericList list={genres}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre =>

                            <tr key={genre.id}>
                                <td>
                                    <Link className="btn btn-success"
                                        to={`/genres/edit/${genre.id}`}>Edit</Link>
                                    <Button
                                        onClick={() => customConfirm(() => deleteGenre(genre.id))}
                                        className="btn btn-danger">Delete</Button>
                                </td>
                                <td>
                                    {genre.name}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </GenericList>
        </>
    )
}