const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const EMAIL = 'hello@mainframe.co';
const SENSITIVITY = 0.8;

const menuButton = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const video = document.querySelector('.hero-video');
const description = document.querySelector('.hero-description');
const actions = document.querySelector('.actions');
const copyButton = document.querySelector('[data-copy-email]');
const sourceGuard = document.querySelector('.source-guard');
const yearElement = document.querySelector('[data-year]');

if (yearElement) yearElement.textContent = String(new Date().getFullYear());

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

if (description) {
  const text = description.dataset.text || '';
  let index = 0;
  window.setTimeout(() => {
    const type = () => {
      index += 1;
      description.innerHTML = `${text.slice(0, index)}<span class="cursor" aria-hidden="true"></span>`;
      if (index < text.length) window.setTimeout(type, 38);
      else description.querySelector('.cursor')?.remove();
    };
    type();
  }, 600);
}

window.setTimeout(() => actions?.classList.remove('is-hidden'), 400);

copyButton?.addEventListener('click', async () => {
  if (!navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {}
});
