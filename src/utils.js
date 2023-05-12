#!/usr/bin/env node

export function generateRandomInt(min, max) {
  const smallestValue = Math.ceil(min);
  const highestValue = Math.floor(max);

  return Math.floor(Math.random() * (highestValue - smallestValue)) + smallestValue;
}
export default generateRandomInt;
