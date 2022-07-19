import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
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

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO)
    {
        setDraggedElement(actor);
    }
    function handleDragOver(actor: actorMovieDTO)
    {
        if (!draggedElement)
        {
            return;
        }
        if (actor.id !== draggedElement.id)
        {
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }
    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors =>
                {
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1)
                    {
                        props.onAdd([...props.actors, actors[0]]);
                    }
                    console.log(actors);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="actor" src={actor.picture}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actors.map(actor =>
                    <li key={actor.id}
                        draggable={true}
                        onDragStart={() => handleDragStart(actor)}
                        onDragOver={() => handleDragOver(actor)}
                        className="list-group-item list-group-item-action"
                    >
                        {props.listUI(actor)}
                        <span className="badge badge-primary badge-pill pointer text-dark"
                            style={{ marginLeft: '0.5rem' }}
                            onClick={() => props.onRemove(actor)}
                        >X</span>
                    </li>

                )}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps
{
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void
    listUI(actor: actorMovieDTO): ReactElement;
}