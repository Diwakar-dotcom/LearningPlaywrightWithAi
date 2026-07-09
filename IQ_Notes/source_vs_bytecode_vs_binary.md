# Source Code vs Bytecode vs Binary Code

## Overview

When JavaScript code runs in a browser or Node.js, it passes through multiple stages — source → bytecode → binary (machine code). Each stage is a different **level of abstraction** from the hardware.

---

## The Three Layers

| Aspect | **Source Code** | **Bytecode** | **Binary Code (Machine Code)** |
|---|---|---|---|
| **What is it?** | Human-readable text written by the developer | Intermediate low-level representation, platform-independent | CPU-native instructions (1s and 0s), platform-specific |
| **Who reads it?** | Humans (developers) | The VM interpreter (e.g., V8's Ignition) | The physical CPU |
| **Readability** | High — `let x = 10;` is plain English-like syntax | Low — opcodes and registers, e.g., `LdaSmi [10]` | Nearly impossible — raw hex/binary bytes |
| **Speed** | Not executed directly | Faster to interpret than source (but slower than native) | Fastest — runs directly on silicon |
| **When is it created?** | At authoring time (you write it) | At parse/compile time (V8 parses source → generates bytecode) | At runtime (TurboFan compiles "hot" bytecode → machine code) |
| **Is it saved to disk?** | Yes — `.js` files | No — lives in memory during execution | No — generated on the fly, cached in memory |
| **Example transformation** | `let x = 10;` | `LdaSmi [10]` `Star r0` | `mov eax, 0xA` `mov [rbp-8], eax` |

---

## How Your Example Maps to These Stages

```js
let x = 10;                    // --- SOURCE CODE ---
console.log(x);                // simple, runs once → stays as bytecode

for (let i = 0; i < 500; i++) { // --- HOT CODE ---
    console.log(i);             // runs 500+ times → compiled to binary
}
```

| Code Section | Stage It Reaches | Why |
|---|---|---|
| `let x = 10;` | **Bytecode** (never reaches binary) | Runs once. Not worth compiling — interpreting bytecode is fast enough. |
| `console.log(x);` | **Bytecode** (never reaches binary) | Same — runs once, no compilation needed. |
| `for (let i = 0; i < 500; i++)` | **Binary** (gets compiled) | V8's profiler marks it as **"hot"** (> threshold executions). TurboFan kicks in and compiles it to native machine code. |
| `console.log(i)` (inside loop) | **Binary** | Part of the hot path, so it gets compiled alongside the loop. |

---

## Key Insight: JIT Compilation

JavaScript engines **don't compile everything**. They use a **lazy, tiered approach**:

1. **Parse** the source into an AST.
2. **Generate bytecode** (Ignition interpreter) — fast to start, slow to repeat.
3. **Profile** the running code — count how many times each function/loop executes.
4. **Compile hot paths to binary** (TurboFan compiler) — slow to compile, but extremely fast to execute repeatedly.

This is why your simple `let x = 10;` stays as bytecode (not worth compiling), but the loop that runs 500 times gets promoted to binary.
