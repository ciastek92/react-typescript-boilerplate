import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import { createEpicMiddleware } from "redux-observable";
import { enteredPageActions } from "./router.actions";
import { routerEpic } from "./router.epic";

const initialState = {};

describe("Router epic tests", () => {
  let store: MockStoreEnhanced, epicMiddleware, mockStore;
  window.scrollTo = jest.fn();

  beforeEach(() => {
    epicMiddleware = createEpicMiddleware();
    mockStore = configureMockStore([epicMiddleware]);
    store = mockStore(initialState);
    epicMiddleware.run(routerEpic);
  });

  it("enter on mainRoute", () => {
    const payload = {
      pathname: "/"
    };
    store.dispatch({ type: "@@router/LOCATION_CHANGE", payload });
    expect(store.getActions()).toEqual([
      { type: "@@router/LOCATION_CHANGE", payload },
      enteredPageActions.mainPage(4)
    ]);
  });
});
