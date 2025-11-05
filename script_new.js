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

    // Mobile Navigation Toggle
    const navToggle = qs('.nav-toggle');
    const navMenu = qs('#navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Smooth Scroll
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

	// Language selector (EN / ML)
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
			aboutP1: 'Saint Charles Borromeo (1538–1584) was a cardinal and Archbishop of Milan who played a leading role in the Counter‑Reformation. As a principal figure in implementing the reforms of the Council of Trent, he modeled pastoral charity, simplicity, and rigorous catechesis. His commitment to teaching the faith and forming clergy and laity makes him a patron and inspiration for catechists today.',
			aboutP2: 'He established seminaries, promoted clear doctrine, and personally served the hungry and sick during plagues, visiting parishes on foot to teach and console. His feast day is celebrated on <strong>November 4</strong>.',
			catechistCardTitle: 'For Catechism Teachers', chk1: 'Teach sound doctrine with clarity and love', chk2: 'Live the Gospel you proclaim', chk3: 'Accompany students and families personally', chk4: 'Pray and prepare diligently',
			legacyTitle: 'Patronage and Legacy', legacyP: "Charles Borromeo's legacy is a Church renewed by conversion and catechesis. He championed parish missions, catechism for children, and a pastoral presence that put Christ's mercy at the center. His life continues to encourage catechists to unite truth with tenderness.",
			pill1: 'Pastoral Reform', pill2: 'Catechesis', pill3: 'Clergy Formation', pill4: 'Mercy in Action',
			familyTitle: 'Noble Heritage: The Borromeo Family',
			famCard1Title: 'Noble Beginnings', famCard1P: "Born on October 2, 1538, in the Castle of Arona, Saint Charles Borromeo came from the noble Borromeo family of Arona. His father was Count Gilberto Borromeo, and his mother was Margherita de' Medici, sister to Pope Pius IV.",
			famCard2Title: 'Family Life', famCard2P: 'Charles was the second son among six children. His older brother was Federico, and he had several sisters including Anna, who later married Prince Fabrizio Colonna. Despite his noble upbringing, Charles chose a life dedicated to the Church, showing remarkable piety from an early age.',
			famHighlightTitle: 'Family Values & Legacy', famHighlightIntro: 'The Borromeo family was known for their:',
			famH1: 'Dedication to charitable works', famH2: 'Strong commitment to the Church', famH3: 'Support of education and religious formation', famH4: 'Service to the poor and sick',
			timelineTitle: 'Life Timeline', tl1: 'Born in Arona, Italy.', tl2: 'Guides the closing sessions and implementation of the Council of Trent; ordained priest and bishop.', tl3: 'Archbishop of Milan: establishes seminaries, promotes catechism, reforms clergy and liturgy.', tl4: 'Leads relief during famine and plague, personally caring for the sick and poor.', tl5: 'Dies in Milan; later canonized as a saint.',
			quotesTitle: 'Words to Live By', q1: '“Be sure that you first preach by the way you live.”', q2: '“If we wish to make any progress in the service of God we must begin every day of our life with new eagerness.”', q3: '“The loaf of charity is for everyone; let no one go away hungry.”', btnPrev: 'Previous', btnNext: 'Next',
			prayerTitle: 'A Prayer for Catechists',
			prayerP: 'Saint Charles Borromeo, shepherd of souls and teacher of truth, intercede for all who hand on the faith. Obtain for us zeal, humility, and patience, that we may form disciples who know and love Jesus Christ. May our words be clear, our lives consistent, and our hearts merciful. Amen.',
			catDayTitle: 'November 4 — Catechism Teachers Day', catDayP: 'Thank a catechist today. Share a note, say a prayer, or offer help to your parish program. Small acts encourage great missions.', btnResources: 'Find Resources',
			resourcesTitle: 'Resources',
			res2Title: 'Biography & Teachings',
			res2P: 'Learn about the life, reform work, and spiritual leadership of Saint Charles Borromeo, one of the key figures of the Catholic Counter-Reformation.',
			res3Title: 'Council of Trent Resources',
			res3P: 'Discover the key reforms of the Council of Trent, where Saint Charles Borromeo played a crucial role in shaping modern Catholic education and discipline.',
			res4Title: 'Catechism & Educational Resources',
			res4P: 'Download catechism outlines and youth-friendly resources that reflect Saint Charles Borromeo’s commitment to faith formation.',
			footnote: 'All external resources are from trusted Catholic organizations and educational archives.',
			copyright: '© 2025 All rights reserved. This site is dedicated to promoting the spiritual legacy of Saint Charles Borromeo and supporting catechists worldwide.',
			disclaimer: 'All content is for educational and devotional purposes.'
		},
		ml: {
			brand: 'സെന്റ് ചാൾസ് ബൊറോമിയോ',
			navAbout: 'പരിചയം', navLegacy: 'പാരമ്പര്യം', navTimeline: 'ജീവിതകാലം', navQuotes: 'വചനങ്ങൾ', navPrayer: 'പ്രാർഥന', navResources: 'റിസോഴ്സുകൾ',
			bannerTitle: 'കറ്റകിസം അധ്യാപക ദിനാശംസകൾ!',
			bannerSub: 'എല്ലാ കറ്റകിസം അധ്യാപകരുടെയും സമർപ്പണവും സേവനവും ആഘോഷിക്കുന്നു',
			heroTitle: 'സെന്റ് ചാൾസ് ബൊറോമിയോയെ സ്മരിക്കുന്നു',
			heroSubtitle: 'കറ്റകിസത്തിന്റെ രക്ഷാധികാരി — ആഘോഷദിനം <strong>നവംബർ 4</strong>.',
			ctaLearn: 'അവന്റെ ജീവിതത്തെ കുറിച്ച് അറിയുക', ctaPray: 'കറ്റകിസം അധ്യാപകർക്കായി പ്രാർത്ഥിക്കൂ',
			figcaption: 'സെന്റ് ചാൾസ് ബൊറോമിയോ (1538–1584)',
			aboutTitle: 'സെന്റ് ചാൾസ് ബൊറോമിയോയെ കുറിച്ച്',
			aboutP1: 'സെന്റ് ചാൾസ് ബൊറോമിയോ (1538–1584) മിലാനിലെ ആർച്ച്‌ബിഷപ്പും കാർഡിനാളും ആയിരുന്നു. ട്രെന്റ് കൗൺസിലിന്റെ നവീകരണങ്ങൾ നടപ്പിലാക്കുന്നതിൽ അദ്ദേഹം മുൻപന്തിയിലായിരുന്നു. അഗാപവും ലാളിത്യവും കഠിനമായ കറ്റകിസവും അദ്ദേഹത്തിന്റെ മേയ്പ്പിന്റെ മാതൃകയായി.',
			aboutP2: 'സെമിനാരികൾ സ്ഥാപിക്കുകയും, സുതാര്യമായ ഉപദേശങ്ങൾ പ്രോത്സാഹിപ്പിക്കുകയും, ക്ഷാമവും മഹാമാരിയും സമയങ്ങളിൽ ദരിദ്രർക്കായി വ്യക്തിപരമായി സേവിക്കുകയും ചെയ്തു. അദ്ദേഹത്തിന്റെ തിരുനാൾ <strong>നവംബർ 4</strong> നാണ്.',
			catechistCardTitle: 'കറ്റകിസം അധ്യാപകർക്കായി', chk1: 'വ്യക്തമായും സ്നേഹത്തോടെ സത്യോപദേശം പഠിപ്പിക്കുക', chk2: 'പ്രഖ്യാപിക്കുന്ന സുവിശേഷം ജീവിക്കുക', chk3: 'വിദ്യാർത്ഥികളെയും കുടുംബങ്ങളെയും അടുത്ത് അനുഗമിക്കുക', chk4: 'പ്രാർത്ഥനയോടും തയ്യാറെടുപ്പോടും പ്രവർത്തിക്കുക',
			legacyTitle: 'പാരമ്പര്യവും സ്വാധീനവും', legacyP: 'ബൊറോമിയോയുടെ പാരമ്പര്യം പരിവർത്തനവും കറ്റകിസവും വഴിയുള്ള സഭയുടെ പുതുക്കലാണ്. കുട്ടികൾക്കായുള്ള കറ്റകിസം, പള്ളി മിഷനുകൾ, കരുണയുടെ പാസ്റ്റോറൽ സാന്നിധ്യം — ഇതെല്ലാം അദ്ദേഹം മുൻനിരയിൽ നയിച്ചു.',
			pill1: 'പാസ്റ്റോറൽ നവീകരണം', pill2: 'കറ്റകിസം', pill3: 'പൂജക പരിശീലനം', pill4: 'കരുണയുടെ പ്രവൃത്തി',
			familyTitle: 'ബൊറോമിയോ കുടുംബത്തിന്റെ മഹത്വം',
			famCard1Title: 'ആരംഭകാലം', famCard1P: '1538 ഒക്ടോബർ 2-ന് അറോണയിലെ കോട്ടയിൽ ജനിച്ചു. പിതാവ് ഗിൽബെർട്ടോ ബൊറോമിയോ; മാതാവ് മാർഗരിറ്റ ഡെ മെഡിസി — പാപ്പായായിരുന്ന പിയസ് നാലാമന്റെ സഹോദരി.',
			famCard2Title: 'കുടുംബജീവിതം', famCard2P: 'ആറും മക്കളിൽ രണ്ടാമനായിരുന്നു ചാൾസ്. മഹത്തായ കുടുംബത്തിൽ വളർന്നിട്ടും, ബാല്യത്തിൽ തന്നെ ദൈവസേവനത്തിലേക്ക് അർപ്പിതജീവിതം തെരഞ്ഞെടുത്തു.',
			famHighlightTitle: 'കുടുംബ മൂല്യങ്ങൾ', famHighlightIntro: 'ബൊറോമിയോ കുടുംബം പ്രശസ്തമായിരുന്നു:',
			famH1: 'ദാനധർമ്മത്തിനുള്ള സമർപ്പണം', famH2: 'സഭയോടുള്ള പ്രതിജ്ഞാബദ്ധത', famH3: 'വിദ്യാഭ്യാസവും വിശ്വാസ രൂപീകരണവും', famH4: 'ദരിദ്രർക്കും രോഗികൾക്കും സേവനം',
			timelineTitle: 'ജീവിതകാലം', tl1: 'അറോണ, ഇറ്റലിയിൽ ജനനം.', tl2: 'ട്രെന്റ് കൗൺസിൽ നടപ്പാക്കൽ നയിച്ചു; പുരോഹിതനും മെത്രാനുമായി അഭിഷിക്തനായി.', tl3: 'മിലാനിലെ ആർച്ച്‌ബിഷപ്പ്: സെമിനാരികൾ സ്ഥാപിച്ചു; കറ്റകിസം പ്രോത്സാഹിപ്പിച്ചു.', tl4: 'ക്ഷാമവും മഹാമാരിയും സമയത്ത് ദരിദ്രർക്കായി സേവനം ചെയ്തു.', tl5: 'മിലാനിൽ അന്തരിച്ചു; പിന്നീട് വിശുദ്ധനായി പ്രഖ്യാപിച്ചു.',
			quotesTitle: 'ജീവിതത്തിന്‍റെ വാക്കുകൾ', q1: '“ആദ്യം നിങ്ങളുടെ ജീവിതം കൊണ്ടു പ്രസംഗിക്കണം.”', q2: '“ദൈവസേവനത്തിൽ മുന്നേറാൻ, ഓരോ ദിവസവും പുതിയ ഉത്സാഹത്തോടെ ആരംഭിക്കണം.”', q3: '“കരുണയുടെ അപ്പം എല്ലാവർക്കും; ആരും വിശന്നുനില്‍ക്കരുത്.”', btnPrev: 'മുൻപത്തെ', btnNext: 'അടുത്തത്',
			prayerTitle: 'കറ്റകിസം അധ്യാപകർക്കായുള്ള പ്രാർത്ഥന',
			prayerP: 'ആത്മാക്കളുടെ ഇടയനും സത്യത്തിന്റെ ഗുരുവുമായ സെന്റ് ചാൾസ് ബൊറോമിയോ, വിശ്വാസം കൈമാറുന്ന എല്ലാവർക്കുമായി മദ്ധസ്ഥനാകണമേ. ഉത്സാഹവും വിനയവും ക്ഷമയും നല്കണമേ; യേശുവിനെ അറിയുകയും സ്നേഹിക്കുകയും ചെയ്യുന്ന ശിഷ്യരെ വളർത്താൻ ഞങ്ങളെ സഹായിക്കണമേ. നമ്മുടെ വാക്കുകൾ വ്യക്തവുമാകട്ടെ, ജീവിതം സാക്ഷ്യവുമാകട്ടെ, ഹൃദയം കരുണയോടുകൂടിയതുമാകട്ടെ. ആമേൻ.',
			catDayTitle: 'നവംബർ 4 — കറ്റകിസം അധ്യാപക ദിനം', catDayP: 'ഇന്ന് ഒരു കറ്റകിസം അധ്യാപകനെ നന്ദിപറയൂ. ഒരു കുറുപ്പ്, ഒരു പ്രാർത്ഥന, അല്ലെങ്കിൽ പള്ളിയിലെ പരിപാടിക്ക് സഹായം നൽകൂ.', btnResources: 'റിസോഴ്സുകൾ കാണുക',
			resourcesTitle: 'റിസോഴ്സുകൾ',
			res2Title: 'ജീവചരിത്രവും ഉപദേശങ്ങളും',
			res2P: 'കത്തോലിക്കാ പ്രതികരണപ്രസ്ഥാനത്തിന്റെ പ്രധാന നേതാക്കളിലൊരാളായ സെന്റ് ചാൾസ് ബൊറോമിയോയുടെ ജീവിതം, നവീകരണപ്രവർത്തനങ്ങൾ, ആത്മീയ നേതൃത്വം ഇവയെക്കുറിച്ച് അറിയുക.',
			res3Title: 'ട്രെന്റ് കൗൺസിൽ — വിഭവങ്ങൾ',
			res3P: 'ട്രെന്റ് കൗൺസിലിന്റെ പ്രധാന പരിഷ്കാരങ്ങളെക്കുറിച്ച് പഠിക്കൂ — കറ്റകിസ്മും അനുഷ്ഠാനവും രൂപപ്പെടുത്തുന്നതിൽ ബൊറോമിയോ നിർണായകമായി ഇടപെട്ടു.',
			res4Title: 'കറ്റകിസം & വിദ്യാഭ്യാസ വിഭവങ്ങൾ',
			res4P: 'വിശ്വാസരൂപീകരണത്തിന് ബൊറോമിയോ നൽകിയ മാതൃക പ്രതിഫലിപ്പിക്കുന്ന പാഠരേഖകളും യുവാക്കൾക്ക് അനുയോജ്യമായ വിഭവങ്ങളും ഡൗൺലോഡ് ചെയ്യൂ.',
			footnote: 'എല്ലാ ബാഹ്യ ലിങ്കുകളും വിശ്വസനീയമായ കത്തോലിക്കാ സംഘടനകളുടെയും പഠനശേഖരങ്ങളുടെയുംതാണ്.',
			copyright: '© 2025 എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്. സെന്റ് ചാൾസ് ബൊറോമിയോയുടെ ആത്മീയ പാരമ്പര്യവും കറ്റകിസം അധ്യാപകരുടെ സേവനവും പിന്തുണയ്ക്കുന്നതിനുള്ള സൈറ്റാണ് ഇത്.',
			disclaimer: 'ഇവിടെ നൽകിയിരിക്കുന്നതൊന്നും വിദ്യാഭ്യാസത്തിനും ഭക്തിഭാവത്തിനുമുള്ളതാണ്.'
		}
	};

	function applyLanguage(lang) {
		const dict = translations[lang] || translations.en;
		Object.entries(dict).forEach(([id, value]) => {
			const el = qs('#' + id);
			if (!el) return;
			if (/Subtitle|heroSubtitle/.test(id) || id === 'aboutP2') {
				el.innerHTML = value;
			} else {
				el.textContent = value;
			}
		});
		document.documentElement.setAttribute('lang', lang === 'ml' ? 'ml' : 'en');
		localStorage.setItem('lang', lang);
	}

	const langSelect = qs('#lang');
	if (langSelect) {
		const saved = localStorage.getItem('lang') || 'en';
		langSelect.value = saved;
		applyLanguage(saved);
		langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
	}

	// Quotes rotator (Previous/Next buttons)
	const quotes = qsa('.quote');
	if (quotes.length > 0) {
		let currentIndex = Math.max(0, quotes.findIndex(q => q.classList.contains('active')));
		if (currentIndex === -1) currentIndex = 0;

		const showAt = (i) => {
			quotes.forEach(q => q.classList.remove('active'));
			quotes[i].classList.add('active');
		};

		const goNext = () => {
			currentIndex = (currentIndex + 1) % quotes.length;
			showAt(currentIndex);
		};

		const goPrev = () => {
			currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
			showAt(currentIndex);
		};

		// Initialize display in case no element is marked active
		showAt(currentIndex);

		qs('[data-next]')?.addEventListener('click', (e) => {
			e.preventDefault();
			goNext();
		});
		qs('[data-prev]')?.addEventListener('click', (e) => {
			e.preventDefault();
			goPrev();
		});

		// Optional auto-advance with hover pause
		let autoTimer = setInterval(goNext, 6000);
		const quotesContainer = qs('.quotes');
		quotesContainer?.addEventListener('mouseenter', () => clearInterval(autoTimer));
		quotesContainer?.addEventListener('mouseleave', () => {
			autoTimer = setInterval(goNext, 6000);
		});
	}

});
