import { Link } from "react-router";
import { useGetEventsQuery } from "../../features/event/eventSlice";
import EventCard from "./EventCard";

const EvenManagement = () => {
  const { data, isLoading, isError } = useGetEventsQuery();
  if (isLoading) {
    return <p>loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <div className=" flex justify-end mx-12">
        <Link to={`/dashboard/admin/addEvents`}>
          <button className="btn btn-primary">Add Event</button>
        </Link>
      </div>

      {data.map((item) => (
        <EventCard key={item._id} event={item} />
      ))}
    </div>
  );
};

export default EvenManagement;
