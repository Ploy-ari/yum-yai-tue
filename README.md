# Yum Yai Tue

Landing page สำหรับร้าน `ยำยายตือ` ในรูปแบบ static site พร้อมใช้งานบน Netlify

## Project Overview

โปรเจ็กต์นี้เป็นหน้าเว็บโปรโมตร้านอาหารแนว sale page ที่ประกอบด้วย

- หน้า Landing Page แบบ single page
- ระบบตะกร้าสินค้าและ modal สั่งซื้อด้วย JavaScript
- รูปประกอบทั้งหมดเก็บไว้ใน repo และอ้างด้วย relative path
- ไฟล์ตั้งค่าสำหรับ deploy บน Netlify เรียบร้อยแล้ว

## Tech Stack

- HTML
- CSS
- JavaScript
- Netlify สำหรับ static deployment
- Streamlit ใน [`salepage/app.py`](./salepage/app.py) สำหรับการแสดงผลอีกแบบหนึ่งถ้าต้องการ

## Project Structure

```text
.
|-- netlify.toml
|-- README.md
`-- salepage/
    |-- index.html
    |-- style.css
    |-- script.js
    |-- app.py
    |-- requirements.txt
    `-- assets/
        |-- hero.png
        |-- combo_upsell.png
        |-- menu_*.png
        `-- qr-code.jpg
```

## Run Locally

### Static Preview

ใช้วิธีนี้ถ้าต้องการดูหน้าเว็บแบบเดียวกับที่ Netlify จะเสิร์ฟ

```powershell
py -3 -m http.server 8000 --directory salepage
```

จากนั้นเปิด `http://127.0.0.1:8000`

### Streamlit Preview

ถ้าต้องการรันผ่าน Streamlit

```powershell
cd salepage
py -3 -m pip install -r requirements.txt
py -3 -m streamlit run app.py
```

## Deploy on Netlify

โปรเจ็กต์นี้ตั้งค่าไว้แล้วใน [`netlify.toml`](./netlify.toml)

ค่าที่ใช้คือ

- Base directory: เว้นว่าง
- Build command: เว้นว่าง
- Publish directory: `salepage`

ถ้า import repo นี้เข้า Netlify โดยตรง ระบบจะอ่านค่า `publish = "salepage"` จาก `netlify.toml` ได้ทันที

## Asset Rules

เพื่อให้ deploy ได้ถูกต้องบน GitHub Pages, Netlify หรือ static host อื่น ๆ ให้ใช้กติกานี้เสมอ

- เก็บรูปทั้งหมดไว้ใน `salepage/assets`
- อ้าง path ใน HTML เป็น `assets/<filename>`
- ห้ามใช้ path แบบ `file:///...`
- ถ้าเพิ่มรูปใหม่ ให้เพิ่มไฟล์เข้า repo พร้อม commit ทุกครั้ง

ตัวอย่างที่ถูกต้อง

```html
<img src="assets/hero.png" alt="Hero image">
```

## Editing Guide

ไฟล์หลักที่แก้บ่อยมีดังนี้

- [`salepage/index.html`](./salepage/index.html) สำหรับโครงสร้างหน้าและข้อความ
- [`salepage/style.css`](./salepage/style.css) สำหรับหน้าตาและ layout
- [`salepage/script.js`](./salepage/script.js) สำหรับ interaction เช่น cart, modal, FAQ และ animation
- [`salepage/assets`](./salepage/assets) สำหรับรูปทั้งหมดของหน้าเว็บ

## Recommended Workflow

```powershell
git pull
```

แก้ไฟล์ที่ต้องการ แล้วตรวจหน้าเว็บใน local

```powershell
git add .
git commit -m "Update landing page content"
git push
```

## Notes

- ตอนนี้ repo นี้พร้อม deploy แบบ static แล้ว
- asset path ภายในโค้ดถูกปรับให้ชี้ไปที่ไฟล์ใน repo โดยตรงแล้ว
- หากแก้ข้อความภาษาไทยแล้วแสดงผลเพี้ยนใน terminal ให้เปิดไฟล์ผ่าน editor ที่ใช้ UTF-8
