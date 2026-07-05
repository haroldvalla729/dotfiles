export const WORKSPACE_ICONS = {
  active: "pacman-solid-symbolic",
  special: "fruit-cherries-symbolic",
  default: "ghost-f-symbolic",
  urgent: "ghost-off-symbolic",
  empty: "circle-filled-symbolic",
} as const;

export type WorkspaceState = keyof typeof WORKSPACE_ICONS;