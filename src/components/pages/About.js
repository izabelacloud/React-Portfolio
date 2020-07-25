import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



import coverImage from '../../assets/cover/cover-image.jpg'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Izabela Petrovicova</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>
                Highly motivated Sr. Principal Business Architect @Salesforce, Salesforce specialist and Quote-to-Cash professional with a strong desire to learn, solve challenges and improve processes with expertise in SaaS, Cloud and Analytics, Manufacturing, Telecommunications and Finance. Also an aspiring Web Developer in progress. 
            </p>
        </section>
    )
}

export default About;