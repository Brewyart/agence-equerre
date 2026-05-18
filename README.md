# Brewyart Starter

Starter Next.js conçu pour transformer rapidement un HTML validé en site moderne, propre et maintenable.

---

## 🚀 Workflow

1. Coller le HTML validé dans :


/input/home.html


2. Lancer l’IA (Claude / Kimi) avec le prompt :

- découper le HTML en sections
- créer les composants dans `components/sections/`
- mettre à jour `project/sections.json`
- mettre à jour `lib/section-registry.tsx`

3. Tester en local :

```bash
npm run dev
Vérifier :
pas d’erreurs
responsive OK
structure propre
Push GitHub
Déployer sur Vercel
📁 Structure
app/                → pages Next.js
components/         → sections + UI
core/               → règles design / UX / copy
project/            → config du site
input/              → HTML source
lib/                → registry sections
public/             → assets
⚠️ Règles importantes
Ne jamais coder les sections directement dans page.tsx
Toujours passer par sections.json
Toujours utiliser section-registry
Code simple, lisible, modulaire
Mobile-first
🎯 Objectif

Transformer un HTML validé en site :

propre
rapide
modulaire
prêt pour production
🧠 Philosophie

Clarté > complexité
Structure > créativité
Conversion > design décoratif


4. Sauvegarde :

```txt
Cmd + S