import Side from "../components/Side/Side";
import Main from "../components/body/body";
import Header from "../components/header/header";

const HomePage = ({activeSideMenu, setMenuActive, currentBooks, loading, booksItemsPage, bookData, paginate}) => {
    return ( 
        <>
            <div className={setActiveMenu}>
                <Side activeSideMenu = {activeSideMenu} />
            
                <div className='wrapper__body'>
            
                    <Header 
                        activeSideMenu = {activeSideMenu} 
                        setMenuActive = {setMenuActive}
                    />
                
                    <Main
                        book = {currentBooks} 
                        loading = {loading}
                        booksItemsPage = {booksItemsPage}
                        totalBook = {bookData.length}
                        paginate = {paginate}
                    />
                </div>
            </div>
        </>
       

        
        //             book = {currentBooks} 
        //             loading = {loading}
        //             booksItemsPage = {booksItemsPage}
        //             totalBook = {bookData.length}
        //             paginate = {paginate}
        //         />
        //     </div>
        // </div>
     );
}
 
export default {HomePage} ;

