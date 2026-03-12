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
    path = os.path.join(BASE, "images", filename)
    try:
        with open(path, "rb") as f:
            ext = filename.split(".")[-1].lower()
            mime = "image/jpeg" if ext in ("jpg","jpeg") else "image/png"
            return f"data:{mime};base64,{base64.b64encode(f.read()).decode()}"
    except:
        return ""

MAP = {
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/hero_salad_cauldron_1773306028615.png": img_b64("hero.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_item_red_moon_1773306043908.png": img_b64("menu_red_moon.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_item_purple_mist_1773306057301.png": img_b64("menu_purple_mist.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_seafood_spell_1773311058408.png": img_b64("menu_seafood_spell.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_glass_noodle_1773311075328.png": img_b64("menu_glass_noodle.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_mango_sorcery_1773313107909.png": img_b64("menu_mango_sorcery.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_lava_egg_1773313125346.png": img_b64("menu_lava_egg.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_dark_salmon_1773313143512.png": img_b64("menu_dark_salmon.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_mushroom_forest_1773313164262.png": img_b64("menu_mushroom_forest.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/menu_softshell_crab_1773313181576.png": img_b64("menu_softshell_crab.png"),
    "file:///C:/Users/User/.gemini/antigravity/brain/676cf8e6-2fcf-42ef-8a14-3587c28008e9/magical_combo_upsell_1773306075383.png": img_b64("combo_upsell.png"),
    "../QR_CODE.JPG": img_b64("qr_payment.jpg"),
}

with open(os.path.join(BASE, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()
with open(os.path.join(BASE, "style.css"), "r", encoding="utf-8") as f:
    css = f.read()
with open(os.path.join(BASE, "script.js"), "r", encoding="utf-8") as f:
    js = f.read()

for old, b64 in MAP.items():
    if b64:
        html = html.replace(old, b64)

html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>{css}</style>')
html = html.replace('<script src="script.js"></script>', f'<script>{js}</script>')

st.components.v1.html(html, height=12000, scrolling=True)
