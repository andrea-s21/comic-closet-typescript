

  let API_URL = process.env.REACT_APP_BASE_URL;

  const fetchComics = async () => {
    let baseUrl = `${API_URL}:443/v1/public/comics`;
    
    let apiKey = process.env.REACT_APP_API_KEY;
    let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return;
    }
  };


  const fetchCharacters = async () => {
    let baseUrl = `${API_URL}:443/v1/public/characters`;
  
    let apiKey = process.env.REACT_APP_API_KEY;
    let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;
  
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return;
    }
  };
  
  // const fetchCreators = async () => {
  //   let baseUrl = `${API_URL}/v1/public/creators`;
  
  //   let apiKey = process.env.REACT_APP_API_KEY;
  //   let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;
  
  //   try {
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //     return;
  //   }
  // };

  // const fetchCreator = async (id: number) => {
  //   let baseUrl = `${API_URL}/v1/public/characters/${id}`;
  
  //   let ts = Date.now().toString();
  //   let apiKey = process.env.REACT_APP_API_KEY;
  //   let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732&nameStartsWith`;
  
  //   try {
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.error(err);
  //     return;
  //   }
  // };
  
  export { fetchComics, fetchCharacters };