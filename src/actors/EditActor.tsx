import ActorForm from "./ActorForm";

export default function EditActor()
{
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          firstName: "Ewan",
          middleName: "",
          lastName: "McGregor",
          dateOfBirth: new Date("1996-06-01T:00:00:00"),
          biography: `# Something
This person was born in *DR*`,
          pictureURL: 'https://sm.ign.com/ign_pl/image/j/justice-le/justice-league-dark-movie-casting-rumors_8xhh.jpg'
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
