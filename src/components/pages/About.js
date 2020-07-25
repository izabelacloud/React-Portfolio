import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';
import userImage from '../../assets/ip2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Izabela Petrovicova</h1>
            <img src={coverImage} className="hero"  alt="cover" />

            <div className="row">

                <div className="col-4 ip-picture">
                    <img src={userImage} className="ip-picture" alt="izabelapetrovicova" />
                </div>

                <div className="col-7 ip-desc">
                    <h4>About me</h4>
                    <p>
                    Highly motivated Sr. Principal Business Architect @Salesforce, Salesforce specialist and Quote-to-Cash professional with a strong desire to learn, solve challenges and improve processes with expertise in SaaS, Cloud and Analytics, Manufacturing, Telecommunications and Finance. Also an aspiring Web Developer in progress. 
                    </p>
                </div>


            </div>

        </section>
    )
}

export default About;