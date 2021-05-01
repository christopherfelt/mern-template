import ReactState from "./Templates/ReactState.js";

export default class TemplateGenerator {
  constructor(contextName) {
    this.contextName = contextName;
  }

  reactState() {
    return ReactState(this.contextName);
  }
}
