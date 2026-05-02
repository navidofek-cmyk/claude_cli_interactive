# 🤖 Claude Code CLI – Kompletní tutoriál

Statický web s kompletním českým tutoriálem pro **Claude Code CLI** (Anthropic).  
Od instalace po pokročilé multi-agent architektury.

🌐 **Web:** https://navidofek-cmyk.github.io/claude_cli_interactive

---

## Obsah tutoriálu

| # | Sekce | Téma |
|---|-------|------|
| 1 | Instalace | npm install, přihlášení, /doctor |
| 2 | První kroky | REPL, typy promptů, schvalování akcí |
| 3 | Slash příkazy | /compact, /clear, /init, vlastní příkazy |
| 4 | Klávesové zkratky | Ctrl+C, schvalování y/n/a, history |
| 5 | Nástroje | Bash, Read, Edit, Write, WebFetch, Agent |
| 6 | CLAUDE.md | Šablona, globální vs. projektový soubor |
| 7 | settings.json | Oprávnění, vzory povolení, env proměnné |
| 8 | Hooks | PreToolUse, PostToolUse, Stop s příklady |
| 9 | Agent Tool | Typy agentů, worktree izolace, parametry |
| 10 | Nastavení agentů | Model, nástroje, šablona promptu, JSON výstup |
| 11 | Paralelní agenti | Hub&Spoke, Map-Reduce, background agenti |
| 12 | Multi-agent architektury | Pipeline, Tournament, Hierarchická síť |
| 13 | Supervisor vzory | Critic-Reviser, Self-healing, Scrum board |
| 14 | MCP Servery | Konfigurace, populární servery, vlastní server |
| 15 | IDE Integrace | VS Code, JetBrains, /ide příkaz |
| 16 | Tipy a triky | Best practices, časté chyby, výběr modelu |

## Technologie

- Čistý HTML/CSS/JS – žádný build krok
- Tmavý / světlý režim
- Responzivní sidebar navigace
- Prohledávání sekcí
- Tlačítka pro kopírování kódu

## Lokální spuštění

```bash
git clone https://github.com/navidofek-cmyk/claude_cli_interactive.git
cd claude_cli_interactive
# otevřít index.html v prohlížeči nebo:
python -m http.server 8080
```

## GitHub Pages

**Settings → Pages → Source: main / (root) → Save**

Web bude dostupný na `https://navidofek-cmyk.github.io/claude_cli_interactive`
