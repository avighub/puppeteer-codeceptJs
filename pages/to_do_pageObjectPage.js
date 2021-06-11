const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    email: '#user_basic_email',
    password: '#user_basic_password'
  },

  // use this keyword to use the locators here
  initFunction() {
    I.say('Some test comments')
    console.log(this.fields.email, this.fields.password)
  }


}
