# UE5 Adapter Layer

> **Anti-Corruption Layer** for Unreal Engine integration.

All WebSocket/Pixel Streaming logic goes here. Decouple from UI.

## Protocol

- **Standard**: JSON-RPC 2.0 over WebSocket
- **Port**: TBD (default: 8080)
- **Authentication**: JWT token in connection params

## Responsibilities

1. **WebSocket Connection Management** - Lifecycle, reconnection, heartbeat
2. **Pixel Streaming** - Video stream handling, input relay
3. **Binary Data** - Asset streaming, file transfers
4. **Event Bus** - UE5 → Web event propagation

## Structure

```
lib/adapters/ue5/
├── index.ts           # Public API exports
├── ws-client.ts       # WebSocket client wrapper
├── pixel-stream.ts    # Pixel streaming handler
├── rpc.ts             # JSON-RPC message formatter
└── types.ts           # UE5-specific types
```

## Usage

```typescript
import { UE5Client } from "@/lib/adapters/ue5";

const client = new UE5Client({ endpoint: "ws://localhost:8080" });
await client.connect();
```
