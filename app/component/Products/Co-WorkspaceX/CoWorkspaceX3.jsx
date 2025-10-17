import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/CoWorkCircle.svg";

const CoWorkspaceX3 = () => {
  const header = "Many Spaces, One Community Solution.";
  const subheader = "What You Can Do with Co-WorkspaceX";
  const paragraph =
    "Co-WorkspaceX offers an all-in-one management platform designed to simplify workspace operations, optimize resource usage, and foster collaboration across your co-working community.";

  const color = "#1628F4";

  return (
    <div>
      {" "}
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

export default CoWorkspaceX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Member App",
    body: "A seamless app for workspace members to book desks, meeting rooms, and events effortlessly. Stay connected with the community and manage memberships in one place.",
  },
  {
    id: 2,
    image: Features3,
    title: "Space Manager App",
    body: "A smart dashboard for space owners and managers to monitor bookings, track usage, and optimize workspace allocation with real-time insights and reports.",
  },
  {
    id: 3,
    image: Features3,
    title: "Admin Control Panel",
    body: "An all-in-one administrative hub to manage users, payments, analytics, and communications. Simplify daily operations and make data-driven decisions with ease.",
  },
];
