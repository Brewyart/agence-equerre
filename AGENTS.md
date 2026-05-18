<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# Mission Brewyart Starter

Tu travailles dans un projet Next.js déjà existant.

## Objectif

Transformer les fichiers HTML présents dans `/input` en site Next.js propre, moderne, maintenable et prêt pour Vercel.

## Règles absolues

- Ne recrée pas le projet.
- Ne modifie pas la configuration Next.js sauf nécessité réelle.
- Ne code pas toutes les sections directement dans `app/page.tsx`.
- Utilise `project/sections.json` pour l’ordre des sections.
- Utilise `lib/section-registry.tsx` pour mapper les sections.
- Crée les sections dans `components/sections/`.
- Crée les composants réutilisables dans `components/ui/`.
- Centralise les styles globaux dans `app/globals.css`.
- Garde un responsive mobile-first.
- Préserve l’intention visuelle du HTML fourni.
- Nettoie le code inutile.
- Optimise pour GitHub + Vercel.

## Workflow attendu

1. Lire `/input/home.html`.
2. Identifier les sections.
3. Créer un composant React par section.
4. Mettre à jour `project/sections.json`.
5. Mettre à jour `lib/section-registry.tsx`.
6. Adapter `app/globals.css`.
7. Vérifier que `npm run dev` fonctionne.

## Résultat attendu

Un site Next.js propre, modulaire, rapide, responsive et facilement réutilisable.