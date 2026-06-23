// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            script: [
                // 1. Google Consent Mode v2 defaults (must be first)
                {
                    innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);`
                },
                // 2. Iubenda Cookie Solution (updates consent on user choice)
                {
                    innerHTML: `var _iub = _iub || [];
_iub.csConfiguration = {
  "siteId": 3948498,
  "cookiePolicyId": 96029410,
  "lang": "pt",
  "storage": { "useSiteId": true },
  "googleConsentMode": "template",
  "banner": {
    "acceptButtonDisplay": true,
    "closeButtonRejects": true,
    "customizeButtonDisplay": true,
    "explicitWithdrawal": true,
    "listPurposes": true,
    "position": "float-bottom-center",
    "showTitle": false
  }
};`
                },
                { async: true, src: "https://cs.iubenda.com/autoblocking/3948498.js" },
                { async: true, src: "//cdn.iubenda.com/cs/gpp/stub.js" },
                { async: true, src: "//cdn.iubenda.com/cs/iubenda_cs.js" },
                // 3. Iubenda embed script (for policy links)
                { innerHTML: "(function (w,d) {var loader = function () {var s = d.createElement('script'), tag = d.getElementsByTagName('script')[0]; s.src='https://cdn.iubenda.com/iubenda.js'; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener('load', loader, false);}else if(w.attachEvent){w.attachEvent('onload', loader);}else{w.onload = loader;}})(window, document);" },
                // 4. Iubenda consent widget (floating preferences button)
                { src: "https://embeds.iubenda.com/widgets/1d838166-f912-43d1-ac64-b536b339dbb6.js" },
                // 5. Google Analytics
                { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-03BH181FTM" },
                { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-03BH181FTM');" }
            ]
        },
        baseURL: '/' // baseURL: '/<repository>/'
    },

    runtimeConfig: {
        public: {
            DOMAIN: process.env.DOMAIN,
            NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL
        }
    },
    
    modules: ['@nuxtjs/tailwindcss', 'nuxt-jsonld', 'nuxt-simple-sitemap'],
    css: ["~/public/css/tailwind.css"]
})
