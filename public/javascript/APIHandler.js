// class APIHandler {
//   constructor (baseUrl) {
//     this.BASE_URL = baseUrl;
//   }
class APIHandler {
  constructor() {
      this.axiosApp = axios.create({
          baseURL: 'https://minions-api.herokuapp.com/'
      })
  }


  getFullList () {
    return this.axiosApp.get("/characters");
  }

  getOneRegister (id) {
    return this.axiosApp.get(`/characters/${id}`);

  }

  createOneRegister (info) {
    return this.axiosApp.post("/characters", info);
  }

  updateOneRegister (id, info) {
    return this.axiosApp.put(`/characters/${id}`, info);

  }

  deleteOneRegister (id) {
    return this.axiosApp.delete(`/characters/${id}`);
  }
}
