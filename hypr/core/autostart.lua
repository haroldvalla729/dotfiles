-----------------------------
--------- AUTOSTART ---------
-----------------------------

local function runOnce(cmd)
    hl.exec_cmd("pgrep -x '" .. cmd .. "' >/dev/null || " .. cmd)
end

local startup = {
    "hyprpaper",
    "ags run",
    "mako",
    "nm-applet",
}

hl.on("hyprland.start", function()
    for _, app in ipairs(startup) do
        runOnce(app)
    end
end)
