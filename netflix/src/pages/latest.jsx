import Row from "../components/row";
import requests from "../utils/request";
import Header from "../components/header";
import Footer from '../components/footer';

function Latest({searchQuery=""}){
  return(
    <div className="bg-black min-h-screen">
        <Header />
        <main className="pt-20 pb-12">
            <h1 className="font-bold  mb-4">Latest</h1>
            <Row title="Latest" fetchUrl={requests.fetchTrending} searchQuery={searchQuery}/>
            <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} searchQuery={searchQuery}/>
           <Row title="New" fetchUrl={requests.fetchUpcomings} searchQuery={searchQuery}/>
           <Row title="Upcomings" fetchUrl={requests.fetchLatest} searchQuery={searchQuery}/>
        </main>
        <Footer />
    </div>
  )
}
export default Latest;