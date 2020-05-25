import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <h2> My History</h2>
                My start as an SDR at HotSchedules led me to do sales for a digital marketing agency, where I decided to make the transition from sales to SEO account management. As an SEO, I manipulated HTML & CSS and looked at JavaScript all day for years without actually understanding what the code was doing holistically; this realization organically led me to attend a full-stack development bootcamp at the University of Texas.
                <br />
                <br />
                As a junior developer, I am learning every day just how interconnected marketing and development are and how these roles could both be made more efficient if they interacted in a more interdependent manner. I am conversion-focused and am able to implement a marketing strategy with development-friendly tactics in mind and vice versa, I can develop with marketing-friendly tactics in mind. 

                <h2>A bunch of random things I love working with</h2>
                React, Node, SCSS, Redux, SQL, MongoDB, Jira, Postman, Heroku, Netlify, VS Code, Github, SEMrush, Ahrefs, Analytics, Search Console... and countless other things!
                


            </Content>

        </div>
    );

}

export default AboutPage;