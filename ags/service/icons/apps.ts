export const APPS = [
  // --- Work ---
  { icon: "kitty", name: "Kitty", command: "kitty" },
  { icon: "org.onlyoffice.desktopeditors", name: "OnlyOffice", command: "onlyoffice" },
  { icon: "firefox", name: "Firefox", command: "firefox" },
  { icon: "vscode", name: "VSCode", command: "code" },
  { icon: "mousepad", name: "Mousepad", command: "mousepad" },

  // --- Communication ---
  { icon: "com.discordapp.Discord", name: "Discord", command: "discord" },
  { icon: "com.spotify.Client", name: "Spotify", command: "spotify" },
  { icon: "kdeconnect", name: "KDE Connect", command: "org.kde.kdeconnect.app" },
  { icon: "qbittorrent", name: "qBittorrent", command: "org.qbittorrent.qBittorrent" },
  { icon: "ferdium", name: "Ferdium", command: "ferdium" },

  // --- Graphics & Visual ---
  { icon: "portal", name: "Desktop Portal", command: "xdg-desktop-portal-gtk" },
  { icon: "folder", name: "Files", command: "thunar" },
  { icon: "yazi", name: "Yazi", command: "yazi" },
  { icon: "imv", name: "Image Viewer", command: "imv" },
  { icon: "swappy", name: "Swappy", command: "swappy" },
  { icon: "file-roller", name: "Archive Manager", command: "org.gnome.FileRoller" },
  { icon: "vlc", name: "VLC", command: "vlc" },
  { icon: "mpv", name: "MPV", command: "mpv" },

  // --- System ---
  { icon: "bluetooth", name: "Bluetooth", command: "blueman-manager" },
  { icon: "audio", name: "Pavucontrol", command: "pavucontrol" },
  { icon: "network", name: "Network Editor", command: "nm-connection-editor" },

  // --- Qt/GTK tools (comparten icono de settings) ---
  { icon: "settings", name: "nwg-look", command: "nwg-look" },
  { icon: "settings", name: "Qt5 Config", command: "qt5ct" },
  { icon: "settings", name: "Qt6 Config", command: "qt6ct" },
  { icon: "settings", name: "Qt Designer", command: "designer" },
  { icon: "settings", name: "Qt Linguist", command: "linguist" },
  { icon: "settings", name: "Qt Assistant", command: "assistant" },
  { icon: "settings", name: "Qt PixelTool", command: "pixeltool" },
  { icon: "settings", name: "QDBusViewer", command: "qdbusviewer" },

  // --- Dock-only (no aparecen como ventana reconocida arriba) ---
  { icon: "io.github.shiftey.Desktop", name: "GitHub", command: "github-desktop" },
  { icon: "docker", name: "Docker", command: "docker-desktop" },
  { icon: "postman", name: "Postman", command: "postman" },
];

export type AppEntry = (typeof APPS)[number];
 
function pick(...commands: string[]): AppEntry[] {
  return commands
    .map((cmd) => APPS.find((a) => a.command === cmd))
    .filter((a): a is AppEntry => a !== undefined);
}

export const MAIN_APPS = pick(
  "firefox",
  "kitty",
  "code",
  "thunar",
  "vlc",
  "github-desktop"
);

export const DEV_APPS = pick( 
  "spotify",
  "onlyoffice",
  "ferdium",
  "discord"
);

export const APP_GROUPS = {
  main: MAIN_APPS,
  dev: DEV_APPS,
} satisfies Record<string, AppEntry[]>;

export type AppGroupKey = keyof typeof APP_GROUPS;