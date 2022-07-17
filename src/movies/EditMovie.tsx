import MovieForm from "./MovieForm";

export default function EditMovie() {
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Star Wars Rebels",
          inTheaters: false,
          trailer: "url",
          releaseDate: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
