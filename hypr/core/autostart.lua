-----------------------------
--------- AUTOSTART ---------
-----------------------------

local function runOnce(cmd)
    hl.exec_cmd("pgrep -x '" .. cmd .. "' >/dev/null || " .. cmd)
end

local startup = {
    "awww-daemon",
    "ags run",
    "mako",
    "nm-applet",
}

hl.on("hyprland.start", function()
    for _, app in ipairs(startup) do
        runOnce(app)
    end
    hl.exec_cmd("$HOME/.config/hypr/scripts/wallpaper/next.sh")
end)
