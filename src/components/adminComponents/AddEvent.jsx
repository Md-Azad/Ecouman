import { useForm } from "react-hook-form";
import { useAddEventMutation } from "../../features/event/eventSlice";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const AddEvent = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [addEvent, { isLoading, isError, isSuccess }] = useAddEventMutation();

  const onSubmit = async (data) => {
    const eventData = {
      createdBy: user?.email,
      eventName: data.event,
      eventLocation: data.location,
      eventDate: data.date,
      description: data.description,
      eventPhoto: data.photo,
      donationNeed: data.donation,
      volunteerNeed: data.volunteer,
    };

    if (!isError && !isLoading) {
      addEvent(eventData);
    }
    if (isSuccess) {
      reset();
      navigate("/dashboard/admin/events");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card  bg-base-100 w-[60%]   shadow-2xl">
        <h1 className="text-center uppercase text-2xl text-purple-500 font-bold">
          Add Event
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Event Name</label>
            <input
              type="text"
              {...register("event")}
              className="input w-full"
              placeholder="Event Name"
            />
            <label className="fieldset-label">Location</label>
            <input
              type="text"
              {...register("location")}
              className="input w-full"
              placeholder="Location"
            />
            <label className="fieldset-label">Image URL</label>
            <input
              type="text"
              className="input w-full"
              {...register("photo")}
              placeholder="image"
            />

            <label className="fieldset-label">Donation Required</label>
            <input
              type="Number"
              className="input w-full"
              {...register("donation")}
              placeholder="Donation Required"
            />

            <label className="fieldset-label">Volunteer Need</label>
            <input
              type="text"
              className="input w-full"
              {...register("volunteer")}
              placeholder="Volunteer Need"
            />

            <label className="fieldset-label">Date</label>
            <input
              type="date"
              className="input w-full"
              {...register("date")}
              placeholder="Date"
            />

            <label className="fieldset-label">Description</label>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Bio"
              {...register("description")}
            ></textarea>

            <button className="btn btn-neutral mt-4" type="submit">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
