import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controler: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controler: index,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controler: update,
  },
];
