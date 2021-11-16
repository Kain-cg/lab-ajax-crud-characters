const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
          .then(res => {
            // res.forEach(res => document.querySelector(".name").innerHTML = `name: ${res.data[0].name}`);
            document.querySelector(".name").innerHTML = `name: ${res.data[0].name}`
            document.querySelector(".occupation").innerHTML = `occupation: ${res.data[0].occupation}`
            document.querySelector(".cartoon").innerHTML = `is cartoon? ${res.data[0].cartoon}`
            document.querySelector(".weapon").innerHTML = `weapon: ${res.data[0].weapon}`

              console.log(res)
          })
          .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const id = document.getElementsByName('character-id')[0].value;

    charactersAPI.getOneRegister(id)
          .then(res => {

            document.querySelector(".name").innerHTML = `name: ${res.data.name}`
            document.querySelector(".occupation").innerHTML = `occupation: ${res.data.occupation}`
            document.querySelector(".cartoon").innerHTML = `is cartoon? ${res.data.cartoon}`
            document.querySelector(".weapon").innerHTML = `weapon: ${res.data.weapon}`

              console.log(res.data)
          })
          .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const id = document.getElementsByName('character-id-delete')[0].value;

    charactersAPI.deleteOneRegister(id)
          .then(res => {
              // const charactersUL = document.querySelector("#characters-container")
              console.log(res)
          })
          .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
