import './styling/MovieNights.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const movies = [
  {
    title: "Dhoom Dhaam",
    date: "July 6, 2025",
    image: "./images/dhoom_dhaam.jgp",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "Naveena Sarasswathi Sabatham",
    date: "July 6, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "Bangalore Naatkal",
    date: "July 11, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "Kalakalappu",
    date: "July 12, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "Anegan",
    date: "July 16, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "To All The Boys I've Loved Before",
    date: "July 16, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
  {
    title: "Let's Get Married",
    date: "July 25, 2025",
    image: "",
    yourRating: 5,
    herRating: 5,
    summary: ""
  },
];

export default function MovieNights() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    }
  ]
};
  return (
    <section id="movies" className="movie-section">
      <h2>Movie Nights 🎥</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p><strong>Date:</strong> {movie.date}</p>
                <p><strong>Kuku's Rating:</strong> {movie.yourRating} ⭐</p>
                <p><strong>Muyal's Rating:</strong> {movie.herRating} ⭐</p>
                <p>{movie.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
