export interface RouterLookup {
  name: string;
  options: any;
}

export interface LocationChangedAction {
  type: "@@router/LOCATION_CHANGE";
  payload: Location;
}
