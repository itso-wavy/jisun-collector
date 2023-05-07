const API_ENDPOINT = `http://localhost:5000`;

// const fetchFunc = async (tag) => {
//   const res = await fetch(`${API_ENDPOINT}/jisun/${tag}`);
//   const data = await res.json();
//   return data;
// }

const api = {
  // fetchAll: fetchFunc(all),
  // fetchCute: fetchFunc(cute),
  // fetchSerious: fetchFunc(serious),
  fetchJisuns: async () => {
    const res = await fetch(`${API_ENDPOINT}/jisun`);
    const data = await res.json();
    return data;
  },
};

// 에러처리
