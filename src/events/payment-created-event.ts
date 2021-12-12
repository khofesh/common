import { OrderStatus } from "./types/order-status";
import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface PaymentCreatedEvent {
  exchange: Exchanges.PaymentCreated;
  routingKey: RoutingKeys.Payments;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
