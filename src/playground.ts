import { z } from "zod";
import { createMessageProtocol } from "./createMessageProtocol";

const protocol = createMessageProtocol({
  events: {
    LOG_IN: {
      username: z.string(),
      password: z.string(),
    },
    LOG_OUT: {},
  },
});

// iframe.ts

// Type safe sender
const sendToParent = protocol.createHandler(window.parent.postMessage);

// Type safe receiver
const handleParentEvent = protocol.createHandler((event) => {
  console.log(event);
});

window.addEventListener("message", (event) => {
  handleParentEvent(event.data);
});

// parent.ts

const iframe = document.querySelector("iframe");

const sendToChild = protocol.createHandler(iframe!.contentWindow!.postMessage);
