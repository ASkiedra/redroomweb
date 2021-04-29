import React from "react";

const PrivacyPolicy = ({ language }) => {
    // months start from 0, therefore march (the 3rd month) should be written as 2 (3-1)
    const date = new Date(Date.UTC(2021, 3, 28));

    return (
        <div id="privacy-policy-container">
            <h1>{language === "EN" ? 'PRIVACY POLICY' : 'PRIVATUMO POLITIKA'}</h1>

            <p id="last-updated-date">
                {language === "EN" ? `Last updated: ${Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date)}.`
                    : `Paskutinį kartą atnaujinta: ${Intl.DateTimeFormat('lt').format(date)}.`}
            </p>

            <div id="privacy-description-container">
                <p style={{ marginBottom: '1.1rem' }}>
                    {language === "EN" ? `This Privacy Policy describes MB "Studio Red" (hereinafter – We, Us, Our) policies and procedures on the collection, use and disclosure of Our clients', people who use this website and/or its functions, and/or other data storage subjects' (hereinafter – You, Your) information when You use this website and/or its functions (hereinafter – Service) and informs You about Your privacy rights and how the law protects You.`
                        : 'Šioje privatumo politikoje aprašoma Mažosios bendrijos „Studio Red" (toliau – Mūsų) politika ir procedūros, susijusios su klientų ir kitų duomenų subjektų (toliau – Jūsų) informacijos rinkimu, naudojimu ir atskleidimu, kai naudojatės Mūsų svetaine ir/ar jos funkcionalumu (toliau – Paslauga).'}
                </p>

                <p style={{ fontWeight: '525', marginBottom: '2.5rem' }}>
                    {language === "EN" ? 'We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.'
                        : 'Mes naudojame Jūsų asmens duomenis Paslaugai teikti ir tobulinti. Naudodamiesi Paslauga, Jūs sutinkate, kad bus renkama ir naudojama informaciją pagal šią privatumo politiką.'}
                </p>
            </div>


            <div id="privacy-main-content-container">
                <h3>{language === "EN" ? 'PERSONAL DATA' : 'ASMENINIAI DUOMENYS'}</h3>
                <p>
                    {language === "EN" ? 'While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:'
                        : 'Kai naudojatės Mūsų Paslauga, galime paprašyti pateikti Mums tam tikrą asmens tapatybę identifikuojančią informaciją, kuri gali būti naudojama susisiekiant su Jumis arba identifikuojant Jus. Asmens identifikavimo informacija gali apimti (bet tuo neapsiriboja):'}
                </p>

                <ul>
                    <li>{language === "EN" ? 'email address;' : 'elektroninio pašto adresą;'}</li>
                    <li>{language === "EN" ? 'usage data.' : 'naudojimosi duomenis.'}</li>
                </ul>


                <h3>{language === "EN" ? 'SECURITY OF YOUR PERSONAL DATA' : 'JŪSŲ ASMENS DUOMENŲ SAUGUMAS'}</h3>
                <p>
                    {language === "EN" ? 'The security of Your personal data is important to Us, but no method of transmission over the Internet, or method of electronic storage is fully secure. While We strive to use commercially acceptable means to protect Your personal data, We cannot guarantee its absolute security. Any personal data and information collected by Us will not be distributed to a third party or anyone outside of EU and EEA.'
                        : 'Jūsų asmeninių duomenų saugumas Mums yra svarbus, tačiau joks perdavimo internetu būdas ar elektroninės saugyklos būdas nėra visiškai saugus. Nors mes stengiamės naudoti komerciškai pasiekiamas priemones, kad apsaugotume Jūsų asmens duomenis, negalime garantuoti visiško jų saugumo. Surinkti asmens duomenys ir informacija nebus platinami trečiajai šaliai ar niekam, esančiam už ES ir EEE ribų.'}
                </p>

                <h3>{language === "EN" ? 'YOUR RIGHTS' : 'JŪSŲ TEISĖS'}</h3>
                <p>
                    {language === "EN" ? 'We value Your privacy and agree to revoke Your consent, delete the data about You, provide a copy of data about You (if any data about You is stored) and know how the data is processed if You contact Us about it.'
                        : 'Mes vertiname Jūsų privatumą ir leidžiame Jums atšaukti savo sutikimą leisti tvarkyti duomenis, prašyti ištrinti duomenis apie Jus, jei tokių yra, prašyti sukauptų duomenų apie Jus kopijos ir sužinoti, kaip duomenys yra tvarkomi, jei Jūs susisieksite su Mumis.'}
                </p>



                <h3>{language === "EN" ? "TRACKING TECHNOLOGIES AND COOKIES" : "INFORMACIJOS RINKIMO TECHNOLOGIJOS IR SLAPUKAI"}</h3>
                <p>
                    {language === "EN" ? "We may use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used may include but are not limited to beacons, tags, and scripts to collect and track information and to improve and analyze Our Service to You."
                        :
                        'Mes naudojame slapukus ir panašias informacijos rinkimo technologijas, kad galėtume stebėti Mūsų Paslaugos veiklą ir saugoti tam tikrą informaciją. Stebėjimo technologijos, kurias galime naudoti (bet tuo neapsiriboja), yra „beacons", „tags", ir „scripts", skirti rinkti ir sekti informaciją bei tobulinti ir analizuoti Mūsų Paslaugą Jums.'}
                </p>



                <h3>{language === "EN" ? "CHILDREN'S PRIVACY" : "VAIKŲ PRIVATUMAS"}</h3>
                <p>
                    {language === "EN" ? "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with personal data, please contact Us immediately. If We become aware that We have collected personal data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers and databases. If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."
                        :
                        "Mūsų puslapis ir privatumo politika nesikreipia į žmones, jaunesnius nei 13 metų. Mes sąmoningai nerenkame asmens identifikavimo informacijos iš asmenų, jaunesnių nei 13 metų. Jei Jūs esate tėvai ar globėjai, ir žinote, kad Jūsų vaikas mums pateikė asmens duomenis, Susisiekite su mumis nedelsiant. Jei Mes sužinome, kad asmens duomenis rinkome iš bet kurio asmens, jaunesnio nei 13 metų, nepatikrinę tėvų sutikimo, imamės veiksmų, kad pašalintume šią informaciją iš savo serverių ir duomenų bazių. Jei Jūs esate žmogus, kuris yra jaunesnis nei 13 metų, Mums gali prireikti Jūsų tevų sutikimo, kad kauptume ir naudotume jūsų asmeninius duomenis."}
                </p>



                <h3>{language === "EN" ? "LINKS TO OTHER WEBSITES" : "NUORODOS Į KITAS SVETAINES"}</h3>
                <p>
                    {language === "EN" ? "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the privacy policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."
                        : "Mūsų Paslaugoje gali būti nuorodų į kitas svetaines, kurių mes nevaldome. Jei Jūs spustelėsite trečiosios šalies nuorodą, būsite nukreipti į tos trečiosios šalies svetainę. Mes primygtinai rekomenduojame peržiūrėti kiekvienos lankomos svetainės privatumo politiką. Mes nekontroliuojame ir neprisiimame jokios atsakomybės už trečiųjų šalių svetainių ar paslaugų turinį, privatumo politiką ar praktiką."}
                </p>
            </div>


            <h3> {language === "EN" ? "CONTACT US" : "SUSISIEKITE SU MUMIS"}</h3>
            <p style={{ marginTop: '1.5rem' }}>
                {language === 'EN' ? "If you have any questions about this Privacy Policy, You can contact us:" : "Jei Jūs turite klausimų apie šią privatumo politiką, galite susisiekti su mumis:"}
            </p>

            <ul style={{ marginTop: '1rem' }}>
                <li><a href="mailto:info@red-room.lt">{language === "EN" ? "by email:" : "el. paštu:"} info@red-room.lt</a></li>
                <li><a href="tel:+37064310657">{language === "EN" ? "by phone:" : "telefonu:"} +370 643 10 657</a></li>
            </ul>
        </div>
    )
}

export default PrivacyPolicy;