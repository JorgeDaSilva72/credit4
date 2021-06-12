import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='AboutContainer'>
            <div className='AboutParagraphWrapper'>
            <h1>Qui sommes nous ?</h1>
            <br />
            <p>
                Meilleurtauxbanque.com est un réseau national spécialisé en solutions de financements avec 3 activités phares et complémentaires :
                <br />
                <br />
                <ul>
                    <li>REGROUPEMENT DE CRÉDITS</li>
                    <li>ASSURANCE EMPRUNTEUR</li>
                    <li>PRÊT IMMOBILIER</li>
                </ul>

                <br />


                La marque Meilleurtauxbanque.com est une référence nationale dans  l’intermédiation bancaire.
                <br />
            </p>
            </div>
            <div className="AboutParagraphWrapper">
            <h1>La mission du conseiller </h1>
            <br />
            <p>

                Au cours des différents cycles de la vie, chaque individu, chaque foyer ou chaque entreprise vit des situations singulières, parfois atypiques.<br />

                Certains rencontrent des phases financières difficiles et ont alors besoin de retrouver de l’oxygène économique.<br />

                Pour d’autres, les projets de vie personnels ou professionnels sont nombreux et nécessitent de repenser leur budget ou leur trésorerie afin de les voir aboutir.<br />

                Le conseiller Meilleurtauxbanque.com accompagne les clients dont les profils ou les dossiers sortent du cadre de traitement bancaire traditionnel.<br />

                Grâce à une analyse pointue de chaque situation, le conseiller met en place les meilleures solutions de financements personnalisées et adaptées à chaque cas.<br />

            </p>
            </div>
            <div className='AboutParagraphWrapper'>
            <h1>Où sommes nous ?</h1>
            <p>MeilleurtauxBanque.com est une société située au Mans.</p>
            <p>Elle est spécialisée dans le regroupement de crédit et le crédit immobilier.</p>
            <p>Elle est immatriculée au tribunal de commerce du Mans avec le numéro RCS : 834 154 833 R.C.S Le Mans</p>




            </div>

        </div>

        
    );
};

export default About;