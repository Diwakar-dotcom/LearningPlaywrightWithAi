# JavaScript Fundamentals — Learning Playwright With AI

[![Status: In Progress](https://img.shields.io/badge/status-in%20progress-yellow)](https://github.com/)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/runtime-Node.js_v26-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Made with Command Code](https://img.shields.io/badge/made%20with-Command%20Code-6C5CE7)](https://commandcode.ai/)

> A hands-on, code-first journey through JavaScript fundamentals — from `console.log` to control flow — built for learners who want practical examples alongside deep theoretical knowledge.

---

## Table of Contents

- [About](#about)
- [Learning Path](#learning-path)
- [Project Structure](#project-structure)
- [Chapter Breakdown](#chapter-breakdown)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Learning Approach](#learning-approach)
- [License](#license)

---

## About

This repository is a **comprehensive JavaScript fundamentals curriculum** built through hands-on coding exercises. It covers everything from basic syntax and identifiers to operators, control flow statements, and user input handling — with a strong emphasis on **interview preparation**.

Despite the repository name, this project focuses on **core JavaScript** — the foundation you need before diving into any framework or tool, including Playwright.

### What makes this different?

- **53 code files** — learn by writing, not just reading
- **20+ interview question (IQ) files** — test your understanding with real-world problems
- **6,700+ lines of companion notes** — deep dives into every concept
- **Relatable analogies** — Goa trips, milk brands, and real-world scenarios make abstract concepts stick
- **Progressive difficulty** — each chapter builds cleanly on the previous one

---

## Learning Path

```
┌─────────────────────────────────────────────────────────────────┐
│                    JAVASCRIPT FUNDAMENTALS                       │
│                                                                   │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐               │
│  │  Ch. 1   │───▶│  Ch. 2   │───▶│   Ch. 3      │               │
│  │ JS Basics│    │ Concepts │    │ Identifiers   │               │
│  └──────────┘    └──────────┘    └──────────────┘               │
│       │               │                │                         │
│       ▼               ▼                ▼                         │
│  ┌──────────────────────────────────────────────────────┐       │
│  │                   Ch. 4 — Literals                    │       │
│  │   String · Number · Boolean · Null · Undefined        │       │
│  │   BigInt · Infinity · NaN · Octal · Hex · Binary     │       │
│  └──────────────────────────────────────────────────────┘       │
│       │                                                         │
│       ▼                                                         │
│  ┌──────────────────────────────────────────────────────┐       │
│  │                Ch. 5 — Operators (24 files)          │       │
│  │  Arithmetic · Assignment · Comparison · Logical      │       │
│  │  Ternary · Typeof · Increment/Decrement              │       │
│  │  Nullish Coalescing · Confusing Comparisons          │       │
│  └──────────────────────────────────────────────────────┘       │
│       │                                                         │
│       ▼                                                         │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐               │
│  │  Ch. 6   │───▶│  Ch. 7   │───▶│   Ch. 8      │               │
│  │ if-else  │    │  Switch  │    │ User Inputs   │               │
│  │          │    │  (9 files)│   │ (4 approaches)│               │
│  └──────────┘    └──────────┘    └──────────────┘               │
│                                             │                    │
│                                             ▼                    │
│                                   ┌──────────────────┐          │
│                                   │   🚀 Next:       │          │
│                                   │ Functions · Arrays│         │
│                                   │ Objects · DOM    │          │
│                                   └──────────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

<details>
<summary><b>📖 Recommended study order</b></summary>

| Step | Chapter | Concept | Est. Time |
|------|---------|---------|-----------|
| 1 | Ch. 1 | JS Basics & console output | 30 min |
| 2 | Ch. 2 | `let` variable declarations | 20 min |
| 3 | Ch. 3 | Identifier rules & conventions | 45 min |
| 4 | Ch. 4 | Literals, null vs undefined | 1 hr |
| 5 | Ch. 5 | Complete operator coverage | 3 hr |
| 6 | Ch. 6 | if-else statements | 30 min |
| 7 | Ch. 7 | Switch statements | 45 min |
| 8 | Ch. 8 | User input methods | 30 min |

</details>

---

## Project Structure

```
📁 LearningPlaywrightWithAi/
│
├── 📁 chapter_01_JS_basics/           # Hello World, JIT intro (2 files)
├── 📁 chapter_02_JS_Concepts/         # The `let` keyword (1 file)
├── 📁 chapter_03_Identifier/          # Naming rules, conventions (4 files)
├── 📁 chapter_04_Literal/             # Literal types, null/undefined (6 files)
├── 📁 chapter_05_Operator/            # Full operator coverage (24 files)
├── 📁 chapter_06_Statements/          # if-else, nested if-else (3 files)
├── 📁 chapter_07_Switch/              # Switch, fall-through, groups (9 files)
├── 📁 chapter_08_UserInputs/          # Input methods in JS (4 files)
│
├── 📁 IQ_Notes/                       # 7 comprehensive study guides (6,700+ lines)
├── 📁 IMP_Prompts/                    # AI prompt templates for note generation
│
└── README.md                          # You are here 📍
```

---

## Chapter Breakdown

### Chapter 1 — JS Basics
Files: `01_print.js`, `02_simpleVsComplexCode.js`

Start here. You'll write your first `console.log` statement and learn the difference between simple and complex/hot code — an introduction to how JavaScript engines (V8) optimize frequently-executed code paths.

### Chapter 2 — JS Concepts
File: `03_let_concept.js`

A focused deep-dive on the `let` keyword — how it differs from `var`, scope rules, and why it matters in modern JavaScript.

### Chapter 3 — Identifier
Files: `04_Identifier_Rules.js` → `07_Identifier_IQ.js`

Learn what makes a valid identifier in JavaScript:
- Characters allowed (`$`, `_`, letters, digits)
- Naming conventions: **camelCase**, **PascalCase**, **SCREAMING_SNAKE_CASE**, and **Hungarian notation**
- Comments (single-line `//`, multi-line `/* */`)
- Interview questions to test your knowledge

### Chapter 4 — Literal
Files: `08_Literal.js` → `13_Number_Part2.js`

All literal types in JavaScript:
- **String**, **Number**, **Boolean**, **Null**, **Array**, **Object** literals
- Deep dive on `null` vs `undefined`
- Number systems: **decimal**, **octal**, **hex**, **binary**, **scientific notation**
- `BigInt`, `Infinity`, `NaN`, numeric separators

### Chapter 5 — Operator (24 files)
The largest chapter. Covers every operator category:

| Category | Files | Key Topics |
|----------|-------|------------|
| Data Types | `14_DataTypes.js` | Primitive vs Reference |
| Assignment | `15_Assignment_Operator.js` | `=`, `+=`, `-=`, `*=` |
| Arithmetic | `16_Arithmetic_Operator.js` | `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison | `17-20_*.js` | `==` vs `===`, type coercion gotchas |
| Logical | `18_Logical_Operator.js` | `&&` \ `\|\|` \ `!` |
| Ternary | `22-30_*.js` | Simple, nested, 8 IQ practice files |
| Typeof | `31_TypeOf_Operator.js` | `typeof` all types |
| Inc/Dec | `32-35_*.js` | Prefix vs Postfix, puzzles |
| Nullish | `36_Nullish_Coalescing.js` | `??` operator with real-world analogy |

> **💡 Pro tip:** The ternary and increment/decrement IQ files are gold for interview prep. Each one tests a different edge case.

### Chapter 6 — Statements
Files: `37_IQ_ifElse.js` → `39_Nested_ifElse.js`

Conditional logic with `if-else`:
- Basic branching (Goa trip analogy 🏖️)
- Nested conditions (Goa + Drink)
- Grade calculator with multiple `else-if`

### Chapter 7 — Switch
Files: `40_Switch.js` → `48_IQ_Switch.js`

Everything about `switch` statements:
- Basic syntax (day of week)
- **Fall-through** behavior (when you omit `break`)
- **Grouped cases** (browsers by rendering engine)
- `switch(true)` pattern for range matching
- `switch(false)` — strict comparison inside switch
- Duplicate case values

### Chapter 8 — User Inputs
Files: `49_Prompt.js` → `52_File_System.js`

Four approaches to getting user input:
- **Browser**: `prompt()` dialog
- **Node.js**: `readline` module, `prompt-sync` package, `fs.readFileSync(0)`

---

## Prerequisites

- **Node.js** v18+ (tested on v26) — [Download](https://nodejs.org/)
- A code editor — [VS Code](https://code.visualstudio.com/) recommended
- Basic familiarity with the terminal / command line
- **No prior JavaScript knowledge required** — this starts from absolute basics

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/LearningPlaywrightWithAi.git
cd LearningPlaywrightWithAi

# 2. Run any JavaScript file with Node.js
node chapter_01_JS_basics/01_print.js

# 3. For browser-specific files (prompt, alert), open in a browser
#    or run with Node and check the console output

# 4. Follow the recommended study order (see Learning Path above)
```

> **Note:** Some Chapter 8 files (readline, prompt-sync) require additional setup. The `fs.readFileSync(0)` approach in `52_File_System.js` works out of the box with Node.js.

---

## Documentation

The `IQ_Notes/` directory contains **comprehensive study guides** generated using AI with a structured prompt template:

| Document | Lines | Coverage |
|----------|-------|----------|
| [Keywords in JavaScript](IQ_Notes/Keywords_in_JavaScript.md) | 1,549 | All JS keywords, internal working, interview Q&A |
| [JS Fundamentals Deep Dive](IQ_Notes/JS_Fundamentals_Keywords_Identifiers_Constants_Literals_Operators_Null_Undefined.md) | 1,399 | Six foundational concepts unified in one guide |
| [Operators Complete Guide](IQ_Notes/JavaScript_Operators_Complete_Guide.md) | 1,208 | 9 operator categories, confusing comparisons, production patterns |
| [Identifier Rules](IQ_Notes/Identifier_Rules_in_JavaScript.md) | 1,075 | Valid chars, naming conventions, scope, TDZ |
| [V8 Engine](IQ_Notes/V8_Engine.md) | 839 | Ignition + TurboFan, hidden classes, garbage collection, deoptimization |
| [VS Code Mac Shortcuts](IQ_Notes/VS_Code_Mac_Shortcuts.md) | 583 | Comprehensive macOS shortcut reference |
| [Switch Statement in JavaScript](IQ_Notes/Switch_Statement_in_JavaScript.md) | 1,462 | Deep guide: switch syntax, fall-through, internals, 28-section interview prep |
| [Source vs Bytecode vs Binary](IQ_Notes/source_vs_bytecode_vs_binary.md) | 53 | Three-tier execution model |

The `IMP_Prompts/` directory contains the **prompt template** (`explain-me-skill-prompt.md`) used to generate these notes — a structured 28-section format that ensures consistent, production-quality documentation.

---

## Learning Approach

This project uses a **dual-track learning model**:

```
┌─────────────────────────────────────────────────────────────┐
│                    LEARNING MODEL                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🖥️  CODE TRACK              📖  KNOWLEDGE TRACK          │
│                                                             │
│   Run .js files               Read companion .md notes       │
│   Modify examples             Deep-dive into theory          │
│   Solve IQ puzzles            Understand engine internals    │
│   Experiment in console       Review interview questions     │
│                                                             │
│            ◄────── LEARN BY DOING ──────►                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### How to maximize your learning

1. **Run the code first** — Open each `.js` file, read it, then run it with `node`
2. **Modify and experiment** — Change values, break things, fix them
3. **Tackle IQ files** — Try to predict the output before running
4. **Read companion notes** — Pair each chapter with the relevant `IQ_Notes` document
5. **Use the prompt template** — Customize `IMP_Prompts/explain-me-skill-prompt.md` to generate notes on new topics

---

## License

This project is for **educational purposes**. Feel free to fork, study, and share.

---

<p align="center">
  <b>JavaScript is the language of the web.<br>Master the fundamentals, and everything else is just syntax.</b>
</p>
</b>
</p>
