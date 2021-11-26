import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface TicketUpdatedEvent {
  exchange: Exchanges.TicketUpdated;
  routingKey: RoutingKeys.Tickets;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
