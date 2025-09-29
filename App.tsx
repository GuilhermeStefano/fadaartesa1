import React, { useState, useEffect } from 'react';

const FairyIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.5,10.25a.75.75,0,0,0,0,1.5,4.31,4.31,0,0,1,1.17,8.51.75.75,0,0,0-.7,1.22A5.81,5.81,0,0,0,21.5,12a5.8,5.8,0,0,0-9-4.75ZM12,1.5A10.5,10.5,0,1,0,22.5,12,10.5,10.5,0,0,0,12,1.5ZM5.5,12A4.5,4.5,0,0,1,10,7.5a.75.75,0,0,0,0-1.5A6,6,0,0,0,4,12a.75.75,0,0,0,1.5,0Z" />
  </svg>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-off-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                    <FairyIcon className="w-7 h-7 text-brand-brown" />
                    <h1 className="text-2xl font-serif text-brand-brown">Fada Artesã</h1>
                </div>
            </div>
        </header>
    );
};

const Hero = () => (
    <section className="min-h-[70vh] flex items-center justify-center bg-off-white pt-24">
        <div className="text-center text-brand-brown px-4">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-4">A Magia em forma de Joia</h2>
            <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto text-dark-brown">
                Um projeto que transforma paixão e criatividade em arte para vestir.
            </p>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="py-20 lg:py-32 bg-off-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-4xl font-serif text-brand-brown mb-8">Nossa História, Nosso Sonho</h3>
            
            <div className="text-left border-l-4 border-accent pl-8 mb-12">
                 <h4 className="text-2xl font-serif text-brand-brown mb-4">A Essência da Fada Artesã</h4>
                 <p className="text-dark-brown font-sans leading-relaxed mb-4">
                    A Fada Artesã nasceu de um sonho: criar mais do que simples acessórios, mas sim amuletos que carregam histórias e boas energias. Cada bijuteria é uma peça de arte única, concebida e montada à mão com dedicação, utilizando materiais escolhidos a dedo para garantir beleza e qualidade.
                 </p>
                 <p className="text-dark-brown font-sans leading-relaxed">
                    Nossa inspiração vem da natureza, dos contos de fadas e da força feminina. Acreditamos que um acessório tem o poder de expressar personalidade e iluminar o dia de quem o usa.
                 </p>
            </div>

            <div className="text-left bg-stone-200/50 p-8 rounded-lg">
                <h4 className="text-2xl font-serif text-brand-brown mb-4">Um Projeto de Feira</h4>
                <p className="text-dark-brown font-sans leading-relaxed mb-4">
                    É importante partilhar que a "Fada Artesã" é uma marca conceitual, criada com muito carinho como um projeto para uma Feira Profissionalizante escolar. O nosso objetivo é demonstrar na prática as etapas de criação, planejamento e divulgação de uma marca.
                </p>
                <p className="text-dark-brown font-sans leading-relaxed">
                    Este site serve como nosso cartão de visitas digital. Ao escanear o QR code em nosso stand, você tem a oportunidade de mergulhar em nosso universo e conhecer a identidade que construímos para este projeto. Agradecemos imensamente sua visita e seu interesse!
                </p>
            </div>
        </div>
    </section>
);

const ShowcaseSection = () => (
    <section id="showcase" className="py-20 lg:py-32 bg-stone-100">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* --- Coluna da Imagem --- */}
                <div className="order-1 md:order-1">
                    {/* 
                      INSTRUÇÕES:
                      1. Verifique se sua pasta 'img' está na raiz do projeto.
                      2. Coloque seu arquivo de imagem dentro da pasta 'img'.
                      3. Altere o nome abaixo para o nome real do seu arquivo.
                    */}
                    <img 
                        src="/img/pulseira.jpg" 
                        alt="Bijuteria artesanal da Fada Artesã em destaque"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
                {/* --- Coluna do Texto --- */}
                <div className="order-2 md:order-2 text-left">
                    <h3 className="text-4xl font-serif text-brand-brown mb-6">Criações Únicas, Feitas à Mão</h3>
                    <p className="text-dark-brown font-sans leading-relaxed mb-4">
                        Cada detalhe é pensado para criar uma peça que seja mais do que um adorno: um reflexo da sua essência. Utilizamos materiais de alta qualidade e uma dose extra de carinho em cada etapa do processo artesanal.
                    </p>
                    <p className="text-dark-brown font-sans leading-relaxed">
                        Nossas criações são amuletos modernos, feitos para acompanhar você em todos os momentos, adicionando um toque de magia e exclusividade ao seu estilo pessoal.
                    </p>
                </div>
            </div>
        </div>
    </section>
);


const CallToAction = () => (
    <section id="store" className="py-20 lg:py-32 bg-stone-200 text-center">
        <div className="container mx-auto px-6">
            <h3 className="text-4xl font-serif text-brand-brown mb-4">Explore o nosso universo criativo</h3>
            <p className="text-dark-brown font-sans text-lg max-w-2xl mx-auto mb-8">
                Embora sejamos um projeto, criamos um espaço online para que você possa visualizar nossas coleções conceituais. Clique abaixo para conhecer a loja!
            </p>
            <a 
                href="https://www.instagram.com/fadaartesa.bijuteria/?utm_source=ig_web_button_share_sheet                git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-brown text-off-white font-sans font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider shadow-lg hover:bg-dark-brown transform hover:-translate-y-1 transition-all duration-300"
            >
                Conheça a Loja
            </a>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-dark-brown py-6">
        <div className="container mx-auto px-6 text-center text-stone-300 font-sans">
            <p>&copy; {new Date().getFullYear()} Fada Artesã. Todos os direitos reservados.</p>
            <p className="text-sm text-stone-400 mt-1">Feito com ♥ para a Feira Profissionalizante.</p>
        </div>
    </footer>
);

function App() {
    return (
        <div className="font-sans">
            <Header />
            <main>
                <Hero />
                <About />
                <ShowcaseSection />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;
