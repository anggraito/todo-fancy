var BASE_URL = 'http://localhost:3000/api'
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    allList: null,
    username: null
  },
  methods: {
    getTodo() {
      var self = this
      axios.get(`${BASE_URL}/todos` , {
        headers: {
          token: localStorage.getItem('accesstoken')
        }
      })
      .then(response => {
        self.allList = null
        self.allList = response.data
        console.log(response.data)
        // self.username = response.data.creator.username
      })
      .catch(err => console.log(err))
    },
    logout() {
      localStorage.removeItem('accesstoken')
      window.location = `http://localhost:${window.location.port}/login.html`
    }
  },
  created() {
    this.getTodo()
  }
})