const API_ENDPOINT = `http://localhost:5000`;

const request = async (url, opts) => {
  try {
    const res = await fetch(url, opts);
    if (res.status === 200) return await res.json();
    else throw { statusText: res.statusText };
  } catch (err) {
    console.error('에러 발생!', err);
    return [];
  }
};

const api = {
  fetchJisuns: () => request(`${API_ENDPOINT}/jisun`),

  updateFavorites: data =>
    request(`${API_ENDPOINT}/jisun/${data.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    }),
};

export default api;
