import { registerNode } from '@topology/core';
import { machine, machineAnchors, machineIconRect, machineTextRect  } from './machine';

export function register() {
  registerNode('machine', machine, machineAnchors, machineIconRect, machineTextRect );
}
