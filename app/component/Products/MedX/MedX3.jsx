import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Medx3.svg";

const MedX3 = () => {
  const header = "One Platform, All Deliveries";
  const subheader =
    "Capture untapped opportunities with MedX intuitive features ";
  const paragraph =
    "MedX is a highly customizable online food ordering and delivery system that enables ease of use and seamless management.";
  const color = "#3E83EA";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default MedX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Patient App",
    body: "A user-friendly mobile app for patients to book appointments, access prescriptions, receive reminders, and securely communicate with their healthcare providers.",
  },
  {
    id: 2,
    image: Features3,
    title: "Doctor App",
    body: "A comprehensive dashboard for doctors to manage appointments, patient records, prescriptions, and virtual consultations — all in one place.",
  },
  {
    id: 3,
    image: Features3,
    title: "Admin Management Portal",
    body: "An intelligent control center that allows clinics to manage staff, schedules, billing, analytics, and compliance efficiently from a single secure interface.",
  },
  {
  id: 4,
  image: Features3,
  title: "Nurse & Staff App",
  body: "A dedicated app that streamlines care coordination, patient monitoring, and shift management for nurses and medical staff.",
},
];

