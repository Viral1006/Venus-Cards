import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const companyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod est in mauris euismod, id tristique tortor ultrices. Nullam euismod, est vel efficitur vestibulum, felis nisi ultricies libero, nec gravida eros velit non tellus. Donec lobortis scelerisque felis nec placerat. Nam in magna nec dui venenatis gravida. Vestibulum id tristique elit. Duis vitae magna quis nunc eleifend ullamcorper. Vivamus ultricies eros vitae urna ultricies, ac ultrices tortor scelerisque.";
const companyAddress = "Venus Cards and Printers";
const companyAddress1 = "4, Clock Tower,";
const companyAddress2 = "Opp. Police Station,";
const companyAddress3 = "Udaipur, Rajasthan - (313001)";

const companyLocation = {
  latitude: 24.581715, 
  longitude: 73.685441,
};

const AboutUs = () => {


  return (
  //  <div className='bg-[#F9F07A] bg-opacity-30'>
  //     <div className=' p-6 bg-[#ffdfdf] '>
  //     <h1 className='px-4 mx-20 mt-10 text-[#4b4b4b] items-left justify-left flex font-bold text-4xl font-barlow-condensed ' >About Us</h1>
  //     <p className=' px-4 py-2 mx-20 text-[#4b4b4b] font-montserrat font-medium text-xl ' >{companyDescription}</p>
  //     <p className=' px-4 py-2 mx-20 text-[#4b4b4b] font-montserrat font-medium text-xl ' >{companyDescription}</p>
  //     </div>
      
  //     <div className=" h-[100vh] mx-24 grid grid-cols-2 gap-4">
  //       <div>
  //       {/* <h2 className="text-xl font-montserrat mt-8 ml-10 font-bold mb-2 ">Please fill in the form below & someone from our team will be in touch with you shortly</h2> */}
  //         {/* Form */}
  //         <form className=" mb-10 mt-10 bg-none p-10 rounded">
  //         <h2 className="text-xl font-montserrat font-medium mb-4 ">Please fill in the form below & someone from our team will be in touch with you shortly:</h2>
  //           <div className="grid grid-cols-2 gap-4">
  //             <div>
  //               <label>Name:</label>
  //               <input type="text" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div>
  //               <label>Email:</label>
  //               <input type="email" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div>
  //               <label>Contact:</label>
  //               <input type="text" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div>
  //               <label>Product Selection:</label>
  //               <select className="block p-1 bg-gray-300 w-full mb-2">
  //                 <option value="product1">Product 1</option>
  //                 <option value="product2">Product 2</option>
  //                 <option value="product3">Product 3</option>
  //               </select>
  //             </div>
  //             <div>
  //               <label>Approx. Quantity:</label>
  //               <input type="number" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div>
  //               <label>Address:</label>
  //               <input type="text" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div>
  //               <label>Business Name:</label>
  //               <input type="text" className="block p-1 bg-gray-300 w-full mb-2" />
  //             </div>
  //             <div className="col-span-2">
  //               <label>Description:</label>
  //               <textarea className="block p-1 w-full bg-gray-300 mb-2"></textarea>
  //             </div>
  //             <div className="col-span-2 flex justify-end">
  //               <button type="submit" className="bg-[#F9F07A] text-black w-full px-4 py-2 rounded-md">Submit</button>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //       <div>
  //         <div className=' mt-24 ' >
  //           {/* <p>Map Placeholder</p> */}
  //           <MapContainer center={[companyLocation.latitude, companyLocation.longitude]} zoom={15} style={{ height: '400px', width: '100%' }}>
  //             <TileLayer
  //               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //             />
  //             <Marker position={[companyLocation.latitude, companyLocation.longitude]}>
  //               <Popup>{companyAddress}</Popup>
  //             </Marker>
  //           </MapContainer>
  //         </div>
  //         <p className=' font-montserrat text-lg mt-4 mb-2 ' >{companyAddress}</p>
  //         <p className=' font-montserrat text-base ' >{companyAddress1}</p>
  //         <p className=' font-montserrat text-base '>{companyAddress2}</p>
  //         <p className=' font-montserrat text-base  '>{companyAddress3}</p>
  //       </div>
  //     </div>
  //   </div> 

<div className='bg-[#F9F07A] bg-opacity-30'>
<div className=' p-6 bg-[#ffdfdf] '>
  <h1 className='px-4 sm:mx-20 mt-10 text-[#4b4b4b] items-left justify-left flex font-bold text-4xl font-barlow-condensed ' >About Us</h1>
  <p className=' px-4 py-2 sm:mx-20  text-[#4b4b4b] font-montserrat font-medium text-xl ' >{companyDescription}</p>
  <p className=' px-4 py-2 sm:mx-20 text-[#4b4b4b] font-montserrat font-medium text-xl ' >{companyDescription}</p>
</div>

<div className="mx-4 md:mx-24 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="md:order-1">
    {/* Form */}
    <form className="mb-10 mt-10 bg-none p-10 rounded">
      <h2 className="text-xl font-montserrat font-medium mb-4 ">Please fill in the form below & someone from our team will be in touch with you shortly:</h2>
      {/* Form fields */}
      <div className="grid grid-cols-2 gap-4">
              <div>
                {/* <label>Name:</label>
                <input type="text" className="block p-1 bg-gray-300 w-full mb-2" /> */}
                <input type="text" className="block p-2 w-full bg-none mb-2 border border-gray-300 rounded-md" placeholder="Name: " />
              </div>
              <div>
                {/* <label>Email:</label> */}
                <input type="email" className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="E-Mail: " />
              </div>
              <div>
                {/* <label>Contact:</label> */}
                <input type="text" className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="Contact Number: " />
              </div>
              <div>
                {/* <label>Product Selection:</label> */}
                <select className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="Product Selection: " >
                  <option value="" disabled hidden>Select Product</option>
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                  <option value="product3">Product 3</option>
                </select>
              </div>
              <div>
                {/* <label>Approx. Quantity:</label> */}
                <input type="number" className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="Approximate Quantity: " />
              </div>
              <div>
                {/* <label>Address:</label> */}
                <input type="text" className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="Address: " />
              </div>
              <div>
                {/* <label>Business Name:</label> */}
                <input type="text" className="block p-2 bg-none w-full mb-2 border border-gray-300 rounded-md" placeholder="Business Name: " />
              </div>
              <div className="col-span-2">
                {/* <label>Description:</label> */}
                <textarea className="block p-2 w-full bg-none mb-2 border border-gray-300 rounded-md" placeholder="Description: "></textarea>
              </div>
              <div className="col-span-2 flex justify-end">
                <button type="submit" className="bg-[#F9F07A] text-black w-full px-4 py-2 rounded-md">Submit</button>
              </div>
            </div>
    </form>
  </div>
  <div className="md:order-2 z-10">
    {/* Map */}
    <div className='sm:mt-[92px] '>
      <MapContainer center={[companyLocation.latitude, companyLocation.longitude]} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[companyLocation.latitude, companyLocation.longitude]}>
          <Popup>{companyAddress}</Popup>
        </Marker>
      </MapContainer>
    </div>
    <p className='font-montserrat text-lg mt-4 mb-2'>{companyAddress}</p>
    <p className='font-montserrat text-base'>{companyAddress1}</p>
    <p className='font-montserrat text-base'>{companyAddress2}</p>
    <p className='font-montserrat text-base mb-4 sm:mb-6 '>{companyAddress3}</p>
  </div>
</div>
</div> 
  );
};

export default AboutUs;
