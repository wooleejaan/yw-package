# ywpackage

## 1.0.0

### Major Changes

- 6de26ac: Test for npm library (build, ci, and publish)

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

## 0.1.1

### Patch Changes

- 2040f18: Implemented functionality with zod

## 0.1.0

### Minor Changes

- 0173e55: Added createMessageProtocol API

## 0.0.3

### Patch Changes

- Fixed issue where dist folder was not being sent live

## 0.0.2

### Patch Changes

- a5101e1 (fix: Add .npmignore for dist folder)
- ee137ca: Initial commit
