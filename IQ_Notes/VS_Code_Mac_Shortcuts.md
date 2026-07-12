# VS Code Keyboard Shortcuts for macOS

## 1. Executive Summary

**What is it?**
VS Code keyboard shortcuts are key combinations that trigger specific editor actions — opening files, running commands, editing code, navigating windows, debugging, and more. On macOS, these heavily use `Cmd` (⌘), `Option` (⌥), `Ctrl` (⌃), and `Shift` (⇧).

**Why was it introduced?**
Keyboard shortcuts exist because mouse/trackpad interaction is significantly slower than keyboard-driven workflows. Every context switch from keyboard to mouse costs ~0.5–1 second. Developers make thousands of such switches daily, so shortcuts save massive cumulative time.

**What problem does it solve?**
It solves the speed problem. A developer who relies on mouse menus is 2–4x slower than one who uses shortcuts for common operations. Shortcuts also reduce RSI risk by minimizing mouse usage.

**When should we use it?**
- Every time you perform a repetitive action (open file, save, find, replace, format)
- During debugging (step over, continue, toggle breakpoint)
- When navigating code (go to definition, switch between files, peek)
- For editor operations (split pane, close tab, command palette)

**When should we avoid it?**
- For one-off actions you do rarely (learning a shortcut for a monthly action isn't worth it)
- When the shortcut conflicts with macOS system shortcuts
- When a mouse operation is genuinely faster (e.g., clicking a specific pixel in the gutter)

---

## 2. First Principles

A keyboard shortcut is a sequence of modifier keys (Cmd, Option, Ctrl, Shift) plus a base key (a letter, number, function key, arrow, or special key like Tab/Esc/Enter). The combination is registered with the operating system or the application and mapped to a specific command.

In VS Code on macOS:
- **Cmd (⌘)** — The primary modifier, analogous to Ctrl on Windows/Linux
- **Option (⌥)** — Secondary modifier, used for alternative actions
- **Ctrl (⌃)** — Less common, mainly for terminal and specific editor actions
- **Shift (⇧)** — Modifies actions (e.g., select while navigating, inverse behavior)
- **Fn** — Used for function keys on MacBooks with Touch Bar

VS Code is built on Electron, which intercepts keyboard events at the OS level. When you press a shortcut:
1. The OS processes the key event
2. Electron catches it before it reaches the browser
3. VS Code checks its keybinding registry (a JSON configuration)
4. If matched, the corresponding command is dispatched
5. The command executes (open file, toggle panel, run command, etc.)
6. If no match, the key event may fall through to the editor or OS

Keybindings are configurable in VS Code via `keybindings.json` — every shortcut can be remapped, disabled, or extended with conditions (when clauses).

---

## 3. Real World Analogy

**Analogy: Instrument vs. Sheet Music**

| Real World | VS Code Shortcuts |
|---|---|
| Learning where the piano keys are | Learning basic shortcuts (Cmd+S, Cmd+C/V) |
| Playing without looking at the keys | Touch-typing shortcuts — muscle memory |
| Practicing scales daily | Deliberate practice of one new shortcut at a time |
| Having to look down to find Middle C | Context switching to mouse — costs time |
| Professional pianist plays by feel alone | Expert developer uses shortcuts without thinking |
| Wrong key = wrong note | Wrong shortcut = unintended action (or nothing) |
| Shortcut notation on sheet music (p, f, crescendo) | VS Code command names (editor.action.formatDocument) |
| Learning a new piece slowly | Learning a new shortcut — slow at first, fast later |

---

## 4. Comparison Table

| Feature | VS Code (macOS) | VS Code (Windows/Linux) | Sublime Text (macOS) | IntelliJ IDEA (macOS) |
|---|---|---|---|---|
| Primary modifier | `Cmd` | `Ctrl` | `Cmd` | `Cmd` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` | `Cmd+Shift+P` | `Cmd+Shift+A` |
| Quick Open file | `Cmd+P` | `Ctrl+P` | `Cmd+P` | `Cmd+Shift+N` |
| Find in file | `Cmd+F` | `Ctrl+F` | `Cmd+F` | `Cmd+F` |
| Find in project | `Cmd+Shift+F` | `Ctrl+Shift+F` | `Cmd+Shift+F` | `Cmd+Shift+F` |
| Toggle sidebar | `Cmd+B` | `Ctrl+B` | `Cmd+K, Cmd+B` | `Cmd+1` |
| Multi-cursor | `Cmd+Opt+↑/↓` | `Ctrl+Alt+↑/↓` | `Cmd+Opt+↑/↓` | `Cmd+G` (Alt+J for select) |
| Settings | `Cmd+,` | `Ctrl+,` | `Cmd+,` | `Cmd+,` |
| Terminal toggle | `Ctrl+`` | `Ctrl+`` | None (plugin) | `Cmd+F12` |
| Format document | `Shift+Opt+F` | `Shift+Alt+F` | `Ctrl+Shift+P` → format | `Cmd+Opt+L` |
| Go to definition | `Cmd+Click` or `F12` | `Ctrl+Click` or `F12` | `Cmd+Opt+Click` | `Cmd+B` or `Cmd+Click` |
| Rename symbol | `F2` | `F2` | `Ctrl+Shift+R` | `Shift+F6` |

---

## 5. Category 1: General / Window Management

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+Shift+P` / `F1` | Command Palette | Access every VS Code command by name — the most important shortcut |
| `Cmd+P` | Quick Open | Search and open files by name (fuzzy match) |
| `Cmd+W` | Close tab | Close the current editor tab |
| `Cmd+Shift+W` | Close window | Close the entire VS Code window |
| `Cmd+N` | New file | Create a new untitled file |
| `Cmd+Shift+N` | New window | Open a new VS Code window |
| `Cmd+O` | Open file / folder | Open a file or folder dialog |
| `Cmd+Q` | Quit VS Code | Quit the application entirely |
| `Cmd+,` | Settings | Open VS Code settings UI |
| `Cmd+K, Cmd+S` | Keyboard Shortcuts | Open the keyboard shortcuts editor |
| `Cmd+B` | Toggle Sidebar | Show/hide the sidebar (explorer pane) |
| `Cmd+` `` ` `` ` | Toggle Terminal | Show/hide the integrated terminal panel |
| `Cmd+J` | Toggle Panel | Show/hide the bottom panel (terminal, output, problems) |
| `Cmd+Shift+E` | Show Explorer | Focus the file explorer sidebar |
| `Cmd+Shift+F` | Show Search | Focus the search pane across files |
| `Cmd+Shift+G` | Show Source Control | Focus the Git/source control pane |
| `Cmd+Shift+D` | Show Debug | Focus the debug/run pane |
| `Cmd+Shift+X` | Show Extensions | Focus the extensions pane |
| `Cmd+K, Z` | Zen Mode | Full-screen, distraction-free editing (Esc Esc to exit) |

---

## 6. Category 2: Navigation

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+1` / `2` / `3` | Focus Group 1/2/3 | Switch between split editor groups |
| `Ctrl+Tab` | Next Tab | Cycle through open editor tabs |
| `Ctrl+Shift+Tab` | Previous Tab | Cycle backward through tabs |
| `Cmd+\`` | Next Editor in Group | Switch to next editor in the same group |
| `Cmd+Shift+\`` | Previous Editor in Group | Switch to previous editor |
| `Cmd+Opt+→` | Navigate Forward | Go forward in navigation history |
| `Cmd+Opt+←` | Navigate Back | Go back in navigation history |
| `Cmd+Shift+O` | Go to Symbol in File | Jump to a symbol (function, class, variable) in current file |
| `Cmd+T` | Go to Symbol in Workspace | Jump to any symbol across the entire project |
| `F12` | Go to Definition | Jump to where the selected symbol is defined |
| `Cmd+Click` | Go to Definition (mouse) | Click on a symbol to jump to its definition |
| `Opt+F12` | Peek Definition | Open a definition in an inline peek window (no navigation) |
| `Shift+F12` | Go to References | Show all references to the selected symbol |
| `Cmd+Shift+.` | Go to Type Definition | Jump to the type definition of a symbol |
| `Cmd+↑` | Go to Top | Move cursor to the first line of the file |
| `Cmd+↓` | Go to Bottom | Move cursor to the last line of the file |
| `Cmd+[` | Go to Matching Bracket | Jump between matching brackets `{}`, `()`, `[]` |
| `Ctrl+G` | Go to Line | Jump to a specific line number |
| `Cmd+R` | Go to Recent Files | Shows a list of recently opened files/folders |
| `Cmd+P` then `@` | Go to Symbol (alternative) | Same as Cmd+Shift+O — fuzzy symbol search |

---

## 7. Category 3: Editing

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+X` | Cut line | Cut the entire current line (no selection needed) |
| `Cmd+C` | Copy line | Copy the entire current line |
| `Cmd+V` | Paste | Paste clipboard content |
| `Cmd+Shift+K` | Delete line | Delete the entire current line |
| `Cmd+Enter` | Insert line below | Insert a new line below the current line |
| `Cmd+Shift+Enter` | Insert line above | Insert a new line above the current line |
| `Opt+↑` | Move line up | Move the current line (or selection) up |
| `Opt+↓` | Move line down | Move the current line (or selection) down |
| `Shift+Opt+↑` | Copy line up | Duplicate the current line (or selection) above |
| `Shift+Opt+↓` | Copy line down | Duplicate the current line (or selection) below |
| `Cmd+D` | Add selection to next find | Select the next occurrence of the current word — builds multi-cursor |
| `Cmd+Shift+L` | Select all occurrences | Select ALL occurrences of the current word — multi-cursor on every match |
| `Cmd+K, Cmd+D` | Skip current occurrence | In multi-cursor mode, skip the current occurrence and add the next |
| `Opt+Click` | Insert cursor | Click to add an additional cursor at the clicked position |
| `Opt+Cmd+↑` | Insert cursor above | Add a cursor on the line above |
| `Opt+Cmd+↓` | Insert cursor below | Add a cursor on the line below |
| `Cmd+U` | Undo cursor position | Undo the last cursor operation (useful after multi-cursor mistakes) |
| `Cmd+Backspace` | Delete to start of line | Delete from cursor to the beginning of the line |
| `Cmd+Delete` / `Fn+Delete` | Delete to end of line | Delete from cursor to the end of the line |
| `Opt+Backspace` | Delete word left | Delete the word to the left of the cursor |
| `Opt+Delete` / `Opt+Fn+Delete` | Delete word right | Delete the word to the right of the cursor |
| `Cmd+Shift+\` | Go to Bracket | Jump to the matching bracket and select the content between |
| `Cmd+]` | Indent | Indent the current line or selection to the right |
| `Cmd+[` | Outdent | Indent the current line or selection to the left |
| `Cmd+/` | Toggle comment | Comment/uncomment the current line or selection |
| `Shift+Opt+A` | Toggle block comment | Add/remove a block comment (`/* */`) around the selection |
| `Cmd+Shift+[` | Fold | Collapse the current code folding region |
| `Cmd+Shift+]` | Unfold | Expand the current code folding region |
| `Cmd+K, Cmd+0` | Fold all | Collapse all code folding regions |
| `Cmd+K, Cmd+J` | Unfold all | Expand all code folding regions |
| `Cmd+K, Cmd+[` | Fold (recursive) | Collapse the current region and all sub-regions |
| `Cmd+K, Cmd+]` | Unfold (recursive) | Expand the current region and all sub-regions |
| `Cmd+K, Cmd+C` | Add line comment | Add `//` comment (language-appropriate) |
| `Cmd+K, Cmd+U` | Remove line comment | Remove `//` comment |
| `Cmd+K, Cmd+X` | Trim trailing whitespace | Remove trailing whitespace from the file |

---

## 8. Category 4: Multi-Cursor and Selection

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+D` | Select next occurrence | Select the current word, then press repeatedly to add each next occurrence |
| `Cmd+K, Cmd+D` | Skip and select next | In multi-cursor: skip current match, select the next one |
| `Cmd+Shift+L` | Select all occurrences | Instantly add a cursor at every occurrence of the current word |
| `Opt+Click` | Insert cursor | Click anywhere to add a cursor |
| `Opt+Cmd+↑` | Add cursor above | Add cursor on the line above (repeat to keep going) |
| `Opt+Cmd+↓` | Add cursor below | Add cursor on the line below |
| `Cmd+Shift+\` | Select to bracket | Select everything between matching brackets |
| `Ctrl+Shift+Cmd+↑/↓` | Column selection | Select a rectangular block of text (column mode) |
| `Opt+Shift+↓/↑` | Expand/shrink selection | Smart selection expansion (by word → line → block → scope) |
| `Cmd+A` | Select all | Select the entire file contents |
| `Cmd+L` | Select line | Select the current line (press to keep adding lines) |
| `Shift+Opt+←/→` | Expand/shrink word select | Expand selection by word boundaries |

---

## 9. Category 5: Search and Replace

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+F` | Find in file | Open the find widget in the current file |
| `Cmd+Opt+F` | Find and replace | Open the find+replace widget in the current file |
| `Cmd+G` | Find next | Jump to the next occurrence in find mode |
| `Cmd+Shift+G` | Find previous | Jump to the previous occurrence |
| `Cmd+Opt+Enter` | Select all matches of find | Select every occurrence of the search term (multi-cursor) |
| `Enter` (in find) | Next match | Move to next match |
| `Shift+Enter` (in find) | Previous match | Move to previous match |
| `Cmd+Shift+F` | Find in files | Open the global search sidebar across the entire project |
| `Cmd+Shift+H` | Find and replace in files | Replace across the entire project |
| `Cmd+Opt+C` | Toggle case-sensitive | Toggle case sensitivity in search |
| `Cmd+Opt+W` | Toggle whole word | Toggle whole-word matching |
| `Cmd+Opt+R` | Toggle regex | Toggle regular expression mode in search |
| `Cmd+E` | Use selection for find | Use the current selection as the search term |

---

## 10. Category 6: Editor / Layout Management

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+\` | Split editor | Split the current editor group vertically |
| `Cmd+Opt+0` | Split editor (horizontal) | Split the current editor group horizontally |
| `Cmd+1` through `Cmd+9` | Focus editor group 1-9 | Switch focus to a specific split pane |
| `Cmd+K, Cmd+←/→` | Focus group left/right | Move focus between split panes |
| `Cmd+W` | Close editor | Close the current editor tab |
| `Cmd+K, F` | Close folder | Close the entire open folder |
| `Cmd+K, W` | Close all tabs | Close all open editor tabs |
| `Cmd+K, Cmd+W` | Close other tabs | Close all tabs except the current one |
| `Ctrl+Cmd+↑` | Move editor into new group | Move the current tab into a new split pane |
| `Ctrl+Cmd+←/→` | Move editor between groups | Move the current tab to the left/right split pane |
| `Ctrl+Cmd+↓` | Move editor to new window | Detach the current tab into a separate window |
| `Cmd+Opt+1` | Single column layout | Reset to single editor column |
| `Cmd+Opt+2` | Two column layout | Set two equal editor columns |
| `Cmd+Opt+3` | Three column layout | Set three equal editor columns |
| `Shift+Cmd+Enter` | Maximize editor group | Expand the current editor group to full width |

---

## 11. Category 7: Formatting and Language Features

| Shortcut | Action | Purpose |
|---|---|---|
| `Shift+Opt+F` | Format document | Auto-format the entire file per language settings |
| `Cmd+K, Cmd+F` | Format selection | Auto-format only the selected code |
| `F2` | Rename symbol | Rename a symbol (variable, function, class) across all files |
| `Ctrl+Space` | Trigger suggestion | Manually trigger IntelliSense suggestions |
| `Cmd+I` | Trigger parameter hints | Show function parameter type hints |
| `Shift+Cmd+Space` | Trigger hover | Show hover information for the symbol under cursor |
| `F12` | Go to definition | Navigate to symbol definition |
| `Cmd+.` | Quick fix / Refactor | Show available code actions and refactoring options |
| `Opt+Enter` | Accept suggestion | Accept the current IntelliSense suggestion |
| `Tab` | Complete snippet | Complete a code snippet expansion |
| `Cmd+Shift+\` | Jump to matching bracket | Navigate between matching brackets |
| `Shift+Opt+→` | Expand selection (word) | Select the word under cursor |
| `Shift+Opt+←` | Shrink selection | Deselect the last smart selection |
| `Ctrl+Shift+Space` | Type hierarchy / call hierarchy | Show callers/callees of a function |
| `Shift+Opt+F12` | Find all references | Show all references to a symbol |
| `Cmd+Shift+O` | Go to symbol in file | Navigate to a function/class/interface in the current file |
| `Cmd+T` | Go to symbol in workspace | Search for any symbol across the entire project |

---

## 12. Category 8: Debugging

| Shortcut | Action | Purpose |
|---|---|---|
| `F5` | Start / Continue debugging | Start debugging or continue to the next breakpoint |
| `Shift+F5` | Stop debugging | Stop the current debugging session |
| `Ctrl+F5` | Start without debugging | Run the current file/project without the debugger |
| `Cmd+Shift+F5` | Restart debugging | Stop and restart the debug session |
| `F9` | Toggle breakpoint | Set or remove a breakpoint on the current line |
| `Cmd+F9` | Toggle breakpoint (enabled) | Enable/disable the current breakpoint without removing it |
| `Shift+F9` | Conditional breakpoint | Set a breakpoint that only triggers when a condition is true |
| `F10` | Step over | Execute the current line and move to the next (don't enter functions) |
| `F11` | Step into | Step into the function call on the current line |
| `Shift+F11` | Step out | Step out of the current function back to the caller |
| `Cmd+K, Cmd+I` | Show hover in debug | Show the value of the selected expression |
| `Cmd+Shift+Y` | Show debug console | Focus the debug console panel |
| `Ctrl+Shift+F9` | Clear all breakpoints | Remove all breakpoints in the workspace |
| `Cmd+Shift+F5` | Restart frame | Restart the current stack frame |
| `Cmd+F10` | Run to cursor | Continue execution until the cursor position (like a one-time breakpoint) |

---

## 13. Category 9: Integrated Terminal

| Shortcut | Action | Purpose |
|---|---|---|
| `` Ctrl+` `` | Toggle terminal | Show/hide the integrated terminal panel |
| `` Ctrl+Shift+` `` | Create new terminal | Create a new terminal instance in the terminal panel |
| `Cmd+↑` / `Cmd+↓` | Scroll terminal | Scroll up/down through terminal output |
| `Cmd+K` | Clear terminal | Clear the terminal output buffer |
| `Cmd+Shift+5` | Split terminal | Split the terminal pane horizontally |
| `Cmd+Shift+[` / `]` | Focus next/previous terminal | Switch between multiple open terminal instances |
| `Cmd+Shift+Delete` | Delete terminal | Kill the current terminal session |
| `Cmd+Click` on URL | Open URL | Open a URL directly from terminal output |
| `Cmd+C` (with selection) | Copy from terminal | Copy selected text from the terminal |
| `Cmd+V` | Paste to terminal | Paste into the terminal |
| `Cmd+F` | Search terminal | Search through terminal output |
| `Opt+Cmd+→/←` | Navigate terminal tabs | Switch between terminal tabs |

---

## 14. Category 10: Git / Source Control

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+Shift+G` | Show Source Control | Open the source control sidebar |
| `Cmd+Enter` | Commit staged | Commit the staged changes with the message in the input box |
| `Cmd+K` | Commit (with input focus) | Focus the commit message input |
| `Cmd+Shift+Enter` | Commit (amend) | Amend the last commit |
| `Ctrl+Shift+G` | Open Git view | Focus the Git view in the primary sidebar |
| `Cmd+Shift+P` → `Git: Pull` | Pull | Pull changes from remote (via command palette) |
| `Cmd+Shift+P` → `Git: Push` | Push | Push committed changes to remote |
| `Opt+Cmd+G` | Open Git blame | Show Git blame annotations for the current file |
| `Cmd+Shift+B` | Show all branches | Show Git branches |
| `Cmd+Opt+D` | Compare with branch | Compare the current file/branch with another branch |
| `Cmd+Backspace` | Undo last commit | Soft reset the last commit (keep changes) |

---

## 15. Category 11: View / Interface

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+B` | Toggle Sidebar | Show/hide the primary sidebar |
| `Cmd+J` | Toggle Panel | Show/hide the bottom panel |
| `Cmd+Shift+J` | Toggle Problems | Toggle the problems panel |
| `Cmd+Shift+U` | Toggle Output | Open the output panel |
| `Cmd+K, Z` | Zen Mode | Enter/exit distraction-free Zen mode |
| `Esc Esc` | Exit Zen Mode | Double Esc exits Zen mode |
| `Cmd+Shift+P` | Command Palette | Shows all available commands |
| `Cmd+K, V` | Open Markdown Preview | Open a side-by-side preview for Markdown files |
| `Cmd+Shift+V` | Toggle Markdown Preview | Toggle rendered preview of a Markdown file |
| `Cmd+K, T` | Change Theme | Open the theme picker |
| `Cmd+K, Cmd+T` | Change Color Theme | Open color theme selection |
| `Ctrl+Cmd+F` | Toggle Full Screen | Toggle macOS full screen mode |
| `Cmd+-` | Zoom out | Zoom the editor interface out |
| `Cmd+=` | Zoom in | Zoom the editor interface in |
| `Cmd+0` | Reset zoom | Reset zoom to default |
| `Cmd+K, R` | Reveal in Finder | Open the current file location in Finder |
| `Cmd+K, P` | Copy path of active file | Copy the full file path to clipboard |

---

## 16. Category 12: Snippets and Emmet

| Shortcut | Action | Purpose |
|---|---|---|
| `Tab` | Expand snippet / Emmet | Complete the current snippet or Emmet abbreviation |
| `Cmd+Shift+R` | Insert snippet | Manually trigger snippet insertion |
| `Ctrl+Space` | Trigger suggestion | Show completion list (includes snippets) |
| `Tab` | Jump to next placeholder | Move to the next tabstop in a snippet |
| `Shift+Tab` | Jump to previous placeholder | Move to the previous tabstop |
| `Esc` | Exit snippet mode | Cancel the current snippet expansion |
| `Enter` | Accept snippet completion | Confirm the snippet or completion |
| `Cmd+K, Cmd+/` | Show Emmet abbreviation | Manually trigger Emmet abbreviation expansion |

---

## 17. Category 13: Extensions and Customization

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+Shift+X` | Open Extensions | Open the extensions marketplace pane |
| `Cmd+Shift+A` | Extension commands | Search for commands provided by installed extensions |
| `Cmd+K, Cmd+S` | Open Keyboard Shortcuts | Open the keyboard shortcut editor |
| `Cmd+Shift+P` → `Preferences: Open Keyboard Shortcuts (JSON)` | Edit keybindings.json | Directly edit the keybindings JSON file |
| `Cmd+,` | Open Settings | Open the settings UI |
| `Cmd+Shift+P` → `Preferences: Open Settings (JSON)` | Edit settings.json | Directly edit the settings JSON file |
| `Cmd+Shift+P` → `Developer: Reload Window` | Reload window | Reload VS Code window (after config changes) |
| `Cmd+Shift+P` → `Developer: Toggle Developer Tools` | DevTools | Open Chrome DevTools for VS Code Electron window |

---

## 18. Category 14: IntelliSense / Code Completion

| Shortcut | Action | Purpose |
|---|---|---|
| `Ctrl+Space` | Trigger completion | Manually show IntelliSense suggestions |
| `Cmd+I` | Show parameter hints | Show function signature / parameter info |
| `Cmd+Shift+Space` | Show hover info | Display the hover card (type info, docs) |
| `Cmd+.` | Show code actions | Show available quick fixes and refactoring (lightbulb) |
| `Up/Down arrows` | Navigate suggestions | Move through the suggestion list |
| `Enter` | Accept suggestion | Insert the selected suggestion |
| `Tab` | Accept and insert | Insert the suggestion and close the list |
| `Esc` | Dismiss | Close the suggestion list without selecting |

---

## 19. Category 15: Accessibility and Editor Assist

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+Shift+R` | Quick Open (recent) | Show recently opened files |
| `Cmd+K, Cmd+X` | Trim trailing whitespace | Remove trailing whitespace from the file |
| `Cmd+K, M` | Change language mode | Change the language mode of the current file |
| `Cmd+K, V` | Open preview | Open a rendered preview (Markdown, HTML) |
| `Cmd+K, S` | Save all files | Save all unsaved files |
| `Cmd+Opt+S` | Save with encoding | Save the file with a specific encoding |
| `Cmd+K, Cmd+Backspace` | Revert file | Revert the file to the last saved version |
| `Cmd+Shift+T` | Reopen closed tab | Reopen the last closed editor tab |
| `Ctrl+Shift+Tab` | Show all open editors | Display a list of all open editor tabs |
| `Cmd+K, Ctrl+Shift+Tab` | Show navigation history | Display navigated file history |

---

## 20. Category 16: Essential Remote / Dev Containers

| Shortcut | Action | Purpose |
|---|---|---|
| `Cmd+Shift+P` → `Remote-SSH: Connect to Host...` | SSH Remote | Connect to a remote machine via SSH |
| `Cmd+Shift+P` → `Dev Containers: Reopen in Container` | Dev Container | Reopen the current folder in a development container |
| `Cmd+Shift+P` → `Remote: Close Remote Connection` | Close remote | Disconnect from the current remote session |
| `Cmd+Shift+P` → `Ports: Focus on Ports View` | Port forwarding | Manage forwarded ports for remote development |
| `Cmd+Shift+P` → `Dev Containers: Rebuild Container` | Rebuild container | Rebuild the development container |

---

## 21. Customizing Shortcuts — `keybindings.json`

Every shortcut listed above can be customized. Open `Cmd+Shift+P` → `Preferences: Open Keyboard Shortcuts (JSON)`:

```json
// keybindings.json
[
  // Example: Change "Save All" to Cmd+Shift+S
  {
    "key": "cmd+shift+s",
    "command": "workbench.action.files.saveAll",
    "when": "!editorIsReadonly"
  },

  // Example: Add a custom keybinding for "Toggle Terminal" on Ctrl+`
  {
    "key": "ctrl+`",
    "command": "workbench.action.terminal.toggleTerminal"
  },

  // Example: Disable a default shortcut (Go to Definition on Cmd+Click)
  {
    "key": "cmd+click",
    "command": "-editor.action.goToDefinition"  // The '-' prefix removes the binding
  },

  // Example: Conditional keybinding (only in Markdown files)
  {
    "key": "cmd+b",
    "command": "markdown.extension.editing.toggleBold",
    "when": "editorLangId == 'markdown'"
  }
]
```

Common `when` clause values:
- `editorTextFocus` — Only when cursor is in the editor
- `!editorReadonly` — Only when the file is writable
- `terminalFocus` — Only when the terminal is focused
- `sideBarVisible` — Only when sidebar is showing
- `editorLangId == 'javascript'` — Only in JavaScript files
- `inDebugMode` — Only during a debugging session

---

## 22. Learning Strategy — How to Build Muscle Memory

**The Pareto Principle:** 20% of these shortcuts cover 80% of your daily work. Learn these first:

**Phase 1 (Essentials — learn these day 1):**
| Shortcut | Action |
|---|---|
| `Cmd+P` | Quick Open |
| `Cmd+Shift+P` | Command Palette |
| `Cmd+S` | Save |
| `Cmd+W` | Close tab |
| `Cmd+Z` / `Cmd+Shift+Z` | Undo / Redo |
| `Cmd+F` | Find |
| `Cmd+Shift+F` | Find in files |

**Phase 2 (Week 2):**
| Shortcut | Action |
|---|---|
| `Cmd+D` | Select next occurrence |
| `Opt+↑/↓` | Move line |
| `Cmd+/` | Toggle comment |
| `Cmd+B` | Toggle sidebar |
| `` Ctrl+` `` | Toggle terminal |

**Phase 3 (Month 1):**
| Shortcut | Action |
|---|---|
| `F12` | Go to definition |
| `Cmd+.` | Quick fix |
| `F2` | Rename symbol |
| `Shift+Opt+F` | Format document |
| `Cmd+K, Cmd+S` | Keyboard shortcuts |

**Phase 4 (Mastery):**
- Learn one new shortcut per day
- Practice it deliberately until it becomes automatic
- Review `keybindings.json` periodically to optimize your workflow
- Look for repetitive mouse actions and find their keyboard equivalents

---

## 23. Common Mistakes

1. **Learning too many at once** — Pick 3-5, use them until they're muscle memory, then add more
2. **Relying on mouse for basic operations** — Every mouse action to find/replace/navigate is costing you time
3. **Not customizing** — If a default shortcut feels awkward, change it. Your `keybindings.json` is personal
4. **Conflicting with macOS system shortcuts** — E.g., `Cmd+H` hides the window in macOS but could be mapped in VS Code. VS Code usually preserves system shortcuts at the OS level
5. **Ignoring `when` clauses** — A shortcut that works everywhere might conflict with a terminal-focused shortcut
6. **Forgetting `Ctrl+`` vs `Cmd+`` ** — Terminal toggle uses `Ctrl`, not `Cmd`, which trips up Windows/Linux converts
7. **Not using Command Palette as fallback** — If you forget a shortcut, `Cmd+Shift+P` and type the action. It also shows the shortcut as a hint

---

## 24. VS Code Shortcuts for Windows/Linux Developers Switching to macOS

| Windows/Linux | macOS | Notes |
|---|---|---|
| `Ctrl` | `Cmd` | Primary modifier key changes |
| `Ctrl+Shift+P` | `Cmd+Shift+P` | Command Palette (same fingers, different key) |
| `Alt` | `Option` | Secondary modifier |
| `Ctrl+` `` ` `` | `Ctrl+` `` ` `` | Terminal toggle — SAME on both! (Not Cmd) |
| `F2` | `F2` | Rename symbol — same |
| `F5` | `F5` | Debug start — same |
| `Home` / `End` | `Cmd+←` / `Cmd+→` | Line start/end |
| `Ctrl+Home` / `Ctrl+End` | `Cmd+↑` / `Cmd+↓` | File start/end |
| `Alt+Click` | `Opt+Click` | Multi-cursor insert |
| `Ctrl+D` | `Cmd+D` | Select next occurrence |
| `Ctrl+/` | `Cmd+/` | Toggle comment |

---

## 25. Resources

- **Open shortcut editor:** `Cmd+K, Cmd+S` — browse/search every shortcut
- **View shortcut PDF:** VS Code documentation at code.visualstudio.com has downloadable shortcut PDFs
- **Identify a shortcut:** When you mouse-hover over any menu item or button, VS Code shows the keyboard shortcut in the tooltip
- **Conflicting shortcut detection:** The shortcut editor highlights conflicts in red
- **Check current keybindings:** `Cmd+Shift+P` → `>Keyboard Shortcuts` shows all with search

---

## 26. TL;DR

1. `Cmd+Shift+P` — The most important shortcut (Command Palette — everything is in here)
2. `Cmd+P` — Quick Open files by name (fuzzy match)
3. `Cmd+D` — Multi-cursor: select next occurrence (press repeatedly)
4. `Cmd+/` — Toggle line comment
5. `Opt+↑/↓` — Move lines up/down
6. `Shift+Opt+↑/↓` — Copy lines up/down
7. `Cmd+B` — Toggle sidebar
8. `` Ctrl+` `` — Toggle integrated terminal (note: Ctrl, not Cmd)
9. `F12` — Go to definition
10. `Cmd+.` — Quick fix / Code actions (lightbulb)
11. `F2` — Rename symbol across all files
12. `Shift+Opt+F` — Format document
13. `Cmd+W` — Close current tab
14. `Cmd+K, Cmd+S` — Open keyboard shortcut editor
15. All shortcuts are customizable in `keybindings.json`
16. `when` clauses control where shortcuts apply
17. Learn 3-5 at a time, build muscle memory before adding more
18. The Command Palette shows every shortcut as a hint next to command names
19. Conflicts are highlighted in red in the shortcut editor
20. Mac uses `Cmd` where Windows uses `Ctrl`, except for the terminal which uses `Ctrl` on both

---

## 27. Key Takeaways

1. **Command Palette (`Cmd+Shift+P`) is the most powerful shortcut** — if you forget everything else, just learn this one
2. **Multi-cursor editing (`Cmd+D`, `Opt+Cmd+↑/↓`)** is the most impactful productivity multiplier — learn it early
3. **Customize your shortcuts** — VS Code lets you remap anything. Your workflow is unique, make the editor fit it
4. **`Ctrl+` `` ` `` for terminal** — this one trips up everyone switching from Windows because it uses Ctrl, not Cmd
5. **`when` clauses make shortcuts context-aware** — the same key combo can do different things in editor vs terminal
6. **Learn progressively** — trying to memorize 100 shortcuts at once guarantees you'll remember none
7. **The mouse is the bottleneck** — every time you reach for the mouse, you add latency. Keyboard shortcuts eliminate that
