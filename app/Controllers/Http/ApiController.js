'use strict'

const Post = use('App/Models/Post')

class ApiController {
  async initialApp({auth}){
    try{
      const recentPosts = await Post.query().innerJoin('users', 'users.id', 'posts.user_id').options({nestTables:true}).fetch()
      //console.log(recentPosts.toJSON());
      return( {
        userInfo:auth.user,
        recentPosts
      })
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = ApiController
