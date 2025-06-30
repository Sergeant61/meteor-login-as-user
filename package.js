Package.describe({
  name: 'receptim:login-as-user',
  summary: 'Adds methods to let an (admin) user login as another user',
  version: '0.2.1',
  git: 'https://github.com/receptim/meteor-login-as-user.git',
})

Package.onUse(function (api) {
  api.versionsFrom(['2.16', '3.0.2'])
  api.use('typescript')
  api.use('accounts-base')
  api.use('random')
  api.use('zodern:types@1.0.13')

  api.mainModule('src/client.ts', 'client')
  api.mainModule('src/server.ts', 'server')
})
