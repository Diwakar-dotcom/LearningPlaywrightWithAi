# Keywords in JavaScript

## 1. Executive Summary

**What is it?**
Keywords are reserved tokens in the JavaScript language that have special syntactic meaning. They are part of the grammar — you cannot use them as identifiers (variable names, function names, etc.). They tell the JavaScript engine to perform specific actions: declare variables (`let`, `const`, `var`), control flow (`if`, `else`, `for`, `while`), handle objects (`new`, `this`, `super`), manage modules (`import`, `export`), and more.

**Why was it introduced?**
Keywords exist because every programming language needs a fixed set of tokens with predefined meanings. Without them, the parser couldn't distinguish between "a variable named `if`" and "the conditional statement `if`". Keywords carve out specific tokens for the language's core constructs.

**What problem does it solve?**
They solve the problem of ambiguity. When the parser sees `if`, it knows immediately to expect a conditional expression, not a variable reference. This allows the language to have control structures, declarations, and operators as first-class syntax rather than library calls.

**When should we use it?**
- You don't "use" keywords by choosing them — they're part of the syntax
- You use what they represent: `if` for conditionals, `for` for loops, `class` for OOP, `import`/`export` for modules, `async`/`await` for promises
- They're mandatory syntactic elements for writing programs

**When should we avoid it?**
- Never use keywords as identifiers (illegal in most cases)
- Never shadow keywords with variables of the same name
- Never use `eval()` with keyword strings — it bypasses static analysis and creates security risks
- Avoid contextual keywords (`await`, `yield`) outside their intended context to prevent confusing code

---

## 2. First Principles

Let's start from zero.

A programming language is a set of rules for writing instructions that a computer can execute. These rules form a **grammar** — analogous to the grammar of a natural language.

In English, certain words are reserved for specific grammatical roles: "is" is a verb, "the" is an article, "and" is a conjunction. You can't name a person "The" because that would confuse communication.

Similarly, in JavaScript, certain words are reserved by the language grammar:
- `if` signals a conditional branch — it's part of an `if` statement
- `for` signals a loop — it's part of a `for` statement
- `let` signals a variable declaration
- `return` signals a function return value
- `class` signals a class definition

The JavaScript specification (ECMAScript) defines a set of tokens called **reserved words**. These tokens are part of the lexical grammar — they are recognized at the tokenization stage, before parsing.

When the scanner/lexer reads source code character by character, it groups characters into tokens. For example:
```
Input: "let x = if + 1;"
Tokens: {type: "Keyword", value: "let"}
        {type: "Identifier", value: "x"}
        {type: "Punctuator", value: "="}
        {type: "Keyword", value: "if"}   ← Not an identifier! It's a keyword.
        {type: "Punctuator", value: "+"}
        {type: "NumericLiteral", value: "1"}
        {type: "Punctuator", value: ";"}
```

This code would be **syntactically invalid** because `if` is being used in an expression context where it doesn't make sense — `if` can only appear as part of an `if` statement.

The key insight: **the lexer decides whether a token is a keyword or an identifier based on the exact character sequence**. If the sequence matches a keyword, it's tokenized as a `Keyword` token. If not, it's an `Identifier`. The parser then enforces where keywords can and cannot appear.

---

## 3. Real World Analogy

**Analogy: Traffic Signs and Road Rules**

| Real World | JavaScript |
|---|---|
| Stop sign (`STOP`) | Keyword `if` — has a fixed meaning, can't be used as a street name |
| Speed limit sign (`SPEED LIMIT 55`) | Keyword `for` — specific syntax for a specific purpose |
| Road names like "Elm Street" | Identifiers — names we create for our variables/functions |
| You can't name a street "STOP" | You can't use keywords as identifiers |
| "Yield" is a traffic sign word | `yield` is a keyword in generators |
| Detour sign — redirects traffic | `return` — redirects execution flow |
| "No U-turn" sign | `const` — prevents reassignment |
| Highway exit sign — leaves the highway | `break` — exits a loop |
| Merge sign — combines lanes | `import` — brings in external modules |
| New traffic law introduced | New keyword added to ECMAScript spec (like `let` in ES6) |
| Everyone must follow traffic laws | All JavaScript engines must implement keywords per spec |

If you tried to name a street "STOP," postal workers and GPS systems would be confused — is it a stop sign or a street name? That's exactly why keywords can't be identifiers.

---

## 4. Comparison Table

| Feature | JavaScript Keywords | Identifiers | Reserved Words (Future) |
|---|---|---|---|
| Definition | Tokens with special syntactic meaning | User-chosen names for variables, functions, etc. | Words reserved for potential future use |
| Can be used as variable name? | No (almost all) | Yes | No (in strict mode) |
| Examples | `if`, `for`, `let`, `class`, `return` | `userName`, `age`, `myFunction` | `enum`, `implements`, `interface` |
| Count (ES2023) | ~44 | Unlimited | ~8 (in strict mode) |
| Case-sensitive | Yes — `If` is an identifier, `if` is a keyword | Yes | Yes |
| Can be property names? | Yes — `obj.class` is valid | N/A | Yes |
| Part of grammar | Core syntax | User-defined naming | Reserved for future language expansion |
| Changes over time | New ones added in new ECMAScript versions | None — completely user-defined | Moved to actual keywords when adopted |

---

## 5. Problem Statement

**What problem existed before this concept?**
Before high-level languages with keywords, programmers wrote in assembly and machine code. Control flow was implemented with `JMP` (jump) instructions and conditional jumps. Reading code was like reading a book with every page numbered but no chapter titles, no paragraph breaks, no punctuation.

```assembly
; Assembly — no keywords, all instructions
CMP AX, 5
JLE label_else   ; "if (ax <= 5) goto else" — mentally parsed
MOV BX, 10
JMP label_end
label_else:
MOV BX, 20
label_end:
```

**Why did previous approaches fail?**
- No readability — every program required manual mental parsing
- No structure — goto/jump-based flow is impossible to reason about at scale
- Impossible to validate — no compiler can check that your jumps are correct
- Not portable — different CPU architectures used different instruction sets

**Why did this solution become popular?**
Keywords allow programming languages to express intent rather than machine operations. `if (x > 5) { ... }` is self-documenting. The parser validates structure. The compiler handles translation to machine code. Every popular language adopted keywords because they're the foundation of readable, maintainable, verifiable code.

---

## 6. Internal Working

### Lexing Phase

The JavaScript engine's scanner reads source code character by character. It uses a state machine to determine token types.

```
For input "if (x > 5) { return x; }"

Character-by-character scan:

'i' → Start of potential keyword or identifier
'f' → Matches "if" → Check if next char is valid identifier continuation
' ' → Space follows "if" → Not an identifier. Emit KEYWORD_IF token.
'(' → Emit PUNCTUATOR_LPAREN
'x' → Not a keyword → Emit IDENTIFIER "x"
'>' → Emit PUNCTUATOR_GT
'5' → Emit NUMBER 5
')' → Emit PUNCTUATOR_RPAREN
'{' → Emit PUNCTUATOR_LBRACE
'r' → Start of potential keyword
'e' → Part of "return"
't' → Part of "return"
'u' → Part of "return"
'r' → Part of "return"
'n' → Matches "return" → Check next char
' ' → Space → Emit KEYWORD_RETURN token
'x' → Not a keyword → Emit IDENTIFIER "x"
';' → Emit PUNCTUATOR_SEMICOLON
'}' → Emit PUNCTUATOR_RBRACE
EOF → Emit EOF
```

### Parsing Phase

The parser receives the token stream and builds an AST according to the grammar:

```javascript
// if (x > 5) { return x; }
// Becomes AST:
{
  type: "IfStatement",
  test: {
    type: "BinaryExpression",
    operator: ">",
    left: { type: "Identifier", name: "x" },
    right: { type: "Literal", value: 5 }
  },
  consequent: {
    type: "BlockStatement",
    body: [{
      type: "ReturnStatement",
      argument: { type: "Identifier", name: "x" }
    }]
  },
  alternate: null
}
```

### Keyword Categories by Engine Handling

**Reserved Keywords:** The lexer will NEVER produce an Identifier token for these. `if`, `for`, `while`, `return`, `class`, etc. If you try `let if = 5;`, the lexer sees `if` as KEYWORD_IF, and the parser sees `let KEYWORD_IF` which is invalid syntax → SyntaxError.

**Contextual Keywords:** The lexer MAY produce an Identifier token depending on context. `await` is an identifier outside async functions but a keyword inside. `yield` is similar for generators. The parser decides based on syntactic context.

**Future Reserved Words:** `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`, `static` — treated as keywords in strict mode, but may be identifiers in sloppy mode. The engine reserves them so future language versions can use them without breaking existing code.

### Memory Impact

Keywords themselves exist only in:
- **Engine source code** (C++ code that implements the lexer)
- **Keyword lookup table** (a hash map or trie in the engine for O(1) keyword matching)
- **Token stream** (temporary, per-file)
- **AST** (temporary, per-parsing-session)

They do NOT exist at runtime in the compiled bytecode — they're compiled away.

---

## 7. Architecture Breakdown

Keywords are embedded in the language's architecture at every level:

```
┌──────────────────────────────────────────────────────────┐
│                  SOURCE CODE LAYER                        │
│  Keywords appear as-is in the text you write              │
│  if (condition) { ... }                                   │
│  for (let i = 0; i < n; i++) { ... }                     │
└──────────────────────┬───────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────┐
│                LEXICAL ANALYSIS LAYER                     │
│  Scanner identifies keyword tokens using a trie/FSM      │
│  "if" → Token.KEYWORD_IF                                 │
│  "for" → Token.KEYWORD_FOR                               │
│  "async" → Token.KEYWORD_ASYNC (or IDENTIFIER outside fn)│
└──────────────────────┬───────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────┐
│                 SYNTAX ANALYSIS LAYER                     │
│  Parser uses keyword tokens to build AST:                │
│  IfStatement, ForStatement, ClassDeclaration, etc.       │
│  Grammar production rules govern valid keyword placement │
└──────────────────────┬───────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────┐
│                 SEMANTIC ANALYSIS LAYER                   │
│  Scope analysis, type checking (TypeScript)              │
│  "class" creates a class scope                           │
│  "import" resolves module dependencies                   │
│  "const" prevents reassignment in the binding            │
└──────────────────────┬───────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────┐
│                 BYTECODE GENERATION LAYER                 │
│  Keywords are compiled into specific bytecode opcodes:   │
│  if → JumpIfFalse [offset]                               │
│  for → Inc, Test, JumpIfTrue [loop]                      │
│  return → Return [value]                                  │
└──────────────────────┬───────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────┐
│                 RUNTIME / EXECUTION LAYER                 │
│  Keywords no longer exist as text — only as opcodes      │
│  Engine (V8/SpiderMonkey) executes the bytecode          │
└──────────────────────────────────────────────────────────┘
```

---

## 8. End-to-End Walkthrough

Let's trace this code from source to execution:

```javascript
async function fetchUser(id) {
  const url = `/api/users/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
```

**Step 1 — Character Stream:** The source text is read as a UTF-16 string.

**Step 2 — Lexing:** The scanner identifies keywords:
- `async` → Contextual keyword (keyword because before `function`)
- `function` → KEYWORD_FUNCTION
- `const` → KEYWORD_CONST
- `try` → KEYWORD_TRY
- `await` → Contextual keyword (keyword because inside async function)
- `if` → KEYWORD_IF
- `throw` → KEYWORD_THROW
- `new` → KEYWORD_NEW
- `return` → KEYWORD_RETURN
- `catch` → KEYWORD_CATCH
- `null` → KEYWORD_NULL (literal keyword)

**Step 3 — Parsing:** AST nodes built:
- AsyncFunctionDeclaration
- VariableDeclaration (const)
- TryStatement (block → handler → finalizer)
- IfStatement
- ThrowStatement
- NewExpression
- ReturnStatement
- CallExpression
- MemberExpression (console.error)

**Step 4 — Scope Analysis:**
- `function fetchUser` → function scope created
- `const url` → block-scoped to function body (TDZ)
- `const response` → block-scoped to try block (TDZ)
- `error` → catch block parameter

**Step 5 — Bytecode Compilation:** V8 Ignition generates bytecode:
- `async` → Creates AsyncGenerator object
- `const` → Creates binding, TDZ check on access
- `if` → TestAndBranch opcode
- `try` → TryCatch handler setup
- `await` → SuspendGenerator + ResumeGenerator
- `return` → Return opcode

**Step 6 — Execution:**
- `fetchUser` call → creates new execution context
- `const url` → binding created, initialized
- `try` → push try-catch handler onto control stack
- `await fetch(url)` → suspends function, returns pending promise
- On resolution → function resumes
- `if (!response.ok)` → conditional branch
- `throw` → control jumps to catch handler
- `catch` → error bound to `error` identifier
- `return null` → function returns, execution context popped

---

## 9. Code Walkthrough

Let's build a production-grade API route handler that demonstrates most JavaScript keywords in realistic usage:

### api/userController.js

```javascript
// Keywords: import, default, from, const, async, await, try, catch, throw, new, if, else, return
import { getUserById } from '../services/userService.js';
import { ValidationError } from '../errors/AppError.js';

export default async function getUserByIdHandler(request, response) {
  try {
    const { id } = request.params;
    
    if (!id || typeof id !== 'string') {
      throw new ValidationError('Invalid user ID');
    }

    const user = await getUserById(id);

    if (!user) {
      response.status(404).json({ error: 'User not found' });
      return;
    }

    // Keywords: delete — can be a statement but not an identifier
    delete user.passwordHash;
    
    response.status(200).json({ data: user });
  } catch (error) {
    // Keywords: instanceof, typeof
    if (error instanceof ValidationError) {
      response.status(400).json({ error: error.message });
      return;
    }

    // Keywords: let, switch, case, break, default
    let statusCode = 500;
    switch (true) {
      case error.code === 'NOT_FOUND':
        statusCode = 404;
        break;
      case error.code === 'RATE_LIMITED':
        statusCode = 429;
        break;
      default:
        statusCode = 500;
    }

    response.status(statusCode).json({
      error: 'Internal server error',
      requestId: request.id
    });
  }
}
```

### services/userService.js

```javascript
// Keywords: export, async, function, const, await, for, of, in, continue, break
import { userRepository } from '../repositories/userRepository.js';
import { cacheService } from './cacheService.js';

export async function getUserById(id) {
  // Check cache first
  const cached = await cacheService.get(`user:${id}`);
  if (cached) {
    return cached;
  }

  const user = await userRepository.findById(id);
  if (!user) {
    return null;
  }

  // Sanitize — remove fields that shouldn't be exposed
  const allowedFields = ['id', 'name', 'email', 'role'];
  const sanitized = {};

  // Keywords: for, of, in (in checks property existence)
  for (const field of allowedFields) {
    if (field in user) {
      sanitized[field] = user[field];
    }
  }

  // Continue/break — less common in modern JS, but valid
  for (const key in user) {        // eslint-disable-line
    if (key.startsWith('_')) {     // Skip private-ish fields
      continue;
    }
    if (key === 'dangerousField') {
      break;                       // Stop processing entirely
    }
  }

  await cacheService.set(`user:${id}`, sanitized);
  return sanitized;
}
```

### repositories/userRepository.js

```javascript
// Keywords: class, extends, constructor, super, this, static, get, set
import { db } from '../config/database.js';

class BaseRepository {
  constructor(modelName) {
    this.modelName = modelName;
    this.collection = db.collection(modelName);
  }

  async findById(id) {
    return this.collection.findOne({ id });
  }
}

class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }

  // Static method — called on class, not instance
  static get COLLECTION_NAME() {
    return 'users';
  }

  // Getter — accessed as property, not method
  get collectionSize() {
    return this.collection.countDocuments();
  }

  // Setter — allows assignment syntax
  set collectionSize(value) {
    console.warn('collectionSize is read-only');
  }
}

export const userRepository = new UserRepository();
```

### errors/AppError.js

```javascript
// Keywords: class, extends, constructor, super, this
export class AppError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message) {
    super(message, 400, 'VALIDATION_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
  }
}
```

### config/database.js

```javascript
// Keywords: const, import, from, export, default
import { createClient } from 'some-db-driver';  // hypothetical

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/app';
const client = createClient(DB_URL);

export const db = client.db();
export default client;
```

### Full Keyword Inventory from This Codebase

| Keyword | Location | Purpose |
|---|---|---|
| `import` | Multiple files | Import module bindings |
| `export` | Multiple files | Export module bindings |
| `default` | Controllers, config | Default export |
| `from` | All imports | Module specifier |
| `async` | Controllers, services | Async function declaration |
| `await` | Controllers, services | Await promise resolution |
| `function` | Controllers | Function declaration |
| `const` | Multiple files | Block-scoped constant binding |
| `let` | Controller | Mutable block-scoped binding |
| `var` | Not used | (Shouldn't be in new code) |
| `if` / `else` | Controllers, services | Conditional execution |
| `for` | Services | Loop over iterable |
| `of` | Services | Iterate values |
| `in` | Services | Check property existence |
| `continue` | Services | Skip to next iteration |
| `break` | Services | Exit loop |
| `switch` | Controller | Multi-branch conditional |
| `case` | Controller | Branch case in switch |
| `default` | Controller | Default case in switch |
| `try` / `catch` | Controller | Error handling |
| `throw` | Controller | Throw custom error |
| `new` | Controller, repositories | Instantiate objects |
| `class` | Repositories, errors | Class declaration |
| `extends` | Repositories, errors | Inheritance |
| `constructor` | Repositories, errors | Class constructor |
| `super` | Repositories, errors | Call parent class |
| `this` | Repositories | Instance reference |
| `static` | Repositories | Static method/property |
| `get` | Repositories | Getter definition |
| `set` | Repositories | Setter definition |
| `instanceof` | Controller | Type checking |
| `typeof` | Controller | Type string check |
| `delete` | Controller | Delete property |
| `return` | Multiple files | Return value from function |
| `null` | Multiple files | Null literal |

---

## 10. Request Pipeline — ASCII Diagram

```
HTTP Request
     │
     ▼
┌──────────────────────┐
│  Router matches URL  │
│  → getUserByIdHandler│
└─────────┬────────────┘
          │
          ▼
┌──────────────────────┐
│  try {               │  ← try keyword sets up handler
│    const id = ...    │  ← const declares immutable binding
│                      │
│    if (!id)          │  ← if keyword checks condition
│      throw new ...   │  ← throw new — exception + instantiation
│                      │
│    const user =      │
│      await           │  ← await — suspend/resume
│        getUserById() │
│                      │
│    if (!user)        │
│      return          │  ← return — early exit
│                      │
│    delete user.pw    │  ← delete — property removal
│    return response   │
│  } catch (error) {   │  ← catch — error binding
│    if (error         │
│      instanceof ...) │  ← instanceof — type check
│      return          │
│    switch (code) {   │  ← switch — multi-branch
│      case ...:       │
│        break         │  ← break — exit switch
│      default:        │  ← default — fallback
│    }                 │
│  }                   │
└─────────┬────────────┘
          │
          ▼
┌──────────────────────┐
│  getUserById(id)     │
│  try cache → miss    │
│  DB query → hit      │
│  for (field of ...)  │  ← for-of — iterate array
│    if (field in ...) │  ← in — property check
│  return sanitized    │
└─────────┬────────────┘
          │
          ▼
┌──────────────────────┐
│  UserRepository      │
│  extends BaseRepo    │  ← extends — inheritance
│  super('users')      │  ← super — parent constructor
│  findById(id)        │
│  → DB.findOne({id})  │
└─────────┬────────────┘
          │
          ▼
       Response JSON
```

---

## 11. Data Flow

The data flow for a keyword like `if` is entirely syntactic — it doesn't process data, it directs control flow:

```
Source:  if (!response.ok) { throw new Error(...); }

Lexer:   [KEYWORD_IF, PUNCTUATOR_NOT, IDENTIFIER, PUNCTUATOR_DOT, ...]

Parser:  {
           type: "IfStatement",
           test: { type: "UnaryExpression", operator: "!", ... },
           consequent: { type: "ThrowStatement", ... }
         }

Bytecode:
  GetProperty response, "ok"     → Load response.ok
  JumpIfTrue +5                  → If truthy, skip throw
  GetGlobal Error                 → Load Error constructor
  Push "Failed to fetch"          → Push error message
  Construct 1                     → new Error("Failed to fetch")
  Throw                           → Throw exception

Execution:
  → Loads response.ok
  → If true → skip throw → continue
  → If false → create Error → throw → jump to catch
```

For declaration keywords like `const`:

```
Source:  const url = `/api/users/${id}`;

Lexer:   [KEYWORD_CONST, IDENTIFIER, PUNCTUATOR_ASSIGN, TEMPLATE_LITERAL]

Parser:  {
           type: "VariableDeclaration",
           kind: "const",                    ← This is how "const" is stored
           declarations: [{
             type: "VariableDeclarator",
             id: { type: "Identifier", name: "url" },
             init: { type: "TemplateLiteral", ... }
           }]
         }

Bytecode:
  CreateRestrictedProperty url, const        ← Creates immutable binding
  TemplateLiteral ...                        ← Evaluate template
  InitConst url                              ← Initialize (single assignment)
  // Subsequent assignment attempts → Runtime TypeError
```

---

## 12. Production Best Practices

### Coding Practices
- **Never use keywords as identifiers** — it's illegal for most keywords and confusing for contextual ones
- **Always use `const` by default**, `let` when reassignment is needed, never `var` in new code
- **Use `===` not `==`** — always strict equality
- **Always use `async/await` over `.then()` chains** — they're keywords that make async code linear
- **Use `class` for OOP patterns** — it replaces constructor functions and makes inheritance explicit
- **Always use `import`/`export` (ESM)** over `require()` (CJS) in modern Node.js projects
- **Use `for...of` for iterating arrays**, not `for...in` (which iterates keys as strings)

### Security
- **Never use `eval()`** — it parses arbitrary strings as code, including keywords, creating XSS and code injection vectors
- **Be careful with `new Function()`** — similar to `eval()`, it creates function bodies from strings
- **Avoid `with`** — it makes scope chain unpredictable and is forbidden in strict mode
- **Use `Object.freeze()` for configuration objects** — not a keyword but prevents mutation

### Performance
- **`async` functions** have slight overhead (creates a promise). Don't make every tiny function `async`
- **`for...of` on arrays** is slightly slower than a traditional `for` loop in V8 (negligible for 99% of cases)
- **`try/catch` inside hot loops** prevents V8 optimization. Move try/catch outside loops when possible
- **`delete` on objects** deoptimizes V8 hidden classes. Use `null` assignment or `Map` instead
- **`const` vs `let`** — same performance in modern engines, but `const` helps the engine with invariant tracking

### Logging
```javascript
// When logging around keywords, be explicit about which keyword path was taken
logger.info('if-branch: user found', { userId });
logger.warn('else-branch: user not found', { userId });
logger.debug('for-loop: processing field', { field });
```

### Validation
```javascript
// Validate before using keywords that require conditions
if (typeof input !== 'object' || input === null) {
  throw new ValidationError('Input must be an object');
}
```

### Error Handling with Keywords
```javascript
// Use the right try/catch strategy
// BAD: Catching and ignoring
try { risky(); } catch (e) {}  // Silent failure — production bug

// GOOD: Handle specific error types
try {
  await doRiskyWork();
} catch (error) {
  if (error instanceof NetworkError) {
    logger.warn('Network issue, retrying...', { error });
    await retry(doRiskyWork);
  } else if (error instanceof ValidationError) {
    // Expected validation failure — no alert needed
    return { error: error.message };
  } else {
    // Unexpected — alert on call
    logger.error('Unexpected error in riskyWork', { error });
    throw error;  // Re-throw for global handler
  }
}
```

### Maintainability
- **One keyword per line** — `const x = a ? b : c` is compact but harder to debug. Break ternary into `if/else`
- **Avoid deep nesting** — more than 3 levels of `if`/`try`/`for` nesting suggests a refactor opportunity
- **Use early `return`** — reduces `else` indentation
- **Use guard clauses** — `if (!condition) return;` rather than wrapping everything in `if (condition) { ... }`

---

## 13. Common Production Mistakes

### Mistake 1: Forgetting `await`
```javascript
// Junior
const user = getUser(id);  // Returns Promise, not user!
res.json(user);            // Sends Promise object as JSON

// Senior
const user = await getUser(id);  // Waits for resolution
res.json(user);
```

### Mistake 2: Using `var` thinking it's block-scoped
```javascript
// Junior
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);  // Prints 5, 5, 5, 5, 5
}

// Senior
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);  // Prints 0, 1, 2, 3, 4
}
```

### Mistake 3: `==` instead of `===`
```javascript
// Junior
if (user.id == '123') {  // True even if id is number 123
  // ...
}

// Senior
if (user.id === '123') {  // Strict — checks type AND value
  // ...
}
```

### Mistake 4: Shadowing keywords with identifiers
```javascript
// Don't do this — confusing and error-prone
const undefined = 'hello';    // Shadows global undefined — possible in sloppy mode
const NaN = 42;               // Shadows global NaN
const name = 'test';          // 'name' is not reserved but exists on window
```

### Mistake 5: Misunderstanding `this` in different contexts
```javascript
// Junior — loses this context
class UserService {
  constructor(api) { this.api = api; }
  
  getUsers() {
    return this.api.fetch('/users')
      .then(function(users) {  // 'this' is undefined here (strict mode)
        return this.process(users);  // TypeError
      });
  }
}

// Senior — preserves this
class UserService {
  constructor(api) { this.api = api; }
  
  async getUsers() {
    const users = await this.api.fetch('/users');  // 'this' preserved
    return this.process(users);
  }
}
```

### Mistake 6: Using `delete` on objects in hot paths
```javascript
// Junior — deoptimizes V8 hidden class
function updateUser(user) {
  delete user.tempField;  // Changes hidden class — slow
}

// Senior — use null/undefined instead, or use Map
function updateUser(user) {
  user.tempField = null;  // Keeps hidden class intact
  // OR: Omit from response using spread/destructuring
}

// Alternative: Use Map which has better delete performance
const cache = new Map();
cache.set('key', value);
cache.delete('key');  // O(1) with Map
```

### Mistake 7: Overusing `async` on tiny functions
```javascript
// Junior
const add = async (a, b) => a + b;  // Returns Promise<number>, not number
const result = await add(1, 2);      // Works but unnecessary overhead

// Senior
const add = (a, b) => a + b;  // Simple, synchronous
```

### Mistake 8: Using `for...in` on arrays
```javascript
// Junior
const arr = [10, 20, 30];
for (const index in arr) {
  console.log(index, arr[index]);  // "0", "1", "2" — strings, not numbers
  // Also iterates over any enumerable properties added to the array
}

// Senior
for (const value of arr) {
  console.log(value);  // 10, 20, 30 — actual values
}
```

---

## 14. Debugging Guide

### Common Errors Involving Keywords

**SyntaxError: Unexpected token**
```javascript
// If you see this with a keyword name, you're using a keyword as an identifier
let class = 'first';  // SyntaxError: Unexpected token 'class'
```

**SyntaxError: await is only valid in async functions**
```javascript
function fetchData() {
  const data = await fetch('/api');  // Error!
}
// Fix: Make the function async
async function fetchData() {
  const data = await fetch('/api');  // OK
}
```

**ReferenceError: x is not defined**
```javascript
// You used an identifier that doesn't exist
console.log(undeclaredVar);  // ReferenceError
```

**TypeError: Assignment to constant variable**
```javascript
const MAX = 100;
MAX = 200;  // TypeError: Assignment to constant variable
// Fix: Use let if you need reassignment
```

**TypeError: x is not a function**
```javascript
const obj = {};
obj();  // TypeError: obj is not a function
```

**SyntaxError: Illegal return statement**
```javascript
// return outside a function
if (true) {
  return;  // Error! (unless in a function)
}
```

**SyntaxError: Unexpected strict mode reserved word**
```javascript
'use strict';
const private = 'test';  // 'private' is a future reserved word in strict mode
```

### Debugging Checklist
1. Is it a reserved keyword used as an identifier? → Rename
2. Is `await` used inside a non-async function? → Add `async`
3. Is `return` used outside a function? → Check braces/scope
4. Is `this` behaving unexpectedly? → Check arrow vs regular function, call context
5. Is `const` being reassigned? → Use `let`
6. Is `==` causing type coercion bugs? → Use `===`
7. Is `eval()` being used with user input? → Replace with safer alternative
8. Is `delete` causing performance issues? → Use `Map` or null assignment
9. Is `for...in` iterating over unexpected properties? → Use `for...of` or `Object.keys()`
10. Is `instanceof` failing across realms (iframes, different windows)? → Use `Symbol.toStringTag` or duck typing

### Chrome DevTools Approach
1. Open Sources panel
2. Set breakpoint near the keyword causing issues
3. Use Scope panel to inspect all identifiers in current scope
4. Step through with F10 (Step Over) to see how keywords affect control flow
5. Watch panel to track specific identifier values

---

## 15. Performance Considerations

| Keyword | Performance Impact | Notes |
|---|---|---|
| `try/catch` | Can prevent V8 optimization of the containing function | V8 deopts functions with try/catch in the hot path. Move try/catch to wrapper functions. |
| `async/await` | Small overhead (~50 bytes per async function, ~3-5 extra JS ops) | Worth it for readability. Don't use for synchronous operations. |
| `for...of` | Slightly slower than indexed `for` loop (~10-15% on V8) | Iterator protocol overhead. Only matters in hot loops (100k+ iterations). |
| `for...in` | Slowest iteration method | Avoid for performance-critical array iteration. |
| `class` | Same as constructor functions after optimization | V8 optimizes both to the same hidden class structure. |
| `delete` | Deoptimizes V8 hidden classes | Triggers dictionary mode on objects. Use `Map.delete()` instead for frequent deletion. |
| `eval()` | Prevents optimization of the entire surrounding scope | V8 can't optimize any function containing `eval()`. |
| `with` | Disables all scope optimizations | Deprecated, forbidden in strict mode, terrible for performance. |
| `const` | Same as `let` | Both compile to the same bytecode in V8. |
| `typeof` | Very fast (~1 CPU instruction on modern engines) | O(1), no performance concern. |
| `instanceof` | Fast for simple prototype chains | Slower for deeply nested chains or cross-realm objects. |
| `new` | Depends on constructor complexity | No inherent overhead beyond function call + object allocation. |
| `switch` | Similar to `if/else if` chains | V8 may optimize switch to jump table for dense integer cases. |

### When Performance Matters
```javascript
// HOT PATH — prefer indexed for loop
for (let i = 0; i < arr.length; i++) {
  process(arr[i]);
}

// COLD PATH — readability preferred
for (const item of arr) {
  process(item);
}
```

---

## 16. System Design Perspective

### Microservices
Keywords shape service boundaries at the syntax level:
- `import` / `export` define module contracts — every microservice uses these for its public API
- `async` / `await` are essential for I/O-bound operations (database, HTTP, message queues)
- `class` is used for service, repository, and controller abstractions
- `try/catch` is critical for graceful error handling in distributed systems

### Distributed Systems
- `async/await` is the foundation of non-blocking I/O — a Node.js microservice handles thousands of concurrent requests using async I/O
- `Promise.all([...])` enables parallel distributed calls:
```javascript
const [userData, orderData, inventoryData] = await Promise.all([
  userService.getUser(id),
  orderService.getOrders(id),
  inventoryService.checkStock(id)
]);
```

### Cloud / Serverless
- `export async function handler(...)` — the AWS Lambda/Cloud Function entry point pattern
- `import` connects to cloud SDKs (AWS SDK, Google Cloud, Azure SDK)
- `const` for configuration loaded from environment variables

### High Availability
- `try/catch` around every external call prevents cascading failures
- `async/await` enables connection pooling and timeout patterns:
```javascript
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}
```

### Caching
- `const` for immutable cache keys
- `Map` (not a keyword but a built-in) for efficient cache storage with `get`/`set`/`delete`
- `if/else` for cache hit/miss logic

### Message Queues
- `async/await` for publishing and consuming messages
- `try/catch` for handling poison messages (messages that fail processing)

---

## 17. Testing Perspective

### Unit Testing Keywords in Code
```javascript
describe('getUserByIdHandler', () => {
  it('should return 404 when user not found', async () => {
    const req = { params: { id: 'nonexistent' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await getUserByIdHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
  });
});
```

### Testing `switch` Statements
```javascript
// Test all branches of a switch
describe('status code mapping', () => {
  it.each([
    ['NOT_FOUND', 404],
    ['RATE_LIMITED', 429],
    ['UNKNOWN', 500],
    [null, 500],
  ])('maps %s to %i', (code, expectedStatus) => {
    const error = { code };
    let statusCode;
    switch (true) {
      case error.code === 'NOT_FOUND':
        statusCode = 404;
        break;
      case error.code === 'RATE_LIMITED':
        statusCode = 429;
        break;
      default:
        statusCode = 500;
    }
    expect(statusCode).toBe(expectedStatus);
  });
});
```

### Testing `async/await` Error Paths
```javascript
describe('async error handling', () => {
  it('should catch and handle errors', async () => {
    const getUserById = jest.fn().mockRejectedValue(
      new Error('Database connection failed')
    );

    await expect(
      getUserByIdHandler(
        { params: { id: '123' } },
        { status: jest.fn().mockReturnThis(), json: jest.fn() }
      )
    ).resolves.not.toThrow();  // Handler catches and handles the error
  });
});
```

### Edge Cases to Test
- `if` with falsy values: `0`, `''`, `null`, `undefined`, `NaN`, `false`
- `switch` without matching `case` — verify `default` is hit
- `try/catch` when no error occurs — verify normal flow
- `async` function that returns synchronously — verify it still returns a promise
- `for...of` on empty iterable — verify loop body never runs
- `delete` on non-existent property — returns true, no error
- `typeof` null — returns `"object"` (historical bug)
- `instanceof` with cross-realm objects — may fail

### Mocking Considerations
- When using `jest.fn().mockRejectedValue()`, the function must be `await`-ed in the test
- Mock `new` constructors: `jest.fn()` can replace a constructor, but test that `new` was called correctly
- Test that `throw` actually triggers the expected `catch` path

---

## 18. Real Project Lifecycle

| Phase | Keyword Relevance |
|---|---|
| **Requirement Analysis** | Identify which language features are needed: `async` for I/O, `class` for domain models, `if/else` for business rules |
| **Architecture Design** | Choose module system: `import/export` (ESM) vs `require` (CJS). Decide on `async/await` for service layer. |
| **Development** | Every line uses keywords. Most argued: `const` vs `let`, `async` vs sync, `class` vs functions. |
| **Code Review** | Top review items: `==` vs `===`, missing `await`, `var` usage, `eval()` usage, `delete` in hot paths. |
| **Testing** | Test every keyword code path: `if/else` branches, `try/catch` errors, `switch` cases, loop iterations. |
| **CI/CD** | ESLint rules catch keyword misuse: `no-var`, `no-eval`, `no-with`, `no-new-object`, `no-array-constructor`. |
| **Deployment** | Syntax errors involving keywords crash the entire process. Always lint before deploy. |
| **Monitoring** | `try/catch` blocks feed error tracking systems (Sentry, Datadog). Uncaught `throw` shows up as unhandled rejection. |
| **Production Support** | Most common keyword-related bugs: missing `await`, wrong `this` binding, `const` reassignment. |

---

## 19. Real Industry Interview Questions

**Common Interview Question:** "Name all the ways to declare a variable in JavaScript and the differences between them."

**Common Interview Question:** "What's the difference between `==` and `===`?"

**Common Interview Question (Amazon):** "Write a function that retries an async operation 3 times using `async/await`, `try/catch`, and a `for` loop."

**Common Interview Question (Meta):** "What does this code output and why?"
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Common Interview Question (Google):** "What's the Temporal Dead Zone and which keywords are affected by it?"

**Common Interview Question (Microsoft):** "Explain `this` binding in arrow functions vs regular functions. Show code examples."

**Common Interview Question (Netflix):** "How would you implement a class that can only be instantiated once (singleton) using `class`, `constructor`, `static`, and `new`?"

**Common Interview Question:** "What keyword would you use to prevent array mutation? Can `const` do that?"

---

## 20. Interview Questions by Experience

### 0–2 Years
- "What is a keyword in JavaScript?"
- "Can you use `if` as a variable name? Why or why not?"
- "What's the difference between `let`, `const`, and `var`?"
- "What does `typeof` do?"
- "What's the difference between `break` and `continue`?"
- "What does `return` do in a function?"

### 2–5 Years
- "Explain the temporal dead zone with `let` and `const`."
- "What's the difference between `for...in` and `for...of`?"
- "How does `this` differ in arrow functions vs regular functions?"
- "What happens when you `await` a non-Promise value?"
- "Explain `instanceof` and when it can fail."

### 5+ Years
- "How does V8 handle the `delete` keyword at the hidden class level?"
- "Explain why `eval()` is harmful and how the engine deoptimizes code containing it."
- "What are contextual keywords? Give examples of when `await` is NOT a keyword."
- "How does `new` keyword work internally? Describe the 4 steps."
- "Why does `typeof null === 'object'`? What's the historical reason?"

### Senior Engineer
- "Design a safe alternative to `eval()` for evaluating mathematical expressions."
- "How would you implement a polyfill for `async/await` using generators and promises?"
- "Your team has a legacy codebase using `var` everywhere. How would you systematically migrate to `let`/`const`?"
- "Explain how the engine's lexical environment interacts with `with` and why it's deprecated."

### Staff Engineer / Architect
- "If you were designing a new keyword for ECMAScript, what would it be and why? Walk through the TC39 proposal process."
- "Design a lint rule that prevents `await` in loops. What are the trade-offs?"
- "How would you architect a system where certain keywords (like `eval`, `with`, `new`) are disabled in user-submitted code?"

---

## 21. Detailed Interview Q&A

### Q: Explain the difference between `let`, `const`, and `var`.

**Why interviewer asks:** Foundation question — shows whether you understand scoping, hoisting, and TDZ.

**Expected Answer:**
- **`var`**: Function-scoped. Hoisted and initialized to `undefined`. Can be redeclared. Creates property on `window` in global scope. Pre-ES6.
- **`let`**: Block-scoped. Hoisted but NOT initialized (TDZ). Cannot be redeclared in same scope. Does not create `window` property. ES6+.
- **`const`**: Same scoping as `let`, but must be initialized at declaration. Cannot be reassigned. The value can still be mutated (objects/arrays).

**Common mistakes:**
- "`let` isn't hoisted" — it IS hoisted, just not initialized
- "`const` makes objects immutable" — no, the binding is immutable, not the value
- "Always use `const`" — good default, but `let` is appropriate when reassignment is needed

**Follow-up:**
```javascript
console.log(x); // ?
var x = 5;
// Answer: undefined (hoisted + initialized)

console.log(y); // ?
let y = 5;
// Answer: ReferenceError (TDZ)
```

**Senior Engineer answer:** Also mention that `let`/`const` in global scope DON'T create `window` properties, which prevents accidental global pollution. Mention that `const` helps engines with optimization hints (immutable binding allows invariant tracking). Mention that Babel transpiles `let` to `var` for older browsers (losing TDZ protection).

### Q: What does this code output?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Why interviewer asks (Meta/Amazon classic):** Tests understanding of `var` scoping, closures, and the event loop.

**Expected Answer:** Prints `3, 3, 3`. Reason: `var i` is function-scoped, not block-scoped. By the time the `setTimeout` callbacks execute (after 100ms), the loop has completed and `i === 3`. All three closures share the same `i`.

**Fixes:**
1. Use `let i` instead of `var i` — creates a new binding per iteration
2. Use an IIFE closure: `for (var i = 0; i < 3; i++) { (j => setTimeout(() => console.log(j), 100))(i); }`

**Follow-up:** "What if you change `var` to `let`?" → Prints `0, 1, 2`. The `let` keyword creates a new binding for each loop iteration.

**Senior Engineer answer:** Explain the spec: in `for` loops with `let`, each iteration creates a new lexical environment with the loop variable's binding copied from the previous iteration. This is why `let` works differently in `for` than in other block contexts.

---

## 22. Scenario-Based Interview Questions

### Scenario 1: Missing `await` in Production
**Question:** "A production endpoint is returning empty responses. The code looks correct to you. What's the most likely keyword-related issue?"

**Answer:** Missing `await`. The developer wrote `const user = getUser(id)` instead of `const user = await getUser(id)`. The `user` variable holds a Promise object. When the response is sent, it sends the Promise, not the resolved value.

**Debugging:** Add `console.log(user)` — if it logs `Promise { <pending> }`, you forgot `await`.

**Fix:** Add `await` before the async function call.

### Scenario 2: `this` is `undefined`
**Question:** "A class method calls another method via `this.otherMethod()`, but `this` is `undefined`. The method is passed as a callback. Explain why and fix it."

**Answer:** The function loses its `this` binding when passed as a callback:
```javascript
class Handler {
  constructor(data) { this.data = data; }
  handle() { return this.data; }
}

const h = new Handler('test');
setTimeout(h.handle, 100);  // 'this' is undefined in strict mode
```

**Fixes:**
1. Arrow function: `setTimeout(() => h.handle(), 100)`
2. Bind: `setTimeout(h.handle.bind(h), 100)`
3. Class property arrow: `handle = () => this.data`

### Scenario 3: Optimizing a Hot Loop
**Question:** "A performance-critical function uses `for...of` on a 100k-element array. Your profiling shows it's slow. How do you optimize using different keywords?"

**Answer:** Replace `for...of` with a traditional indexed `for` loop:
```javascript
// Slow
for (const item of largeArray) {
  process(item);
}

// Fast
for (let i = 0; i < largeArray.length; i++) {
  process(largeArray[i]);
}

// Fastest (cache length)
for (let i = 0, len = largeArray.length; i < len; i++) {
  process(largeArray[i]);
}
```

**Trade-off:** Micro-optimization. Only worth it if profiling confirms this is the bottleneck.

---

## 23. Rapid Fire

1. **Q:** Is `if` a valid variable name?
   **A:** No — it's a reserved keyword.

2. **Q:** Is `If` (capitalized) a valid variable name?
   **A:** Yes — keywords are case-sensitive; `If` is not the same as `if`.

3. **Q:** How many keywords does JavaScript have (approx)?
   **A:** ~44 reserved keywords in ES2023, plus 8 future reserved words in strict mode.

4. **Q:** What keyword declares an immutable binding?
   **A:** `const`.

5. **Q:** What keyword creates a new scope?
   **A:** Not a single keyword, but `let` and `const` are block-scoped; `function` and `class` create their own scopes.

6. **Q:** What keyword prevents a function from returning a value?
   **A:** `void` — `void function() { return 5; }()` returns `undefined`.

7. **Q:** What keyword throws an exception?
   **A:** `throw`.

8. **Q:** What keyword handles exceptions?
   **A:** `try` / `catch` / `finally`.

9. **Q:** Can `delete` remove a `let` variable?
   **A:** No — `delete` only removes object properties, not lexical bindings.

10. **Q:** What keyword creates an object from a constructor?
    **A:** `new`.

11. **Q:** What keyword refers to the parent class?
    **A:** `super`.

12. **Q:** What keyword stops a loop iteration and continues to the next?
    **A:** `continue`.

13. **Q:** What keyword exits a loop entirely?
    **A:** `break`.

14. **Q:** What keyword checks if an object has a specific property?
    **A:** `in` — `'key' in obj`.

15. **Q:** What keyword checks the type of a value as a string?
    **A:** `typeof`.

16. **Q:** What keyword checks if an object is an instance of a class?
    **A:** `instanceof`.

17. **Q:** What keyword is used to import module bindings?
    **A:** `import`.

18. **Q:** What keyword is used to expose module bindings?
    **A:** `export`.

19. **Q:** What keyword is contextual — sometimes a keyword, sometimes an identifier?
    **A:** `await` and `yield` — keywords inside async functions/generators, identifiers elsewhere.

20. **Q:** What keyword should you never use because it destroys performance?
    **A:** `eval()` (or `with`).

---

## 24. Interview Cheat Sheet

### 30-Second Explanation
"Keywords are reserved words in JavaScript that have special syntactic meaning. You can't use them as variable names. Examples: `if`, `for`, `let`, `const`, `function`, `class`, `return`, `import`, `export`, `async`, `await`, `try`, `catch`, `throw`, `new`, `this`, `typeof`, `instanceof`. There are about 44 reserved keywords, plus contextual keywords like `await` and `yield`."

### 2-Minute Explanation
"JavaScript keywords fall into several categories:
1. **Declaration**: `let`, `const`, `var`, `function`, `class`, `import`, `export`
2. **Control flow**: `if`, `else`, `switch`, `case`, `default`, `for`, `while`, `do`, `break`, `continue`
3. **Error handling**: `try`, `catch`, `finally`, `throw`
4. **Object/class**: `new`, `this`, `super`, `extends`, `static`, `get`, `set`
5. **Values**: `null`, `true`, `false` (these are literals, technically not keywords but reserved)
6. **Operators**: `typeof`, `instanceof`, `void`, `delete`, `in`
7. **Async**: `async`, `await`
8. **Other**: `return`, `debugger`, `yield`, `with`

Contextual keywords (`await`, `yield`) only act as keywords in specific contexts — inside async functions and generators respectively. Outside those, they can technically be identifiers (though you shouldn't use them).

Keywords are illegal as identifiers — `let class = 5` throws SyntaxError. But they CAN be property names: `obj.class = 'first'` is valid."

### 5-Minute Explanation
"Let's dive deeper into how the engine processes keywords.

The **lexer** determines whether a character sequence is a keyword or an identifier. It uses a lookup table (typically a trie or hash set) of known keywords. When it reads `return`, it checks: is this exact string a keyword? Yes → emit `KEYWORD_RETURN` token. This happens BEFORE parsing.

The **parser** then uses these keyword tokens to build the AST. `KEYWORD_IF` tells the parser to expect the `if` statement grammar: `if ( expression ) statement [else statement]`. If the tokens don't match the expected grammar (e.g., `if {`), the parser throws a SyntaxError.

For **contextual keywords** like `await`: the parser keeps track of whether we're inside an `async function`. If yes, `await` is parsed as a keyword (an `AwaitExpression`). If no, `await` is parsed as an identifier. This is handled at the parser level, not the lexer level.

The **Temporal Dead Zone** (TDZ) applies to `let` and `const`: the identifier exists in the scope from the start, but accessing it before the declaration line throws a ReferenceError. This is enforced at runtime — the engine tracks whether a binding has been initialized.

Key gotchas:
- `typeof null === 'object'` — historical bug from 1996
- `NaN !== NaN` — NaN is never equal to itself
- `undefined` is NOT a reserved word — it's a global property that can be shadowed
- `delete` only works on object properties, not variables
- `eval()` creates a new scope and deopts the containing function

### Whiteboard Explanation
```
KEYWORD CATEGORIES:

Declaration:
  let x = 1;     ← block-scoped, TDZ
  const x = 1;   ← block-scoped, TDZ, immutable binding
  var x = 1;     ← function-scoped, hoisted + initialized

Control Flow:
  if (condition) { ... }
  else { ... }
  for (let i; i < n; i++) { ... }
  while (condition) { ... }
  switch (value) { case ...: break; default: }

Error:
  try { risky() } 
  catch (err) { handle(err) } 
  finally { cleanup() }
  throw new Error("msg");

Objects:
  new Constructor()
  this.property
  super.parentMethod()
  class Child extends Parent {}

Contextual:
  await → keyword only INSIDE async function
  yield → keyword only INSIDE generator function

NEVER:
  let class = 5;     ← SyntaxError (reserved keyword)
  eval(userInput);   ← Security risk + performance deopt
```

### Senior Engineer Explanation
"At the engine level, keyword handling is a two-phase process. The **lexer** uses a minimal perfect hash or a prefix trie for O(k) keyword detection where k is the token length in characters. The keyword set is baked into the engine's C++ source code — adding a new keyword requires a spec change (TC39 proposal) and an engine update.

Contextual keywords are interesting because they represent a shift in ECMAScript design. Earlier versions used 'strict reserved words' — words that were always reserved but unused. Modern ECMAScript prefers 'contextual keywords' to avoid breaking the web. When `await` was introduced in ES2017, it couldn't be a reserved word because there was existing code using `await` as a variable name on the web (unlikely but possible). So the spec made it a keyword only inside async functions.

The performance impact of keyword misuse is significant:
- `eval()` forces V8 to fall back to the slow path for the entire containing function — no optimization, no inline caching
- `try/catch` in the hot path deopts the function to interpreter mode in V8
- `delete` on objects triggers dictionary mode, turning O(1) property access into O(n) hash lookups

In production, the most common keyword-related bug I've seen is `await` being used outside an `async` function. The error message is clear ('await is only valid in async functions') but developers often wrap the wrong function with `async`. Always trace: is the FUNCTION containing `await` marked with `async`? Not the call site, not a parent function — the exact function scope.

The `==` vs `===` debate is settled in production: always use `===`. The only exception is `== null` which checks both `null` and `undefined`. Even then, many teams forbid it for readability."

---

## 25. Common Misconceptions

### Misconception 1: "`let` is not hoisted"
**Truth:** `let` IS hoisted. The difference is it's initialized in the TDZ. `var` is hoisted AND initialized to `undefined`. `let` is hoisted but NOT initialized. Access during TDZ → ReferenceError.

### Misconception 2: "`const` means the value can't change"
**Truth:** `const` means the **binding** can't be reassigned. The **value** can mutate:
```javascript
const arr = [1, 2, 3];
arr.push(4);    // Works — mutation, not reassignment
arr = [5, 6];   // TypeError — reassignment of const binding
```

### Misconception 3: "All reserved words can't be used as property names"
**Truth:** Reserved words CAN be used as property names:
```javascript
obj.class = 'first';   // Valid
obj.return = 5;        // Valid
obj.for = 'loop';      // Valid (though ill-advised)
obj['if'] = true;      // Valid
```

### Misconception 4: "`undefined` is a reserved keyword"
**Truth:** `undefined` is NOT a keyword. It's a global property. In non-strict mode, you can reassign it (but you shouldn't). The safe way to get `undefined` is `void 0`.

### Misconception 5: "`NaN === NaN` is `true`"
**Truth:** `NaN !== NaN` by IEEE 754 spec. NaN is the only JavaScript value that isn't equal to itself. Use `Number.isNaN()` or `Object.is(NaN, NaN)` (which returns true).

### Misconception 6: "`eval()` is just a function call"
**Truth:** `eval()` is special — it's a keyword-like construct. When the engine sees `eval()`, it cannot statically analyze the string argument, so it disables all optimizations for the containing scope. `eval()` in strict mode creates its own lexical environment.

### Misconception 7: "`with` is just like dot notation"
**Truth:** `with` is terrible. It extends the scope chain with an object's properties, making all property lookups dynamic. It's forbidden in strict mode, prevents optimization, and makes code unpredictable. Never use it.

### Misconception 8: "`delete` frees memory"
**Truth:** `delete` removes a property from an object. It does NOT free memory — that's the GC's job. `delete` also deoptimizes V8 hidden classes.

### Misconception 9: "`new` is optional for constructors"
**Truth:** Forgetting `new` doesn't create a new object — it calls the function as a regular function, and `this` becomes the global object (or undefined in strict mode):
```javascript
function Person(name) { this.name = name; }
const p = Person('Alice');  // No 'new' — p is undefined, window.name = 'Alice'
```

### Misconception 10: "`async` functions run in a separate thread"
**Truth:** `async`/`await` does NOT create threads. JavaScript is single-threaded. `async` functions use the microtask queue and event loop for concurrency, not parallelism.

---

## 26. Related Concepts

| Concept | Why Learn It |
|---|---|
| **Identifiers** | Opposite of keywords — the names you create. ID rules define which characters are valid. |
| **Scoping & Hoisting** | `let`, `const`, `var` behave differently. Scopes determine where keywords take effect. |
| **Temporal Dead Zone** | Only applies to `let`/`const`. Understanding TDZ prevents ReferenceErrors. |
| **Lexical Environment** | The internal spec mechanism that tracks where keywords are valid. |
| **Grammar (Context-Free)** | How keywords define the language grammar. BNF/ENBF for `if`, `for`, `class`. |
| **AST (Abstract Syntax Tree)** | Keywords become AST node types (IfStatement, ForStatement, ClassDeclaration). |
| **Execution Context** | How `this` is determined — different rules per execution context. |
| **Event Loop / Microtasks** | `async`/`await` interacts with the microtask queue. |
| **Prototype Chain** | `instanceof` walks the prototype chain. `class` uses prototype under the hood. |
| **Strict Mode** | Changes which keywords are reserved. `'use strict'` enables future reserved words. |
| **TC39 Process** | How new keywords are proposed, discussed, and added to the spec. |

---

## 27. TL;DR

1. Keywords are reserved tokens with special syntactic meaning — you cannot use most as identifiers
2. ~44 reserved keywords in ES2023, plus ~8 future reserved words in strict mode
3. Categories: declaration, control flow, error handling, object/class, operators, async, values
4. `let`/`const` are block-scoped with TDZ; `var` is function-scoped and hoisted with `undefined`
5. `const` means immutable binding, not immutable value — objects/arrays can still mutate
6. Contextual keywords like `await` and `yield` are only keywords in specific contexts
7. Keywords CAN be used as property names: `obj.class` is valid
8. `eval()` deoptimizes the entire containing function — avoid in production
9. `delete` on objects deoptimizes V8 hidden classes — use `Map` for frequent deletions
10. `==` causes type coercion — always prefer `===`
11. `this` behavior depends on how a function is called, not where it's defined (unless arrow function)
12. `typeof null` returns `"object"` — a historical bug that can't be fixed
13. `NaN !== NaN` — check with `Number.isNaN()`
14. `new` must be used with constructors — forgetting it creates global pollution
15. `undefined` is NOT a reserved word — it's a global property that can be shadowed

---

## 28. Key Takeaways

1. **Keywords define the language's syntax** — they're the fixed vocabulary that gives JavaScript its structure
2. **Always use `const` as default, `let` when needed, never `var`** — this is the universal production convention
3. **`async`/`await` is non-blocking, not parallel** — it uses the event loop, not threads
4. **Contextual keywords require context** — `await` only works inside `async` functions; check your enclosing function
5. **`this` is dynamic** — unless you use arrow functions or `.bind()`, the caller determines `this`
6. **`===` over `==`** — type coercion is a common source of subtle bugs
7. **`delete` is not for variables** — it removes properties; can't delete `let`/`const`/`var` bindings
8. **`eval()` is the worst keyword** — security risk + performance deoptimization. Never use it.
9. **New keywords arrive via TC39** — the language evolves, and new keywords (like `let`, `class`, `async`) are added over time
10. **Understand the engine perspective** — keywords are tokenized at lexical analysis, used to build AST at parsing, and become bytecode opcodes at compilation. They vanish at runtime.
