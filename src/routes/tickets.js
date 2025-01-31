import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";
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
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controler: updateStatus,
  },
];
