# Doodles Subgraph

This is the code to deploy a Subgraph using the 'The Graph' gragh studio tool

## Setup

### Auth and Deploy

* `graph auth --studio <deploy-key>`
* `graph codegen && graph build`
* `graph deploy --studio bayc`

### Main Components
* `schema.graphql` <- the entities
* `subgraph.yaml` <- the specified (contract, source, event handlers)
* `src/*` <- the logic that surrounds the contract events
