import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {
  useEditEventMutation,
  useGetEventQuery,
} from "../../features/event/eventSlice";
const EditEvent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const { data: initalData, isLoading, isError } = useGetEventQuery(id);
  const [editEvents, { data: returnData, isError: error, isLoading: loading }] =
    useEditEventMutation();

  useEffect(() => {
    if (!isLoading && !isError) {
      setEventData(initalData);
    } else {
      setEventData({});
    }
  }, [id, initalData, isLoading, isError]);

  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!error && !loading) {
    console.log(returnData);
  }

  const onSubmit = async (data) => {
    const updatedData = {
      createdBy: user?.email,
      eventName: data.event,
      eventLocation: data.location,
      eventDate: data.date,
      description: data.description,
      eventPhoto: data.photo,
      donationNeed: data.donation,
      volunteerNeed: data.volunteer,
    };

    if (!error && !loading) {
      editEvents(id, updatedData);
      navigate("/dashboard/admin/events");
      reset();
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card  bg-base-100 w-[60%]   shadow-2xl">
        <h1 className="text-center uppercase text-2xl text-purple-500 font-bold">
          Update Event
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Event Name</label>
            <input
              type="text"
              {...register("event")}
              className="input w-full"
              placeholder="Event Name"
              defaultValue={eventData?.eventName}
            />
            <label className="fieldset-label">Location</label>
            <input
              type="text"
              {...register("location")}
              className="input w-full"
              placeholder="Location"
              defaultValue={eventData?.eventLocation}
            />
            <label className="fieldset-label">Image URL</label>
            <input
              type="text"
              className="input w-full"
              {...register("photo")}
              placeholder="image"
              defaultValue={eventData?.eventPhoto}
            />

            <label className="fieldset-label">Donation Required</label>
            <input
              type="Number"
              className="input w-full"
              {...register("donation")}
              placeholder="Donation Required"
              defaultValue={eventData?.donationNeed}
            />

            <label className="fieldset-label">Volunteer Need</label>
            <input
              type="text"
              className="input w-full"
              {...register("volunteer")}
              placeholder="Volunteer Need"
              defaultValue={eventData?.volunteerNeed}
            />

            <label className="fieldset-label">Date</label>
            <input
              type="date"
              className="input w-full"
              {...register("date")}
              placeholder="Date"
              defaultValue={eventData?.eventDate?.split("T")[0]}
            />

            <label className="fieldset-label">Description</label>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Bio"
              {...register("description")}
              defaultValue={eventData?.description}
            ></textarea>

            <button className="btn btn-neutral mt-4" type="submit">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
