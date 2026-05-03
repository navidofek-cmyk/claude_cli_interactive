# 🤖 Claude Code CLI – Kompletní tutoriál

Statický web s kompletním českým tutoriálem pro **Claude Code CLI** (Anthropic).  
Od instalace po pokročilé multi-agent architektury.

🌐 **Web:** https://navidofek-cmyk.github.io/claude_cli_interactive

---

## Obsah tutoriálu

| # | Sekce | Téma |
|---|-------|------|
| 1 | Úvod | Přehled funkcí, co Claude Code umí |
| 2 | Instalace | npm install, přihlášení, /doctor |
| 3 | První kroky | REPL, typy promptů, schvalování akcí |
| 4 | Obnovení sezení | --continue, --resume, SendMessage, aliasy |
| 5 | Slash příkazy | 29 vestavěných příkazů + vlastní s $ARGUMENTS |
| 6 | Klávesové zkratky | Ctrl+C, schvalování y/n/a, history |
| 7 | Nástroje | Bash, Read, Edit, Write, WebFetch, Agent |
| 8 | CLAUDE.md | Šablona, globální vs. projektový soubor |
| 9 | settings.json | Oprávnění, vzory povolení, env proměnné |
| 10 | Hooks | PreToolUse, PostToolUse, Stop s příklady |
| 11 | Agent Tool | Typy agentů, worktree izolace, parametry |
| 12 | Nastavení agentů | Model, nástroje, šablona promptu, JSON výstup |
| 13 | Paralelní agenti | Hub&Spoke, Map-Reduce, background agenti |
| 14 | Multi-agent architektury | Pipeline, Tournament, Hierarchická síť |
| 15 | Supervisor vzory | Critic-Reviser, Self-healing, Scrum board |
| 16 | MCP Servery | Konfigurace, populární servery, vlastní server |
| 17 | IDE Integrace | VS Code, JetBrains, /ide příkaz |
| 18 | Tipy a triky | Best practices, časté chyby, výběr modelu |

---

## Technologie

- Čistý HTML/CSS/JS – žádný build krok
- Tmavý / světlý režim
- Responzivní sidebar navigace
- Prohledávání sekcí
- Tlačítka pro kopírování kódu
- Progress bar při scrollování
- Navigace Předchozí / Další na konci každé sekce

## Lokální spuštění

```bash
git clone https://github.com/navidofek-cmyk/claude_cli_interactive.git
cd claude_cli_interactive
# otevřít index.html v prohlížeči nebo:
python -m http.server 8080
```

## GitHub Pages

Web je dostupný na:

**https://navidofek-cmyk.github.io/claude_cli_interactive**
