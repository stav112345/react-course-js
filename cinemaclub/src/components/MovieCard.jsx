function MovieCard({ title, year, rating, available, popular, genre }) { // <--- הוספת genre לפירוק ה-props
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {available && <p>זמין לצפייה</p>}
      {popular && <p>בחירת הצוות</p>}
      {genre && <p>ז׳אנר: {genre}</p>}
    </article>
  );
}

export default MovieCard;