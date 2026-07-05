import { Gtk } from "ags/gtk4"
import { createState } from "gnim"
import { execAsync } from "ags/process"

export default function Volumen() {
  const [showMenu, setShowMenu] = createState(false)

  return (
    <box class="app-volumen">
        <Gtk.EventControllerMotion
            onEnter={() => setShowMenu(true)}
            onLeave={() => setShowMenu(false)}
        />
        <button class="volumen-trigger" halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}
            onClicked={ () => { execAsync("pavucontrol") 
               setShowMenu(false) } } >
            <image iconName="sound-low-solid-symbolic" pixelSize={16} />
        </button>
        <revealer
            transitionType={Gtk.RevealerTransitionType.FADE_SLIDE_LEFT}
            transitionDuration={300}
            revealChild={showMenu}
        >
            <button class="volumen-option" onClicked={ () => { execAsync("pavucontrol") 
               setShowMenu(false) } } >
                <image iconName="audio-outlined-symbolic" pixelSize={16} />
            </button>
        </revealer>
    </box>
  )
}
