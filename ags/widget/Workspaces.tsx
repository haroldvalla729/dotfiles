// widget/Workspaces.tsx
import { Gtk } from "ags/gtk4"
import { createComputed, createBinding, For } from "ags"
import Hyprland from "gi://AstalHyprland"
import { WORKSPACE_ICONS } from "../service/icons/glyphs";
import { getIconForWindow } from "../service/icons";


function WorkspaceButton({ ws, hypr }: { ws: Hyprland.Workspace; hypr: Hyprland.Hyprland }) {
  const focusedWorkspaceId = createBinding(hypr, "focusedWorkspace").as(w => w.id)
  const specialWorkspace = createBinding(hypr, "focusedMonitor", "specialWorkspace")
  const specialWorkspaceId = specialWorkspace.as(w => w?.id ?? 0)
  const clients = createBinding(ws, "clients")
  const hasClients = clients.as(c => c.length > 0)

  const isActive = createComputed(() => {
    if (ws.id < 0) {
      return specialWorkspaceId() === ws.id
    }
    return ws.id === focusedWorkspaceId() && specialWorkspaceId() === 0
  })

  const icons = createComputed(() => {
    const clientList = clients()
    const active = isActive()
    const appIcons = Array.from(new Set(clientList.map(getIconForWindow)))
    const statusIcon =
      ws.id < 0                ? (active ? WORKSPACE_ICONS.active : WORKSPACE_ICONS.special) :
      active                   ? WORKSPACE_ICONS.active :
      clientList.length === 0  ? WORKSPACE_ICONS.empty :
      WORKSPACE_ICONS.default

    const list = clientList.length === 0 ? [statusIcon] : [statusIcon, ...appIcons]

    // hacemos cada entrada única combinando índice + valor
    return list.map((icon, i) => ({ id: `${i}-${icon}`, icon }))
  })

  return (
    <box class={createComputed(() => { 
      const classes = ["workspace-button"]
        if (hasClients()) classes.push("occupied")
        if (isActive()) classes.push("active")
        if (ws.id < 0) classes.push("special") 
        return classes.join(" ") })} halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER} 
      overflow={Gtk.Overflow.HIDDEN} spacing={4} >
      <For each={icons}>
        {(item, index) => (
          <image iconName={item.icon} class={index.as(i => i === 0 ? "workspace-icon" : "workspace-app-icon")} pixelSize={20} />
        )}
      </For>
    </box>
  )
}

const PERSISTENT_WORKSPACES = 5

export default function Workspaces() {
  const hypr = Hyprland.get_default()
  const hyprWorkspaces = createBinding(hypr, "workspaces")
  const workspaces = createComputed(() => {
    const list = hyprWorkspaces()
    const persistent = Array.from({ length: PERSISTENT_WORKSPACES }, (_, i) => {
      const id = i + 1
      return list.find(w => w.id === id) ?? { id, empty: true }
    })
    const special = list.find(w => w.id < 0)
    return special ? [...persistent, special] : persistent
  })

  return (
    <box class="workspaces" halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER} >
      <For each={workspaces}>
        {(ws) => "empty" in ws ? 
          (
            <box class="workspace-button empty" halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}>
              <box halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}>
                <image iconName={WORKSPACE_ICONS.empty} class="workspace-icon" pixelSize={20} />
              </box>
            </box>
          ) : (
            <WorkspaceButton ws={ws} hypr={hypr} />
          )
        }
      </For>
    </box>
  )
}