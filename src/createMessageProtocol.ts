import { z } from "zod";
import { EventConfigToDiscriminatedUnion } from "./types";

// declare const createMessageBus: any;

export const createMessageProtocol = <
	T extends Record<string, z.ZodRawShape>,
	EventsAsDiscoUnion = EventConfigToDiscriminatedUnion<T>
>(opts: {
	events: T;
}) => {
	return {
		createSender: (func: (event: EventsAsDiscoUnion) => void) => {
			return func;
		},
		createReceiver: (func: (event: EventsAsDiscoUnion) => void) => {
			return func;
		},
	};
};
