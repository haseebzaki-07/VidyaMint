import react from 'react' ; 
import Header from './_components/Header' ;
function layout({children}){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}
export default layout ; 