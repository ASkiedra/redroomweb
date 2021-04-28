import React from "react";

const PrivacyPolicy = (props) => {
    // month starts from 0, therefore march (the 3rd month) should be written as 2 (3-1)
    const date = new Date(Date.UTC(2021, 3, 28));

    return (
        <div id="privacy-policy-container">
            <h1>{props.language === "EN" ? 'PRIVACY POLICY' : 'PRIVATUMO POLITIKA'}</h1>

            <p id="last-updated-date">
                {props.language === "EN" ?
                    `Last updated: ${Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date)}`
                    :
                    `Paskutinį kartą atnaujinta: ${Intl.DateTimeFormat('lt').format(date)}`
                }
            </p>


            <p style={{ marginBottom: '1.1rem' }}>
                {props.language === "EN" ?
                    'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.'
                    :
                    'Šioje privatumo politikoje aprašoma mūsų politika ir procedūros, susijusios su jūsų informacijos rinkimu, naudojimu ir atskleidimu.'
                }
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
                {props.language === "EN" ?
                    'We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.'
                    :
                    'Mes naudojame jūsų asmens duomenis paslaugai teikti ir tobulinti. Naudodamiesi Paslauga, jūs sutinkate rinkti ir naudoti informaciją pagal šią privatumo politiką.'
                }
            </p>



            <div id="personal-data-container">
                <h2>PERSONAL DATA</h2>
                <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>

                <ul>
                    <li>Email address</li>
                    <li>Usage Data</li>
                </ul>
            </div>


            <h3>SECURITY OF YOUR PERSONAL DATA</h3>
            <p>
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                Any personal data and information collected by us will not be distributed to a 3rd party or anyone outside of  EU and EEA.
            </p>


            <h3>TRACKING TECHNOLOGIES AND COOKIES</h3>
            <p>
                We may use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
            </p>



            <h3>CHILDREN'S PRIVACY</h3>
            <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>



            <h3>LINKS TO OTHER WEBSITES</h3>
            <p>
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>



            <h3>CONTACT US</h3>
            <p style={{ marginTop: '1.5rem' }}>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul style={{ marginTop: '1rem' }} >
                <li>By email: info@red-room.lt</li>
                <li>By phone: +370 643 10 657</li>
            </ul>
        </div>
    )
}

export default PrivacyPolicy;