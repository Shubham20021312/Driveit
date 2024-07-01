import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Manage cars",
    icon: IconAperture, 
    href: "/manage_cars",
  },
  {
    id: uniqueId(),
    title: "Manage bookings",
    icon: IconCopy, 
    href: "/manage_bookings",
  },
  {
    id: uniqueId(),
    title: "Insights",
    icon: IconMoodHappy, 
    href: "/insights",
  },
  {
    id: uniqueId(),
    title: "Wallet",
    icon: IconTypography, 
    href: "/wallet",
  },
  {
    id: uniqueId(),
    title: "Withdrawal",
    icon: IconUserPlus, 
    href: "/withdrawal",
  },
  {
    id: uniqueId(),
    title: "Raise a ticket",
    icon: IconLogin, 
    href: "/raise_ticket",
  },
  {
    id: uniqueId(),
    title: "Bank",
    icon: IconLogin, 
    href: "/bank",
  },
];

export default Menuitems;
