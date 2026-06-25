// Delay para o carregamento do vídeo
const DELAY_VIDEO = 0;

// Ativa/desativa o Google Tag Manager
const ATIVAR_GTM = false;
// Delay para o carregamento do Google Tag Manager
const DELAY_GTM = 99999;

// O tempo só vai iniciar depois que as seções ocultas forem exibidas
const TIMER_SECONDS = 1200; // 30 minutos = 1800 segundos

// Velocidade de rolagem do texto do topo
const VELOCIDADE_DE_ROLAGEM_TOPO = 0.015; // Quanto menor, mais devagar

const notificacoes = [
    {
        nome: 'Emily Johnson, in San Diego',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '18 minutes ago',
    },
    {
        nome: 'Olivia Smith, in Houston',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '31 minutes ago',
    },
    {
        nome: 'Emma Davis, in Phoenix',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '12 minutes ago',
    },
    {
        nome: 'Sophia Anderson, in Philadelphia',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '2 minutes ago',
    },
    {
        nome: 'Isabella Thompson, in San Antonio',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '46 minutes ago',
    },
    {
        nome: 'Charlotte Clark, in Houston',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '1 minutes ago',
    },
    {
        nome: 'Abigail Hall, in San Diego',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '19 minutes ago',
    },
    {
        nome: 'Fábielli Almeida, in Houston',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '4 minutes ago',
    },
    {
        nome: 'Evelyn Young, in Dallas',
        quantidade: 'Comprou 3 Frasco - visioNova',
        tempo: '55 minutes ago',
    },
    {
        nome: 'Elizabeth Allen, in San Jose',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '6 minutes ago',
    },
    {
        nome: 'Ella Scott, in San Jose',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '19 minutes ago',
    },
    {
        nome: 'Grace Adams, in Phoenix',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '21 minutes ago',
    },
    {
        nome: 'Lily Baker, in Austin',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '10 minutes ago',
    },
    {
        nome: 'Hannah Mitchell, in San Diego',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '47 minutes ago',
    },
    {
        nome: 'Madison Carter, in Houston',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '1 minutes ago',
    },
    {
        nome: 'Scarlett Perez, in Houston',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '22 minutes ago',
    },
    {
        nome: 'Victoria Turner, in San Diego',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '35 minutes ago',
    },
    {
        nome: 'Roberta Almeida, in Houston',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '59 minutes ago',
    },
    {
        nome: 'Lucy Bela, in Chicago',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '40 minutes ago',
    },
    {
        nome: 'Patricia Gomes, in Chicago',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '2 minutes ago',
    },
    {
        nome: 'Ivana Bittercour, in Houston',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '28 minutes ago',
    },
    {
        nome: 'Patricia Ferreira, in San Antonio',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '12 minutes ago',
    },
    {
        nome: 'Claudia Moreira, in San Antonio',
        quantidade: 'Bought 3 Bottles - visioNova',
        tempo: '56 minutes ago',
    },
    {
        nome: 'Yohanna Lewis, in San Diego',
        quantidade: 'Bought 1 Bottle - visioNova',
        tempo: '50 minutes ago',
    },
    {
        nome: 'Mariana Souza, in Houston',
        quantidade: 'Bought 5 Bottles - visioNova',
        tempo: '15 minutes ago',
    },
];

function slideToggle(element, duration = 400) {
    // Se o elemento está oculto, mostramos
    if (window.getComputedStyle(element).display === 'none') {
        return slideDown(element, duration);
    }
    // Caso contrário, ocultamos
    return slideUp(element, duration);
}

function slideUp(element, duration = 400) {
    element.style.height = element.offsetHeight + 'px';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.boxSizing = 'border-box';
    element.style.overflow = 'hidden';

    // Forçar um "reflow" para aplicar a transição
    element.offsetHeight;

    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;

    setTimeout(() => {
        element.style.display = 'none';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
    }, duration);
}

function slideDown(element, duration = 400) {
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;

    if (display === 'none') display = 'block';

    element.style.display = display;
    let height = element.offsetHeight;
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = 'hidden';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.boxSizing = 'border-box';

    // Forçar um "reflow" para aplicar a transição
    element.offsetHeight;

    element.style.height = height + 'px';
    element.style.paddingTop = '';
    element.style.paddingBottom = '';
    element.style.marginTop = '';
    element.style.marginBottom = '';

    setTimeout(() => {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
    }, duration);
}

const loadVturb = () => {
    document.querySelectorAll('script[data-src$="player.js"]').forEach(script => {
        const src = script.getAttribute('data-src');
        script.setAttribute('src', src);
    });
};

let notificationIndex = 0;
const setupNotifications = () => {
    const notification = document.querySelector('.notification');

    const notificationContent = notificacoes[notificationIndex];

    notification.querySelector('.name').textContent = notificationContent.nome;
    notification.querySelector('.quantity').textContent = notificationContent.quantidade;
    notification.querySelector('.time').textContent = notificationContent.tempo;

    notificationIndex++;

    if (notificationIndex >= notificacoes.length) {
        notificationIndex = 0;
    }

    notification.classList.add('active');

    let hideTimeout = setTimeout(() => {
        notification.classList.remove('active');
    }, 8000);

    notification.querySelector('.close').addEventListener('click', () => {
        notification.classList.remove('active');
        clearTimeout(hideTimeout);
    });

    setTimeout(() => {
        setupNotifications();
    }, 25000);
};

const setupFaq = () => {
    document.querySelectorAll('.question-item').forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            slideToggle(this.querySelector('.question-item__description'), 200);
        });
    });
};

const setupViewers = () => {
    let minViewers = 589;

    document.querySelector('.viewers b').textContent = localStorage.viewers || minViewers;

    setInterval(() => {
        const viewers = Number(localStorage.viewers || minViewers);
        let newViewers = viewers + Math.floor(Math.random() * 10) - 2;

        if (newViewers <= minViewers) {
            newViewers += Math.floor(Math.random() * 15);
        }

        localStorage.viewers = newViewers;
        document.querySelector('.viewers b').textContent = newViewers;
    }, 5000);
};

const setupTimer = () => {
    const finalTime = Date.now() + (TIMER_SECONDS * 1000); // Convertendo segundos para milissegundos
    const timers = document.querySelectorAll('.timer');

    const getTime = () => {
        const remainingMilliseconds = finalTime - Date.now();
        const remainingSeconds = Math.floor(remainingMilliseconds / 1000);

        if (remainingSeconds <= 0) return '00:00';

        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    timers.forEach(timer => {
        timer.textContent = getTime();
    });

    setInterval(() => {
        timers.forEach(timer => {
            timer.textContent = getTime();
        });
    }, 200);
};

const setupMarquee = () => {
    const marquee = document.querySelector('.viewers-container');
    const marqueeContent = marquee.querySelector('h3');

    if (!marquee || !marqueeContent) return;

    // Criação de um container para os elementos duplicados
    const wrapper = document.createElement('div');
    wrapper.classList.add('marquee-wrapper');

    // Duplica o conteúdo para criar o efeito de rolagem contínua
    wrapper.appendChild(marqueeContent.cloneNode(true));
    wrapper.appendChild(marqueeContent.cloneNode(true));
    wrapper.appendChild(marqueeContent.cloneNode(true));
    wrapper.appendChild(marqueeContent.cloneNode(true));

    marquee.innerHTML = ''; // Limpa o conteúdo original
    marquee.appendChild(wrapper); // Adiciona a nova estrutura

    let position = 0;

    let animationRunning = window.innerWidth <= 576;
    const animate = () => {
        if (!animationRunning) {
            wrapper.classList.remove('running');
            wrapper.style.transform = `translateX(0%)`;
            return;
        }

        wrapper.classList.add('running');

        position -= VELOCIDADE_DE_ROLAGEM_TOPO;

        wrapper.style.transform = `translateX(${position}%)`;

        if (position <= -50) {
            position = 0;
        }

        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
        let wasRunning = animationRunning;
        animationRunning = window.innerWidth <= 576;
        if (!wasRunning && animationRunning) animate();
    });

    animate();
};

document.addEventListener('DOMContentLoaded', () => {
    setupFaq();
    setupMarquee();

    document.querySelectorAll('.viewers span').forEach(span => {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-US');
        const weekDay = date.toLocaleDateString('en-US', { weekday: 'long' });
        span.innerText = `${weekDay}, ${dateString}`;
    });

    window.addEventListener('showHiddenElements', () => {
        console.log('showHiddenElements');
        setupNotifications();
        setupTimer();

        document.querySelectorAll('.hide-elements').forEach(element => {
            element.style.display = 'none';
        });
    });

    document.querySelectorAll('.btn-product').forEach(btn => {
        // Scroll para a primeira seção de produtos
        btn.addEventListener('click', () => {
            const productSection = document.querySelector('.products-section');
            productSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adia o carregamento do vídeo
    setTimeout(loadVturb, DELAY_VIDEO * 1000);

    // Adia o carregamento do Google Tag Manager
    if (ATIVAR_GTM) {
        setTimeout(() => {
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.defer = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5FFK2Z8Z');
        }, DELAY_GTM * 1000);
    }
});

// Função que só carrega as imagens quando elas estiverem visíveis na tela
const loadImagesInView = () => {
    const className = 'placeholder-loader';
    document.querySelectorAll(`.${className}`).forEach(img => {
        // Verifica se a imagem está no viewport
        const isInView = img.getBoundingClientRect().top < window.innerHeight;

        // Se a imagem não tiver uma largura e altura, ela não está visível (na maioria dos casos)
        const isVisible = img.offsetWidth > 0 && img.offsetHeight > 0;

        // Se a imagem estiver visível, carregamos ela
        if (isInView && isVisible) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.classList.remove(className);
        }
    });
};

// Adiciona os eventos para carregar as imagens quando for feito scroll, resize e quando a página for carregada
document.addEventListener('scroll', loadImagesInView);
document.addEventListener('resize', loadImagesInView);
document.addEventListener('DOMContentLoaded', loadImagesInView);

// Bloqueia botão direito e alguns atalhos de inspeção
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123) event.preventDefault(); // F12
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) event.preventDefault(); // Ctrl+Shift+I
  if (event.ctrlKey && event.keyCode === 85) event.preventDefault(); // Ctrl+U
});