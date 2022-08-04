import {saveToConsole, saveToDatabase, saveToFile} from './io';
import {ConsoleLogger, DatabaseLogger, FileLogger} from './index';

jest.mock('labs/lab_05/io');

describe('Given a file logger instance', () => {
  describe('When the log function is called', () => {
    test('Then I expect saveToFile to receive the message to be logged', () => {
      const fileLogger = new FileLogger('file-logger', 'info');
      fileLogger.log('message');

      expect(saveToFile).toHaveBeenCalledWith('info: message');
    });
  });
});

describe('Given a console logger instance', () => {
  describe('When the log function is called', () => {
    test('Then I expect saveToFile to receive the message to be logged', () => {
      const consoleLogger = new ConsoleLogger('file-logger', 'debug');
      consoleLogger.log('message');

      expect(saveToConsole).toHaveBeenCalledWith('debug: message');
    });
  });
});

describe('Given a database logger instance', () => {
  describe('When the log function is called', () => {
    test('Then I expect saveToFile to receive the message to be logged', () => {
      const databaseLogger = new DatabaseLogger('database-logger', 'error');
      databaseLogger.log('message');

      expect(saveToDatabase).toHaveBeenCalledWith('error: message');
    });
  });
});
