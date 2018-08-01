'use strict'
const Post =use('App/Models/Post')

class PostController {
    async store({request,response, auth}){
      //capture data from post and Auth
      const newPost = await Post.create({
        user_id:auth.user.id,
        type:'text',
        content:request.input('content')
      })
      return 'item was saved'
    }
  }


module.exports = PostController
