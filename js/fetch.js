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

fetch('main.txt')
  .then((resp) => resp.text())
  .then((data) => console.log('data ===', data))
  .catch((error) => console.log(error));
