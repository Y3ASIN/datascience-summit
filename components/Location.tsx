import Image from "next/image";
import React from "react";

const Location: React.FC = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-4 space-y-4 px-3 sm:flex-row sm:gap-0 sm:space-y-0">
      <div className="flex w-full justify-center rounded-sm sm:w-1/2">
        <iframe
          className="h-[250px] w-[400px] sm:h-[450px] sm:w-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d864.697359877705!2d90.31982395271919!3d23.876700444389957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University%2C%20Daffodil%20Smart%20City%2C%20Birulia%201216!3m2!1d23.876895599999997!2d90.32015919999999!5e1!3m2!1sen!2sbd!4v1730899484961!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: "5px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <hr className="block sm:hidden bg-slate-500 mt-2" /> */}

      <div className="flex h-full flex-col justify-start gap-3 rounded-md bg-blue-300 p-8 sm:gap-1 sm:space-y-10">
        <div className="flex flex-col items-center justify-center rounded-md bg-slate-300 px-14 py-3 shadow-lg sm:flex-row sm:gap-2 sm:px-24 sm:py-1">
          <div className="px-10 py-4 text-center">
            <h3 className="text-5xl">
              <Image
                alt="date"
                src={"/icons/date.svg"}
                height={100}
                width={100}
              />
            </h3>
            <h3 className="text-xl font-semibold">Date </h3>
          </div>

          <div className="py-2 text-xl sm:text-2xl">
            <p>December 07, 2024 </p>
            <p>Saturday 9AM - 5PM</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-md bg-slate-300 py-3 shadow-lg sm:flex-row sm:gap-2 sm:px-24 sm:py-1">
          <div className="px-10 py-4">
            <h3 className="text-center text-5xl">
              <Image
                alt="location"
                src={"/icons/location.svg"}
                height={100}
                width={100}
              />
            </h3>
            <h3 className="text-xl font-semibold">Location </h3>
          </div>

          <div className="py-2 text-xl sm:text-2xl">
            <p className="text-md sm:text-2xl">
              Daffodil Smart City,<span className="block">Ashulia, Dhaka.</span>
            </p>
          </div>
        </div>

        {/* <div className="flex flex-row">
          <h3 className="text-md sm:text-xl">
            📍 <span>Location &gt; </span>
          </h3>
          <p className="text-base sm:text-3xl">
            Daffodil Smart City, Ashulia, Dhaka.
          </p>
          </div> */}
      </div>
    </section>
  );
};

export default Location;
