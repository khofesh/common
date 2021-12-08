import { OrderStatus } from "./types/order-status";
import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface OrderCreatedEvent {
  exchange: Exchanges.OrderCreated;
  routingKey: RoutingKeys.Orders;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
