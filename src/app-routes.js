import {
  HomePage,
  TasksPage,
  ProfilePage,
  InboundPage,
  SaveItemPage,
  ItemsMasterPage,
} from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";

const routes = [
  {
    path: "/tasks",
    element: TasksPage,
  },
  {
    path: "/profile",
    element: ProfilePage,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/inbound",
    element: InboundPage,
  },
  {
    path: "/saveitems",
    element: SaveItemPage,
  },
  {
    path: "/itemsmaster",
    element: ItemsMasterPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
