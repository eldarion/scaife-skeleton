class Skeleton {
  constructor(widgets) {
    this.widgets = widgets;
  }

  widgetOptions(location, mainWidget, leftWidgets, rightWidgets) {
    return this.widgets
      // only show widgets designated for matching location (sidebar|main|both)
      .filter(o => o.scaifeConfig.location === location || o.scaifeConfig.location === 'both')
      .filter((o) => {
        // only show widgets if they haven't already been used in the case of it
        // being marked a singleton, unless the location is main.
        if (o.scaifeConfig.singleton) {
          const notInMain = mainWidget !== o;
          const notInLeft = leftWidgets.indexOf(o) === -1;
          const notInRight = rightWidgets.indexOf(o) === -1;
          return (location === 'main' && notInLeft && notInRight) || (notInMain && notInLeft && notInRight);
        }
        return true;
      })
      // return a list of options that can be used for menu selection
      .map(o => ({ text: o.scaifeConfig.displayName, component: o }));
  }
}

const install = (Vue, options) => {
  Vue.prototype.$scaife = Vue.prototype.$scaife || {};
  Vue.prototype.$scaife = {
    ...Vue.prototype.$scaife,
    skeleton: new Skeleton(options.widgets),
  };
};

const SkeletonPlugin = { install };

export default SkeletonPlugin;
