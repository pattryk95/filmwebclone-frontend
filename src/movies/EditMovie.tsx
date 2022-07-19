import MovieForm from "./MovieForm";

export default function EditMovie()
{
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Star Wars Rebels",
          inTheaters: false,
          trailer: "url",
          releaseDate: new Date("2014-08-11"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
