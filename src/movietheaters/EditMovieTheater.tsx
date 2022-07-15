import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: "Sambil",
          latitude: 52.41030342396361,
          longitude: 20.915209651429908,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
