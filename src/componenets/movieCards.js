import { image_url } from "../util/constants";

const MovieCards = ({ poster_path }) => {
    return (
        <div className="relative w-60 h-100 md:w-80 md:h-100 flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
            <img 
                alt="Movie Poster" 
                src={`${image_url}${poster_path}`} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
            />
        </div>
    );
};

export default MovieCards;
