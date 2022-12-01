import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../../../Components/PrimaryButtons/BookingModal/BookingModal";
import Loading from "../../Shared/Loading/Loading";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  //usequery start
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date], //caching easy korar jnno data er j nam seta dele bhalo hoi. ro lagle seta array er bhitore just baraia debo
    queryFn: () =>
      fetch(
        `https://doctors-portal-server-alpha-five.vercel.app/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  //end

  //or abahbe korte pari jinista
  //usequery start
  //  const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"], //caching easy korar jnno data er j nam seta dele bhalo hoi. ro lagle seta array er bhitore just baraia debo
  //   queryFn: async () => {
  //     const res = await fetch("https://doctors-portal-server-alpha-five.vercel.app/appointmentOptions");
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  //end

  // useState and useeffect er kajta amra usequerydea korlam
  //
  // useEffect(() => {
  //   fetch("https://doctors-portal-server-alpha-five.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((appointment) => (
          <AppointmentOption
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
