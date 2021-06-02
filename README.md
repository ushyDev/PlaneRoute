### Prerequisites:

- The time format given in designs is `HHMMz` format. `z` stands for zulu which in other words is UTC+0 timezone.
- Use external libraries when helpful (e.g. turf.js might be handy).
- Before reading tasks get familiar with the assignment design on zeplin.
- Try to be pixel perfect in terms of design details implementation (does not apply to map styling). 
- Notice yellow markers in zeplin - clicking on them will reveal components responsiveness details.  

#### Zeplin access

Url: https://app.zeplin.io/login

Login: asi_interview

Password: zeplin_interview

### Tasks:

1. Display flight route on the map

    - Use a map library of your choice. The minimal requirement is to be able to draw line and point using lng/lat coordinates.
      If you want to use different library you might need to do eject using bare workflow. It's up to your preference.
      Default setup uses `react-native-maps` and should be good enough for the purpose of completing this assignment (https://github.com/react-native-maps/react-native-maps).
    - Map styling doesn't matter. The dark theme doesn't need to be reflected. Same with lines/points.
      Use whatever is the simplest.
    - Represent a route as a line + points located on the edge joints (see design).
    - The routes are available through FakeApi class instance `fakeApi` located in `src/utils/fakeApi.ts`.
      `fetchRoute` method returns a `Promise` which resolves with `IRoute` object after some timeout.
    - Show splash screen, while fetching the route. Use default or any custom image of your choice.
    - `IRoute` has `route_points` which is list of `IRoutePoint` - object with lng, lat, timestamp.
    - Points are stored in a chronological order - first point is `take off`, last point is `landing`

2. Implement timeline slider

    - The value on the slider should be a timestamp in seconds
    - The minimum and maximum value should be based on `take off` and `landing` times extended with the buffer
      value `TIMELINE_BUFFER_HOURS` located in `src/config.ts`.

      Example:

        - TIMELINE_BUFFER_HOURS - 3
        - take off - 1600000000 (2020-09-13T12:26:40Z)
        - landing - 1600015000 (2020-09-13T16:36:40Z)
        - minimum value - 1600004200 (2020-09-13T09:26:40Z)
        - maximum value - 1600025800 (2020-09-13T19:36:40Z)

    - There are a couple of things to be marked on the timeline:

        - Draggable handle - simply the current timestamp value
        - Take-off and Landing marks - position should be based on first and last route point timestamp.

3. Simulate an airplane geographical position on the map when moving timeline handle.

    - Represent an airplane as a circle/icon on the map - use styling of your choice.
    - Position should be based on route points lng/lat position and timestamp.
      When timeline value is between 2 points interpolate position linearly between them.
    - When timeline value is not in [take off, landing] range do not show airplane on the map.

## How to start

First, run `yarn install` to install dependencies.

Run `yarn ios` to run ios emulator. App shall be implemented for **iPad** devices, no need to worry about android.<br />

`Shift + i` will trigger device choice - let's aim for iPad Air (3rd generation).


