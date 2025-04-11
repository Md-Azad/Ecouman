import { Link } from "react-router";

const EventCard = ({ event }) => {
  const {
    eventPhoto,
    eventName,
    eventLocation,
    description,
    eventDate,
    donationNeed,
    donationCollected,
    volunteerNeed,
    volunteerGot,
    createdBy,
    _id,
  } = event;
  const date = eventDate.split("T")[0];
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={eventPhoto} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="card-title ">
          {eventName}
          <div className="badge  "> CreateBy: {createdBy}</div>
        </div>
        <p>{description}</p>

        <div>
          <p>{eventLocation}</p>
          <h1 className="text-end">{date}</h1>
          <div className="flex justify-between">
            <div>
              <p>Donation Needs: ${donationNeed}</p>
              <p>Donation Collected:${donationCollected}</p>
            </div>
            <div>
              <p>Volunteer Needs: {volunteerNeed}</p>
              <p>Donation Collected:{volunteerGot}</p>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/dashboard/admin/editEvents/${_id}`}>
            <button className="btn btn-accent text-white">Edit</button>
          </Link>
          <button className="btn btn-error text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
