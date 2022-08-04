import { saveToFile, saveToConsole, saveToDatabase } from "./io";

export type LogLevel = 'info' | 'debug' | 'error';

export interface ILogger {
  level: LogLevel;
  log: (message: string) => void;
}

export abstract class Logger implements ILogger {

  // protected readonly name: string;

  // constructor(name: string) {
  //   this.name = name;
  // }

  private _level: LogLevel;

  constructor(
    protected readonly name: string,
    level: LogLevel,
    private output: (message: string) => void,
  ) {
    this._level = level;
  }

  public get level() {
    return this._level;
  }

  public set level(value: LogLevel) {
    this._level = value;
  }

  private writeLogMessage(message: string) {
    this.output(`${this.level}: ${message}`);
  }

  public log(message: string): void {
    this.writeLogMessage(message);
  }
}

export class FileLogger extends Logger {
  constructor(
    level: LogLevel = 'error',
  ) {
    super("file-logger", level, saveToFile);
  }
}

export class DatabaseLogger extends Logger {
  constructor(
    level: LogLevel = 'error',
  ) {
    super("database-logger", level, saveToDatabase);
  }
}

export class ConsoleLogger extends Logger {
  constructor(
    level: LogLevel = 'error',
  ) {
    super("console-logger", level, saveToConsole);
  }
}

const logger = new ConsoleLogger();
logger.log("this is fun");

const logger2 = new ConsoleLogger();
logger2.log("this is fun");
