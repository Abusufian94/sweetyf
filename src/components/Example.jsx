import Header from "./Layouts/Header";


export default function Example() {

  return (
    <div className="bg-white">
    <Header/>

      <div className="relative isolate   lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
         
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Billing Made Sweet and Simple!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Sweety, where we believe that managing your sweet shop should be as delightful as the treats you sell! Designed specifically for sweet shop owners, Sweety combines efficiency and ease to simplify your billing process. With a vibrant interface that reflects the joy of Indian sweets, Sweety makes transactions smooth and quick, allowing you to focus on what you do best—delighting your customers with delicious treats.
            </p>
           
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="container w-full">
            <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-green-400 text-white">
                <div className="m-auto">
                    <div className="text-center">
                
                        <h1 className="text-balance text-4xl font-bold tracking-tight text-white-200 sm:text-6xl">
                            Simplify Your Billing and Payments 

                        </h1>
                        <p className="mt-10 pt-8 py-10 text-lg leading-8 text-white-900 font-bold">SWEETY is a versatile GST & non-GST billing software that helps you track sales, purchases, and estimates in real-time. It streamlines inventory management, automates GST returns, and allows you to create and share professional invoices effortlessly. With real-time notifications, SWEETY ensures you're always in control of your business.</p>
                        <a href="#" className="bg-white hover:bg-blue-500 text-green-400 font-bold py-5 shadow-lg shadow-gray-500 hover:shadow-gray-800 transition-shadow duration-300 px-8 rounded">
Contact Us
</a>
                    </div>
            
                </div>
            
            </div>
        </div>

    </div>
    
  )
}
