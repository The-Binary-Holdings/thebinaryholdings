import Image from "next/image";

export default function DigitalEnterprise() {
    const products = [
      {
        title: "Twin Matrix",
        description: "TwinMatrix is a one-stop spatial computing platform that merges their data, saves time, and offers a quick time-to-deployment.",
        imageUrl: "/twinmatrix_background.jpg",
        link: "https://www.twinmatrix.net/",
      },
    ];
  
    return (
      <div className="bg-black text-white p-10">
        <h1 className="pt-24 text-3xl md:text-4xl font-bold mb-12 md:px-8 text-white">
          Digital Enterprise
        </h1>
        {/* Use grid layout for better alignment control */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {products.map((product) => (
            <div 
              key={product.title}
              className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </a>
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={product.link}
                  className="w-full py-2 p-4 bg-black hover:bg-gray-700 transition-colors text-lg font-bold text-center rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  