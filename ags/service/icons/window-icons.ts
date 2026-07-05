import { APPS } from "./apps";

// Tipo inferido desde el propio arreglo APPS, ya no depende de types.ts
type AppEntry = (typeof APPS)[number];

export const FALLBACK_ICON: AppEntry = {
  icon: "ghost-f-symbolic", // pon aquí la ruta manual de tu icono genérico, definida igual que en apps.ts
  name: "Unknown",
  command: "",
};

type HyprlandClient = { class?: string; title?: string } | null;

/** Devuelve el icono (tal cual lo definiste en apps.ts) de una ventana. */
export function getIconForWindow(client: HyprlandClient): string {
  return getAppEntryForWindow(client).icon;
}

/** Igual que getIconForWindow pero devuelve la entrada completa (icon/name/command). */
export function getAppEntryForWindow(client: HyprlandClient): AppEntry {
  if (!client) return FALLBACK_ICON;

  const className = (client.class ?? "").toLowerCase();
  const title = (client.title ?? "").toLowerCase();

  const exact = APPS.find((a) => a.command.toLowerCase() === className);
  if (exact) return exact;

  const partial = APPS.find((a) => title.includes(a.command.toLowerCase()));
  if (partial) return partial;

  return FALLBACK_ICON;
}