'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = gameEvents.values();
const eventsNoDuplicate = [...new Set(events)];
console.log(eventsNoDuplicate);

// 2.
gameEvents.delete(64);

// 3.
const numEvents = gameEvents.size;
const avgEvents = 90 / numEvents;
console.log(avgEvents);

// 4.
for (const [time, event] of gameEvents) {
  console.log(
    `[${time < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${time}: ${event}`,
  );
}
