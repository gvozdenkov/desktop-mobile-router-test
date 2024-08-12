export var filterRootAdminConfig = (configArray, isRoot) => {
  var adminConfig = configArray.filter((item) => item.rootOnly === false);

  var rootOnlyConfig = isRoot && configArray.filter((item) => item.rootOnly === isRoot);

  return isRoot ? [...adminConfig, ...rootOnlyConfig] : adminConfig;
};

export var filterAdminConfig = (configArray, isAdmin) => {
  var commonConfig = configArray.filter((item) => item.adminOnly !== true);
  var adminConfig = configArray.filter((item) => item.adminOnly === true);

  return isAdmin ? [...commonConfig, ...adminConfig] : commonConfig;
};
