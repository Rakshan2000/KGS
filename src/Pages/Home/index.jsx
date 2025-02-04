import Navbar from "@/components/navbar/mainnav";

function Home(){
    return(
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="mt-10 text-center md:text-left">Home Page</h1>
        </div>
        </>
    );
}

export default Home;