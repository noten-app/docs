---
sidebar_position: 1
title: Einführung
tags:
  - Einführung
  - Start
  - Anfang
slug: /
---

# Einführung

Danke, dass du die Dokumentation der Noten-App ließt!

Aktuell befindest du dich in der Dokumentation der API Version 1.0.0.

# Basis-URL

Die Basis-Url für die API lautet: https://api.noten-app.de/v1

Diese URL wird für alle Endpunkte (bis auf /ping) genutzt!

# Code-Beispiele

Alle Code-Beispiele werden in [NodeJS](https://nodejs.org) mit Hilfe des [Axios](https://www.npmjs.com/package/axios) Packets geschrieben.

# Authentifizierung

Bevor du irgendeinen Endpunkt nutzen kannst, musst du dich mit dem Authentifizierungs-Endpunkt authentifizieren. Dieser wird mit einem Authentifizierungs-Token antworten, mit dem du dich bei anderen Endpunkten authentifizieren kannst.
Der Authentifizierungs-Token ist standartmäßig 1 Stunde gültig - Danach muss der Token mit hilfe eines Erneuerungs-Tokens am passenden Endpunkt erneuert werden.
Mehr Informationen über die Authentifizierung findest du unter [Endpunkte > Authentifizierung](/api/endpoints/authentication/).

# Durch die Dokumentation navigieren

Links in der Seitenleiste findest du folgende Kategorien:

- [Endpunkte](/category/endpoints/) beinhaltet die Dokumentationen der einzelnen Endpunkte
- [Anleitungen](/category/tutorials/) beinhaltet Anleitungen für einzelne einfache Anwendungsfälle
- [Änderungen](/category/changelogs/) beinhaltet Dokumentationen aller Änderungen zwischen Versionen
