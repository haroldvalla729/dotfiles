hl.env("XCURSOR_SIZE",    "18")
hl.env("XCURSOR_THEME",   "Bibata-Modern-Ice")
hl.env("HYPRCURSOR_SIZE", "18")
hl.env("HYPRCURSOR_THEME","Bibata-Modern-Ice")

-- Variables para forzar Wayland
hl.env("MOZ_ENABLE_WAYLAND", "1")
hl.env("QT_QPA_PLATFORM", "wayland")
hl.env("GDK_BACKEND", "wayland")
hl.env("ELECTRON_OZONE_PLATFORM_HINT", "auto")
hl.env("SDL_VIDEODRIVER", "wayland")
hl.env("XDG_SESSION_TYPE", "wayland")
hl.env("XDG_CURRENT_DESKTOP", "Hyprland")
hl.env("XDG_SESSION_DESKTOP", "Hyprland")
