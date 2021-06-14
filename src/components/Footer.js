import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column; 
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para {
            max-width: 100%;
        }
        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1  className="footer__coll__title">Ramchandra Padwal</h1>
                    <PText>
                    A freelance web designer and developer from Chittagong, Bangladesh. I always make websites that have unique designs and also has a good performance rate.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol  heading="Important Links"
                        links={[
                            {
                                type:"Links",
                                title:"Home",
                                path:"/home",
                            },
                            {
                                type:"Links",
                                title:"About",
                                path:"/about",
                            },
                            {
                                type:"Links",
                                title:"Projects",
                                path:"/projects",
                            },
                            {
                                type:"Links",
                                title:"Contact",
                                path:"/contact",
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol heading="Contact Info" 
                        links={[
                            {
                                title: '+917588903125',
                                path: 'tel:+917588903150',
                            },
                            {
                                title: 'kamleshpadwal@gmail.com',
                                path: 'mailto:kamleshpadwal@gmail.com',
                            },
                            {
                                title: 'Malvan, Maharashtra, India',
                                path: 'https://goo.gl/maps/iDN4u3Nf52METBRu9',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol heading="Social Links" 
                        links={[
                            {
                                title: 'Linkedin',
                                path: 'https://www.linkedin.com/in/ramchandrapadwal/',
                            },
                            {
                                title: 'Facebook',
                                path: 'https://www.facebook.com/kamlesh.padwal1',
                            },
                            {
                                title: 'Instagram',
                                path: 'https://www.instagram.com/kamlesh_1895/',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>© 2021 - Ramchandra Padwal | Designed By{' '}
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ramchandrapadwal/">
                        QuadTran
                        </a> {' '}
                    </PText>
                </div>
            </div>
        </FooterStyle>
    );
}
