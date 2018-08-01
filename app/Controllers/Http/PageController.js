'use strict'

class PageController {
  async home({response, request, view, auth}){
    console.log(auth.user)
    if(auth.user){
      return view.render('pages/home_react')
    }else{
      return view.render('pages/welcome')
    }

  }

  async welcome({response, request, view, auth}){
    console.log(auth.user)
    return view.render('pages/welcome')
  }

}

module.exports = PageController
