const API_ENDPOINT = `http://localhost:5000`;

const api = {
  fetchJisuns: async () => {
    const res = await fetch(`${API_ENDPOINT}/jisun`);
    return await res.json();
  },

  updateFavorites: async data => {
    const res = await fetch(`${API_ENDPOINT}/jisun/${data.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },
};

// 에러처리
