import AdminHome from "./Admin/AdminHome";

const DashboardRapper = ({ role }) => {
  console.log(role);
  return (
    <div>
      {role === "admin" ? (
        <AdminHome />
      ) : role === "donor" ? (
        "donor"
      ) : (
        "vulentiar"
      )}
    </div>
  );
};

export default DashboardRapper;
