'use strict'

const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('sender_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('receiver_id').unsigned().notNullable().references('id').inTable('users')
      table.text('content').notNullable()
      table.timestamp('read-at')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
