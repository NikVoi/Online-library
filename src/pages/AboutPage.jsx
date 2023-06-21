import CardBook from "../components/CardBook/CardBook";
import Header from "../components/header/header";
import Side from "../components/Side/Side"


const AboutPage = ({selectedItem, activeSideMenu, setMenuActive, bookData, handleSortChange}) => {
    return ( 
        <>
            <Side activeSideMenu = {activeSideMenu} bookData = {bookData} onSortChange = {handleSortChange}/>

            <Header activeSideMenu= {activeSideMenu} setMenuActive = {setMenuActive}/>

            <CardBook selectedItem = {selectedItem} />
        </>
     );
}
 
export default AboutPage;