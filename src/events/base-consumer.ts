import amqp from "amqplib";
import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";

interface Event {
  exchange: Exchanges;
  routingKey: RoutingKeys;
  data: any;
}

export abstract class Consumer<T extends Event> {
  abstract exchange: T["exchange"];
  protected channel: amqp.Channel;

  constructor(channel: amqp.Channel) {
    this.channel = channel;
  }

  abstract handleMessage(msg: amqp.ConsumeMessage | null): void;

  async consume(key: T["routingKey"]): Promise<void> {
    await this.channel.assertExchange(this.exchange, "direct", {
      durable: true,
    });

    const ok = await this.channel.assertQueue("", { exclusive: true });

    await this.channel.bindQueue(ok.queue, this.exchange, key);

    await this.channel.consume(ok.queue, this.handleMessage, { noAck: false });

    console.log(" [*] Waiting for logs. To exit press CTRL+C");

    // function logMessage(msg: amqp.ConsumeMessage | null) {
    //   console.log(
    //     " [x] %s: '%s'",
    //     msg?.fields.routingKey,
    //     msg?.content.toString()
    //   );
    // }
  }
}
