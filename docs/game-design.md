# Infight.io Game Design Document

## Overview
Infight.io is a Discord-attached multiplayer shootout game where players can engage in turn-based combat on a hex grid. The game combines strategy, character progression, and social interaction to create an engaging experience directly within Discord.

## Core Concept
Games are played as a last-person-standing shootout. Players opt in to being a part of the game. When the game starts, all opted-in players are scattered around a thoughtfully-sized hex grid. Players then take turns positioning themselves, shooting, gaining power-ups and the like. The grid has obstacles like walls, oil slicks, barbed wire hexes. 

## Discord interactivity
- each discord server that adds our game will get the following
  - a designated channel for the infight, probably #infight
  - this channel is where game updates will happen (mary shot john!, jane got the sniper rifle)
  - some slash commands like: /infight-leaderboard and /infight-achievements

## Game Mechanics
- The game is played in a web browser on a hex grid appropriate to the size of the player count
- players make moves by clicking on tiles adjacent to the
- Players can take an action on their turn like
  - Shoot
  - Push
  - Move (picking up items if available)

## Characters and Stats
- Players' characters are primarily represented as their discord avatar and name
- Starting stats: Health, Attack, Defense, Speed
- Character classes with different stat distributions:
  - **Brawler**: High Health and Attack, lower Speed
  - **Assassin**: High Speed and Attack, lower Health
  - **Tank**: High Health and Defense, lower Attack
  - **Balanced**: Even distribution across all stats

## Social Features
- **Teams**: Players are put onto teams at the beginning of a match
- **Championships**: Seasonal competitions across servers
- **Spectators**: Any server's game is always live at like infight.io/<servername>/current and is publically viewable
- **Battle History**: Track wins, losses, and notable fights

---

*This document serves as the living design specification for infight.io and will be updated as features are developed and refined.*
