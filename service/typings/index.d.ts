import EggMysql from 'egg-mysql';

declare module 'egg' {
  interface Application {
    mysql: EggMysql,
    router: {
      namespace: function
    },
    passport: {
      authenticate: function
    },
  }

  interface Context {
    // 在app/extend/application.js中定义的返回客户端的方法
    returnBody(status: number, message: string): function
  }
}