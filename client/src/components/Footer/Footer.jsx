import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer" style={{
            backgroundColor: '#000000',
            color: 'white',
            padding: '80px 0 40px',
            margin: '0',
            position: 'relative',
            overflow: 'hidden',
            background: `
                linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.98)),
                radial-gradient(circle at 20% 20%, rgba(0,255,136,0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0,212,255,0.05) 0%, transparent 50%)
            `
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0,255,136,0.03) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'floatSlow 15s ease-in-out infinite'
            }}></div>
            
            <div className="container" style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 20px',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="top" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '60px',
                    marginBottom: '60px'
                }}>
                    {/* Categories */}
                    <div className="item" style={{
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease-out 0.1s forwards'
                    }}>
                        <h2 style={{
                            color: '#00ff88',
                            marginBottom: '25px',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            borderBottom: '2px solid rgba(0,255,136,0.3)',
                            paddingBottom: '10px'
                        }}>Categories</h2>
                        {['Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech', 'Data', 'Business', 'Lifestyle', 'Photography', 'End-to-End Projects', 'Sitemap'].map((item, i) => (
                            <span key={i} style={{
                                color: '#cccccc',
                                display: 'block',
                                marginBottom: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#00ff88';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#cccccc';
                                e.target.style.transform = 'translateX(0)';
                            }}>{item}</span>
                        ))}
                    </div>

                    {/* About */}
                    <div className="item" style={{
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
                    }}>
                        <h2 style={{
                            color: '#00d4ff',
                            marginBottom: '25px',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            borderBottom: '2px solid rgba(0,212,255,0.3)',
                            paddingBottom: '10px'
                        }}>About</h2>
                        {['Careers', 'Press & News', 'Partnerships', 'Privacy Policy', 'Terms of Service', 'Intellectual Property Claims', 'Investor Relations'].map((item, i) => (
                            <span key={i} style={{
                                color: '#cccccc',
                                display: 'block',
                                marginBottom: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#00d4ff';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#cccccc';
                                e.target.style.transform = 'translateX(0)';
                            }}>{item}</span>
                        ))}
                    </div>

                    {/* Support */}
                    <div className="item" style={{
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
                    }}>
                        <h2 style={{
                            color: '#ff6b35',
                            marginBottom: '25px',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            borderBottom: '2px solid rgba(255,107,53,0.3)',
                            paddingBottom: '10px'
                        }}>Support</h2>
                        {['Help & Support', 'Trust & Safety', 'Selling on Fiverr', 'Buying on Fiverr', 'Fiverr Guides'].map((item, i) => (
                            <span key={i} style={{
                                color: '#cccccc',
                                display: 'block',
                                marginBottom: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#ff6b35';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#cccccc';
                                e.target.style.transform = 'translateX(0)';
                            }}>{item}</span>
                        ))}
                    </div>

                    {/* Community */}
                    <div className="item" style={{
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
                    }}>
                        <h2 style={{
                            color: '#9b59b6',
                            marginBottom: '25px',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            borderBottom: '2px solid rgba(155,89,182,0.3)',
                            paddingBottom: '10px'
                        }}>Community</h2>
                        {['Customer Success Stories', 'Community Hub', 'Forum', 'Events', 'Blog', 'Influencers', 'Affiliates', 'Podcast', 'Invite a Friend', 'Become a Seller', 'Community Standards'].map((item, i) => (
                            <span key={i} style={{
                                color: '#cccccc',
                                display: 'block',
                                marginBottom: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#9b59b6';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#cccccc';
                                e.target.style.transform = 'translateX(0)';
                            }}>{item}</span>
                        ))}
                    </div>

                    {/* More From Fiverr */}
                    <div className="item" style={{
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
                    }}>
                        <h2 style={{
                            color: '#f1c40f',
                            marginBottom: '25px',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            borderBottom: '2px solid rgba(241,196,15,0.3)',
                            paddingBottom: '10px'
                        }}>More From Fiverr</h2>
                        {['Fiverr Enterprise', 'Fiverr Business', 'Fiverr Pro', 'Fiverr Logo Maker', 'Get Inspired', 'Fiverr Select', 'ClearVoice', 'Content Marketing', 'Fiverr Workspace', 'Invoice Software', 'Learn', 'Online Courses', 'Working Not Working'].map((item, i) => (
                            <span key={i} style={{
                                color: '#cccccc',
                                display: 'block',
                                marginBottom: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#f1c40f';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#cccccc';
                                e.target.style.transform = 'translateX(0)';
                            }}>{item}</span>
                        ))}
                    </div>
                </div>

                <hr style={{
                    borderColor: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    margin: '40px 0'
                }} />

                <div className="bottom" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
                }}>
                    <div className="left">
                        <h2 style={{
                            color: '#00ff88',
                            fontSize: '2rem',
                            fontWeight: '700',
                            marginBottom: '10px',
                            textShadow: '0 0 20px rgba(0,255,136,0.3)'
                        }}>fiverr</h2>
                        <span style={{
                            color: '#888888',
                            fontSize: '14px'
                        }}>© Fiverr International Ltd. 2025</span>
                    </div>
                    <div className="right">
                        <div className="social" style={{
                            display: 'flex',
                            gap: '15px',
                            alignItems: 'center'
                        }}>
                            {[
                                { href: "https://twitter.com/fiverr", src: "/images/twitter.png" },
                                { href: "https://www.facebook.com/Fiverr/", src: "/images/facebook.png" },
                                { href: "https://www.linkedin.com/company/fiverr-com", src: "/images/linkedin.png" },
                                { href: "https://www.pinterest.com/fiverr/", src: "/images/pinterest.png" },
                                { href: "https://www.instagram.com/fiverr/", src: "/images/instagram.png" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} style={{
                                    display: 'inline-block',
                                    padding: '10px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(0,255,136,0.2)';
                                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                }}>
                                    <img src={social.src} alt="" style={{
                                        width: '20px',
                                        height: '20px',
                                        filter: 'brightness(0) invert(1)'
                                    }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @media (max-width: 1200px) {
                    .top { gridTemplateColumns: 'repeat(3, 1fr)' !important; }
                }
                
                @media (max-width: 768px) {
                    .top { gridTemplateColumns: 'repeat(2, 1fr)' !important; gap: 40px !important; }
                    .bottom { flexDirection: 'column' !important; gap: '20px' !important; textAlign: 'center' !important; }
                }
                
                @media (max-width: 480px) {
                    .top { gridTemplateColumns: '1fr' !important; }
                    .footer { padding: '60px 0 30px' !important; }
                }
            `}</style>
        </div>
    );
}

export default Footer;