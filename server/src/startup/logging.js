const winston = require('winston');

module.exports = function () {
  winston.configure({
    transports: [
      new (winston.transports.File)({ filename: 'error.log' , level: 'error'}),
      new winston.transports.Console({
        level: 'debug', // Logs 'debug', 'info', 'warn', and 'error'
        format: winston.format.colorize(), // Makes output colorful in the terminal
      }),
    ]
  });

  winston.exceptions.handle(
    new winston.transports.Console({colorize: true, prettyPrint: true}),
    new winston.transports.File({filename: 'uncaughtException.log'})
  );
  
  winston.rejections.handle(
    new winston.transports.Console({colorize: true, prettyPrint: true}),
    new winston.transports.File({filename: 'uncaughtRejection.log'})
  );
  

};



