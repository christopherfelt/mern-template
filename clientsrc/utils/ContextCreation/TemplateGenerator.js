import ReactState from "./Templates/ReactState.js";
import ReactReducer from "./Templates/ReactReducer.js";

export default class TemplateGenerator {
  constructor(contextName) {
    this.contextName = contextName;
  }

  reactState() {
    return ReactState(this.contextName);
  }

  reactReducer() {
    return ReactReducer(this.contextName);
  }
}
