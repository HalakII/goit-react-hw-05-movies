import axios from 'axios';
const KEY = 'ddee4de9cb910735308a6ba3c3fd3ee2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingList = async () => {
  const endpoint = 'trending/movie/day';
  try {
    const response = await axios.get(endpoint, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching trends:', error);
    throw error;
  }
};
