const fileLogger = {
  name: 'file-logger',
  level: 'info',
  log: (message: string) => {
    // save log entry to file
  },
};

const consoleLogger = {
  name: 'console-logger',
  level: 'debug',
  log: (message: string) => {
    // save log entry to console
  },
};

const databaseLogger = {
  name: 'database-logger',
  level: 'error',
  log: (message: string) => {
    // save log entry to database
  },
};
