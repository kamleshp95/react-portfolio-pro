import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';


const HeroStyles = styled.div`
    .hero{
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading{
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span{
            display: inline-block;
            width: 100%;
        }
        .hero__name{
            font-size: 7rem;
            font-family: "Montserrat Semibold";
            color: var(--white);
        }
    }
    .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info{
        margin-top: -18rem;
    }
    .hero__social,
    .hero__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .hero__social{
        left: 50px;
    }
    .hero__scrollDown{
        right: 50px;
    }
    .hero__social__indicator,
    .hero__scrollDown{
        width: 50px;
        p{
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
            object-fit: contain;
        }
        img{
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
        }
    }
    .hero__scrollDown{
        img{
            max-height: 70px;
        }
    }
    .hero__social__text{
        ul{
            li{
                margin-bottom: 1rem;
            }
            a{
                display:inline-block;
                font-size: 1.6rem;
                transform: rotate(-90deg);
                letter-spacing: 5px;
                margin-bottom: 2rem;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .hero{
            min-height: 750px;
        }
        .hero__heading{
            font-size: 1.4rem;
            margin-bottom: -3rem;
            .hero__name{
                font-size: 4.5rem;
            }
        }
        .hero__img{
            height: 300px;
        }
        .hero__info{
            margin-top: 3rem;
        }
        .hero__social{
            left: 0px;
            bottom: -15%;
            width: 20px;
            .hero__social__indicator{
                width: 20px;
                p{
                    font-size: 1.2rem;
                }
                img{
                    max-height: 22px;
                }
            }
            .hero__social__text{
                ul{
                    li{
                        a{
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                } 
            }
        }
        .hero__scrollDown{
            right: 0;
            width: 20px;
            gap: 1rem;
            p{
                font-size: 1.3rem;
            }
        }
    }
`;
 
export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello, This is</span>
                        <span className="hero__name">Ramchandra Padwal</span>
                    </h1>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero__info">
                        <PText>
                            I am working as a freelancer web developer and designer for 4 years.
                            I love to design and make new web experiences for the people.
                        </PText>
                        <Button btnLink="/projects" btnText="See My Works" />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="social media arrow" />
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a 
                                        href="https://www.facebook.com/kamlesh.padwal1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        FB
                                    </a>
                                </li>
                                <li>
                                    <a  
                                        href="https://www.linkedin.com/in/ramchandrapadwal/"
                                        targrt="_blank"
                                        rel="noreferrer"
                                    >
                                        LI
                                    </a>
                                </li>
                                <li>
                                    <a  
                                        href="https://www.instagram.com/kamlesh_1895/"
                                        targrt="_blank"
                                        rel="noreferrer"
                                    >
                                        IG
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll</p>
                        <img src={ScrollDownArrow} alt="" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
}
