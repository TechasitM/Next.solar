import Btn from "@/components/btn";
import Layout from "@/components/layout";

export default function Bio() {
  return (
    <Layout title="Bio">
    <div>
      <div className="min-h-screen bg-base-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="image/vk.jpg"
              alt="Profile Picture"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-3xl font-semibold text-center mb-2">
              Techasit M
            </h1>
            <p className="text-center text-gray-600 mb-4">Software Engineer</p>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae facere repellendus ducimus quaerat suscipit incidunt autem tenetur expedita voluptas, eligendi fugiat aspernatur dignissimos dicta, molestiae possimus eos iste magni ratione?
              </p>
            </div>
            <div className="mt-6">
                <Btn/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
