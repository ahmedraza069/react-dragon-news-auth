import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import QZonepic1 from "../../assets/images/qZone1.png"
import QZonepic2 from "../../assets/images/qZone2.png"
import QZonepic3 from "../../assets/images/qZone3.png"

const RightSideNav = () => {
  return (
    <div className="p-4">
      <div>
        <h2 className="font-bold text-xl mb-4">Login With</h2>

        <button className="border-2 flex  justify-center items-center gap-2 p-3 rounded-lg border-blue-300 text-blue-500 w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="border-2 flex justify-center items-center gap-2 p-3 rounded-lg border-blue-300 text-slate-600 w-full my-3">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      {/* Find on us */}
      <div className="my-6">
        <h2 className="font-bold text-xl mb-4">Find Us On</h2>

        <div href="/" className="border flex  justify-center items-center gap-2 py-5 rounded-t-lg border-blue-300 text-blue-500 w-full">
          <FaFacebook></FaFacebook>
          Facebook
        </div>
        <div href="/" className="border flex justify-center items-center gap-2 py-5 border-blue-300 text-slate-600 w-full">
          <FaTwitter></FaTwitter>
          Twitter
        </div>
        <div href="/" className="border flex justify-center items-center gap-2 py-5 rounded-b-lg border-blue-300 text-slate-600 w-full">
        <FaInstagram></FaInstagram>
        Instagram
        </div>
      </div>
      {/* Q-zone */}
      <div className="my-6 bg-slate-100 px-2 py-4 rounded-lg">
        <h2 className="font-bold text-xl mb-4">Q-Zone</h2>

        <div href="/" className=" flex  justify-center items-center gap-2 my-6 w-full">
        <img src={QZonepic1}/>
        </div>
        <hr />
        <div href="/" className="flex  justify-center items-center gap-2 my-6 w-full">
      <img src={QZonepic2} />
        </div>
        <hr />
        <div href="/" className="flex  justify-center items-center gap-2 my-6 w-full">
        <img src={QZonepic3} />
        </div>
      </div>
     
    </div>
  );
};

export default RightSideNav;
