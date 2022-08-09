import { urlActors } from "../endpoints";
import IndexEntity from "../genres/IndexEntity";
import { actorDTO } from './actors.model'

export default function IndexActors()
{
    return (
        <IndexEntity<actorDTO>
            url={urlActors} createUrl='actors/create' title="Actors" entityName="Actor"
        >
            {(actors, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {actors?.map(actor => <tr key={actor.id}>
                        <td>
                            {buttons(`actors/edit/${actor.id}`, actor.id)}
                        </td>
                        <td>
                            {`${actor.firstName} ${actor.middleName ?? ''} ${actor.lastName}`}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}