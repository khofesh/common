import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface LoggingErrorEvent {
  exchange: Exchanges.LoggingError;
  routingKey: RoutingKeys.Logging;
  data: {
    serviceName: string;
    className?: string;
    functionName?: string;
    error: any;
  };
}
