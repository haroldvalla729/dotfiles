-------------------------
--------- Theme ---------
-------------------------

local theme = require("themes.catppuccin")

---------------------------
--------- General ---------
---------------------------

hl.config({
    general = {
        gaps_in  = 5,
        gaps_out = 8,

        border_size = 1,

        col = {
            active_border   = theme.active_border,
            inactive_border = theme.inactive_border,
        },

        resize_on_border = false,

        allow_tearing = false,

        layout = "dwindle",

        snap = {
            enabled = true
        },

    },

    ------------------------------
    --------- Decoration ---------
    ------------------------------

    decoration = {
        rounding       = 10,
        rounding_power = 2,

        active_opacity   = 1.0,
        inactive_opacity = 1.0,

        shadow = {
            enabled      = true,
            range        = 8,
            render_power = 4,
            color        = 0xee1a1a1a,
        },

        blur = {
            enabled   = true,
            size      = 3,
            passes    = 1,
            vibrancy  = 0.1696,
        },
    },
})

---------------------------
--------- Layouts ---------
---------------------------

hl.config({
    dwindle = {
        preserve_split = true,
    },
})

hl.config({
    master = {
        new_status = "master",
    },
})

hl.config({
    scrolling = {
        fullscreen_on_one_column = true,
    },
})
