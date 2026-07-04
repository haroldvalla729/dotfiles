#!/bin/bash

WALLPAPER_DIR="$HOME/.config/hypr/wallpapers"
STATE_FILE="$HOME/.cache/hypr-wallpaper-index"

mapfile -t wallpapers < <(
    find "$WALLPAPER_DIR" \
    -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) \
    | sort
)

COUNT=${#wallpapers[@]}

[[ $COUNT -eq 0 ]] && exit 1

if [[ -f "$STATE_FILE" ]]; then
    INDEX=$(cat "$STATE_FILE")
else
    INDEX=0
fi

INDEX=$(( (INDEX + 1) % COUNT ))

echo "$INDEX" > "$STATE_FILE"

awww img "${wallpapers[$INDEX]}" \
    --transition-type fade \
    --transition-duration 1
