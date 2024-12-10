import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Layout title="Homepage" >
      <img src="image/vg.jpeg" alt="" />
        <h1 className="text-7xl px-8 py-8 text-center">web services week</h1>
        <Carousel/> 
          <div className="flex items-center space-x-4 h-50 w-screen">
        <p className="text-2xl px-5 py-5 text-left">I have no enemies</p>
          <img src="image/vf.jpeg" alt="Image" className="w-auto h-auto rounded-lg"/>
        </div>
        <Card/>   
      </Layout>  
    </div>
  );
}
