
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white items-center gap-4 h-[44vh] flex-col ">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">
          BrewMeUp <span><img src="coffee.jpg" width={88} alt="" /></span>
        </div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>    
      </div>
      
      <div className="bg-white h-1 opacity-10"></div>
      
      <div className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14">Your fans can buy you a Coffee</h1>
        <div className="flex gap-5 justify-between">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-7 text-black" width={88} src="man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-7 text-black" width={88} src="coin.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-7 text-black" width={88} src="man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white h-1 opacity-10"></div>
      
      {/* New Supporters/Payment Section */}
      <div className="text-white container mx-auto py-32">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Supporters Section (Left) */}
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Supporters</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <input type="checkbox" className="h-5 w-5" />
                <div>
                  <p className="font-medium">Shubham donated $30</p>
                  <p className="text-gray-400 text-sm">"I support you bro. Lots of love"</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <input type="checkbox" className="h-5 w-5" />
                <div>
                  <p className="font-medium">Alex donated $20</p>
                  <p className="text-gray-400 text-sm">"Great work! Keep it up"</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <input type="checkbox" className="h-5 w-5" />
                <div>
                  <p className="font-medium">Priya donated $50</p>
                  <p className="text-gray-400 text-sm">"Amazing content!"</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Form (Right) */}
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Make a Payment</h2>
            <form className="space-y-4">
              
              <div>
                <label className="block text-gray-300 mb-2">Enter Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Enter Message</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your supportive message"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Enter Amount</label>
                <input 
                  type="number" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Amount in $"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Pay $10
                </button>
                <button type="button" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Pay $20
                </button>
                <button type="button" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Pay $30
                </button>
              </div>
              <button 
              
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition mt-4"
              >
                Complete Payment
              </button>
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
