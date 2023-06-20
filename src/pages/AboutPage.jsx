import CardBook from "../components/CardBook/CardBook";
import Header from "../components/header/header";
import SideSecond from "../components/SideSecond/SideSecond"


const AboutPage = ({selectedItem, activeSideMenu, setMenuActive}) => {
    return ( 
        <>
            <SideSecond activeSideMenu = {activeSideMenu}/>

            <Header activeSideMenu= {activeSideMenu} setMenuActive = {setMenuActive}/>

            <CardBook selectedItem = {selectedItem} />
        </>
     );
}
 
export default AboutPage;