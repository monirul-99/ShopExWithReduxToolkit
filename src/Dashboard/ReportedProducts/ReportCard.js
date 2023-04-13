import React from "react";

const ReportCard = ({ report }) => {
  console.log(report);
  return (
    <div>
      <div className="flex p-2">
        <div className="px-5 py-4 bg-white text-black shadow-xl rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex mb-4">
              <img className="w-12 h-12 rounded-full" src={report.img} alt="" />
              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug">
                  {report.name}
                </span>
                <span className="block text-sm  font-light leading-snug">
                  {report.time}
                </span>
              </div>
            </div>
            <div>
              <h1> Reported Product Name</h1>
              <h1>{report.title}</h1>
            </div>
          </div>

          <p className=" leading-snug md:leading-normal">{report.reportText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
