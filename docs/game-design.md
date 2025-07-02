# Infight.io Game Design Document

## Overview
Infight.io is a Discord-attached multiplayer shootout game where players can engage in turn-based combat on a hex grid. The game combines strategy, character progression, and social interaction to create an engaging experience directly within Discord.

## Core Concept
Games are played as a last-person-standing shootout. Players opt in to being a part of the game. When the game starts, all opted-in players are scattered around a thoughtfully-sized hex grid. Players then take turns positioning themselves, shooting, gaining power-ups and the like. The grid has obstacles like walls, oil slicks

## Game Mechanics

### Character Creation
- Players' characters are primarily represented as their discord avatar and name
- Starting stats: Health, Attack, Defense, Speed
- Character classes with different stat distributions:
  - **Brawler**: High Health and Attack, lower Speed
  - **Assassin**: High Speed and Attack, lower Health
  - **Tank**: High Health and Defense, lower Attack
  - **Balanced**: Even distribution across all stats

### Combat System
- Turn-based combat with initiative based on Speed stat
- Actions per turn:
  - **Attack**: Basic damage dealing move
  - **Heavy Attack**: High damage with accuracy penalty
  - **Defend**: Reduce incoming damage and gain counter-attack chance
  - **Special Move**: Class-specific abilities (limited uses)

### Progression System
- Experience points gained from battles (win/loss)
- Level up increases base stats
- Unlock new special moves and abilities
- Equipment system for additional stat bonuses

## Social Features
- **Guilds/Teams**: Players can form groups within servers
- **Championships**: Seasonal competitions across servers
- **Spectator Mode**: Watch live battles with live commentary
- **Battle History**: Track wins, losses, and notable fights

---

*This document serves as the living design specification for infight.io and will be updated as features are developed and refined.*
