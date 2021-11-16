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

    event.preventDefault();

    const editCharacterForm = document.querySelector("#edit-character-form") 

    const editFormInputs = document.querySelectorAll("#edit-character-form input")

    const id = document.getElementsByName('chr-id')[0].value;

    const name = editFormInputs[1].value
    const occupation = editFormInputs[2].value
    const weapon = editFormInputs[3].value
    const cartoon = editFormInputs[4].checked

    const info = { name, occupation, weapon, cartoon }

    charactersAPI.updateOneRegister(id, info)
        .then(res => {
            editCharacterForm.reset()
            charactersAPI.getFullList()
        })
        .catch(err => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const newCharacterForm = document.querySelector("#new-character-form")

    const inputs = document.querySelectorAll("#new-character-form input")
  
      const name = inputs[0].value
      const occupation = inputs[1].value
      const weapon = inputs[2].value
      const cartoon = inputs[3].checked
  
      charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
          .then(res => {
              newCharacterForm.reset()
              charactersAPI.getFullList()
          })
          .catch(err => console.log(err))

  });
});
