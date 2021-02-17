import logo from './logo minus black.png';
import { useLocation } from "react-router-dom"

const MainPage = () => {

    var language = useLocation().pathname[1] + useLocation().pathname[2];

    // if no language is defined in the link, set it to default (LT)
    if (language !== "LT" && language !== "EN")
        language = "LT";
    return (
        // marginTop -2rem because the designer asked for a transparent breadcrumbs component on the main page
        <div id="main-page-cont0" style={{ background: 'url(/images/PIANCA_226-227_Otto-Platea-Icaro-Brema_Inari_Orchestra_Venere-0d7df3b2-6180-11eb-85aa-02a8dc75caa2.jpg)', backgroundSize: 'cover', marginTop: '-5rem', paddingBottom: '18rem' }}>
            <div></div>

            <div id="main-page-cont">
                <div style={{ width: '100%', textAlign: 'center', margin: '0 auto', paddingBottom: '3rem' }}>

                    <img id="main-logo" src={logo} alt="rr-white-logo" />
                </div>
                <div id="main-text-container">

                    <h1>
                        {language === "LT" ?
                            "Įsikūrę Europoje, specializuojamės itališkų baldų ir interjero dizaino srityje. Red-Room Studio pavers jūsų gyvenamąją erdvę gražia ir prabangia aplinka."
                            : language === "EN" && "Based in Europe, we specialize in Italian furniture and interior design. Red-Room Studio will make your living space a beautiful and luxurious environment."
                        }
                    </h1>
                </div>

                <div id="social-media-container">
                    <div></div>
                    <a href="https://www.facebook.com/redroom.lt">
                        <img alt="facebook-logo" className="social-media-logo" src="/images/facebook.png" />
                    </a>

                    <div></div>
                    {/* 
                    <a href="https://www.instagram.com">
                        <img className="social-media-logo" src="/images/instagram.png" />
                    </a>

                    <a href="https://www.linkedin.com">
                        <img className="social-media-logo" src="/images/linkedin.png" />
                    </a> */}
                </div>
            </div>
            <div></div>

        </div >
    );
}

export default MainPage;