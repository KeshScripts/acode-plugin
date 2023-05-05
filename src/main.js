import plugin from 'plugin.json'


class AcodePlugin {
  async init() {
    acode.alert('Plugin Initialized', `The ${plugin.name} plugin has been initialized.`);
  }

  async destroy() {
    acode.alert('Plugin Unmounted', `The ${plugin.name} plugin has been unmounted.`);
  }
}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}