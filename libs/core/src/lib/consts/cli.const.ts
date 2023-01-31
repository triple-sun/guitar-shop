import { CLI } from "../enums/command.enum";

export const HELP_COMMAND_TEXT = `
Программа для генерации тестовых товаров для базы данных.

Пример:
    npm run cli -- <command> [arguments]
Команды:
    --help, -h                                # печатает этот текст
    --generate, -g <${CLI.Count}> <${CLI.Connection}>    # генерирует n тестовых товаров используя <connection-string> для связи с БД
Пример использования:
    npm run cli -- --generate 123 user@pass@host:port
`;
