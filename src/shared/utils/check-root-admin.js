export var filterRootAdminConfig = (configArray, isRoot) => {
  var adminConfig = configArray.filter((item) => item.rootOnly === false);

  var rootOnlyConfig = isRoot && configArray.filter((item) => item.rootOnly === isRoot);

  return isRoot ? [...adminConfig, ...rootOnlyConfig] : adminConfig;
};
