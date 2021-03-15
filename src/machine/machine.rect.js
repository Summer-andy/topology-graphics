import { Node, Rect } from '@topology/core';

export function machineIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function machineTextRect(node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 50);
  node.fullTextRect = node.textRect;
}
