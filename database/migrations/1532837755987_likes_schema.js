'use strict'

const Schema = use('Schema')

class LikesSchema extends Schema {
  up () {
    this.create('likes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('comment_id').unsigned().nullable().references('id').inTable('comments')
      table.integer('post_id').unsigned().nullable().references('id').inTable('posts')
      table.timestamps()
    })
  }

  down () {
    this.drop('likes')
  }
}

module.exports = LikesSchema
