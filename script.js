// Text content for language switching
const textContent = {
    en: {
        // Navigation section
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Abdelkader Mohamed',
        'hero-subtitle': 'Social Media Specialist',
        'hero-description': 'Driving brand growth through data-driven social media strategies. With 2 years of experience transforming digital presence for diverse brands across multiple platforms.',
        'work-btn': 'View My Work',
        'contact-btn': 'Contact Me',
        
        // About section
        'about-title': 'About Me',
        'about-subtitle': 'Social Media Specialist with Technical Expertise',
        'about-description': "I'm a passionate Social Media Specialist with 2 years of experience in creating and executing successful social media strategies. My unique combination of marketing knowledge and technical background allows me to bridge the gap between creative content and data-driven decision making.",
        'about-description2': 'I specialize in understanding platform algorithms, optimizing content for maximum engagement, and leveraging analytics to drive brand growth. My approach combines creative storytelling with measurable results.',
        'location-text': 'Kafr El-Sheikh, Egypt',
        'experience-text': '2+ Years Experience',
        'edu1-title': 'Faculty of Computers & Information',
        'edu1-desc': "Bachelor's Degree in Information Systems with focus on digital technologies and data analysis.",
        'edu2-title': 'Information Technology Institute (ITI)',
        'edu2-desc': 'Intensive 120 hours program in Digital Marketing & Social Media with practical projects and industry training.',
        
        // Skills section
        'skills-title': 'My Skills',
        'skills-subtitle': 'Combining marketing creativity with technical expertise',
        'skill1-title': 'Social Media Strategy',
        'skill1-desc': 'Developing comprehensive strategies aligned with business goals and target audience.',
        'skill2-title': 'Content Planning & Creation',
        'skill2-desc': 'Creating engaging content calendars and producing multimedia content.',
        'skill3-title': 'Paid Ads Campaigns',
        'skill3-desc': 'Managing and optimizing paid social campaigns across multiple platforms.',
        'skill4-title': 'Analytics & Reporting',
        'skill4-desc': 'Tracking performance metrics and providing actionable insights.',
        'skill5-title': 'Branding',
        'skill5-desc': 'Developing consistent brand voice and visual identity across platforms.',
        'skill6-title': 'Community Management',
        'skill6-desc': 'Engaging with audiences and building loyal online communities.',
        
        // Portfolio section
        'portfolio-title': 'My Work',
        'portfolio-subtitle': 'Recent projects and campaigns I\'ve worked on',
        'filter-all': 'All',
        'filter-ecommerce': 'E-commerce',
        'filter-medical': 'Medical',
        'filter-tech': 'Technology',
        'filter-gaming': 'Gaming',
        'filter-marketing': 'Marketing',

        'filter-food': 'Food & Beverage',
        'modal-platforms-title': 'Platforms',
        'modal-results-title': 'Results',
        
        // Contact section
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Let\'s discuss how we can elevate your social media presence',
        'email-btn': 'Send Email',
        
        // Footer
        'quick-links-title': 'Quick Links',
        'footer-home': 'Home',
        'footer-about': 'About',
        'footer-skills': 'Skills',
        'footer-portfolio': 'Portfolio',
        'footer-contact': 'Contact',
        'contact-info-title': 'Contact Info',
        'copyright-text': 'Abdelkader Mohamed © 2026. All Rights Reserved.',
        
        // Modal
        'modal-close': 'Close'
    },
    ar: {
        // Navigation section
        'nav-home': 'الرئيسية',
        'nav-about': 'عني',
        'nav-skills': 'المهارات',
        'nav-portfolio': 'أعمالي',
        'nav-contact': 'تواصل',
        
        // Hero section
        'hero-title': 'عبد القادر محمد',
        'hero-subtitle': 'أخصائي وسائل التواصل الاجتماعي',
        'hero-description': 'دفع نمو العلامات التجارية من خلال استراتيجيات وسائل التواصل الاجتماعي القائمة على البيانات. مع خبرة عامين في تحويل الوجود الرقمي للعلامات التجارية المتنوعة عبر منصات متعددة.',
        'work-btn': 'عرض أعمالي',
        'contact-btn': 'اتصل بي',
        
        // About section
        'about-title': 'معلومات عني',
        'about-subtitle': 'أخصائي وسائل التواصل الاجتماعي بخلفية تقنية',
        'about-description': 'أنا أخصائي وسائل التواصل الاجتماعي متحمس بخبرة عامين في إنشاء وتنفيذ استراتيجيات وسائل التواصل الاجتماعي الناجحة. الجمع الفريد بين معرفتي التسويقية وخلفيتي التقنية يسمح لي بسد الفجوة بين المحتوى الإبداعي واتخاذ القرارات القائمة على البيانات.',
        'about-description2': 'أتخصص في فهم خوارزميات المنصة، وتحسين المحتوى لأقصى قدر من المشاركة، والاستفادة من التحليلات لدفع نمو العلامة التجارية. يجمع نهجي بين سرد القصص الإبداعية والنتائج القابلة للقياس.',
        'location-text': 'كفر الشيخ، مصر',
        'experience-text': 'أكثر من سنتين خبرة',
        'edu1-title': 'كلية الحاسبات والمعلومات',
        'edu1-desc': 'بكالوريوس في نظم المعلومات مع التركيز على التقنيات الرقمية وتحليل البيانات.',
        'edu2-title': 'معهد تكنولوجيا المعلومات (ITI)',
        'edu2-desc': 'برنامج مكثف لمدة 120 ساعة في التسويق الرقمي ووسائل التواصل الاجتماعي مع مشاريع عملية وتدريب صناعي.',
        
        // Skills section
        'skills-title': 'مهاراتي',
        'skills-subtitle': 'الجمع بين الإبداع التسويقي والخبرة التقنية',
        'skill1-title': 'استراتيجية وسائل التواصل الاجتماعي',
        'skill1-desc': 'تطوير استراتيجيات شاملة تتماشى مع أهداف العمل والجمهور المستهدف.',
        'skill2-title': 'تخطيط المحتوى وإنشاؤه',
        'skill2-desc': 'إنشاء تقويمات محتوى جذابة وإنتاج محتوى وسائط متعددة.',
        'skill3-title': 'حملات الإعلانات المدفوعة',
        'skill3-desc': 'إدارة وتحسين حملات التواصل الاجتماعي المدفوعة عبر منصات متعددة.',
        'skill4-title': 'التحليلات وإعداد التقارير',
        'skill4-desc': 'تتبع مقاييس الأداء وتقديم رؤى قابلة للتنفيذ.',
        'skill5-title': 'العلامة التجارية',
        'skill5-desc': 'تطوير صوت علامة تجارية متناسق وهوية بصرية عبر المنصات.',
        'skill6-title': 'إدارة المجتمع',
        'skill6-desc': 'الانخراط مع الجماهير وبناء مجتمعات مخلصة عبر الإنترنت.',
        
        // Portfolio section
        'portfolio-title': 'أعمالي',
        'portfolio-subtitle': 'المشاريع والحملات الحديثة التي عملت عليها',
        'filter-all': 'الكل',
        'filter-ecommerce': 'التجارة الإلكترونية',
        'filter-tech': 'التكنولوجيا',
        'filter-fashion': 'الأزياء',
        'filter-food': 'الطعام والمشروبات',
        'modal-platforms-title': 'المنصات',
        'modal-results-title': 'النتائج',
        
        // Contact section
        'contact-title': 'تواصل معي',
        'contact-subtitle': 'دعنا نناقش كيف يمكننا رفع مستوى وجودك على وسائل التواصل الاجتماعي',
        'email-btn': 'إرسال بريد إلكتروني',
        
        // Footer
        'quick-links-title': 'روابط سريعة',
        'footer-home': 'الرئيسية',
        'footer-about': 'عنّي',
        'footer-skills': 'المهارات',
        'footer-portfolio': 'أعمالي',
        'footer-contact': 'تواصل',
        'contact-info-title': 'معلومات الاتصال',
        'copyright-text': 'عبد القادر محمد © 2026. جميع الحقوق محفوظة.',
        
        // Modal
        'modal-close': 'إغلاق'
    }
};

// Portfolio data with images
const portfolioData = [
    {
        id: 1,
        title: 'Be Well',
        industry: 'medical',
        description: 'Developed and executed a comprehensive social media strategy for an electronics e-commerce store, resulting in a 40% increase in online sales.',
        platforms: 'Instagram, Facebook, TikTok',
        results: '40% increase in sales, 25% growth in followers',
        color: '#6C63FF',
        icon: 'fas fa-shopping-cart',
        images: [
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well1.jpg',
            './assets/brand1/be-well2.jpg',
            './assets/brand1/be-well3.jpg',
            './assets/brand1/be-well4.jpg',
            './assets/brand1/be-well5.jpg',
            './assets/brand1/be-well6.jpg'

        ]
    },
    {
        id: 2,
        title: 'Sigma Store',
        industry: 'gaming',
        description: 'Created a content strategy and influencer partnerships for a gaming brand, increasing engagement by 60% and brand awareness.',
        platforms: 'Instagram, Pinterest, TikTok',
        results: '60% engagement increase, 15K new followers',
        color: '#FF6584',
        icon: 'fas fa-tshirt',
        images: [
            './assets/brand2/ss-store.jpg',
            './assets/brand2/ss-store1.jpg',
            './assets/brand2/ss-store2.jpg',
            './assets/brand2/ss-store3.jpg',
            './assets/brand2/ss-store4.jpg',
            './assets/brand2/ss-store5.jpg',
            './assets/brand2/ss-store6.png',
            './assets/brand2/ss-store7.jpg',
            './assets/brand2/ss-store8.jpg',
        ]
    },
    {
        id: 3,
        title: 'Hydra Tech',
        industry: 'tech',
        description: 'Managed social media presence for a restaurant chain, focusing on visual content and local engagement strategies.',
        platforms: 'Instagram, Facebook, Twitter',
        results: 'Tripled online orders, 50% increase in reservations',
        color: '#36D1DC',
        icon: 'fas fa-utensils',
        images: [
            './assets/brand3/hydra.jpg',
            './assets/brand3/hydra1.jpg',
            './assets/brand3/hydra2.jpg',
            './assets/brand3/hydra3.jpg',
            './assets/brand3/hydra4.jpg',
            './assets/brand3/hydra5.jpg',
            './assets/brand3/hydra6.jpg',
            

        ]
    },
    {
        id: 4,
        title: 'LinkMarket',
        industry: 'marketing',
        description: 'Built social media presence from scratch for a tech startup, positioning them as industry thought leaders.',
        platforms: 'LinkedIn, Twitter, YouTube',
        results: 'Generated 500+ qualified leads, 200% follower growth',
        color: '#10B981',
        icon: 'fas fa-laptop-code',
        images: [
            './assets/brand4/link.jpg',
            './assets/brand4/link1.jpg',
            './assets/brand4/link2.jpg',
            './assets/brand4/link3.jpg',
            './assets/brand4/link4.jpg',
            './assets/brand4/link5.jpg',
            './assets/brand4/link6.jpg'

        ]
    },
    {
        id: 5,
        title: 'EcoWear Sustainable Fashion',
        industry: 'fashion',
        description: 'Developed a sustainability-focused content strategy for an eco-friendly clothing brand.',
        platforms: 'Instagram, Pinterest, LinkedIn',
        results: '35% increase in website traffic, 20% conversion rate',
        color: '#F59E0B',
        icon: 'fas fa-leaf',
        images: [
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg'

        ]
    },
    {
        id: 6,
        title: 'BrewMasters Coffee',
        industry: 'food',
        description: 'Created a community-focused social media strategy for a local coffee shop chain.',
        platforms: 'Instagram, Facebook, Twitter',
        results: 'Doubled local engagement, 40% increase in foot traffic',
        color: '#8B5CF6',
        icon: 'fas fa-coffee',
        images: [
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg'

        ]
    },
    {
        id: 7,
        title: 'BrewMasters Coffee',
        industry: 'food',
        description: 'Created a community-focused social media strategy for a local coffee shop chain.',
        platforms: 'Instagram, Facebook, Twitter',
        results: 'Doubled local engagement, 40% increase in foot traffic',
        color: '#8B5CF6',
        icon: 'fas fa-coffee',
        images: [
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg',
            './assets/brand1/be-well.jpg'

        ]
    }
];

// Placeholder images for portfolio items (in case actual images are not available)
const placeholderImages = {
    ecommerce: './assets/portfolio/placeholder/ecommerce.jpg',
    fashion: './assets/portfolio/placeholder/fashion.jpg',
    food: './assets/portfolio/placeholder/food.jpg',
    tech: './assets/portfolio/placeholder/tech.jpg'
};

// Social media links
const socialLinks = {
    'facebook': 'https://facebook.com',
    'twitter': 'https://twitter.com',
    'linkedin': 'https://linkedin.com',
    'instagram': 'https://instagram.com',
    'whatsapp': 'https://wa.me/201013706142'
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const currentLang = localStorage.getItem('lang') || 'en';
    updateLanguage(currentLang);
    
    // Initialize dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').classList.add('dark-mode');
    }
    
    // Render portfolio items
    renderPortfolioItems('all');
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Setup navbar active link on scroll
    setupNavbarOnScroll();
    
    // Initialize animations
    initializeAnimations();
    
    // Setup social icons
    setupSocialIcons();
    
    // Stats hover effect
    setupStatsHover();
});

// Update page language
function updateLanguage(lang) {
    // Update all text elements with data
    for (const [key, value] of Object.entries(textContent[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['nav-home', 'nav-about', 'nav-skills', 'nav-portfolio', 'nav-contact'];
        if (index < keys.length && textContent[lang][keys[index]]) {
            link.textContent = textContent[lang][keys[index]];
        }
    });
    
    // Update language toggle
    const langToggle = document.getElementById('langToggle');
    if (lang === 'ar') {
        langToggle.classList.add('ar');
    } else {
        langToggle.classList.remove('ar');
    }
    
    // Save language preference
    localStorage.setItem('lang', lang);
    
    // Update direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.fontFamily = "'Cairo', 'Poppins', sans-serif";
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        document.body.style.fontFamily = "'Poppins', sans-serif";
    }
}

// Render portfolio items
function renderPortfolioItems(filter) {
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.industry === filter);
    
    filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        // Use actual image if available, otherwise use placeholder
        const imgSrc = item.images && item.images[0] ? item.images[0] : 
                      placeholderImages[item.industry] || './assets/portfolio/placeholder/default.jpg';
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img">
                <img src="${imgSrc}" alt="${item.title}" onerror="this.src='./assets/portfolio/placeholder/default.jpg'">
            </div>
            <div class="portfolio-content">
                <span class="portfolio-tag">${item.industry.charAt(0).toUpperCase() + item.industry.slice(1)}</span>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <small><strong>Platforms:</strong> ${item.platforms}</small>
                    <button class="btn btn-sm btn-outline-primary view-details" data-id="${item.id}">Details</button>
                </div>
            </div>
        `;
        
        container.appendChild(portfolioItem);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            showPortfolioDetails(id);
        });
    });
}

// Show portfolio details
function showPortfolioDetails(id) {
    const item = portfolioData.find(item => item.id === id);
    if (!item) return;
    
    // Get current language
    const currentLang = localStorage.getItem('lang') || 'en';
    
    // Create modal content
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-image-gallery');
    const modalIndustry = document.getElementById('modal-industry');
    const modalDescription = document.getElementById('modal-description');
    const modalPlatforms = document.getElementById('modal-platforms');
    const modalResults = document.getElementById('modal-results');
    const modalClose = document.getElementById('modal-close');
    const modalPlatformsTitle = document.getElementById('modal-platforms-title');
    const modalResultsTitle = document.getElementById('modal-results-title');
    
    if (modalTitle) modalTitle.textContent = item.title;
    
    // Create image gallery
    if (modalGallery) {
        let galleryHTML = '<div class="modal-main-image">';
        
        // Use actual images if available, otherwise use placeholders
        const images = item.images && item.images.length > 0 ? item.images : 
                      [placeholderImages[item.industry] || './assets/portfolio/placeholder/default.jpg'];
        
        galleryHTML += `<img src="${images[0]}" alt="${item.title} - Image 1" id="modal-main-img" onerror="this.src='./assets/portfolio/placeholder/default.jpg'">`;
        galleryHTML += '</div>';
        
        if (images.length > 1) {
            galleryHTML += '<div class="modal-thumbnails">';
            images.forEach((img, index) => {
                galleryHTML += `<div class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${img}" alt="${item.title} - Thumbnail ${index + 1}" onerror="this.src='./assets/portfolio/placeholder/default.jpg'">
                </div>`;
            });
            galleryHTML += '</div>';
        }
        
        modalGallery.innerHTML = galleryHTML;
        
        // Add click event to thumbnails
        document.querySelectorAll('.modal-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const mainImg = document.getElementById('modal-main-img');
                if (mainImg) {
                    mainImg.src = images[index];
                }
                
                // Update active class
                document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    if (modalIndustry) modalIndustry.innerHTML = `<strong>Industry:</strong> ${item.industry.charAt(0).toUpperCase() + item.industry.slice(1)}`;
    if (modalDescription) modalDescription.textContent = item.description;
    if (modalPlatforms) modalPlatforms.textContent = item.platforms;
    if (modalResults) modalResults.textContent = item.results;
    if (modalClose) modalClose.textContent = textContent[currentLang]['modal-close'];
    if (modalPlatformsTitle) modalPlatformsTitle.textContent = textContent[currentLang]['modal-platforms-title'];
    if (modalResultsTitle) modalResultsTitle.textContent = textContent[currentLang]['modal-results-title'];
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', function() {
        const currentLang = localStorage.getItem('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
        
        // Re-render portfolio with new language
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderPortfolioItems(activeFilter);
    });
    
    // Dark mode toggle
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    });
    
    // Portfolio filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Render filtered items
            renderPortfolioItems(filter);
        });
    });
    
    // Email button
    const emailBtn = document.querySelector('.btn-primary-custom[href^="mailto"]');
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:bdelkadermoamed@gmail.com?subject=Social Media Inquiry&body=Hello Abdelkader, I would like to discuss a potential project with you.';
        });
    }
    
    // Social orbs in profile image
    document.querySelectorAll('.social-orb').forEach(orb => {
        orb.addEventListener('click', function() {
            const iconClass = this.querySelector('i').className;
            let platform = '';
            
            if (iconClass.includes('instagram')) platform = 'instagram';
            else if (iconClass.includes('facebook')) platform = 'facebook';
            else if (iconClass.includes('linkedin')) platform = 'linkedin';
            else if (iconClass.includes('twitter')) platform = 'twitter';
            
            const url = socialLinks[platform];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// Setup social icons
function setupSocialIcons() {
    // Footer social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.querySelector('i').className;
            let platform = '';
            
            if (iconClass.includes('facebook')) platform = 'facebook';
            else if (iconClass.includes('twitter')) platform = 'twitter';
            else if (iconClass.includes('linkedin')) platform = 'linkedin';
            else if (iconClass.includes('instagram')) platform = 'instagram';
            else if (iconClass.includes('whatsapp')) platform = 'whatsapp';
            
            const url = socialLinks[platform];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup navbar active link on scroll
function setupNavbarOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Add animation classes to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.skill-card, .portfolio-item, .edu-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Setup stats hover effect
function setupStatsHover() {
    const statsCircles = document.querySelectorAll('.stats-circle');
    
    statsCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}