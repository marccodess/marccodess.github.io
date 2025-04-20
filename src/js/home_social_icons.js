export const social_icons = [
  {
    href: "https://www.github.com/marccodess/",
    icon: `<i class="uil uil-github-alt"></i>`,
  },
  {
    href: "https://www.twitter.com/marccodess",
    // Updated Twitter icon to use consistent styling
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 440" style="width: 1.1rem; height: 1.1rem;">
            <path fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>`,
  },
  {
    href: "https://marccodess.medium.com/",
    icon: `<i class="uil uil-medium-m"></i>`,
  },
  {
    href: "https://www.instagram.com/marccodess/",
    icon: `<i class="uil uil-instagram"></i>`,
  },
  {
    href: "https://www.youtube.com/@marccodess",
    icon: `<i class="uil uil-youtube"></i>`,
  }
];

// Generic render function that can be used for both header and footer
export function renderSocialIcons(containerClass = 'home__social', iconClass = 'home__social-icon') {
  return `<div class="${containerClass}">
    ${social_icons.map(item => `
      <a href="${item.href}" target="_blank" class="${iconClass}">
        ${item.icon}
      </a>
    `).join('')}
  </div>`;
}

// Specific render functions for each location
export function renderHeaderSocials() {
  return renderSocialIcons('home__social', 'home__social-icon');
}

export function renderFooterSocials() {
  return renderSocialIcons('footer__social', 'footer__social-icon');
}