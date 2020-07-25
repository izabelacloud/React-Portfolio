import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg'
import userImage from '../../assets/ip.jpg'

function About() {
    return (
        <section className="">
            <h1 id="about">Izabela Petrovicova</h1>
            <img src={coverImage} className="" style={{ width: "100%" }} alt="cover" />
            <img src={userImage} className="" style={{ width: "10%" }} alt="izabelapetrovicova" />
            <p>
                Highly motivated Sr. Principal Business Architect @Salesforce, Salesforce specialist and Quote-to-Cash professional with a strong desire to learn, solve challenges and improve processes with expertise in SaaS, Cloud and Analytics, Manufacturing, Telecommunications and Finance. Also an aspiring Web Developer in progress. 
            </p>
        </section>
    )
}

export default About;