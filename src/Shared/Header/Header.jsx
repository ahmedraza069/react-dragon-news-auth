import logo from "../../assets/images/logo.png"
import moment from 'moment';

const Header = () => {
    return (
       <div>
         <div className="flex justify-center p-6">
            <img src={logo} alt="" />
           
        </div>
        <div>
            <p className="font-medium font-poppins text-center text-lg">Journalism Without Fear or Favour</p>
            
            <p className="font-medium font-poppins text-center text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
       </div>
    );
};

export default Header;