import{FiInstagram,FiFacebook,FiLinkedin} from "react-icons/fi"
function Footer() {

  return (
    <>
    <div className="footer-container bg-black p-20 text-white  text-center  max-w-full">
      
     <p>Ready to watch? Enter your email to create or restart your membership.</p>
     <br></br>
     <div className="email-form  flex justify-center gap-3 items-center">
     <input className="h-12 w-100 bg-zinc-900  border-gray-400" type="text" placeholder="Email address"/>
     <button className="bg-red-600 h-12 w-40  cursor-pointer rounded">Get started</button>
     </div>
    <br/><br/>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-right ">
    <div className="flex flex-col space-y-3">
    <a href="#" className="hover:underline">FAQ</a>
              <a href="#" className="hover:underline">Media Center</a>
              <a href="#" className="hover:underline">Ways to Watch</a>
              <a href="#" className="hover:underline">Cookie Preferences</a>
              <a href="#" className="hover:underline">Speed Test</a>
    <br/>
    <select className="w-20"><option>English</option></select>
    </div>

    <div className="flex flex-col space-y-3">
   <a href="#" className="hover:underline">Help Center</a>
              <a href="#" className="hover:underline">Investor Relations</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Corporate Information</a>
              <a href="#" className="hover:underline">Legal Notices</a>
    
    
    </div>
    <div className="flex flex-col space-y-3">
    <a href="#" className="hover:underline">Account</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">Only on Netflix</a>
    
    </div>
    </div>
    
    
    <br/><br/><h2 className="text-xl font-semibold text-gray-300">Follow Us</h2><br/>
    <div className="social-icons pt-6  flex  justify-center  items-center space-x-4  ">
      
    <FiFacebook className="text-2xl bg-[#105cc1] rounded-full text-amber-50 w-10 h-10 "/>
    <FiInstagram className="text-2xl bg-pink-600 rounded-full text-amber-50 w-10 h-10 "/>
    <FiLinkedin className="text-2xl   text-white rounded-full bg-blue-900 w-10 h-10"/>
    </div><br/><br/><br/><br/><br/>
    <p className="flex justify-center">  &copy;{new Date().getFullYear()}  All right reserved.</p>
    </div>
    </>
  );
}

export default Footer;
