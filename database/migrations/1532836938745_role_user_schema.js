'use strict'

const Schema = use('Schema')

class RoleUserSchema extends Schema {
  up () {
    this.create('role_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('role_id').unsigned().notNullable().references('id').inTable('roles')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_users')
  }
}

module.exports = RoleUserSchema
