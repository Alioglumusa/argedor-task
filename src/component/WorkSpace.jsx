import Table from "./Table";
const WorkSpace = () => {
  return (
    <div className=" bg-gray-100">
      {/* Header Text */}
      <div className="text-left ml-3">
        <p className="font-semibold text-3xl">Workspace Report</p>
        <p className="font-normal text-lg">
          İyi Şanslar Charlie - Sen Benim Patronum Değilsin
        </p>
        <p className="font-normal text-sm">
          https://testlinkargedor.com/reportnew.csv
        </p>
      </div>
      {/* WorkSpace Table */}
      <Table />
    </div>
  );
};

export default WorkSpace;
