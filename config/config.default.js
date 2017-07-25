'use strict';

// module.exports = appInfo => {
//   const config = {};
//
//   // should change to your own
//   config.keys = appInfo.name + '_1500858874849_1609';
//
//   // add your config here
//   config.mongoose={
//       url:'mongodb://127.0.0.1/egg',
//       options:{}
//   };
//
//   return config;
// };

exports.keys='key';

exports.mongoose={
    url:'mongodb://localhost/egg',
    options:{}
};

exports.view={
    defaultViewEngine:'nunjucks',
    mapping:{
      '.tpl':'nunjucks',
    }
};

