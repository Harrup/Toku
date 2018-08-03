'use strict'
const Post =use('App/Models/Post')

class PostController {
    async store({request,response, auth}){
      //capture data from post and Auth
      try{
        const newPost = await Post.create({
          user_id:auth.user.id,
          type:'text',
          content:request.input('content')
        })
        return response.redirect('back') 
      }catch(error){
        console.log(error)
      }
    }
  }


module.exports = PostController
