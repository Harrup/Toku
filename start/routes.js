'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/','PageController.home')

//Authentication Routes
Route.get('/login','AuthController.login')
Route.post('/login','AuthController.loginUser')

Route.get('/register','AuthController.register')
Route.post('/register','AuthController.storeUser')

Route.get('/forgot-password','AuthController.forgotPassword')
Route.get('/logout','AuthController.logout')

//API
Route.get('/api/initialApp','ApiController.initialApp')
Route.post('/api/post','PostController.store')
Route.post('/api/post/:id','PostController.update')
Route.post('/api/post/:id/delete','PostController.destroy')
Route.get('/api/user/:id','UserController.profile')


Route.any('*',({view}) => view.render('pages/home_react'))
