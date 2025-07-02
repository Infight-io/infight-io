# Infight.io

Discord-based multiplayer fighting game where players can engage in turn-based combat within their Discord servers.

## Architecture

This is a TypeScript monorepo with:
- **Client**: Vue 3 + PixiJS frontend with hex grid game display
- **Server**: Fastify-based Lambda functions for the API
- **Deployment**: AWS SAM for serverless infrastructure

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- AWS CLI configured (for deployment)
- AWS SAM CLI (for local development)

## Getting Started

### Install Dependencies
```bash
# Install all workspace dependencies
npm run install:all
```

### Development

#### Run Frontend (Client)
```bash
# Start Vite dev server with hot reload
npm run dev:client
# Runs on http://localhost:5173
```

#### Run Backend (Server)
```bash
# Start SAM local API Gateway
npm run dev:server
# API available at http://localhost:3000
```

### Building

```bash
# Build both client and server
npm run build

# Build individually
npm run build:client  # Builds to client/dist/
npm run build:server  # Builds to server/dist/
```

### Testing

```bash
# Run all tests
npm run test

# Test individually
npm run test:client
npm run test:server
```

### Deployment

```bash
# Deploy to AWS (builds first)
npm run deploy
```

## Project Structure

```
infight-io/
├── client/          # Vue 3 + PixiJS frontend
├── server/          # Fastify Lambda functions
├── docs/            # Game design and technical docs
├── template.yaml    # AWS SAM infrastructure
└── package.json     # Workspace coordinator
```

## Technology Stack

- **Frontend**: Vue 3, PixiJS, Honeycomb (hex grids), Vite
- **Backend**: Fastify, AWS Lambda, DynamoDB, ElectroDB
- **Infrastructure**: AWS SAM, CloudFormation
- **Testing**: Vitest
- **Language**: TypeScript throughout

## Documentation

- [Game Design](./docs/game-design.md) - Game mechanics and features
- [Technical Design](./docs/technical-design.md) - Architecture decisions
- [TODO List](./docs/todos.md) - Development roadmap