import MovieCard from "./MovieCard.jsx";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>
      <MovieCard
        title="Inception"
        year={2010}
        rating={8.8}
        available={true}
        popular={true}
        genre="Sci-Fi" {/* <--- הוספת ה-Prop כאן */}
      />
      <MovieCard
        title="Toy Story"
        year={1995}
        rating={8.3}
        available={false}
        popular={false}
      />
      <MovieCard
        title="Parasite"
        year={2019}
        rating={8.5}
        available={true}
        popular={false}
      />
    </section>
  );
}

export default MovieList;