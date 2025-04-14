[![npm version](https://img.shields.io/npm/v/contextbase-cli.svg)](https://www.npmjs.com/package/contextbase-cli)

# ContextBase CLI

A powerful Command Line Interface for interacting with the ContextBase MCP API. 

## Overview

ContextBase CLI provides a simple and efficient way to manage your memory keys through the ContextBase service. Store, retrieve, search, and manage your data with straightforward commands.

## Installation

```bash
# Install globally
npm install -g contextbase-cli

# Or use with npx
npx contextbase-cli <command>
```

## Authentication

Before using the CLI, you need to authenticate:

```bash
# Sign up for a new account
contextbase signup <email> <password>

# Login to existing account
contextbase login <email> <password>

# Logout when done
contextbase logout
```

## Usage

### Set a Memory Key

Store a key-value pair in your ContextBase memory:

```bash
contextbase set <key> <value> [--ttl <seconds>]
```

Options:
- `--ttl <seconds>`: Time-to-live in seconds (default: 86400 - 24 hours)

Example:
```bash
contextbase set user.preferences '{"theme":"dark","fontSize":14}' --ttl 604800
```

### Get a Memory Key

Retrieve a stored value by its key:

```bash
contextbase get <key>
```

You can also get the output in JSON format:

```bash
contextbase get <key> --json
```

Example:
```bash
contextbase get user.preferences
```

### Delete a Memory Key

Remove a key from your memory:

```bash
contextbase delete <key>
```

### List All Memory Keys

View all your stored memory keys:

```bash
contextbase list
```

You can also get the output in JSON format:

```bash
contextbase list --json
```

### Search Memory Keys

Find keys matching a specific query:

```bash
contextbase search <query>
```

You can also get the search results in JSON format:

```bash
contextbase search <query> --json
```

## Examples

```bash
# Store user preferences
contextbase set user.preferences '{"theme":"dark"}'

# Store temporary session data (expires in 1 hour)
contextbase set session.token 'abc123xyz' --ttl 3600

# Retrieve user preferences
contextbase get user.preferences

# Retrieve user preferences in JSON format
contextbase get user.preferences --json

# Search for all user-related keys
contextbase search user

# Search for all user-related keys in JSON format
contextbase search user --json

# List all stored keys
contextbase list

# List all stored keys in JSON format
contextbase list --json

# Remove a key
contextbase delete session.token
```

## Development

If you want to contribute or modify the CLI:

```bash
# Clone the repository
git clone https://github.com/imfeniljikadara/contextbase-cli.git
cd contextbase-cli

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm link
```

## License

MIT
