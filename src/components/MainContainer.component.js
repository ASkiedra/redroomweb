import logo from './Logo-V4.png';

const MainContainer = () => {
    return (
        // marginTop -2rem because the designer asked for a transparent breadcrumbs component on the main page
        <div id="main-page-cont0" style={{ background: 'url(/images/PIANCA_226-227_Otto-Platea-Icaro-Brema_Inari_Orchestra_Venere-0d7df3b2-6180-11eb-85aa-02a8dc75caa2.jpg)', backgroundSize: 'cover', marginTop: '-3rem'}}>
<div></div>

            <div id="main-page-cont">
                <div style={{width: '100%', textAlign: 'center', margin: '0 auto',paddingBottom: '3rem'}}>

                <img id="main-logo" src={logo} alt="rr-white-logo" />
                </div>

                <p>Įsikūrę Europoje, mes specializuojamės itališkų baldų ir interjero dizaino srityje. Red-Room Studio pavers jūsų gyvenamąją erdvę gražia ir prabangia aplinka.įsikūrę Europoje, mes specializuojamės itališkų baldų ir interjero dizaino srityje. Red-Room Studio pavers jūsų gyvenamąją erdvę gražia ir prabangia aplinka.</p>
            </div>
<div></div>
          
        </div >
    );
}

export default MainContainer;