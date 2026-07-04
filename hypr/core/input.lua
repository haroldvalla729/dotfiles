----------------------------
--------- Keyboard ---------
----------------------------

hl.config({
    input = {
        kb_layout  = "us",
        kb_variant = "",
        kb_model   = "",
        kb_options = "",
        kb_rules   = "",

        follow_mouse = 1,

        sensitivity = 0, -- -1.0 - 1.0, 0 means no modification.

        ----------------------------
        --------- Touchpad ---------
        ----------------------------

        touchpad = {
            natural_scroll = false,
            tap_to_click = true,
            disable_while_typing = true,
        },
    },
})

----------------------------
--------- Gestures ---------
----------------------------

hl.gesture({
    fingers = 3,
    direction = "horizontal",
    action = "workspace"
})

---------------------------
--------- Devices ---------
---------------------------

-- Mouse externo
hl.device({
    name = "sigmachip-usb-mouse",
    left_handed = false,
})

-- Touchpad
hl.device({
    name = "elan-touchpad",
    natural_scroll = false,
})
