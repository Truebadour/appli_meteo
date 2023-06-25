// const fetchApiKey = async () => {
//   await fetch("./conf.json")
//     .then((res) => res.json())
//     .then((data) => (newData = data));

//   console.log(newData.apiKey);
// };

// const fetchCityConf = async () => {
//   await fetch("./conf.json")
//     .then((res) => res.json())
//     .then((data) => (newData = data));

//   console.log(newData.ville);
// };

// const fetchApiData = async () => {
//   await fetch(
//     "http://api.weatherapi.com/v1/current.json?key=d7110859a3d64a4e86695518232306&q=Paris"
//   )
//     .then((res) => res.json())
//     .then((data) => (apiData = data));

//   console.log(apiData);
// };

// fetchApiKey();
// fetchCityConf();
// fetchApiData();

const fetchApiData = async () => {
    await fetch("./conf.json")
    .then((res) => res.json())
    .then((res) => data=res);
    
    

    console.log(data);
    console.log("http://api.weatherapi.com/v1/current.json?key=d7110859a3d64a4e86695518232306&q=" + ${data.ville});
}

fetchApiData();