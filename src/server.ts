import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random'
import { Meteor } from 'meteor/meteor'
;(function () {
  'use strict'

  Accounts.impSvc = {}

  // Call from a Meteor method to set/get a token that client can use to login
  Accounts.impSvc.set = async function (userId) {
    var token = Random.secret()
    await Meteor.users.updateAsync(userId, {
      $set: { 'services.impersonate.token': token },
    })
    return token
  }

  Accounts.registerLoginHandler('impersonate', async function (options) {
    if (!(options.impToken && typeof options.impToken === 'string')) return undefined // Don't handle

    var user = await Meteor.users.findOneAsync({
      'services.impersonate.token': options.impToken,
    })

    if (user) {
      return {
        userId: user._id,
      }
    } else {
      return {
        error: new Meteor.Error(403, 'invalid-token'),
      }
    }
  })
})()
