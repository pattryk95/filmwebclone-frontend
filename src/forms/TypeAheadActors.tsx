import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps)
{
    const actors: actorMovieDTO[] = [
        {
            id: 1, name: 'Ewan McGregor', character: 'Obi-Wan Kenobi', picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIIUCug0cluUJPxTvs2BjRSWXL5civuHUqbflF1cxc5vx47ZHS'
        },
        {
            id: 2, name: 'Hayden Christensen', character: 'Anakin Skywalker', picture: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT3M46awtwGAtdCCBB1tXSG0FD2c5KIAXjBDwwX-FmR8vbpFl64gRy6qexv_xI5PkW3'
        },
        {
            id: 3, name: 'Mark Hamill', character: 'Luke Skywalker', picture: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQts8lFduAM79i8ZdB1fAgpITZCZBxyFx5IXzfGA2dDq6zcaKzdDVm4eDA7D3YBIT3n'
        }
    ]
    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actor =>
                {
                    console.log(actor);
                }}
                options={actors}
                labelKey={actors => actors.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
            />
        </div>
    )
}

interface typeAheadActorsProps
{
    displayName: string;
    actors: actorMovieDTO[];
}