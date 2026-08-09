// Structured raw menu data corresponding precisely to ТЗ & structured_data
const menuData = [
    { name: 'Espresso 9gr', description: 'HOUSE BLEND (100% arabika)', price: '1.40€', category: 'кофе' },
    { name: 'Dupli espresso 18gr', description: 'HOUSE BLEND (100% arabika)', price: '2.50€', category: 'кофе' },
    { name: 'Amerikano 140ml', description: 'HOUSE BLEND (100% arabika), (dupli espreso)', price: '2.50€', category: 'кофе' },
    { name: 'Machiatto 70ml', description: 'HOUSE BLEND (100% arabika)', price: '1.60€', category: 'кофе' },
    { name: 'Cortado 100ml', description: 'HOUSE BLEND (100% arabika)', price: '1.80€', category: 'кофе' },
    { name: 'Cappuccino 140ml', description: 'HOUSE BLEND (100% arabika)', price: '2.30€', category: 'кофе' },
    { name: 'Latte 220ml', description: 'HOUSE BLEND (100% arabika)', price: '2.40€', category: 'кофе' },
    { name: 'Flat white 140ml', description: 'HOUSE BLEND (100% arabika)', price: '3.50€', category: 'кофе' },
    { name: 'Espresso 10gr', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '2.00€', category: 'кофе' },
    { name: 'Dupli espresso 21gr', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '3.00€', category: 'кофе' },
    { name: 'Macchiato 80ml', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '2.20€', category: 'кофе' },
    { name: 'Cortado 100ml', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '2.40€', category: 'кофе' },
    { name: 'Cappuccino 140ml', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '2.60€', category: 'кофе' },
    { name: 'Latte 22ml', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '2.80€', category: 'кофе' },
    { name: 'Flat White 140ml', description: 'SINGLE ORIGIN (Colombia/Kenya)', price: '4.00€', category: 'кофе' },

    { name: 'Latte vanilla 220ml', description: 'LATTE', price: '3.00€', category: 'кофе со вкусами' },
    { name: 'Salted caramel latte 220ml', description: 'LATTE', price: '3.00€', category: 'кофе со вкусами' },
    { name: 'Pumpkin spiced latte 220ml', description: 'LATTE', price: '3.00€', category: 'кофе со вкусами' },
    { name: 'Matcha latte 220ml', description: 'LATTE', price: '3.60€', category: 'кофе со вкусами' },
    { name: 'Iced latte vanilla 350ml', description: 'ICE COFFEE', price: '3.30€', category: 'кофе со вкусами' },
    { name: 'Iced caramel latte 350ml', description: 'ICE COFFEE', price: '3.30€', category: 'кофе со вкусами' },
    { name: 'Iced matcha latte 350ml', description: 'ICE COFFEE', price: '3.30€', category: 'кофе со вкусами' },
    { name: 'Espresso tonic 350ml', description: 'ICE COFFEE, (double espresso)', price: '4.50€', category: 'кофе со вкусами' },
    { name: 'Iced Latte 350ml', description: 'ICE COFFEE', price: '2.80€', category: 'кофе со вкусами' },
    { name: 'Iced americano 300ml', description: 'ICE COFFEE', price: '2.60€', category: 'кофе со вкусами' },
    { name: 'Bumble 350ml', description: 'ICE COFFEE, Cijeđena narandža, espresso, sirup od lavande', price: '4.50€', category: 'кофе со вкусами' },

    { name: 'Cold brew 220ml', description: null, price: '3.80€', category: 'кофе фильтр' },
    { name: 'Hario V60 300ml', description: '(ask for the beans)', price: '5.00€', category: 'кофе фильтр' },
    { name: 'Cold brew + tonic 350ml', description: null, price: '6.00€', category: 'кофе фильтр' },
    { name: 'NITRO COLD BREW 220mlml', description: null, price: '4.50€', category: 'кофе фильтр' },

    { name: 'Zeleni čaj sa jasminom 280ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Aloe vera 280ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Brusnica i borovnica 280ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Mango 280ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Kamilica 250ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Limun i đumbir 280ml', description: null, price: '2.80€', category: 'чай' },
    { name: 'Earl Gray Bergamot 280ml', description: null, price: '2.80€', category: 'чай' },

    { name: 'Limunada 350ml', description: 'CIJEĐENI SOKOVI', price: '2.20€', category: 'безалкогольные напитки' },
    { name: 'Cijeđena narandža 200ml', description: 'CIJEĐENI SOKOVI', price: '2.80€', category: 'безалкогольные напитки' },
    { name: 'Narandza/Limun/Djumbir 200ml', description: 'CIJEĐENI SOKOVI', price: '3.40€', category: 'безалкогольные напитки' },
    { name: 'Grejpfrut/Narandza 200ml', description: 'CIJEĐENI SOKOVI', price: '3.40€', category: 'безалкогольные напитки' },
    { name: 'Cvekla/Sargarepa/Jabuka', description: 'CIJEĐENI SOKOVI', price: '3.40€', category: 'безалкогольные напитки' },
    { name: 'Celer, limeta, jabuka 200ml', description: 'CIJEĐENI SOKOVI', price: '3.40€', category: 'безалкогольные напитки' },
    { name: 'Ledeni čaj malina 350ml', description: 'LEDENI ČAJ', price: '2.80€', category: 'безалкогольные напитки' },
    { name: 'Ledeni čaj lavanda & soda 350ml', description: 'LEDENI ČAJ', price: '3.20€', category: 'безалкогольные напитки' },
    { name: 'Ledeni čaj Jagoda & Soda 350ml', description: 'LEDENI ČAJ, jagoda puree, soda voda, supasawa', price: '3.20€', category: 'безалкогольные напитки' },
    { name: 'Ledeni čaj Mango & Soya 350ml', description: 'LEDENI ČAJ, mango puree, sojino mlijeko, supasawa', price: '3.20€', category: 'безалкогольные напитки' },
    { name: 'Kisela voda 0.25l', description: 'VODE', price: '1.60€', category: 'безалкогольные напитки' },
    { name: 'Suza 0.25l', description: 'VODE', price: '1.60€', category: 'безалкогольные напитки' },
    { name: 'Crna čokolada 250ml', description: 'TOPLA ČOKOLADA', price: '2.80€', category: 'безалкогольные напитки' },

    { name: 'Mamut Pilsner pivo 330ml', description: 'ALKOHOLNI NAPICI', price: '3.60€', category: 'алкоголь' },
    { name: 'Jelički Dukat Šljiva 40ml', description: 'ALKOHOLNI NAPICI', price: '4.50€', category: 'алкоголь' },
    { name: 'Prosseco 200ml', description: 'ALKOHOLNI NAPICI', price: '4.50€', category: 'алкоголь' },
    { name: 'Gin & Tonic 350ml', description: 'ALKOHOLNI NAPICI', price: '5.50€', category: 'алкоголь' },
    { name: 'Espresso Martini 200ml', description: 'ALKOHOLNI NAPICI, rum, salted caramel syrup, espresso, kahlua', price: '7.50€', category: 'алкоголь' },

    { name: 'Mionetto Prosecco DOC Treviso Brut 0.15l', description: null, price: '3.80€', category: 'вино' },

    { name: 'Sojino mlijeko', description: null, price: '0.60€', category: 'добавки' },
    { name: 'Ovseno mlijeko', description: null, price: '0.60€', category: 'добавки' },
    { name: 'Bademovo mlijeko', description: null, price: '0.80€', category: 'добавки' },
    { name: 'Ekstra shot espresso 250gr', description: null, price: '1.00€', category: 'добавки' },

    { name: 'Sendvič pršuta 300gr', description: 'pršuta Marco Polo, dimljena mocarela, pesto sos, rukola, sirni namaz', price: '4.30€', category: 'еда' },
    { name: 'Sendvič mortadela 300gr', description: 'Mortadella Bologna sa pistaćima, krem sir, mocarela, pesto sos, svježi bosiljak, aceto balsamico', price: '4.30€', category: 'еда' },
    { name: 'Tiramisu 200gr', description: 'Kolači', price: '3.20€', category: 'еда' },
    { name: 'Toffee Caramel Cheesecake 150gr', description: 'Kolači', price: '3.20€', category: 'еда' },
    { name: 'Pistachio cheesecake 150gr', description: 'Kolači', price: '3.20€', category: 'еда' },
    { name: 'Strawberry cheesecake 150gr', description: 'Kolači', price: '3.20€', category: 'еда' },
    { name: 'Kroasan 65gr', description: 'Peciva', price: '1.50€', category: 'еда' },
    { name: 'Čokoladni kroasan 80gr', description: 'Peciva', price: '2.00€', category: 'еда' },
    { name: 'Vanila kroasan 80gr', description: 'Peciva', price: '2.60€', category: 'еда' },
    { name: 'Pistaći kroasan 120gr', description: 'Peciva', price: '3.30€', category: 'еда' },
    { name: 'Caprese kroasan 🥦 120gr', description: 'Peciva, mocarela, pesto, cherry paradajz, svježi bosiljak', price: '3.40€', category: 'еда' },
    { name: 'Avokado-losos kroasan 🥦 120gr', description: 'Peciva, avokado, dimljeni file lososa, krem sir, cherry paradajz, domaći sos, biber', price: '4.20€', category: 'еда' },
    { name: 'Chorizo kroasan 250gr', description: 'Peciva, chorizo salama, svježa mocarela, zelena salata, sušeni paradajz, domaći namaz', price: '3.90€', category: 'еда' },
    { name: 'Ćuretina kroasan 250gr', description: 'Peciva, dimljena ćuretina, svježa mocarela, jaje, domaći namaz', price: '3.80€', category: 'еда' },
    { name: 'Krofna 70gr', description: 'Peciva, slana karamela / jagoda', price: '2.00€', category: 'еда' },
    { name: 'Domaća krofna PISTAĆI 200gr', description: 'Peciva', price: '2.60€', category: 'еда' },
    { name: 'Domaća krofna ČOKOLADA 200gr', description: 'Peciva, Crna čokolada', price: '2.60€', category: 'еда' },
    { name: 'Domaća krofna JAGODA 120g', description: 'Peciva', price: '2.60€', category: 'еда' },
    { name: 'Cookie 80gr', description: 'Peciva, Čokoladni', price: '1.80€', category: 'еда' },
    { name: 'Lemon bread 50gr', description: 'Peciva', price: '1.40€', category: 'еда' },

    { name: 'Blend IV 100gr', description: 'KAFA U ZRNU, (100% arabika - Guatemala, El Salvador, Brazil, India)', price: '6.80€', category: 'kafe i opreme' },
    { name: 'Kenya Muthigi - Ini Microlot 100gr', description: 'KAFA U ZRNU, Regija: Kirinyaga, Sorte: SL-28, Ruiru 11, Note: citrus, zelena jabuka, karamela, bijela čokolada, Tijelo: srednje, Kisjelost: visoka, Proces: prani, Nadmorska visina: 1600m, Prženje: srednje', price: '10.00€', category: 'kafe i opreme' },
    { name: 'Columbia Narino 100gr', description: 'KAFA U ZRNU, Regija: Narino, Sorte: Caturra i Catuai, Note: Cimet, kardamom, suvo voće, brusnica, Tijelo: srednje, Kisjelost: srednja, Proces: prani, Nadmorska visina: 1600-1800m, Prženje: srednje', price: '12.80€', category: 'kafe i opreme' },
    { name: 'Premium Domaća mljevena kafa 200gr', description: 'MLJEVENA KAFA', price: '3.20€', category: 'kafe i opreme' },
    { name: 'Paper Filters 100kom', description: 'HARIO PROIZVODI', price: '9.50€', category: 'kafe i opreme' },
    { name: 'Range Server 360ml', description: 'HARIO PROIZVODI', price: '14.50€', category: 'kafe i opreme' },
    { name: 'Range Server 600ml', description: 'HARIO PROIZVODI', price: '28.00€', category: 'kafe i opreme' },
    { name: 'V60 Ceramic Dripper', description: 'HARIO PROIZVODI', price: '27.50€', category: 'kafe i opreme' },
    { name: 'MUGEN Ceramic Dripper', description: 'HARIO PROIZVODI', price: '31.00€', category: 'kafe i opreme' },
    { name: 'HARIO Drip Scale', description: 'HARIO PROIZVODI', price: '68.00€', category: 'kafe i opreme' },
    { name: 'SHIZUKU Slow Dripper', description: 'HARIO PROIZVODI', price: '75.00€', category: 'kafe i opreme' }
];

// Translations dictionary
const translations = {
    sr: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_menu: 'Menu',
        nav_beans: 'Beans & Gear',
        nav_locations: 'Locations',
        hero_eyebrow: 'Kultna lokacija',
        hero_subtitle: 'Spešelti kafa, rejv estetika, kvalitetna hrana i energija velikog grada.',
        hero_cta1: 'Pogledaj meni',
        hero_cta2: 'Naruči preko Glovo',
        about_label: 'KULTNIH LOKACIJA',
        about_title: 'MANIFESTO',
        about_text: 'Spajamo beskompromisni specialty espresso, mračnu klupsku estetiku i brutalnu energiju asfalta. Svaka šoljica je gorivo za urbane nomade i noćne lutalice. Nema kompromisa. Samo čisti kofein i bas.',
        menu_main_title: '01. INTERACTIVE HUD MENU',
        menu_main_desc: 'Izaberi svoju frekvenciju.',
        cat_coffee: '01. COFFEE & DRINKS',
        cat_flavored: '02. FLAVORED & ICE',
        cat_filter: '03. FILTER & NITRO',
        cat_tea: '04. TEA',
        cat_soft: '05. SOFT & JUICE',
        cat_alc: '06. ALCOHOL',
        cat_wine: '07. WINE',
        cat_adds: '08. MILK & ADD-ONS',
        cat_food: '09. FOOD & BAKERY',
        cat_gear: '10. BEANS & HARIO GEAR',
        menu_side_caption: 'DARK TECHNO BREW // 100% ARABICA',
        loc_heading: 'Lokacije',
        loc_body: 'Posetite nas na jednoj od 5 lokacija ili naručite preko Glovo-a.',
        btn_directions: 'Get Directions',
        footer_contact: 'DIRECT LINE',
        footer_social: 'SOCIAL FREQUENCY',
        footer_copy: '© Fabrika Coffee. Sva prava zadržana.',
        beans_heading: 'Spešelti zrno i oprema',
        beans_body: 'Vrhunska kafa u zrnu za kućnu pripremu i profesionalna Hario oprema.'
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_menu: 'Menu',
        nav_beans: 'Beans & Gear',
        nav_locations: 'Locations',
        hero_eyebrow: 'Cult location',
        hero_subtitle: 'Specialty coffee, rave aesthetics, quality food, and big city energy.',
        hero_cta1: 'View menu',
        hero_cta2: 'Order via Glovo',
        about_label: 'CULT LOCATIONS',
        about_title: 'MANIFESTO',
        about_text: 'We combine uncompromising specialty espresso, dark club aesthetics, and raw asphalt energy. Every cup is fuel for urban nomads and night wanderers. No compromises. Just pure caffeine and bass.',
        menu_main_title: '01. INTERACTIVE HUD MENU',
        menu_main_desc: 'Choose your frequency.',
        cat_coffee: '01. COFFEE & DRINKS',
        cat_flavored: '02. FLAVORED & ICE',
        cat_filter: '03. FILTER & NITRO',
        cat_tea: '04. TEA',
        cat_soft: '05. SOFT & JUICE',
        cat_alc: '06. ALCOHOL',
        cat_wine: '07. WINE',
        cat_adds: '08. MILK & ADD-ONS',
        cat_food: '09. FOOD & BAKERY',
        cat_gear: '10. BEANS & HARIO GEAR',
        menu_side_caption: 'DARK TECHNO BREW // 100% ARABICA',
        loc_heading: 'Locations',
        loc_body: 'Visit us at one of our 5 locations or order via Glovo.',
        btn_directions: 'Get Directions',
        footer_contact: 'DIRECT LINE',
        footer_social: 'SOCIAL FREQUENCY',
        footer_copy: '© Fabrika Coffee. All rights reserved.',
        beans_heading: 'Specialty beans & gear',
        beans_body: 'Premium specialty beans for home brewing and professional Hario gear.'
    },
    ru: {
        nav_home: 'Главная',
        nav_about: 'О нас',
        nav_menu: 'Меню',
        nav_beans: 'Зерно и Оборудование',
        nav_locations: 'Локации',
        hero_eyebrow: 'Культовая локация',
        hero_subtitle: 'Спешелти-кофе, рейв-эстетика, качественная еда и энергия большого города.',
        hero_cta1: 'Смотреть меню',
        hero_cta2: 'Заказать через Glovo',
        about_label: 'КУЛЬТОВЫХ ТОЧЕК',
        about_title: 'МАНИФЕСТ',
        about_text: 'Мы объединяем бескомпромиссный спешелти эспрессо, мрачную клубную эстетику и сырую энергию асфальта. Каждая чашка — топливо для городских номадов и ночных странников. Никаких компромиссов. Только чистый кофеин и бас.',
        menu_main_title: '01. ИНТЕРАКТИВНОЕ HUD МЕНЮ',
        menu_main_desc: 'Выберите свою частоту.',
        cat_coffee: '01. КОФЕ И НАПИТКИ',
        cat_flavored: '02. КОФЕ С ВКУСАМИ И ICE',
        cat_filter: '03. ФИЛЬТР И NITRO',
        cat_tea: '04. ЧАЙ',
        cat_soft: '05. СОКИ И ВОДА',
        cat_alc: '06. АЛКОГОЛЬ',
        cat_wine: '07. ВИНО',
        cat_adds: '08. ДОБАВКИ И МОЛОКО',
        cat_food: '09. ЕДА И ВЫПЕЧКА',
        cat_gear: '10. ЗЕРНО И HARIO GEAR',
        menu_side_caption: 'DARK TECHNO BREW // 100% АРАБИКА',
        loc_heading: 'Локации',
        loc_body: 'Посетите нас на одной из 5 локаций или заказывайте через Glovo.',
        btn_directions: 'Маршрут',
        footer_contact: 'ПРЯМАЯ ЛИНИЯ',
        footer_social: 'СОЦСЕТИ',
        footer_copy: '© Fabrika Coffee. Все права защищены.',
        beans_heading: 'Спешелти-зерно и оборудование',
        beans_body: 'Премиальное спешелти-зерно для домашнего приготовления и профессиональное оборудование Hario.'
    }
};

// State
let currentLang = 'sr';
let currentCategory = 'кофе';

// DOM Elements
const cursorGlow = document.getElementById('cursorGlow');
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const menuItemsContainer = document.getElementById('menuItemsContainer');
const menuTabs = document.getElementById('menuTabs');
const langButtons = document.querySelectorAll('[data-set-lang]');

// Cursor glow effect (Desktop wow-moment)
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// Burger menu toggle
burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Render Menu Items
function renderMenu(category) {
    menuItemsContainer.innerHTML = '';
    const filtered = menuData.filter(item => item.category === category);
    
    if (filtered.length === 0) {
        menuItemsContainer.innerHTML = '<p style="color: rgba(240,242,248,0.5);">Nema stavki u ovoj kategoriji.</p>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card hud-border';
        card.innerHTML = `
            <div class="menu-card-top">
                <span class="menu-item-name">${escapeHtml(item.name)}</span>
                <span class="menu-item-price">${escapeHtml(item.price)}</span>
            </div>
            ${item.description ? `<p class="menu-item-desc">${escapeHtml(item.description)}</p>` : ''}
        `;
        menuItemsContainer.appendChild(card);
    });
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Category Tabs Click
menuTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    
    menuTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentCategory = btn.getAttribute('data-category');
    renderMenu(currentCategory);
});

// Language Switcher
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Update buttons state
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-set-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Apply translations
    const dict = translations[lang] || translations.sr;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update beans section static texts
    if (lang === 'en') {
        document.getElementById('beansHeading').textContent = 'Specialty beans & gear';
        document.getElementById('beansBody').textContent = 'Premium specialty beans for home brewing and professional Hario gear.';
        document.getElementById('locHeading').textContent = 'Locations';
        document.getElementById('locBody').textContent = 'Visit us at one of our 5 locations or order via Glovo.';
    } else if (lang === 'ru') {
        document.getElementById('beansHeading').textContent = 'Спешелти-зерно и оборудование';
        document.getElementById('beansBody').textContent = 'Премиальное спешелти-зерно для домашнего приготовления и профессиональное оборудование Hario.';
        document.getElementById('locHeading').textContent = 'Локации';
        document.getElementById('locBody').textContent = 'Посетите нас на одной из 5 локаций или заказывайте через Glovo.';
    } else {
        document.getElementById('beansHeading').textContent = 'Spešelti zrno i oprema';
        document.getElementById('beansBody').textContent = 'Vrhunska kafa u zrnu za kućnu pripremu i profesionalna Hario oprema.';
        document.getElementById('locHeading').textContent = 'Lokacije';
        document.getElementById('locBody').textContent = 'Posetite nas na jednoj od 5 lokacija ili naručite preko Glovo-a.';
    }
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang');
        setLanguage(lang);
    });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(currentCategory);
    setLanguage('sr');
});
