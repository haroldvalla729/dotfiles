import { Gtk } from "ags/gtk4"
import { setApps, showProfiles, setShowProfiles } from "../service/state"
import { MAIN_APPS, DEV_APPS } from "../service/icons"

export default function Profiles() {
  return (
    <box class="app-profiles">
        <button class="profile-trigger" halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}
            onClicked={ () => { setShowProfiles(true) } } >
            <image iconName="user-symbolic" pixelSize={16} />
        </button>
        <popover visible={ showProfiles } onHide={ () => setShowProfiles(false) } class="profiles-popover">
            <box class="profiles-menu" orientation={Gtk.Orientation.VERTICAL} spacing={6} >
                <button class="profile-option" onClicked={ () => { 
                    setApps(MAIN_APPS)
                    setShowProfiles(false) } } >
                    <image iconName="funny-square-solid-symbolic" pixelSize={16} />
                </button>
                <button class="profile-option" onClicked={ () => { 
                    setApps(DEV_APPS)
                    setShowProfiles(false) } } >
                    <image iconName="developer-tools-symbolic" pixelSize={16} />
                </button>
            </box>
        </popover>
    </box>
  )
}
