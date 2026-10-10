/* Standalone portfolio interactions. No libraries or build tools required. */
const menuButton = document.querySelector('.mobile-menu-toggle');
const mobileNavigation = document.getElementById('mobile-navigation');
if (menuButton && mobileNavigation) {
  const originalIcon = menuButton.innerHTML;
  function closeMenu() {
    mobileNavigation.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.innerHTML = originalIcon;
  }
  menuButton.addEventListener('click', () => {
    const open = mobileNavigation.hidden;
    mobileNavigation.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.innerHTML = open ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M6 18 18 6"/></svg>' : originalIcon;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeMenu(); menuButton.focus(); }
  });
  mobileNavigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
}
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = String(data.get('subject') || `Portfolio enquiry from ${data.get('name')}`);
    const body = `Hello Lithil,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
    window.location.href = `mailto:bhusanilithil111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = contactForm.querySelector('[role="status"]');
    if (status) status.textContent = 'Your email draft is ready in your email app. Send it there to get in touch.';
  });
}
