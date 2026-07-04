import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createState, For } from "gnim"
import { apps } from "../service/state"


export default function AppLauncher() {
  const [showMenu, setShowMenu] = createState(false)

  return (
    <box class="app-launcher">
      <Gtk.EventControllerMotion
        onEnter={() => setShowMenu(true)}
        onLeave={() => setShowMenu(false)}
      />
      <button class="launcher-trigger" halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER} >
        <image iconName="archlinux-logo" class="arch-logo" pixelSize={20} />
      </button>
      <revealer
        transitionType={Gtk.RevealerTransitionType.SLIDE_LEFT}
        transitionDuration={300}
        revealChild={showMenu}
      >
        <box class="launcher-menu">
          <For each={apps}>
            {(app, index) => (
              <button class="app-item" onClicked={() => execAsync(app.command)}>
                <box class="app-content" halign={Gtk.Align.START} valign={Gtk.Align.CENTER}>
                  <image iconName={app.icon} class="app-icon" pixelSize={16} />
                </box>
              </button>
            )}
          </For>
        </box>
      </revealer>
    </box>
  )
}