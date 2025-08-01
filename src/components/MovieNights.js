import './styling/MovieNights.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//import all photos
import dhoom_dhaam from "./styling/images/dhoom_dhaam.jpg";
import naveena from "./styling/images/naveena.jpg";
import bangalore from "./styling/images/bangalore.jpeg";
import kalakalappu from "./styling/images/kalakala.jpg";
import anegan from "./styling/images/anegan.jpg";
import toalltheboys from "./styling/images/toalltheboys.jpg";
import LGM from "./styling/images/LGM.jpg";

const movies = [
  {
    title: "Dhoom Dhaam",
    date: "July 6, 2025",
    image: dhoom_dhaam,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "Naveena Sarasswathi Sabatham",
    date: "July 6, 2025",
    image: naveena,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "Bangalore Naatkal",
    date: "July 11, 2025",
    image: bangalore,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "Kalakalappu",
    date: "July 12, 2025",
    image: kalakalappu,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "Anegan",
    date: "July 16, 2025",
    image: anegan,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "To All The Boys I've Loved Before",
    date: "July 16, 2025",
    image: toalltheboys,
    yourRating: 5,
    herRating: 5,
  },
  {
    title: "Let's Get Married",
    date: "July 25, 2025",
    image: LGM,
    yourRating: 5,
    herRating: 5,
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
              <div className="image-wrapper">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p><strong>Date:</strong> {movie.date}</p>
                <p><strong>Kuku's Rating:</strong> {movie.yourRating} ⭐</p>
                <p><strong>Muyal's Rating:</strong> {movie.herRating} ⭐</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
