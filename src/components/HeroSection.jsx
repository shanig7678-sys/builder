import '../App.css'

const HeroSection = () => {

    const handleClick = () => {
        const vision = document.getElementById("vision");
        vision.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section className="heroSection">
            <div className="hero-content">
                <h1 className="hero-title animate-fade-in">
                    Welcome to
                    <span> M.B.M Builders </span>
                    Associates
                </h1>
                <p className="hero-description animate-fade-in-delay">
                    At M.B.M Builders, we specialize in building the infrastructure that shapes communities. With over 20 years of
                    experience, we are dedicated to providing high-quality construction services for both residential and commercial
                    projects. Our team of skilled professionals is committed to delivering excellence, ensuring every project meets the
                    highest standards of safety, quality, and sustainability.
                </p>
                <button className="hero-btn animate-fade-in-delay-2" onClick={handleClick}>
                    Get Started
                    <span className="btn-arrow">→</span>
                </button>
            </div>
            <div className="hero-img">
                <div className='hero-img-1'></div>
                <div className='hero-img-horizontal'>
                    <div className='hero-img-2'></div>
                    <div className='hero-img-3'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
