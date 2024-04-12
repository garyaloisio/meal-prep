import axios from 'axios';
import { useState } from 'react';

interface BusinessResult {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    rating: number;
    // Add other properties as needed
  }  

const RestaurantSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState<BusinessResult[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/businesses/search', {
        params: {
            term: searchTerm,
            location: location,
          },
      });
      setSearchResults(response.data.businesses);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter food term" />
      <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter location" />
      <button onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <ul>
        {searchResults.map((result, index) => (
          <li>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              <img src={result.image_url} alt={result.name} />
              <div>{result.name}</div>
              <div>Rating: {result.rating}</div>
              {/* Add more details as needed */}
             </a>
          </li>
        )
        )
        }
      </ul>

 

    </div>
  );
};

export default RestaurantSearchForm;
