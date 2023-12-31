# ywpackage

test for npm library (build, ci, and publish)

```ts
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

const sendToParent = protocol.createHandler(window.parent.postMessage);

const handleParentEvent = protocol.createHandler((event) => {
  console.log(event);
});

window.addEventListener("message", (event) => {
  handleParentEvent(event.data);
});

// parent.ts

const iframe = document.querySelector("iframe");

const sendToChild = protocol.createHandler(iframe!.contentWindow!.postMessage);
```

## Installation

`npm i ywpackage`
