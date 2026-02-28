import React from 'react'

const Vision = () => {
    return (
        <section className='visionSection' id='vision'>
            <div className="vision-main-content">
                <h2>
                    Building Your Vision with Precision and Excellence
                </h2>
                <p>
                    At M.B.M Construction, we are committed to turning your construction dreams into reality. With decades of experience in the industry, we deliver high-quality residential and commercial construction services that are both functional and aesthetically pleasing. From planning to execution, our team ensures that every project is completed on time, within budget, and to the highest standards of safety and quality.
                    <br /><br />
                    Our expert craftsmen, architects, and engineers work together to design and build spaces that fit your needs. Whether it's a custom home, a new office building, or a renovation project, we pride ourselves on delivering results that exceed expectations and provide lasting value.
                </p>
            </div>
            <div className="vision-form-container">
                <form>
                    <div className="vision-from-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder='Enter your full name'
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='your.email@example.com'
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Enter your phone number'
                        />
                    </div>
                    <div className="vision-from-group">
                        <label htmlFor="projectDetail">Project Detail *</label>
                        <textarea
                            id="projectDetail"
                            name="projectDetail"
                            placeholder='Describe your project (e.g., type of construction, project size, timeline)'
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Get a Quote"
                    />
                </form>
            </div>
        </section>

    )
}

export default Vision
