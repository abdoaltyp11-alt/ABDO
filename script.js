const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const EMAIL = 'abdoaltyp8@gmail.com';
const SENSITIVITY = 0.8;

const menuButton = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const video = document.querySelector('.hero-video');
const description = document.querySelector('.hero-description');
const actions = document.querySelector('.actions');
const copyButton = document.querySelector('[data-copy-email]');
const sourceGuard = document.querySelector('.source-guard');
const yearElement = document.querySelector('[data-year]');
const warpText = document.querySelector('[data-warp-text]');
const curvedInput = document.querySelector('[data-curved-input]');
const emailInput = document.querySelector('[data-email-input]');
const emailValue = document.querySelector('[data-email-value]');
const emailPlaceholder = document.querySelector('[data-email-placeholder]');
const emailButton = document.querySelector('[data-email-button]');
const languageSwitcher = document.querySelector('.language-switcher');
const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('.language-menu');
const currentLanguage = document.querySelector('[data-current-language]');

const translations = {
  en: {
    guardTitle: 'Source code protected', guardText: 'This page does not expose its source in this view.',
    work: 'Work', about: 'About', contact: 'Contact', getInTouch: 'Get in touch', warp: 'Bend the moment',
    intro: 'Hey there, meet Abdelrahman,<br>Front-end web developer · 21 years old',
    description: "I'm Abdelrahman, a 21-year-old front-end web developer. I turn ideas into sharp, useful websites.",
    pitch: 'Pitch us an idea', workHere: 'Come work here', sendHello: 'Send a brief hello', operate: 'See how we operate', reachUs: 'Reach us:', emailPlaceholder: 'Enter your email', emailButton: 'Get Started',
    selectedWork: 'Selected work / 2023—2026', previousWork: 'Previous work',
    workIntro: 'A few websites and digital experiences I have designed and built from the first sketch to the final pixel.',
    mugoraType: 'Website design and development', obaydaType: 'Brand website and interaction design', sinaiType: 'Travel website and front-end build',
    availability: 'Available for thoughtful digital projects.'
  },
  ar: {
    guardTitle: 'الكود محمي', guardText: 'المصدر غير متاح من هذه النافذة.',
    work: 'الأعمال', about: 'نبذة', contact: 'تواصل', getInTouch: 'تواصل معي', warp: 'اصنع اللحظة',
    intro: 'مرحبًا، قابل عبد الرحمن،<br>مطور واجهات أمامية · 21 عامًا',
    description: 'أنا عبد الرحمن، مطور واجهات أمامية أبلغ من العمر 21 عامًا. أحول الأفكار إلى مواقع مفيدة ومميزة.',
    pitch: 'شارك فكرتك', workHere: 'اعمل معي', sendHello: 'أرسل رسالة', operate: 'اكتشف طريقة عملي', reachUs: 'تواصل:', emailPlaceholder: 'أدخل بريدك الإلكتروني', emailButton: 'ابدأ الآن',
    selectedWork: 'أعمال مختارة / 2023—2026', previousWork: 'أعمال سابقة',
    workIntro: 'مجموعة من المواقع والتجارب الرقمية التي صممتها وبنيتها من الفكرة الأولى حتى أدق التفاصيل.',
    mugoraType: 'تصميم وتطوير مواقع', obaydaType: 'موقع علامة تجارية وتصميم تفاعلي', sinaiType: 'موقع سفر وتطوير واجهة أمامية',
    availability: 'متاح للمشاريع الرقمية المميزة.'
  },
  fr: {
    guardTitle: 'Code source protégé', guardText: 'Le code source n’est pas affiché dans cette vue.',
    work: 'Projets', about: 'À propos', contact: 'Contact', getInTouch: 'Me contacter', warp: 'Pliez le moment',
    intro: 'Bonjour, voici Abdelrahman,<br>Développeur front-end · 21 ans',
    description: 'Je suis Abdelrahman, développeur front-end de 21 ans. Je transforme les idées en sites utiles et précis.',
    pitch: 'Proposez une idée', workHere: 'Travailler ensemble', sendHello: 'Envoyer un message', operate: 'Voir ma méthode', reachUs: 'Contact :', emailPlaceholder: 'Entrez votre e-mail', emailButton: 'Commencer',
    selectedWork: 'Projets sélectionnés / 2023—2026', previousWork: 'Projets précédents',
    workIntro: 'Quelques sites et expériences numériques conçus et développés de la première esquisse au dernier pixel.',
    mugoraType: 'Design et développement web', obaydaType: 'Site de marque et design interactif', sinaiType: 'Site de voyage et développement front-end',
    availability: 'Disponible pour des projets numériques exigeants.'
  },
  it: {
    guardTitle: 'Codice protetto', guardText: 'Il codice sorgente non è visibile in questa schermata.',
    work: 'Lavori', about: 'Chi sono', contact: 'Contatti', getInTouch: 'Contattami', warp: 'Piega il momento',
    intro: 'Ciao, sono Abdelrahman,<br>Sviluppatore front-end · 21 anni',
    description: 'Sono Abdelrahman, sviluppatore front-end di 21 anni. Trasformo le idee in siti utili e curati.',
    pitch: 'Raccontami un’idea', workHere: 'Lavora con me', sendHello: 'Invia un messaggio', operate: 'Scopri il mio metodo', reachUs: 'Contatti:', emailPlaceholder: 'Inserisci la tua email', emailButton: 'Inizia ora',
    selectedWork: 'Lavori selezionati / 2023—2026', previousWork: 'Lavori precedenti',
    workIntro: 'Alcuni siti ed esperienze digitali progettati e sviluppati dal primo schizzo fino all’ultimo dettaglio.',
    mugoraType: 'Design e sviluppo web', obaydaType: 'Sito del brand e design interattivo', sinaiType: 'Sito di viaggi e sviluppo front-end',
    availability: 'Disponibile per progetti digitali curati.'
  },
  zh: {
    guardTitle: '源代码已保护', guardText: '此页面不会在当前视图中显示源代码。',
    work: '作品', about: '关于我', contact: '联系', getInTouch: '联系我', warp: '弯曲这一刻',
    intro: '你好，认识一下 Abdelrahman，<br>前端开发者 · 21岁',
    description: '我是 Abdelrahman，一名21岁的前端开发者。我将想法转化为清晰实用的网站。',
    pitch: '提出你的想法', workHere: '加入我的工作', sendHello: '发送问候', operate: '了解我的工作方式', reachUs: '联系：', emailPlaceholder: '输入你的邮箱', emailButton: '开始使用',
    selectedWork: '精选作品 / 2023—2026', previousWork: '过往作品',
    workIntro: '这里展示了一些从最初草图到最终细节，由我设计和开发的网站与数字体验。',
    mugoraType: '网站设计与开发', obaydaType: '品牌网站与交互设计', sinaiType: '旅游网站与前端开发',
    availability: '接受有想法的数字项目。'
  },
  hi: {
    guardTitle: 'सोर्स कोड सुरक्षित है', guardText: 'इस दृश्य में सोर्स कोड दिखाई नहीं देता।',
    work: 'काम', about: 'मेरे बारे में', contact: 'संपर्क', getInTouch: 'संपर्क करें', warp: 'इस पल को मोड़ें',
    intro: 'नमस्ते, मिलिए Abdelrahman से,<br>फ्रंट-एंड डेवलपर · 21 वर्ष',
    description: 'मैं Abdelrahman हूँ, 21 वर्षीय फ्रंट-एंड डेवलपर। मैं विचारों को शानदार और उपयोगी वेबसाइटों में बदलता हूँ।',
    pitch: 'अपना विचार साझा करें', workHere: 'मेरे साथ काम करें', sendHello: 'संदेश भेजें', operate: 'मेरी कार्यशैली देखें', reachUs: 'संपर्क:', emailPlaceholder: 'अपना ईमेल दर्ज करें', emailButton: 'शुरू करें',
    selectedWork: 'चुनिंदा काम / 2023—2026', previousWork: 'पिछला काम',
    workIntro: 'कुछ वेबसाइट और डिजिटल अनुभव जिन्हें मैंने पहली रूपरेखा से अंतिम पिक्सेल तक डिजाइन और विकसित किया है।',
    mugoraType: 'वेबसाइट डिजाइन और विकास', obaydaType: 'ब्रांड वेबसाइट और इंटरैक्शन डिजाइन', sinaiType: 'ट्रैवल वेबसाइट और फ्रंट-एंड निर्माण',
    availability: 'सार्थक डिजिटल प्रोजेक्ट्स के लिए उपलब्ध।'
  },
  de: {
    guardTitle: 'Quellcode geschützt', guardText: 'Der Quellcode wird in dieser Ansicht nicht angezeigt.',
    work: 'Arbeiten', about: 'Über mich', contact: 'Kontakt', getInTouch: 'Kontakt aufnehmen', warp: 'Biege den Moment',
    intro: 'Hallo, ich bin Abdelrahman,<br>Front-End-Entwickler · 21 Jahre alt',
    description: 'Ich bin Abdelrahman, ein 21-jähriger Front-End-Entwickler. Ich verwandle Ideen in klare und nützliche Websites.',
    pitch: 'Idee vorschlagen', workHere: 'Mit mir arbeiten', sendHello: 'Nachricht senden', operate: 'Meine Arbeitsweise ansehen', reachUs: 'Kontakt:', emailPlaceholder: 'E-Mail eingeben', emailButton: 'Jetzt starten',
    selectedWork: 'Ausgewählte Arbeiten / 2023—2026', previousWork: 'Frühere Arbeiten',
    workIntro: 'Einige Websites und digitale Erlebnisse, die ich vom ersten Entwurf bis zum letzten Detail gestaltet und entwickelt habe.',
    mugoraType: 'Webdesign und Entwicklung', obaydaType: 'Markenwebsite und Interaktionsdesign', sinaiType: 'Reisewebsite und Front-End-Entwicklung',
    availability: 'Verfügbar für anspruchsvolle digitale Projekte.'
  }
};

const typeDescription = (text) => {
  if (!description) return;
  description.dataset.text = text;
  description.innerHTML = '';
  let index = 0;
  const type = () => {
    index += 1;
    description.innerHTML = `${text.slice(0, index)}<span class="cursor" aria-hidden="true"></span>`;
    if (index < text.length) window.setTimeout(type, 28);
    else description.querySelector('.cursor')?.remove();
  };
  type();
};

const applyLanguage = (language) => {
  const selected = translations[language] ? language : 'en';
  const dictionary = translations[selected];
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  if (description) typeDescription(dictionary.description);
  if (emailPlaceholder) emailPlaceholder.textContent = dictionary.emailPlaceholder;
  if (emailButton) emailButton.textContent = dictionary.emailButton;
  if (emailInput) {
    emailInput.placeholder = dictionary.emailPlaceholder;
    emailInput.setAttribute('aria-label', dictionary.emailPlaceholder);
  }
  if (warpText) {
    warpText.dataset.label = dictionary.warp;
    warpText.setAttribute('aria-label', dictionary.warp);
  }
  if (currentLanguage) currentLanguage.textContent = selected.toUpperCase();
  languageSwitcher?.classList.remove('is-open');
  languageButton?.setAttribute('aria-expanded', 'false');
};

languageButton?.addEventListener('click', () => {
  const isOpen = languageSwitcher?.classList.toggle('is-open') ?? false;
  languageButton.setAttribute('aria-expanded', String(isOpen));
});
languageMenu?.querySelectorAll('[data-language]').forEach((option) => {
  option.addEventListener('click', () => applyLanguage(option.dataset.language));
});

if (curvedInput && emailInput && emailValue) {
  const syncCurvedInput = () => {
    emailValue.textContent = emailInput.value;
    emailPlaceholder.style.display = emailInput.value ? 'none' : '';
  };
  emailInput.addEventListener('input', syncCurvedInput);
  curvedInput.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.value || !emailInput.checkValidity()) {
      emailInput.focus();
      return;
    }
    window.location.href = `mailto:${EMAIL}?subject=New project inquiry&body=Email: ${encodeURIComponent(emailInput.value)}`;
  });
}
document.addEventListener('click', (event) => {
  if (languageSwitcher && !languageSwitcher.contains(event.target)) {
    languageSwitcher.classList.remove('is-open');
    languageButton?.setAttribute('aria-expanded', 'false');
  }
});

if (yearElement) yearElement.textContent = String(new Date().getFullYear());

if (warpText) {
  warpText.addEventListener('pointermove', (event) => {
    const rect = warpText.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    warpText.style.setProperty('--warp-x', `${x * 8}deg`);
    warpText.style.setProperty('--warp-y', `${y * -8}deg`);
    warpText.style.setProperty('--warp-shift-x', `${x * -7}px`);
    warpText.style.setProperty('--warp-shift-y', `${y * 3}px`);
  });
  warpText.addEventListener('pointerleave', () => {
    warpText.style.setProperty('--warp-x', '0deg');
    warpText.style.setProperty('--warp-y', '0deg');
    warpText.style.setProperty('--warp-shift-x', '0px');
    warpText.style.setProperty('--warp-shift-y', '0px');
  });
}

let guardTimer;
const showSourceGuard = () => {
  if (!sourceGuard) return;
  sourceGuard.classList.add('is-visible');
  sourceGuard.setAttribute('aria-hidden', 'false');
  window.clearTimeout(guardTimer);
  guardTimer = window.setTimeout(() => {
    sourceGuard.classList.remove('is-visible');
    sourceGuard.setAttribute('aria-hidden', 'true');
  }, 2600);
};

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  showSourceGuard();
});

const blockDeveloperShortcuts = (event) => {
  const key = event.key.toLowerCase();
  const modifier = event.ctrlKey || event.metaKey;
  const editable = event.target instanceof HTMLElement && (
    event.target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)
  );
  const blockedTools = event.key === 'F12' || event.code === 'F12' || event.keyCode === 123 || (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key));
  const blockedSource = modifier && (['u', 's'].includes(key) || ['KeyU', 'KeyS'].includes(event.code));
  const blockedCopy = modifier && (key === 'c' || event.code === 'KeyC') && !editable;
  if (!blockedTools && !blockedSource && !blockedCopy) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  showSourceGuard();
};

document.addEventListener('keydown', blockDeveloperShortcuts, true);
document.addEventListener('keyup', blockDeveloperShortcuts, true);
window.addEventListener('keydown', blockDeveloperShortcuts, true);
window.addEventListener('keypress', blockDeveloperShortcuts, true);
document.addEventListener('dragstart', (event) => {
  event.preventDefault();
  showSourceGuard();
}, true);

document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    showSourceGuard();
  });
  image.addEventListener('dragstart', (event) => event.preventDefault());
});

if (video) {
  video.src = VIDEO_URL;
  video.load();
  const startVideo = () => {
    video.play().catch(() => {
      // Some mobile browsers wait for a user gesture before allowing playback.
    });
  };
  video.addEventListener('loadeddata', startVideo, { once: true });
  startVideo();

  if (window.matchMedia('(min-width: 768px) and (pointer: fine)').matches) {
    let previousX = null;
    let targetTime = null;
    let queuedTime = null;
    let seeking = false;

    const seekNext = () => {
      seeking = false;
      if (queuedTime !== null) {
        video.currentTime = queuedTime;
        queuedTime = null;
        seeking = true;
      }
    };

    const smoothSeek = () => {
      if (targetTime !== null && Number.isFinite(video.duration)) {
        const distance = targetTime - video.currentTime;
        if (Math.abs(distance) > 0.01) {
          const nextTime = video.currentTime + distance * 0.1;
          if (seeking) queuedTime = nextTime;
          else {
            video.currentTime = nextTime;
            seeking = true;
          }
        }
      }
      window.requestAnimationFrame(smoothSeek);
    };

    video.addEventListener('seeked', seekNext);
    window.addEventListener('mousemove', (event) => {
      if (!Number.isFinite(video.duration)) return;
      if (previousX === null) {
        previousX = event.clientX;
        return;
      }
      const delta = event.clientX - previousX;
      previousX = event.clientX;
      const baseTime = targetTime ?? video.currentTime;
      targetTime = Math.max(0, Math.min(video.duration, baseTime + (delta / window.innerWidth) * SENSITIVITY * video.duration));
    }, { passive: true });
    window.requestAnimationFrame(smoothSeek);
  }
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

window.setTimeout(() => applyLanguage('en'), 600);

window.setTimeout(() => actions?.classList.remove('is-hidden'), 400);

copyButton?.addEventListener('click', async () => {
  if (!navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {}
});
