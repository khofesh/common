import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

export interface LoggingWarnEvent {
  exchange: Exchanges.LoggingWarn;
  routingKey: RoutingKeys.Logging;
  data: {
    serviceName: string;
    className?: string;
    functionName?: string;
    warn: any;
  };
}
