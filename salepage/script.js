// ===== Cart State =====
let cart = [];

// ===== Bangkok Districts Data =====
const bangkokData = {
    "คลองเตย": ["คลองเตย", "คลองตัน", "พระโขนง"],
    "คลองสาน": ["คลองสาน", "สมเด็จเจ้าพระยา", "บางลำภูล่าง"],
    "คลองสามวา": ["สามวาตะวันตก", "สามวาตะวันออก", "บางชัน", "ทรายกองดิน", "ทรายกองดินใต้"],
    "คันนายาว": ["คันนายาว", "รามอินทรา"],
    "จตุจักร": ["ลาดยาว", "เสนานิคม", "จันทรเกษม", "จอมพล", "จตุจักร"],
    "จอมทอง": ["บางขุนเทียน", "บางค้อ", "บางมด", "จอมทอง"],
    "ดอนเมือง": ["สีกัน", "ดอนเมือง", "สนามบิน"],
    "ดินแดง": ["ดินแดง", "รัชดาภิเษก"],
    "ดุสิต": ["ดุสิต", "วชิรพยาบาล", "สวนจิตรลดา", "สี่แยกมหานาค", "ถนนนครไชยศรี"],
    "ตลิ่งชัน": ["คลองชักพระ", "ตลิ่งชัน", "ฉิมพลี", "บางพรม", "บางระมาด", "บางเชือกหนัง"],
    "ทวีวัฒนา": ["ทวีวัฒนา", "ศาลาธรรมสพน์"],
    "ทุ่งครุ": ["บางมด", "ทุ่งครุ"],
    "ธนบุรี": ["วัดกัลยาณ์", "หิรัญรูจี", "บางยี่เรือ", "ตลาดพลู", "ดาวคะนอง", "สำเหร่"],
    "บางกอกน้อย": ["ศิริราช", "บ้านช่างหล่อ", "บางขุนนนท์", "บางขุนศรี", "อรุณอมรินทร์"],
    "บางกอกใหญ่": ["วัดอรุณ", "วัดท่าพระ"],
    "บางกะปิ": ["คลองจั่น", "หัวหมาก"],
    "บางขุนเทียน": ["ท่าข้าม", "แสมดำ"],
    "บางเขน": ["อนุสาวรีย์", "ท่าแร้ง"],
    "บางคอแหลม": ["บางคอแหลม", "วัดพระยาไกร", "บางโคล่"],
    "บางแค": ["บางแค", "บางแคเหนือ", "บางไผ่", "หลักสอง"],
    "บางซื่อ": ["บางซื่อ", "วงศ์สว่าง"],
    "บางนา": ["บางนา"],
    "บางบอน": ["บางบอน"],
    "บางพลัด": ["บางพลัด", "บางอ้อ", "บางบำหรุ", "บางยี่ขัน"],
    "บางรัก": ["มหาพฤฒาราม", "สีลม", "สุริยวงศ์", "บางรัก", "สี่พระยา"],
    "บึงกุ่ม": ["คลองกุ่ม", "นวมินทร์", "นวลจันทร์"],
    "ปทุมวัน": ["รองเมือง", "วังใหม่", "ปทุมวัน", "ลุมพินี"],
    "ประเวศ": ["ประเวศ", "หนองบอน", "ดอกไม้", "สวนหลวง"],
    "ป้อมปราบฯ": ["ป้อมปราบ", "วัดเทพศิรินทร์", "คลองมหานาค", "บ้านบาตร", "วัดโสมนัส"],
    "พญาไท": ["สามเสนใน"],
    "พระโขนง": ["บางจาก"],
    "พระนคร": ["พระบรมมหาราชวัง", "วังบูรพาภิรมย์", "วัดราชบพิธ", "สำราญราษฎร์", "ศาลเจ้าพ่อเสือ", "เสาชิงช้า", "บวรนิเวศ", "ตลาดยอด", "ชนะสงคราม", "บ้านพานถม", "บางขุนพรหม", "วัดสามพระยา"],
    "มีนบุรี": ["มีนบุรี", "แสนแสบ"],
    "ยานนาวา": ["ช่องนนทรี", "บางโพงพาง"],
    "ราชเทวี": ["ทุ่งพญาไท", "ถนนพญาไท", "ถนนเพชรบุรี", "มักกะสัน"],
    "ราษฎร์บูรณะ": ["ราษฎร์บูรณะ", "บางปะกอก"],
    "ลาดกระบัง": ["ลาดกระบัง", "คลองสองต้นนุ่น", "คลองสามประเวศ", "ลำปลาทิว", "ทับยาว", "ขุมทอง"],
    "ลาดพร้าว": ["ลาดพร้าว", "จรเข้บัว"],
    "วังทองหลาง": ["วังทองหลาง", "สะพานสอง", "คลองเจ้าคุณสิงห์", "พลับพลา"],
    "วัฒนา": ["คลองเตยเหนือ", "คลองตันเหนือ", "พระโขนงเหนือ"],
    "สวนหลวง": ["สวนหลวง", "อ่อนนุช"],
    "สะพานสูง": ["สะพานสูง", "ราษฎร์พัฒนา", "ทับช้าง"],
    "สาทร": ["ทุ่งมหาเมฆ", "ยานนาวา", "ทุ่งวัดดอน"],
    "สายไหม": ["สายไหม", "ออเงิน", "คลองถนน"],
    "หนองแขม": ["หนองแขม", "หนองค้างพลู"],
    "หนองจอก": ["กระทุ่มราย", "หนองจอก", "คลองสิบ", "คลองสิบสอง", "โคกแฝด", "คู้ฝั่งเหนือ", "ลำผักชี", "ลำต้อยติ่ง"],
    "หลักสี่": ["ทุ่งสองห้อง", "ตลาดบางเขน"],
    "ห้วยขวาง": ["ห้วยขวาง", "บางกะปิ", "สามเสนนอก"],
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    handleScrollReveal();
    populateDistricts();
    startCountdown();
    animateCounters();
});

// ===== Stars =====
function createStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 180; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        container.appendChild(star);
    }
}

// ===== Cart Functions =====
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartBadge();
    showMagicToast(`✨ "${name}" ถูกร่ายมนตราใส่ตะกร้าแล้ว!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCartItems();
}

function updateCartBadge() {
    document.getElementById('cartCount').textContent = cart.length;
    const cartEl = document.getElementById('floatingCart');
    cartEl.style.transform = 'scale(1.3)';
    setTimeout(() => cartEl.style.transform = 'scale(1)', 200);
}

function renderCartItems() {
    const itemsContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="color: rgba(255,255,255,0.4); padding: 20px 0; text-align:center;">ยังไม่มีมนตราในตะกร้า...</p>';
    } else {
        itemsContainer.innerHTML = cart.map((item, i) => `
            <div class="cart-item-row">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price}.-</span>
                <button class="cart-item-remove" onclick="removeFromCart(${i})"><i class="fas fa-times"></i></button>
            </div>
        `).join('');
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = `${total}.-`;
    const total2 = document.getElementById('cartTotal2');
    if (total2) total2.textContent = `${total}.-`;
}

// ===== Open Cart =====
document.getElementById('floatingCart').addEventListener('click', () => {
    renderCartItems();
    showStep(1);
    document.getElementById('cartModal').classList.add('active');
});

function closeModal() {
    document.getElementById('cartModal').classList.remove('active');
}

// ===== Step Navigation =====
function showStep(n) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).classList.add('hidden');
    }
    document.getElementById(`step${n}`).classList.remove('hidden');
}

function goToStep(n) {
    if (n === 2) {
        if (cart.length === 0) {
            showMagicToast('🔮 กรุณาเลือกเมนูก่อนนะคะ!');
            return;
        }
    }
    if (n === 3) {
        const name = document.getElementById('custName').value.trim();
        const phone = document.getElementById('custPhone').value.trim();
        const district = document.getElementById('district').value;
        if (!name || !phone || !district) {
            showMagicToast('⚠️ กรุณากรอกชื่อ เบอร์โทร และเลือกเขตก่อนค่ะ');
            return;
        }
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('cartTotal2').textContent = `${total}.-`;
    }
    showStep(n);
}

// ===== Payment =====
function switchPayTab(type, btn) {
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('payQR').classList.add('hidden');
    document.getElementById('payCOD').classList.add('hidden');
    if (type === 'qr') document.getElementById('payQR').classList.remove('hidden');
    else document.getElementById('payCOD').classList.remove('hidden');
}

function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const district = document.getElementById('district').value;
    const subdistrict = document.getElementById('subdistrict').value;
    const address = document.getElementById('custAddress').value.trim();
    const isCOD = !document.getElementById('payCOD').classList.contains('hidden');

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    if (isCOD) total += 20;

    const payMethod = isCOD ? 'เก็บเงินปลายทาง (COD +20.-)' : 'สแกน QR PromptPay';

    const summary = `
        <p><strong>👤 ชื่อ:</strong> ${name}</p>
        <p><strong>📱 เบอร์:</strong> ${phone}</p>
        <p><strong>📍 ที่อยู่:</strong> ${address ? address + ', ' : ''}แขวง${subdistrict}, เขต${district}, กรุงเทพฯ</p>
        <p><strong>💳 ชำระ:</strong> ${payMethod}</p>
        <p><strong>💰 ยอดรวม:</strong> <span style="color:#ff00ff; font-size:1.2rem; font-weight:700;">${total}.-</span></p>
        <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
        <p><strong>🍽️ รายการ:</strong></p>
        ${cart.map(i => `<p style="margin-left:10px;">• ${i.name} (${i.price}.-)</p>`).join('')}
    `;

    document.getElementById('orderSummary').innerHTML = summary;
    showStep(4);
    showMagicToast('🎉 สั่งซื้อสำเร็จ! มนตราถูกร่ายเรียบร้อย!');
}

function resetOrder() {
    cart = [];
    updateCartBadge();
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custAddress').value = '';
    document.getElementById('district').selectedIndex = 0;
    document.getElementById('subdistrict').innerHTML = '<option value="">-- เลือกแขวง --</option>';
    closeModal();
}

// ===== District Dropdown =====
function populateDistricts() {
    const select = document.getElementById('district');
    Object.keys(bangkokData).sort().forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = d;
        select.appendChild(opt);
    });
}

function updateSubdistricts() {
    const district = document.getElementById('district').value;
    const subSelect = document.getElementById('subdistrict');
    subSelect.innerHTML = '<option value="">-- เลือกแขวง --</option>';
    if (district && bangkokData[district]) {
        bangkokData[district].forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            subSelect.appendChild(opt);
        });
    }
}

// ===== Toast =====
function showMagicToast(message) {
    const existing = document.querySelector('.magic-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'magic-toast';
    toast.innerHTML = message;
    Object.assign(toast.style, {
        position: 'fixed', bottom: '100px', right: '30px',
        background: 'linear-gradient(45deg, #6a0dad, #ff00ff)',
        color: 'white', padding: '15px 25px', borderRadius: '15px',
        boxShadow: '0 0 25px rgba(255, 0, 255, 0.5)', zIndex: '1000',
        maxWidth: '350px', fontFamily: "'Mitr', sans-serif", fontSize: '0.9rem',
        animation: 'slideUp 0.4s ease forwards'
    });
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ===== Spice / FAQ =====
function selectSpice(btn, level) {
    document.querySelectorAll('.spice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('spiceResult').innerHTML = `ระดับปัจจุบัน: <strong>${level}</strong>`;
}

function toggleFaq(el) { el.classList.toggle('open'); }

// ===== Scroll Reveal =====
function handleScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.glass-card, .benefit-card, .menu-card, .topping-item, .delivery-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== Sticky Navbar + Parallax =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image-container');
    if (hero) hero.style.transform = `translateY(${window.pageYOffset * 0.15}px)`;

    const nav = document.getElementById('stickyNav');
    const scrollY = window.pageYOffset;
    if (scrollY > 600) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
    lastScroll = scrollY;
});

// ===== Countdown Timer =====
function startCountdown() {
    // Set end to midnight tonight (resets daily)
    function getEndTime() {
        const now = new Date();
        const end = new Date(now);
        end.setHours(23, 59, 59, 0);
        return end;
    }
    let endTime = getEndTime();

    function updateTimer() {
        const now = new Date();
        let diff = endTime - now;
        if (diff <= 0) {
            endTime = getEndTime();
            diff = endTime - now;
        }
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('hours').textContent = String(h).padStart(2, '0');
        document.getElementById('minutes').textContent = String(m).padStart(2, '0');
        document.getElementById('seconds').textContent = String(s).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ===== Animated Number Counter =====
function animateCounters() {
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.target);
                const isDecimal = el.dataset.decimal === 'true';
                const suffix = el.dataset.suffix || '';
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease-out
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = target * eased;

                    if (isDecimal) {
                        el.textContent = current.toFixed(1);
                    } else {
                        el.textContent = Math.floor(current).toLocaleString() + (progress >= 1 ? '+' : '') + suffix;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        if (isDecimal) el.textContent = target.toFixed(1);
                        else el.textContent = target.toLocaleString() + '+' + suffix;
                    }
                }
                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
}

// ===== Keyframes =====
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideUp { from { transform: translateY(80px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes slideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(80px); opacity: 0; } }
`;
document.head.appendChild(style);
