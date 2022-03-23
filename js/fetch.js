// fetch(adressas, {opciju objektas})
// resp - spec atsakymo objektas su info apie uzklausa

fetch('people.json')
  .then((resp) => {
    console.log(resp);
    // paverciam gautus json duomenis i javascript
    return resp.json();
  })
  .then((dataInJs) => {
    console.log('dataInJs ===', dataInJs);
  })
  .catch((err) => console.warn(err));
