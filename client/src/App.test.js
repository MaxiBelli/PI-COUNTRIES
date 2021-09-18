
import App from "./App";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import DetailCountry from "./components/DetailCountry/DetailCountry";
import Countries from "./components/Home/Home";
import ActivityAdd from "./components/ActivityAdd/ActivityAdd";

configure({ adapter: new Adapter() });

describe("App", () => {
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const state = {
    countries: [
      {
        id: "ARG",
        name: "Argentina",
        flag: "http://argentina.png",
        continent: "Americas",
      },
      {
        id: "BRA",
        name: "Brazil",
        flag: "http://brazil.png",
        continent: "Americas",
      },
    ],
    countryDetail: {
      id: "ARG",
      name: "Argentina",
      flag: "http://argentina.png",
      continent: "Americas",
    },
  };

  beforeEach(() => {
    store = mockStore(state);
  });

  describe("NavBar component should render in every routes except Landing Page.", () => {
    it('Should render in route "/countries/:id"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/countries/:id"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(LandingPage)).toHaveLength(0);
      expect(wrapper.find(DetailCountry)).toHaveLength(1);
    });
    it('Should render in route "/countries"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/countries"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(LandingPage)).toHaveLength(0);
      expect(wrapper.find(Countries)).toHaveLength(1);
    });
    it('Should render in route "/newactivity"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/newactivity"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(ActivityAdd)).toHaveLength(1);
    });
    it('Should not render on route "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(LandingPage)).toHaveLength(1);
      expect(wrapper.find(NavBar)).toHaveLength(0);
    });

    it('Should render on route "/about"', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/about"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(container.find(NavBar)).toHaveLength(1);
      expect(container.find(LandingPage)).toHaveLength(0);
      
    });
  });
});
