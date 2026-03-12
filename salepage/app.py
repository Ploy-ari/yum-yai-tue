import streamlit as st
import base64, os

st.set_page_config(page_title="ยำยายตือ | Yum Yai Tue", page_icon="🔮", layout="wide")

st.markdown("""<style>
#MainMenu, header, footer, .stDeployButton, [data-testid="stToolbar"],
[data-testid="stDecoration"], [data-testid="stStatusWidget"] { display: none !important; visibility: hidden !important; }
.block-container { padding: 0 !important; max-width: 100% !important; }
iframe { border: none !important; }
</style>""", unsafe_allow_html=True)

BASE = os.path.dirname(os.path.abspath(__file__))

def img_b64(filename):
    path = os.path.join(BASE, "assets", filename)
    try:
        with open(path, "rb") as f:
            ext = filename.split(".")[-1].lower()
            mime = "image/jpeg" if ext in ("jpg","jpeg") else "image/png"
            return f"data:{mime};base64,{base64.b64encode(f.read()).decode()}"
    except:
        return ""

ASSET_FILES = [
    "hero.png",
    "menu_red_moon.png",
    "menu_purple_mist.png",
    "menu_seafood_spell.png",
    "menu_glass_noodle.png",
    "menu_mango_sorcery.png",
    "menu_lava_egg.png",
    "menu_dark_salmon.png",
    "menu_mushroom_forest.png",
    "menu_softshell_crab.png",
    "combo_upsell.png",
    "qr-code.jpg",
]

with open(os.path.join(BASE, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()
with open(os.path.join(BASE, "style.css"), "r", encoding="utf-8") as f:
    css = f.read()
with open(os.path.join(BASE, "script.js"), "r", encoding="utf-8") as f:
    js = f.read()

for filename in ASSET_FILES:
    b64 = img_b64(filename)
    if b64:
        html = html.replace(f"assets/{filename}", b64)

html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>{css}</style>')
html = html.replace('<script src="script.js"></script>', f'<script>{js}</script>')

st.components.v1.html(html, height=12000, scrolling=True)
