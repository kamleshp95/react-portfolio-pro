import React from 'react';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImage from '../assets/images/about-page-img.png';
import styled from 'styled-components';
import AboutInfoItems from '../components/AboutInfoItems';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section{
        display: flex;
        align-item: center;
        justify-content: center;
        gap: 2rem;
    }
    .left{
        flex: 3;
    }
    .right{
        flex: 2;
    }
    .about__subheading{
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading{
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info{
        margin-bottom:4rem;
        .para{
            max-width: 100%;
        }
    }
    .right{
        img{
            border: 2px solid var(--gray-1)
        }
    }
    .about__info__items{
        margin-top: 15rem;
    }
    .about__info__item{
        mar-bottom: 10rem;
    }
    .about__info__heading{
        font-size: 3.6rem;
        text-transform:  uppercase;
        margin-top: 10rem;
    }
    @media only screen and (max-width: 768px){
        padding: 10rem 0;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading{
            font-size: 1.8rem;
        }
        .about__heading{
            font-size: 2.8rem;
        }
        .about__info__heading{
            font-size: 3rem;
        }
    }
`;

export default function About() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Ramchandra Padwal</span>
                        </p>
                        <h2 className="about__heading">A Web developer</h2>
                        <div className="about__info">
                            <PText>
                                I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.
                                <br /> <br />
                                I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.
                                <br /> <br />
                                My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.
                            </PText>
                        </div>
                        <Button btnText="Download CV" btnLink="#" />
                    </div>
                    <div className="right">
                        <img src={AboutImage} alt="Ramchandra Img" />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            Education
                        </h1>
                        <AboutInfoItems 
                            title="School"
                            items={['New English School, Achara']}
                        />
                        <AboutInfoItems 
                            title="College"
                            items={['N. A. D. Topiwalla Junior College, Malvan']}
                        />
                        <AboutInfoItems 
                            title="University"
                            items={['University of Mumbai']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            My Skills
                        </h1>
                        <AboutInfoItems 
                            title="Frontend"
                            items={['HTML','CSS','JavaScript','REACT']}
                        />
                        <AboutInfoItems 
                            title="Backend"
                            items={['Python','Node']}
                        />
                        <AboutInfoItems 
                            title="Design"
                            items={['Photoshop','Figma']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">
                            Experiences
                        </h1>
                        <AboutInfoItems 
                            title="2019-2020"
                            items={['Oracle Financial Services Software']}
                        />
                        
                    </div>
                </div>
            </div>
            <ContactBanner />
        </AboutPageStyles>
    );
}
