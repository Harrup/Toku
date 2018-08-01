'use strict'

const { validate } = use('Validator')
const Hash =use('Hash')
const User =use('App/Models/User')

class AuthController {
  async login({response, request, view, auth}){
    return view.render('auth/login')
  }
  async loginUser({response, request, view, auth, session}){
    //capture the data from the form
    const loginData =  request.post()

    //find the user in the database by their email
    const user = await User.query().where('email', loginData.email).first()

    //verify the password
    if(user){
      const passwordVerified = await Hash.verify(loginData.password, user.password)
      //login the user
      if(passwordVerified){
        await auth.login(user)
        session.flash({notification:'Welcome To Toku'})
        return response.redirect('/')
      }else{
        //incorrect password
        session
          .withErrors([{field:'password', message:'incorrect password'}])
          .flashExcept(['password'])

        return response.redirect('back')

      }
    }else{
      // cant find user with that email
      session
        .withErrors([{field:'email', message:'cannot find user with that email'}])
        .flashExcept(['password'])

      return response.redirect('back')
    }
  }

  async register({response, request, view}){
    return view.render('auth/register')
  }
  async storeUser ({ request, session, response, auth }) {
    //Validation rules
    const rules = {
      email: 'required|email|unique: users, email',
      password: 'required|min:6|max:40',
      confirm_password: 'required'
    }

    const validation = await validate(request.all(), rules)

    //check if password and confirm_password match
    if(request.input('password') == request.input('confirm_password')){

      //check if data entered fails validation
      if (validation.fails()) {
        session
          .withErrors(validation.messages())
          .flashExcept(['password'])

        return response.redirect('back')
      }else{
        //data entered passes validation and creates a new user
        try{
          let newUser = await User.create({
            email:request.input('email'),
            password:request.input('password')
          })
        }
        catch(error){
          console.log(error)
          session
            .withErrors([
              {field:'database',message:'error connecting to database, try again later'}
            ])
            .flashExcept(['password'])
        }
        session.flash({notification:'Welcome To Toku'})
        return response.redirect('/')
      }
    }else{
      //runs this code if passwords do not match
      session
        .withErrors([
          {field:'password',message:'please confirm password'},
          {field:'confirm_password',message:'please confirm password'}
        ])
        .flashExcept(['password'])

      return response.redirect('back')
    }
  }

  async forgotPassword({response, request, view}){
    return view.render('auth/forgotPassword')
  }
  async logout({response, request, view, auth}){
    try{
      await auth.logout()
      return response.redirect('/')
    }catch(error){
      console.log(error)
      return 'Error could not logout'
    }
  }

}

module.exports = AuthController
