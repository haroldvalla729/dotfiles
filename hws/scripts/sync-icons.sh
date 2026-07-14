#!/usr/bin/env bash

# Corre esto cada vez que agregues/muevas/renombres un icono.

set -euo pipefail

SRC_DIR="$HOME/Projects/dotfiles/icons"
DEST_DIR="$HOME/.local/share/icons/hicolor/scalable/apps"

mkdir -p "$DEST_DIR"

# Limpia symlinks viejos (no toca archivos reales, solo enlaces
# rotos o que ya no correspondan a un icono actual)
find "$DEST_DIR" -maxdepth 1 -type l -exec sh -c '
  [ -e "$1" ] || rm "$1"
' _ {} \;

count=0
while IFS= read -r -d '' svg; do
  name=$(basename "$svg")
  ln -sf "$svg" "$DEST_DIR/$name"
  count=$((count + 1))
done < <(find "$SRC_DIR" -type f -iname "*.svg" -print0)

echo "Sincronizados $count iconos en $DEST_DIR"

gtk-update-icon-cache -f "$HOME/.local/share/icons/hicolor" 2>/dev/null || true
