// 1.28.50
import React from "react";
import './home.scss';
import Featured from "../../components/featured/Featured";
// import TrustedBy from "../../components/Trusted By/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return ([
        <div className="home">
            <Featured></Featured>
            <div style={{ 
    paddingTop: "70px", 
    background: `
        linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%),
        radial-gradient(circle at 25% 30%, rgba(0,255,136,0.08) 0%, transparent 50%),
        radial-gradient(circle at 75% 70%, rgba(0,212,255,0.06) 0%, transparent 50%)
    `,
    position: "relative",
    overflow: "hidden",
    paddingBottom: "50px"
}}>
    {/* Animated Matrix Background */}
    <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundImage: `
            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px),
            linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        animation: 'matrixDrift 25s linear infinite',
        zIndex: 1
    }}></div>
    
    {/* Floating Energy Orbs */}
    <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, rgba(0,255,136,0.08) 40%, transparent 70%)',
        borderRadius: '50%',
        animation: 'energyOrb1 18s ease-in-out infinite',
        filter: 'blur(2px)',
        zIndex: 1
    }}></div>
    
    <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.06) 40%, transparent 70%)',
        borderRadius: '50%',
        animation: 'energyOrb2 22s ease-in-out infinite',
        filter: 'blur(1px)',
        zIndex: 1
    }}></div>

    <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.10) 0%, rgba(255,107,53,0.05) 40%, transparent 70%)',
        borderRadius: '50%',
        animation: 'energyOrb3 15s ease-in-out infinite',
        filter: 'blur(1px)',
        zIndex: 1
    }}></div>
    
    {/* Floating Particles */}
    {[...Array(20)].map((_, i) => (
        <div key={i} style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            background: i % 4 === 0 ? '#00ff88' : i % 4 === 1 ? '#00d4ff' : i % 4 === 2 ? '#ff6b35' : '#9b59b6',
            borderRadius: '50%',
            opacity: 0.7,
            boxShadow: `0 0 10px currentColor`,
            animation: `floatingParticle${(i % 3) + 1} ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            zIndex: 2
        }}></div>
    ))}

    {/* Glowing Border Lines */}
    <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.6) 20%, rgba(0,212,255,0.8) 50%, rgba(0,255,136,0.6) 80%, transparent 100%)',
        animation: 'glowLine 4s ease-in-out infinite',
        zIndex: 3
    }}></div>

    <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 30%, rgba(255,107,53,0.6) 70%, transparent 100%)',
        animation: 'glowLine 6s ease-in-out infinite reverse',
        zIndex: 3
    }}></div>

    {/* Main Slider Content */}
    <div style={{ position: 'relative', zIndex: 10 }}>
        <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
                <CatCard item={card} key={card.id} />
            ))}
        </Slide>
    </div>

    {/* CSS Animations */}
    <style jsx>{`
        @keyframes matrixDrift {
            0% { transform: translateX(0) translateY(0); opacity: 0.3; }
            25% { transform: translateX(20px) translateY(-10px); opacity: 0.5; }
            50% { transform: translateX(-10px) translateY(15px); opacity: 0.3; }
            75% { transform: translateX(15px) translateY(-20px); opacity: 0.4; }
            100% { transform: translateX(0) translateY(0); opacity: 0.3; }
        }
        
        @keyframes energyOrb1 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1); 
                opacity: 0.8; 
            }
            25% { 
                transform: translateY(-30px) translateX(20px) scale(1.1); 
                opacity: 1; 
            }
            50% { 
                transform: translateY(-10px) translateX(-15px) scale(0.9); 
                opacity: 0.9; 
            }
            75% { 
                transform: translateY(-40px) translateX(10px) scale(1.05); 
                opacity: 0.7; 
            }
        }
        
        @keyframes energyOrb2 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) rotate(0deg); 
                opacity: 0.7; 
            }
            33% { 
                transform: translateY(25px) translateX(-25px) rotate(120deg); 
                opacity: 1; 
            }
            66% { 
                transform: translateY(-15px) translateX(15px) rotate(240deg); 
                opacity: 0.8; 
            }
        }
        
        @keyframes energyOrb3 {
            0%, 100% { 
                transform: translateX(-50%) translateY(0px) scale(1); 
                opacity: 0.6; 
            }
            50% { 
                transform: translateX(-50%) translateY(-35px) scale(1.2); 
                opacity: 1; 
            }
        }
        
        @keyframes floatingParticle1 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) rotate(0deg); 
                opacity: 0.6; 
            }
            33% { 
                transform: translateY(-25px) translateX(15px) rotate(120deg); 
                opacity: 1; 
            }
            66% { 
                transform: translateY(10px) translateX(-20px) rotate(240deg); 
                opacity: 0.8; 
            }
        }
        
        @keyframes floatingParticle2 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1); 
                opacity: 0.7; 
            }
            25% { 
                transform: translateY(-20px) translateX(10px) scale(1.2); 
                opacity: 1; 
            }
            75% { 
                transform: translateY(-5px) translateX(-10px) scale(0.8); 
                opacity: 0.9; 
            }
        }
        
        @keyframes floatingParticle3 {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
                opacity: 0.5; 
            }
            50% { 
                transform: translateY(-30px) rotate(180deg); 
                opacity: 1; 
            }
        }
        
        @keyframes glowLine {
            0%, 100% { 
                opacity: 0.4; 
                filter: blur(1px); 
            }
            50% { 
                opacity: 1; 
                filter: blur(2px); 
            }
        }
        
        /* Enhanced Slider Navigation */
        :global(.slick-prev),
        :global(.slick-next) {
            background: rgba(0,0,0,0.8) !important;
            border: 2px solid rgba(0,255,136,0.5) !important;
            border-radius: 50% !important;
            width: 50px !important;
            height: 50px !important;
            z-index: 20 !important;
            transition: all 0.3s ease !important;
        }
        
        :global(.slick-prev:hover),
        :global(.slick-next:hover) {
            background: rgba(0,255,136,0.2) !important;
            border-color: rgba(0,255,136,0.8) !important;
            transform: scale(1.1) !important;
            box-shadow: 0 0 20px rgba(0,255,136,0.4) !important;
        }
        
        :global(.slick-prev:before),
        :global(.slick-next:before) {
            color: #00ff88 !important;
            font-size: 16px !important;
        }
        
        /* Enhanced Slider Container */
        :global(.slick-slider) {
            padding: 20px 0 !important;
        }
        
        :global(.slick-track) {
            display: flex !important;
            align-items: center !important;
        }
        
        :global(.slick-slide) {
            opacity: 0.8 !important;
            transform: scale(0.95) !important;
            transition: all 0.3s ease !important;
            padding: 0 10px !important;
        }
        
        :global(.slick-slide:hover) {
            opacity: 1 !important;
            transform: scale(1) translateY(-5px) !important;
        }
        
        :global(.slick-active) {
            opacity: 1 !important;
            transform: scale(1) !important;
        }
    `}</style>
</div>
           <div className="features" style={{
    backgroundColor: '#000000',
    padding: '100px 0',
    minHeight: '80vh',
    position: 'relative',
    overflow: 'hidden'
}}>
    {/* Animated Background Elements */}
    <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 1
    }}></div>
    
    <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite reverse',
        zIndex: 1
    }}></div>

    <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
    }}>
        
        {/* Left Content */}
        <div className="item" style={{
            animation: 'slideInLeft 1s ease-out',
            color: '#ffffff'
        }}>
            <h1 style={{
                fontSize: '4rem',
                fontWeight: '700',
                marginBottom: '50px',
                background: 'linear-gradient(135deg, #00ff88, #00d4ff, #ff6b35)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.2',
                animation: 'textGlow 3s ease-in-out infinite alternate',
                backgroundSize: '200% 200%',
                animationName: 'gradientShift, textGlow',
                animationDuration: '4s, 3s',
                animationTimingFunction: 'ease-in-out, ease-in-out',
                animationIterationCount: 'infinite, infinite',
                animationDirection: 'alternate, alternate'
            }}>
                The best part? Everything.
            </h1>
            
            {/* Feature 1 */}
            <div style={{
                marginBottom: '40px',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}>
                <div className="title" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#00ff88'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#00ff88',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#000000',
                        animation: 'pulse 2s ease-in-out infinite'
                    }}>✓</div>
                    Stick to your budget
                </div>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#cccccc',
                    marginLeft: '39px',
                    margin: '0 0 0 39px'
                }}>
                    Find the right service for every price point.
                    No hourly rates, just project-based pricing.
                </p>
            </div>

            {/* Feature 2 */}
            <div style={{
                marginBottom: '40px',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}>
                <div className="title" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#00d4ff'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#00d4ff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#000000',
                        animation: 'pulse 2s ease-in-out infinite 0.5s'
                    }}>✓</div>
                    Get quality work done quickly
                </div>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#cccccc',
                    marginLeft: '39px',
                    margin: '0 0 0 39px'
                }}>
                    Hand your project over to a talented freelancer in minutes, get long-lasting results.
                </p>
            </div>

            {/* Feature 3 */}
            <div style={{
                marginBottom: '40px',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
            }}>
                <div className="title" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#ff6b35',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#000000',
                        animation: 'pulse 2s ease-in-out infinite 1s'
                    }}>✓</div>
                    Pay when you're happy
                </div>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#cccccc',
                    marginLeft: '39px',
                    margin: '0 0 0 39px'
                }}>
                    Upfront quotes mean no surprises. Payments only get released when you approve.
                </p>
            </div>

            {/* Feature 4 */}
            <div style={{
                marginBottom: '40px',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.8s forwards'
            }}>
                <div className="title" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#9b59b6'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#9b59b6',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#000000',
                        animation: 'pulse 2s ease-in-out infinite 1.5s'
                    }}>✓</div>
                    Count on 24/7 support
                </div>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#cccccc',
                    marginLeft: '39px',
                    margin: '0 0 0 39px'
                }}>
                    Our round-the-clock support team is available to help anytime, anywhere.
                </p>
            </div>
        </div>

        {/* Right Visual Element (replacing video) */}
        <div className="item" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'slideInRight 1s ease-out 0.3s both'
        }}>
            <div style={{
                position: 'relative',
                width: '500px',
                height: '400px',
                background: 'linear-gradient(135deg, #111111, #222222)',
                borderRadius: '20px',
                border: '2px solid #333333',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 255, 136, 0.1)',
                animation: 'cardFloat 6s ease-in-out infinite'
            }}>
                {/* Animated Grid Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 10s linear infinite',
                    opacity: 0.3
                }}></div>

                {/* Central Animated Element */}
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        marginBottom: '30px',
                        margin: '0 auto 30px',
                        animation: 'spin 8s linear infinite',
                        boxShadow: '0 0 50px rgba(0, 255, 136, 0.3)'
                    }}>
                        ⚡
                    </div>
                    
                    <h3 style={{
                        color: '#ffffff',
                        fontSize: '2rem',
                        fontWeight: '600',
                        marginBottom: '15px',
                        animation: 'textPulse 2s ease-in-out infinite'
                    }}>
                        Everything You Need
                    </h3>
                    
                    <p style={{
                        color: '#cccccc',
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        maxWidth: '300px',
                        margin: '0 auto'
                    }}>
                        Professional services, competitive pricing, quality results
                    </p>
                </div>

                {/* Floating Particles */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#00ff88',
                    borderRadius: '50%',
                    animation: 'particle1 4s ease-in-out infinite'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    right: '25%',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#00d4ff',
                    borderRadius: '50%',
                    animation: 'particle2 5s ease-in-out infinite'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '30%',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ff6b35',
                    borderRadius: '50%',
                    animation: 'particle3 6s ease-in-out infinite'
                }}></div>
            </div>
        </div>
    </div>

    {/* Inline CSS Animations */}
    <style jsx>{`
        @keyframes slideInLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes textGlow {
            from { filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.3)); }
            to { filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.5)); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 currentColor; }
            50% { transform: scale(1.1); box-shadow: 0 0 0 10px transparent; }
        }
        
        @keyframes cardFloat {
            0%, 100% { transform: translateY(0px) rotateY(0deg); }
            50% { transform: translateY(-20px) rotateY(5deg); }
        }
        
        @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes textPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        @keyframes particle1 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 1; }
            25% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
            50% { transform: translateY(-10px) translateX(-15px); opacity: 1; }
            75% { transform: translateY(-25px) translateX(5px); opacity: 0.8; }
        }
        
        @keyframes particle2 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 1; }
            33% { transform: translateY(15px) translateX(-20px); opacity: 0.6; }
            66% { transform: translateY(-10px) translateX(10px); opacity: 1; }
        }
        
        @keyframes particle3 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 1; }
            50% { transform: translateY(-30px) translateX(-10px); opacity: 0.7; }
        }
        
        @media (max-width: 768px) {
            .container {
                grid-template-columns: 1fr !important;
                gap: 60px !important;
                text-align: center;
            }
        }
    `}</style>
</div>
           <div className="explore" style={{
    minHeight: '100vh',
    background: `
        linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.95)),
        linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px),
        linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 50px 50px, 50px 50px',
    position: 'relative',
    padding: '120px 0',
    overflow: 'hidden'
}}>
    {/* Animated Background Orbs */}
    <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatSlow 12s ease-in-out infinite',
        zIndex: 0
    }}></div>
    
    <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatSlow 15s ease-in-out infinite reverse',
        zIndex: 0
    }}></div>

    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 20s ease-in-out infinite',
        zIndex: 0
    }}></div>
    
    <div className="container" style={{
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
    }}>
        <h1 style={{
            textAlign: 'center',
            fontSize: '4rem',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, #ffffff, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '600',
            letterSpacing: '-2px',
            lineHeight: '1.2',
            animation: 'titleGlow 4s ease-in-out infinite alternate',
            textShadow: '0 0 40px rgba(255,255,255,0.1)',
            opacity: 0,
            animationName: 'fadeInTitle, titleGlow',
            animationDuration: '1.5s, 4s',
            animationDelay: '0s, 1.5s',
            animationFillMode: 'forwards, none',
            animationIterationCount: '1, infinite',
            animationDirection: 'normal, alternate'
        }}>You need it, we've got it</h1>
        
        <div className="items" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            width: '100%',
            maxWidth: '100%',
            marginBottom: '15px'
        }}>
            {/* Graphics & Design */}
            <div className="item" onClick={e => navigate(`gigs?cat=Graphics & Design`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.2s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 136, 0.2), 0 0 0 1px rgba(0, 255, 136, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(0, 255, 136, 0.05), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                }}></div>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Graphics & Design</span>
            </div>

            {/* Digital Marketing */}
            <div className="item" onClick={e => navigate(`gigs?cat=Digital Marketing`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.3s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.2), 0 0 0 1px rgba(0, 212, 255, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Digital Marketing</span>
            </div>

            {/* Writing & Translation */}
            <div className="item" onClick={e => navigate(`gigs?cat=Writing & Translation`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.4s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.2), 0 0 0 1px rgba(255, 107, 53, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(255, 107, 53, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Writing & Translation</span>
            </div>

            {/* Video & Animation */}
            <div className="item" onClick={e => navigate(`gigs?cat=Video & Animation`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(155, 89, 182, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.5s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(155, 89, 182, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(155, 89, 182, 0.2), 0 0 0 1px rgba(155, 89, 182, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(155, 89, 182, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(155,89,182,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Video & Animation</span>
            </div>

            {/* Music & Audio */}
            <div className="item" onClick={e => navigate(`gigs?cat=Music & Audio`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.6s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(255, 193, 7, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(255, 193, 7, 0.2), 0 0 0 1px rgba(255, 193, 7, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(255, 193, 7, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,193,7,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Music & Audio</span>
            </div>
        </div>
        
        {/* Second Row */}
        <div className="items" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            width: '100%',
            maxWidth: '100%'
        }}>
            {/* Programming & Tech */}
            <div className="item" onClick={e => navigate(`gigs?cat=Programming & Tech`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(52, 152, 219, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.7s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(52, 152, 219, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(52, 152, 219, 0.2), 0 0 0 1px rgba(52, 152, 219, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(52, 152, 219, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(52,152,219,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Programming & Tech</span>
            </div>

            {/* Business */}
            <div className="item" onClick={e => navigate(`gigs?cat=Business`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(46, 204, 113, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.8s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(46, 204, 113, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(46, 204, 113, 0.2), 0 0 0 1px rgba(46, 204, 113, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(46, 204, 113, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(46,204,113,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Business</span>
            </div>

            {/* Lifestyle */}
            <div className="item" onClick={e => navigate(`gigs?cat=Lifestyle`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(231, 76, 60, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 0.9s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(231, 76, 60, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(231, 76, 60, 0.2), 0 0 0 1px rgba(231, 76, 60, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(231, 76, 60, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(231,76,60,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Lifestyle</span>
            </div>

            {/* Data */}
            <div className="item" onClick={e => navigate(`gigs?cat=Data`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(142, 68, 173, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 1.0s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(142, 68, 173, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(142, 68, 173, 0.2), 0 0 0 1px rgba(142, 68, 173, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(142, 68, 173, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(142,68,173,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Data</span>
            </div>

            {/* Photography */}
            <div className="item" onClick={e => navigate(`gigs?cat=Photography`)} style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
                border: '1px solid rgba(241, 196, 15, 0.2)',
                borderRadius: '12px',
                padding: '20px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'slideUp 0.8s ease-out 1.1s forwards',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }} 
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.borderColor = 'rgba(241, 196, 15, 0.5)';
                e.target.style.boxShadow = '0 15px 40px rgba(241, 196, 15, 0.2), 0 0 0 1px rgba(241, 196, 15, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, rgba(40, 40, 40, 0.95), rgba(50, 50, 50, 0.95))';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(241, 196, 15, 0.2)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))';
            }}>
                <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '12px',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.9',
                        transition: 'all 0.4s ease',
                        margin: '0 auto 12px'
                    }}
                />
                <div className="line" style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(241,196,15,0.4), transparent)',
                    margin: '8px 0',
                    opacity: '0.7',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px'
                }}></div>
                <span style={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '500',
                    display: 'block',
                    transition: 'all 0.4s ease',
                    letterSpacing: '0.3px',
                    lineHeight: '1.4',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>Photography</span>
            </div>
        </div>
    </div>

    {/* Inline CSS Animations */}
    <style jsx>{`
        @keyframes fadeInTitle {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes titleGlow {
            from { 
                filter: drop-shadow(0 0 20px rgba(255,255,255,0.2));
                backgroundPosition: 0% 50%;
            }
            to { 
                filter: drop-shadow(0 0 40px rgba(0,255,136,0.3));
                backgroundPosition: 100% 50%;
            }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0; 
                transform: translateY(50px) scale(0.9);
            }
            to { 
                opacity: 1; 
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes floatSlow {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg);
                opacity: 0.7;
            }
            50% { 
                transform: translateY(-40px) rotate(180deg);
                opacity: 1;
            }
        }
        
        @keyframes pulse {
            0%, 100% { 
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.3;
            }
            50% { 
                transform: translate(-50%, -50%) scale(1.1);
                opacity: 0.5;
            }
        }
        
        @media (max-width: 1200px) {
            .items {
                gridTemplateColumns: 'repeat(4, 1fr)' !important;
            }
        }
        
        @media (max-width: 768px) {
            .items {
                gridTemplateColumns: 'repeat(2, 1fr)' !important;
                gap: 12px !important;
            }
            
            .explore {
                padding: 60px 0 !important;
            }
            
            .container h1 {
                fontSize: '2.5rem' !important;
                marginBottom: '40px' !important;
            }
        }
        
        @media (max-width: 480px) {
            .items {
                gridTemplateColumns: '1fr' !important;
            }
            
            .container h1 {
                fontSize: '2rem' !important;
            }
            
            .item {
                minHeight: '100px' !important;
                padding: '15px 8px' !important;
            }
        }
    `}</style>
</div>
            {/* <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>fiverr <em><span style={{ fontWeight: '300' }}>business.</span></em></h1>
                        <h1>A solution built for <em>business</em></h1>
                        <p >Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                        <div className="title">
                            <img src="/images/check.png" alt="check" />
                            Talent matching
                        </div>
                        <div className="title">
                            <img src="/images/check.png" alt="check" />
                            Dedicated account management
                        </div>
                        <div className="title">
                            <img src="/images/check.png" alt="check" />
                            Team collaboration tools
                        </div>
                        <div className="title">
                            <img src="/images/check.png" alt="check" />
                            Business payment solutions
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img src="images/business-desktop-870-x1.webp" alt="imagea" />
                    </div>
                </div>
            </div> */}
            {/* <div className="logo_maker">
                <div className="items">
                    <div className="left">
                        <h1>fiverr <span>logomaker.</span></h1>
                        <p className="first_para">Make an incredible logo<br></br>
                            <em className="first_para_em"> in minutes</em>
                        </p>
                        <p className="second_para">Pre-designed by top talent. Just add your touch.</p>
                        <button className="logo_button"><strong>Try Fiverr Logo Maker</strong></button>
                    </div>
                    <div className="right">
                        <img src="/images/logomaker.webp" alt="" />
                    </div>
                </div>
            </div> */}
            {/* second slidebar */}
           <div className="secondslide" style={{
    position: 'relative',
    minHeight: '100vh',
    background: '#000000',
    padding: '80px 0',
    overflow: 'hidden'
}}>
    {/* Simple Background Elements */}
    <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '10%',
        left: '-250px',
        animation: 'slowFloat 30s ease-in-out infinite',
        zIndex: 1
    }}></div>
    
    <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '10%',
        right: '-200px',
        animation: 'slowFloat 35s ease-in-out infinite reverse',
        zIndex: 1
    }}></div>

    {/* Main Content Container */}
    <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
    }}>
        
        {/* Title Section */}
        <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            opacity: '0',
            animation: 'fadeInUp 1s ease-out 0.2s forwards'
        }}>
            <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: '#ffffff',
                margin: '0',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
                Inspiring work made on 
                <span style={{
                    background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginLeft: '15px',
                    display: 'inline-block',
                    animation: 'shimmer 3s ease-in-out infinite'
                }}>
                    Fiverr
                </span>
            </h2>
            
            <div style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                margin: '30px auto 0',
                borderRadius: '2px',
                opacity: '0',
                animation: 'expandWidth 0.8s ease-out 0.8s forwards'
            }}></div>
        </div>

        {/* Slide Container */}
        <div style={{
            opacity: '0',
            transform: 'translateY(50px)',
            animation: 'slideUp 0.8s ease-out 0.6s forwards',
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '40px 20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
            <Slide slidesToShow={4} arrowsScroll={5}>
                {
                    projects.map(
                        (card => (
                            <div key={card.id} style={{
                                padding: '20px 15px'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(40,40,40,0.6))',
                                    border: '2px solid rgba(255,255,255,0.1)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,255,136,0.2), 0 0 0 2px rgba(0,255,136,0.3)';
                                    e.currentTarget.style.border = '2px solid rgba(0,255,136,0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.border = '2px solid rgba(255,255,255,0.1)';
                                }}>
                                    
                                    {/* Hover Glow Effect */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,212,255,0.1))',
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease',
                                        zIndex: 1,
                                        pointerEvents: 'none'
                                    }}></div>
                                    
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <ProjectCard item={card} />
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </Slide>
        </div>
        
        {/* Bottom Accent */}
        <div style={{
            textAlign: 'center',
            marginTop: '60px',
            opacity: '0',
            animation: 'fadeIn 1s ease-out 1.2s forwards'
        }}>
            <div style={{
                display: 'inline-flex',
                gap: '8px'
            }}>
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '12px',
                            height: '12px',
                            background: `linear-gradient(45deg, ${i === 0 ? '#00ff88' : i === 1 ? '#00d4ff' : '#ff6b35'}, transparent)`,
                            borderRadius: '50%',
                            animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    </div>

    <style jsx>{`
        @keyframes slowFloat {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(50px, -30px); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes expandWidth {
            from {
                opacity: 0;
                width: 0;
            }
            to {
                opacity: 1;
                width: 100px;
            }
        }
        
        @keyframes shimmer {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.3); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        /* Enhanced Slider Arrows */
        .secondslide .slick-prev,
        .secondslide .slick-next {
            background: rgba(0,0,0,0.8) !important;
            border: 2px solid rgba(0,255,136,0.5) !important;
            border-radius: 50% !important;
            width: 60px !important;
            height: 60px !important;
            z-index: 20 !important;
            transition: all 0.3s ease !important;
        }
        
        .secondslide .slick-prev:hover,
        .secondslide .slick-next:hover {
            background: rgba(0,255,136,0.2) !important;
            border-color: rgba(0,255,136,0.8) !important;
            transform: scale(1.1) !important;
            box-shadow: 0 0 30px rgba(0,255,136,0.4) !important;
        }
        
        .secondslide .slick-prev:before,
        .secondslide .slick-next:before {
            color: #00ff88 !important;
            font-size: 20px !important;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .secondslide {
                padding: 60px 0 !important;
            }
        }
        
        @media (max-width: 480px) {
            .secondslide h2 {
                font-size: 2rem !important;
            }
        }
    `}</style>
</div>
           <div
  style={{
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle at 20% 30%, rgba(0,255,170,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(0,255,170,0.15) 0%, transparent 60%)",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "60vh",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Moving Background Particles */}
  {[...Array(12)].map((_, i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: "6px",
        height: "6px",
        background: "#00ffaa",
        borderRadius: "50%",
        opacity: 0.7,
        animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    ></div>
  ))}

  {/* Left Section */}
  <div style={{ flex: 1, zIndex: 2, maxWidth: "600px" }}>
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        lineHeight: "1.2",
        textShadow: "0 0 20px rgba(0,255,170,0.3)",
      }}
    >
      Suddenly it's all so{" "}
      <em>
        <span
          style={{
            background: "linear-gradient(90deg, #00ffaa, #00ff66)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          doable.
        </span>
      </em>
    </h1>
    <button
      onClick={() => navigate(`/register`)}
      style={{
        marginTop: "20px",
        background: "linear-gradient(90deg, #00ffaa, #00ff66)",
        color: "#000",
        border: "none",
        padding: "14px 30px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0 0 15px rgba(0,255,170,0.5)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.boxShadow = "0 0 25px rgba(0,255,170,0.8)";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.boxShadow = "0 0 15px rgba(0,255,170,0.5)";
        e.target.style.transform = "scale(1)";
      }}
    >
      Join Fiverr
    </button>
  </div>

  {/* Right Animated Section */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: "300px",
      zIndex: 2,
    }}
  >
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "4px solid rgba(0,255,170,0.4)",
        borderRadius: "50%",
        animation: "spinRing 6s linear infinite",
        boxShadow: "0 0 30px rgba(0,255,170,0.6)",
      }}
    ></div>
    <div
      style={{
        width: "100px",
        height: "100px",
        background: "radial-gradient(circle, #00ffaa 0%, transparent 70%)",
        borderRadius: "50%",
        position: "absolute",
        animation: "floatOrb 4s ease-in-out infinite",
      }}
    ></div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes spinRing {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes floatOrb {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; }
        50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; }
      }
    `}
  </style>
</div>


        </div>
    ]);
}
export default Home;