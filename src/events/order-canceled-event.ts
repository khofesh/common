import { OrderStatus } from "./types/order-status";
import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface OrderCanceledEvent {
  exchange: Exchanges.OrderCanceled;
  routingKey: RoutingKeys.Orders;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
