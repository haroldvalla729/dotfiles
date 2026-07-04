export const FALLBACK_ICON = "focus-windows-symbolic";

export const WORKSPACE_ICONS = {
  active: "blueman-trust-symbolic",
  special: "window-close-symbolic",
  default: "window-minimize-symbolic",
  urgent: "dialog-warning-symbolic",
  empty: "window-restore-symbolic",
} as const;

export type WorkspaceState = keyof typeof WORKSPACE_ICONS;