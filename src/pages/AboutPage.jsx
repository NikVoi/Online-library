import CardBook from "../components/CardBook/CardBook";
import Header from "../components/header/header";
import Side from "../components/Side/Side"


const AboutPage = ({selectedItem, activeSideMenu, setMenuActive}) => {
    return ( 
        <>
            <Side activeSideMenu = {activeSideMenu}/>

            <Header activeSideMenu= {activeSideMenu} setMenuActive = {setMenuActive}/>

            <CardBook selectedItem = {selectedItem} />
        </>
     );
}
 
export default AboutPage;