import React from "react";
import toast from "react-hot-toast";

const ReportModal = ({ setModalOpenCloseTwo, setReportCloseModal }) => {
  const reportModal = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = user?.displayName;
    const reportText = form.reportText.value;
    const time = new Date().toLocaleString();
    // const img = user?.photoURL;
    // const report = { name, reportText, img, time };

    fetch(`http://localhost:8000/add-report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then(() => {
        // toast.success(`${user?.displayName} Report successful!`);
        setModalOpenCloseTwo(null);
        setReportCloseModal(null);
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="report-modal"
        className="modal-toggle font-Ubuntu "
      />
      <div className="modal capitalize font-Ubuntu">
        <div className="modal-box  relative border flex justify-center items-center rounded-md bg-white lg:shadow-2xl">
          <label
            htmlhtmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          >
            ✕
          </label>
          <form
            onSubmit={reportModal}
            className="modal-box relative space-y-5 ml-10 shadow-none bg-white"
            htmlhtmlFor=""
          >
            <input
              type="text"
              name="reporterName"
              // defaultValue={user?.displayName}
              readOnly
              className="input input-bordered capitalize w-full max-w-xs bg-gray-300 text-[17px]"
            />

            <textarea
              type="text"
              name="reportText"
              placeholder="Type your report"
              className="input p-3 input-bordered capitalize w-full max-w-xs h-28 bg-gray-300 text-[17px]"
            />

            <input
              type="Submit"
              value="Submit"
              className="input input-bordered  text-[17px] w-full max-w-xs text-center bg-teal-400"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
