$(function() {
  $('#login-form-link').click(function(e) {
      $("#login-form").delay(300).fadeIn(300);
        $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
      $("#register-form").delay(300).fadeIn(300);
        $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
  });
});
var BASE_URL = 'http://localhost:3000/api'
var login = new Vue({
  el: '#login',
  data: {
    loginUsername : null,
    loginPass : null,
    loginError : false,
    loginMessage : null,

    signupEmail : null,
    signupFullname : null,
    signupUsername : null,
    signupPass : null,
    signupMsg : null
  },
  methods: {
    login() {
      var self = this
      axios.post(`${BASE_URL}/signin`, {
        username: self.loginUsername,
        password: self.loginPass
      })
      .then(result => {
        console.log(result.data)
        console.log(result.data.err)
        if (result.data.err) {
          self.loginError = true
          self.loginMessage = result.data.message
          self.loginUsername = null
          self.loginPass = null
        } else {
          // $('.container').addClass("active")
          localStorage.setItem('accesstoken', result.data.token)
          // localStorage.setItem('fbAuth', false)
          self.loginError = false
          self.loginMessage = null
          self.loginUsername = null
          self.loginPass = null
          window.location = `http://localhost:${window.location.port}`
        }
      })
      .catch(err => console.log(err))
    },

    register() {
      axios.post('http://localhost:3000/api/signup', {
        username: this.signupUsername,
        password: this.signupPass,
        email: this.signupEmail
      })
      .then(() => {
          $("#login-form").delay(300).fadeIn(300);
          $("#register-form").fadeOut(100);
          $('#register-form-link').removeClass('active');
          $("#login-form").addClass('active');
          this.signupUsername = null
          this.signupPass = null
          this.signupEmail = null
      })
      .catch(err => { this.signupMsg=err.toString(), console.log(err) })
    }
  }
})