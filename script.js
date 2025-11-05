document.addEventListener('DOMContentLoaded', function() {
    // Utility functions
    const qs = (sel, ctx = document) => ctx.querySelector(sel);
    const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Check for saved theme preference, otherwise use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Set initial theme
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.checked = savedTheme === 'light';
        } else {
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            themeToggle.checked = !prefersDark;
        }

        // Handle theme toggle
        themeToggle.addEventListener('change', function(e) {
            const theme = e.target.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            // Smooth transition for theme change
            document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.documentElement.style.transition = '';
            }, 300);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                const theme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
                themeToggle.checked = !e.matches;
            }
        });
    }

    // Theme handling
    const initTheme = () => {
        const themeToggle = qs('#themeToggle');
        if (!themeToggle) return;

        // Check for saved theme preference, otherwise use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Set initial theme
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.checked = savedTheme === 'light';
        } else {
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            themeToggle.checked = !prefersDark;
        }

        // Handle theme toggle
        themeToggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            // Smooth transition for theme change
            document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.documentElement.style.transition = '';
            }, 300);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const theme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
                themeToggle.checked = !e.matches;
            }
        });
    };

    // Mobile nav toggle
    const toggle = qs('.nav-toggle');
    const menu = qs('#navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
			document.addEventListener('DOMContentLoaded', function() {
				const qs = (sel, ctx = document) => ctx.querySelector(sel);
				const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

				/* ------------------------
				   Translations (EN / ML)
				------------------------ */
				const translations = {
					en: {
						brand: 'Saint Charles Borromeo',
						navAbout: 'About', navLegacy: 'Legacy', navTimeline: 'Timeline', navQuotes: 'Quotes', navPrayer: 'Prayer', navResources: 'Resources',
						bannerTitle: 'Happy Catechism Teachers Day!',
						bannerSub: 'Celebrating the dedication and service of all catechism teachers',
						heroTitle: 'Remembering Saint Charles Borromeo',
						heroSubtitle: 'Patron of Catechists and Pastoral Reform — celebrated on <strong>November 4</strong>.',
						ctaLearn: 'Learn About His Life', ctaPray: 'Pray for Catechists',
						figcaption: 'Saint Charles Borromeo (1538–1584)',
						aboutTitle: 'About Saint Charles Borromeo',
						aboutP1: 'Saint Charles Borromeo (1538–1584) was a cardinal and Archbishop of Milan who played a leading role in the Counter‑Reformation.',
						aboutP2: 'He established seminaries and personally served the hungry and sick during plagues. His feast day is celebrated on <strong>November 4</strong>.',
						catechistCardTitle: 'For Catechism Teachers', chk1: 'Teach sound doctrine with clarity and love', chk2: 'Live the Gospel you proclaim', chk3: 'Accompany students and families personally', chk4: 'Pray and prepare diligently',
						legacyTitle: 'Patronage and Legacy', legacyP: 'Charles Borromeo promoted catechesis, clergy formation and pastoral charity.',
						familyTitle: 'Noble Heritage: The Borromeo Family', famCard1Title: 'Noble Beginnings', famCard1P: 'Born October 2, 1538, at Arona.', famCard2Title: 'Family Life', famCard2P: 'Second son among six; devoted life to the Church.',
						famHighlightTitle: 'Family Values & Legacy', famH1: 'Dedication to charitable works', famH2: 'Strong commitment to the Church', famH3: 'Support of education', famH4: 'Service to the poor and sick',
						timelineTitle: 'Life Timeline', tl1: 'Born in Arona.', tl2: 'Involved with Council of Trent.', tl3: 'Archbishop of Milan (1564–1584).', tl4: 'Led relief during plague.', tl5: 'Died 1584; canonized later.',
						quotesTitle: 'Words to Live By', q1: '“Be sure that you first preach by the way you live.”', q2: '“Begin every day with new eagerness.”', q3: '“Let no one go away hungry.”', btnPrev: 'Previous', btnNext: 'Next',
						prayerTitle: 'A Prayer for Catechists', prayerP: 'Saint Charles Borromeo, intercede for all who hand on the faith. Amen.',
						catDayTitle: 'November 4 — Catechism Teachers Day', catDayP: 'Thank a catechist today.', btnResources: 'Find Resources',
						resourcesTitle: 'Resources', res2Title: 'Reading', res2P: 'Introductory articles and archives.', footnote: '', footer1: 'Saint Charles Borromeo — Feast Day November 4', footer2: 'Made with care.'
					},
					ml: {
						brand: 'സെന്റ് ചാൾസ് ബൊറോമിയോ', navAbout: 'പരിചയം', navLegacy: 'പാരമ്പര്യം', navTimeline: 'ജീവിതകാലം', navQuotes: 'വചനങ്ങൾ', navPrayer: 'പ്രാർഥന', navResources: 'റിസോഴ്സുകൾ',
						bannerTitle: 'കറ്റകിസം അധ്യാപക ദിനാശംസകൾ!', bannerSub: 'അഭിനന്ദനങ്ങൾ', heroTitle: 'സെന്റ് ചാൾസ് ബൊറോമിയോയെ സ്മരിക്കുന്നു', heroSubtitle: 'കറ്റകിസത്തിന്റെ രക്ഷാധികാരി — <strong>നവംബർ 4</strong>.',
						ctaLearn: 'അവന്റെ ജീവിതത്തെ കുറിച്ച്', ctaPray: 'പ്രാർത്ഥിക്കുക', figcaption: '1538–1584', aboutTitle: 'അവനെ കുറിച്ച്', aboutP1: '1538–1584; മിലാനിലെ ഔപചാരിക നേതാവായിരുന്നു.', aboutP2: 'സെമിനാരികൾ സ്ഥാപിച്ചു; മഹാമാരിക്കാലത്ത് സേവനം ചെയ്തു.',
						catechistCardTitle: 'കറ്റകിസം അധ്യാപകർക്കായി', chk1: 'സത്യോപദേശം പഠിപ്പിക്കുക', chk2: 'സുവിശേഷം ജീവിക്കുക', chk3: 'അനുഗമിക്കുക', chk4: 'പ്രാർത്ഥിക്കുക',
						legacyTitle: 'പാരമ്പര്യം', legacyP: 'കറ്റകിസവും സേവനവും അദ്ദേഹത്തിന്റെ പാരമ്പര്യമാണ്.',
						familyTitle: 'ബൊറോമിയോ കുടുംബം', famCard1Title: 'ആരംഭം', famCard1P: '1538 ഒക്ടോബർ 2-ന് അറോണയിൽ കണ്ടം.', famCard2Title: 'കുടുംബം', famCard2P: 'രണ്ടാമനായി ജനിച്ചു.',
						famHighlightTitle: 'കുടുംബ മൂല്യങ്ങൾ', famH1: 'ദാനധർമ്മം', famH2: 'സഭാപരമായ പ്രതിജ്ഞ', famH3: 'വിദ്യാഭ്യാസ പിന്തുണ', famH4: 'ദരിദ്രർക്കുള്ള സേവനം',
						timelineTitle: 'ജീവിതകാലം', tl1: 'അറോണിൽ ജനിച്ചു.', tl2: 'ട്രെന്റ് കൗൺസിൽ പങ്കാളി.', tl3: 'മിലാനിലെ ആർച്ച്‌ബിഷപ്പ്.', tl4: 'സേവനം മഹാമാരിക്കാലത്ത്.', tl5: '1584; പിന്നീട് വിശുദ്ധനായി.',
						quotesTitle: 'വചനങ്ങൾ', q1: '“ജീവിതം കൊണ്ട് ആദ്യം പ്രചാരണം നടത്തുക.”', q2: '“ദിവസം nuevos”', q3: '“അരിപ്പിള്ള് എല്ലാവർക്കും.”', btnPrev: 'മുൻപത്തെ', btnNext: 'അടുത്തത്',
						prayerTitle: 'പ്രാർത്ഥന', prayerP: 'ദൈവത്തിനുള്ള പ്രാർത്ഥന.', catDayTitle: 'നവംബർ 4', catDayP: 'അദ്ധ്യാപകരെ നന്ദി പറയൂ.', btnResources: 'റിസോഴ്സുകൾ', resourcesTitle: 'റിസോഴ്സുകൾ', res2Title: 'വായന', res2P: 'ആവിശ്യക രേഖകൾ', footer1: 'തിരുനാൾ നവംബർ 4', footer2: 'സ്നേഹത്തോടെ'
					}
				};

				/* Apply language translations to matching element IDs */
				function applyLanguage(lang) {
					const dict = translations[lang] || translations.en;
					Object.entries(dict).forEach(([id, value]) => {
						const el = qs('#' + id);
						if (!el) return;
						if (/Subtitle|heroSubtitle|bannerSub/.test(id) || id === 'aboutP2') el.innerHTML = value;
						else el.textContent = value;
					});
					document.documentElement.setAttribute('lang', lang === 'ml' ? 'ml' : 'en');
					localStorage.setItem('lang', lang);
				}

				/* Theme init */
				function initTheme() {
					const themeToggle = qs('#themeToggle');
					if (!themeToggle) return;
					const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
					const savedTheme = localStorage.getItem('theme');
					if (savedTheme) {
						document.documentElement.setAttribute('data-theme', savedTheme);
						themeToggle.checked = savedTheme === 'light';
					} else {
						document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
						themeToggle.checked = !prefersDark;
					}
					themeToggle.addEventListener('change', function(e) {
						const theme = e.target.checked ? 'light' : 'dark';
						document.documentElement.setAttribute('data-theme', theme);
						localStorage.setItem('theme', theme);
					});
				}

				/* Mobile nav */
				const navToggle = qs('.nav-toggle');
				const navMenu = qs('#navMenu');
				if (navToggle && navMenu) {
					navToggle.addEventListener('click', () => {
						const open = navMenu.classList.toggle('active');
						navToggle.setAttribute('aria-expanded', String(open));
					});
				}

				/* Language selector wiring */
				const langSelect = qs('#lang');
				if (langSelect) {
					const saved = localStorage.getItem('lang') || 'en';
					langSelect.value = saved;
					applyLanguage(saved);
					langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
				}

				/* Smooth scroll */
				qsa('a[href^="#"]').forEach(a => {
					a.addEventListener('click', (e) => {
						const targetId = a.getAttribute('href');
						if (!targetId || targetId === '#') return;
						const el = qs(targetId);
						if (!el) return;
						e.preventDefault();
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
						navMenu?.classList.remove('active');
						navToggle?.setAttribute('aria-expanded', 'false');
					});
				});

				/* Quotes rotator */
				const quotes = qsa('.quote');
				if (quotes.length > 1) {
					let idx = 0;
					const show = (i) => { quotes.forEach(q => q.classList.remove('active')); quotes[i].classList.add('active'); };
					const next = () => { idx = (idx + 1) % quotes.length; show(idx); };
					const prev = () => { idx = (idx - 1 + quotes.length) % quotes.length; show(idx); };
					show(idx);
					qs('[data-next]')?.addEventListener('click', next);
					qs('[data-prev]')?.addEventListener('click', prev);
					let timer = setInterval(next, 6000);
					const container = qs('.quotes');
					container?.addEventListener('mouseenter', () => clearInterval(timer));
					container?.addEventListener('mouseleave', () => { timer = setInterval(next, 6000); });
				}

				/* Initialize features */
				initTheme();
			});



