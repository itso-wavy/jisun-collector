const API_ENDPOINT = `http://localhost:5000`;

// const fetchFunc = async (tag) => {
//   const res = await fetch(`${API_ENDPOINT}/jisun/${tag}`);
//   const data = await res.json();
//   return data;
// }

const api = {
  fetchJisuns: async () => {
    const res = await fetch(`${API_ENDPOINT}/jisun`);
    const data = await res.json();
    return data;
  },

  fetchFavorites: async () => {
    const res = await fetch(`${API_ENDPOINT}/favorites`);
    const data = await res.json();
    return data;
  },
};

// 에러처리
