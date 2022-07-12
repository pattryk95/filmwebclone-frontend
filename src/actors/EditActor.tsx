import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Ewan McGregor",
          dateOfBirth: new Date("1996-06-01T:00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
