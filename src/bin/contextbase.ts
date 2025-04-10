#!/usr/bin/env node

import { Command } from 'commander';
import { login } from '../commands/login';
import { signup } from '../commands/signup';
import { setMemory } from '../commands/set';
import { getMemory } from '../commands/get';
import { deleteMemory } from '../commands/delete';
import { listMemory } from '../commands/list';
import { searchMemory } from '../commands/search';
import { logout } from '../commands/logout';

const program = new Command();
program.name("contextbase").description("Command Line Interface (CLI) for interacting with the ContextBase MCP API.").version("1.0.0");

program
  .command("signup")
  .argument("<email>")
  .argument("<password>")
  .description("Signup to contextbase")
  .action(signup);

  program
  .command("login")
  .argument("<email>")
  .argument("<password>")
  .description("Login to contextbase")
  .action(login);

program
  .command("set")
  .argument("<key>")
  .argument("<value>")
  .option("--ttl <seconds>", "TTL in seconds", "86400")
  .description("Set a memory key")
  .action(setMemory);

program
  .command("get")
  .argument("<key>")
  .description("Get a memory key")
  .action(getMemory);

program
  .command("delete")
  .argument("<key>")
  .description("Delete a memory key")
  .action(deleteMemory);

program
  .command("list")
  .description("List all memory keys")
  .action(listMemory);

program
  .command("search")
  .argument("<query>")
  .description("Search memory keys")
  .action(searchMemory);

program
  .command("logout")
  .description("Log out and clear stored token")
  .action(logout);

program.parse();
